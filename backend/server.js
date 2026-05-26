require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const PORT = process.env.PORT || 5000;
const app = express();

// ================= CORS =================
const allowedOrigins = [
  "http://localhost:5173",
  "https://www.alliancemgt.org",
  "https://alliancemgt.org",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// ================= STATIC FILES =================
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// ================= DB CONNECTION =================
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.query("SELECT 1", (err) => {
  if (err) console.log("❌ DB ERROR:", err);
  else console.log("✅ DB Connected Stable");
});

// ================= MULTER =================
// Multer is only used as a temp buffer before uploading to Hostinger
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, unique);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only images are allowed"));
  },
});

// ================= HELPER: Upload file to Hostinger =================
// Uploads temp file to upload.php, returns full HTTPS URL, cleans up temp file
const uploadToHostinger = async (tempFilePath) => {
  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(tempFilePath));

    const response = await axios.post(
      "https://www.alliancemgt.org/upload.php",
      formData,
      { headers: formData.getHeaders() }
    );

    return response.data.url; // full HTTPS URL from Hostinger
  } finally {
    // Always clean up the temp file, whether upload succeeded or failed
    try {
      if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
    } catch (_) { }
  }
};

// ================= HELPER: Normalize image URL =================
const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  return String(imagePath);
};

// ================= JWT MIDDLEWARE =================
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(403).json({ success: false, message: "No token provided" });

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    req.user = decoded;
    next();
  });
};

app.use((req, res, next) => {
  if (
    process.env.NODE_ENV === "production" &&
    req.headers["x-forwarded-proto"] &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
});

// ================= ROOT =================
app.get("/", (req, res) => {
  res.send("🚀 Alliance college of hotel management Backend is Working!");
});

// ================= LOGIN =================
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, message: "Email and password required" });

  db.query("SELECT * FROM admins WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (result.length === 0)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    const user = result[0];
    const isHashed = user.password.startsWith("$2b$") || user.password.startsWith("$2a$");
    const passwordMatch = isHashed
      ? await bcrypt.compare(password, user.password)
      : password === user.password;

    if (!passwordMatch)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ success: true, token });
  });
});

// ================= CREATE BLOG =================
app.post("/api/blogs", verifyToken, upload.single("image"), async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      // Upload temp file to Hostinger, get back full HTTPS URL
      imageUrl = await uploadToHostinger(req.file.path);
    }

    const sql = `
      INSERT INTO blogs 
      (title, permalink, metaDescription, description, category, image, keywords, status, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        req.body.title,
        req.body.permalink,
        req.body.metaDescription,
        req.body.description,
        req.body.category,
        imageUrl,
        req.body.keywords,
        req.body.status,
        new Date(),
        new Date(),
      ],
      (err) => {
        // if (err) {
        //   console.error("DB error creating blog:", err);
        //   return res.status(500).json({ success: false, message: "Failed to create blog" });
        // }
        if (err) {
          console.error("DB error creating blog:", err);

          return res.status(500).json({
            success: false,
            error: err.message,
            sqlError: err,
          });
        }
        res.json({ success: true, message: "Blog created" });
      }
    );
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ================= GET PUBLIC BLOGS =================
app.get("/api/blogs", (req, res) => {
  db.query("SELECT * FROM blogs WHERE status = 'published' ORDER BY createdAt DESC", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch blogs" });

    const blogs = results.map((blog) => ({
      ...blog,
      image: getImageUrl(blog.image),
    }));

    res.json(blogs);
  });
});

// ================= GET ALL BLOGS (ADMIN) =================
app.get("/api/admin/blogs", verifyToken, (req, res) => {
  db.query("SELECT * FROM blogs ORDER BY createdAt DESC", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch blogs" });

    const blogs = results.map((blog) => ({
      ...blog,
      image: getImageUrl(blog.image),
    }));

    res.json(blogs);
  });
});

// ================= GET SINGLE BLOG BY SLUG =================
app.use("/api/blog", (req, res) => {
  const slug = req.path.replace(/^\//, "");
  if (!slug)
    return res.status(404).json({ success: false, message: "No slug provided" });

  db.query("SELECT * FROM blogs WHERE permalink = ?", [slug], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (result.length === 0)
      return res.status(404).json({ success: false, message: "Blog not found" });

    const blog = { ...result[0], image: getImageUrl(result[0].image) };
    res.json(blog);
  });
});

// ================= UPDATE BLOG =================
app.put("/api/blogs/:id", verifyToken, upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const {
    title,
    permalink,
    metaDescription,
    description,
    category,
    keywords,
    status,
    existingImage, // ✅ sent by frontend when no new file is chosen — preserve current image
  } = req.body;

  try {
    let imageUrl;

    if (req.file) {
      // ✅ FIX: New file uploaded → send it to Hostinger upload.php, get full HTTPS URL
      // Previously this was storing a local /uploads/ path which broke on Hostinger
      imageUrl = await uploadToHostinger(req.file.path);
    } else if (existingImage && existingImage.trim() !== "") {
      // ✅ No new file, but frontend passed the current image URL → keep it
      imageUrl = existingImage.trim();
    } else {
      // No file, no existingImage → user intentionally removed the image
      imageUrl = null;
    }

    const sql = `
      UPDATE blogs SET
        title = ?,
        permalink = ?,
        metaDescription = ?,
        description = ?,
        category = ?,
        keywords = ?,
        status = ?,
        image = ?,
        updatedAt = ?
      WHERE id = ?
    `;

    const values = [
      title,
      permalink,
      metaDescription,
      description,
      category,
      keywords,
      status,
      imageUrl,   // ✅ always explicitly set — no conditional column building
      new Date(),
      id,
    ];

    db.query(sql, values, (err) => {
      if (err) {
        console.error("DB error updating blog:", err);
        return res.status(500).json({ success: false, message: "Failed to update blog" });
      }
      res.json({ success: true, message: "Blog updated" });
    });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ success: false, message: "Server error uploading image" });
  }
});

// ================= DELETE BLOG =================
app.delete("/api/blogs/:id", verifyToken, (req, res) => {
  db.query("SELECT image FROM blogs WHERE id = ?", [req.params.id], (err, result) => {
    // Note: images are stored on Hostinger, not locally, so local file deletion is skipped
    // If you want to also delete from Hostinger you'd need a delete endpoint on upload.php

    db.query("DELETE FROM blogs WHERE id = ?", [req.params.id], (err2) => {
      if (err2) return res.status(500).json({ success: false, message: "Failed to delete blog" });
      res.json({ success: true, message: "Blog deleted" });
    });
  });
});



const escapeHtml = (str) =>
  String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
// ================= OG SHARE PREVIEW =================
app.use("/share/", (req, res) => {
  const permalink = req.path.replace(/^\//, "");
  if (!permalink) return res.redirect("https://www.alliancemgt.org");

  db.query(
    "SELECT title, metaDescription, image, permalink FROM blogs WHERE permalink = ?",
    [permalink],
    (err, result) => {
      if (err || result.length === 0) {
        return res.redirect("https://www.alliancemgt.org/blog");
      }
      const blog = result[0];
      const title = escapeHtml(blog.title || "Alliance College of Hotel Management Blog");
      const description = escapeHtml(blog.metaDescription || "Read this article on Alliance College of Hotel Management");
      const image = escapeHtml(blog.image || "https://www.alliancemgt.org/og-default.jpg");
      const pageUrl = `https://www.alliancemgt.org/blog/${blog.permalink}`;

      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:type"        content="article" />
  <meta property="og:title"       content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image"       content="${image}" />
  <meta property="og:image:width"  content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url"         content="${pageUrl}" />
  <meta property="og:site_name"   content="Alliance College of Hotel Management" />
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image"       content="${image}" />
  <meta http-equiv="refresh" content="0;url=${pageUrl}" />
</head>
<body style="margin:0;background:#1a1a1a;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;">
  <div>
    <p style="font-size:14px;color:#aaa;margin-bottom:12px;">Redirecting you to the article…</p>
    <a href="${pageUrl}" style="color:#D4B49A;font-size:16px;font-weight:bold;">${title}</a>
  </div>
  <script>window.location.replace("${pageUrl}");</script>
</body>
</html>`);
    }
  );
});
// ================= DYNAMIC SITEMAP =================
app.get("/sitemap.xml", (req, res) => {

  db.query(
    "SELECT permalink, updatedAt FROM blogs WHERE status='published'",
    async (err, results) => {

      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      try {

        const links = [

          // Static Pages
          {
            url: "/",
            changefreq: "daily",
            priority: 1.0,
          },
          {
            url: "/aboutus",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/contact",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses",
            changefreq: "weekly",
            priority: 0.9,
          },
          {
            url: "/applynow",
            changefreq: "weekly",
            priority: 0.9,
          },
          {
            url: "/placements",
            changefreq: "weekly",
            priority: 0.8,
          },
          {
            url: "/campus",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/gallery",
            changefreq: "weekly",
            priority: 0.7,
          },
          {
            url: "/blogs",
            changefreq: "daily",
            priority: 0.9,
          },

          // Courses
          {
            url: "/courses/mba",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses/bba",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses/bhm",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses/diploma-hm",
            changefreq: "monthly",
            priority: 0.7,
          },
          {
            url: "/courses/intermediate-hm",
            changefreq: "monthly",
            priority: 0.7,
          },
          {
            url: "/courses/pgdhm",
            changefreq: "monthly",
            priority: 0.7,
          },
          {
            url: "/courses/bca",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses/bcom",
            changefreq: "monthly",
            priority: 0.8,
          },
          {
            url: "/courses/travel-tourism",
            changefreq: "monthly",
            priority: 0.7,
          },

          // Policies
          {
            url: "/privacy-policy",
            changefreq: "yearly",
            priority: 0.5,
          },
          {
            url: "/terms",
            changefreq: "yearly",
            priority: 0.5,
          },

        ];

        // ================= DYNAMIC BLOGS =================
        results.forEach((blog) => {

          links.push({
            url: `/blog/${blog.permalink}`,
            lastmod: blog.updatedAt,
            changefreq: "weekly",
            priority: 0.8,
          });

        });
        const stream = new SitemapStream({
          hostname: "https://alliancemgt.org",
        });

        res.header("Content-Type", "application/xml");

        const xmlString = await streamToPromise(
          Readable.from(links).pipe(stream)
        ).then((data) => data.toString());

        res.send(xmlString);

      } catch (error) {
        console.log(error);
        res.status(500).end();
      }

    }
  );
});
// ================= DYNAMIC POST XML =================
app.get("/post.xml", (req, res) => {

  db.query(
    "SELECT title, permalink, createdAt, updatedAt FROM blogs WHERE status='published' ORDER BY createdAt DESC",
    (err, results) => {

      if (err) {
        console.log(err);
        return res.status(500).send("Server Error");
      }

      res.header("Content-Type", "application/xml");

      let xml = `<?xml version="1.0" encoding="UTF-8"?>
<posts>`;

      results.forEach((blog) => {

        xml += `
  <post>
    <title><![CDATA[${blog.title}]]></title>
    <url>https://alliancemgt.org/blog/${blog.permalink}</url>
    <slug>${blog.permalink}</slug>
    <publishedDate>${new Date(blog.createdAt).toISOString()}</publishedDate>
    <updatedDate>${new Date(blog.updatedAt).toISOString()}</updatedDate>
  </post>`;

      });

      xml += `
</posts>`;

      res.send(xml);

    }
  );

});
// ================= DYNAMIC TAGS XML =================
app.get("/tags.xml", (req, res) => {

  db.query(
    "SELECT keywords FROM blogs WHERE status='published'",
    (err, results) => {

      if (err) {
        console.log(err);
        return res.status(500).send("Server Error");
      }

      // Collect all keywords
      let allTags = [];

      results.forEach((blog) => {

        if (blog.keywords) {

          const tags = blog.keywords
            .split(",")
            .map(tag => tag.trim().toLowerCase())
            .filter(Boolean);

          allTags.push(...tags);
        }

      });

      // Remove duplicate tags
      const uniqueTags = [...new Set(allTags)];

      res.header("Content-Type", "application/xml");

      let xml = `<?xml version="1.0" encoding="UTF-8"?>
<tags>`;

      uniqueTags.forEach((tag) => {

        const slug = tag
          .replace(/[^a-z0-9 ]/g, "")
          .trim()
          .replace(/\s+/g, "-");

        xml += `
  <tag>
    <name><![CDATA[${tag}]]></name>
    <url>https://alliancemgt.org/tag/${slug}</url>
  </tag>`;

      });

      xml += `
</tags>`;

      res.send(xml);

    }
  );

});
// ================= START =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`👉 Open: http://localhost:${PORT}`);
});