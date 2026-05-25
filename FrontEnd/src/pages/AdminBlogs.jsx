import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BlogEditor from "../components/BlogEditor";
import BASE_URL from "../api";
import {
  Menu, X, LogOut, BookOpen, Edit2, Trash2, Plus,
  Search, Filter, CheckCircle, AlertCircle, Loader, ChevronRight,
  Calendar, Tag, Link2, Image, FileText, AlignLeft, ArrowLeft,
  MoreVertical, RefreshCw, Globe, EyeOff, Lock, Copy, Share2,
} from "lucide-react";


function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [toast]); // eslint-disable-line

  if (!toast) return null;
  const ok = toast.type === "success";
  return (
    <div
      className="fixed bottom-5 right-5 z-[999] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border animate-slideUp"
      style={{
        background: ok ? "#f0fdf4" : "#fff1f2",
        borderColor: ok ? "#86efac" : "#fca5a5",
        color: ok ? "#166534" : "#991b1b",
        minWidth: 270,
        maxWidth: "calc(100vw - 2.5rem)",
      }}
    >
      {ok
        ? <CheckCircle size={18} className="shrink-0 text-green-600" />
        : <AlertCircle size={18} className="shrink-0 text-red-600" />}
      <span className="font-semibold text-sm flex-1">{toast.msg}</span>
      <button onClick={onClose} className="ml-2 opacity-50 hover:opacity-100 transition shrink-0">
        <X size={15} />
      </button>
    </div>
  );
}


function DeleteModal({ blog, onConfirm, onCancel, busy }) {
  if (!blog) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-red-100 animate-scaleIn">
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trash2 size={24} className="text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Delete Blog?</h3>
        <p className="text-sm text-gray-500 text-center mb-1">Permanently deleting:</p>
        <p className="text-sm font-semibold text-gray-800 text-center mb-6 line-clamp-2 px-2">
          &ldquo;{blog.title}&rdquo;
        </p>
        <div className="flex gap-3">
          <button onClick={onCancel} disabled={busy}
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition disabled:opacity-50">
            Keep It
          </button>
          <button onClick={onConfirm} disabled={busy}
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition disabled:opacity-60 flex items-center justify-center gap-2">
            {busy ? <Loader size={15} className="animate-spin" /> : <Trash2 size={15} />}
            {busy ? "Deleting…" : "Yes, Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}


function PublishModal({ blog, onConfirm, onCancel, busy }) {
  if (!blog) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-green-100 animate-scaleIn">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe size={24} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Publish to Public?</h3>
        <p className="text-sm text-gray-500 text-center mb-1">This will make the blog live:</p>
        <p className="text-sm font-semibold text-gray-800 text-center mb-6 line-clamp-2 px-2">
          &ldquo;{blog.title}&rdquo;
        </p>
        <div className="flex gap-3">
          <button onClick={onCancel} disabled={busy}
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition disabled:opacity-50">
            Not Yet
          </button>
          <button onClick={onConfirm} disabled={busy}
            className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition disabled:opacity-60 flex items-center justify-center gap-2">
            {busy ? <Loader size={15} className="animate-spin" /> : <Globe size={15} />}
            {busy ? "Publishing…" : "Yes, Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}


const FALLBACK_IMG = "https://alliancemgt.org/Alliance%20Images/adminbgg.jpg";

function BlogCard({ blog, onEdit, onDelete, onPublish, onUnpublish, formatDate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  const isDraft = blog.status === "draft";

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const copyLink = () => {
    if (!blog.permalink) return;
    const url = `https://www.alliancemgt.org/og.php?slug=${blog.permalink}`;
    navigator.clipboard.writeText(url)
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); })
      .catch(() => {
        const ta = document.createElement("textarea");
        ta.value = url;
        Object.assign(ta.style, { position: "fixed", opacity: "0" });
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={blog.image || FALLBACK_IMG}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
        />
        <span
          className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1"
          style={{ background: isDraft ? "#92400e" : "#0D1B4B", color: "#fff" }}
        >
          {isDraft ? <Lock size={10} /> : <Globe size={10} />}
          {isDraft ? "Admin Only" : (blog.category || "Published")}
        </span>

        <div ref={menuRef} className="absolute top-3 right-3">
          <button onClick={() => setMenuOpen((p) => !p)}
            className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition">
            <MoreVertical size={14} className="text-gray-700" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-44 z-20 animate-fadeIn">
              <button onClick={() => { onEdit(blog); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
                <Edit2 size={13} /> Edit Blog
              </button>
              {isDraft ? (
                <button onClick={() => { onPublish(blog); setMenuOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50 transition">
                  <Globe size={13} /> Publish Now
                </button>
              ) : (
                <button onClick={() => { onUnpublish(blog); setMenuOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-amber-600 hover:bg-amber-50 transition">
                  <EyeOff size={13} /> Move to Draft
                </button>
              )}
              {!isDraft && (
                <button onClick={() => { copyLink(); setMenuOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-purple-600 hover:bg-purple-50 transition">
                  <Share2 size={13} /> Copy Share Link
                </button>
              )}
              <button onClick={() => { onDelete(blog); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition">
                <Trash2 size={13} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {isDraft && (
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-3">
            <Lock size={11} className="text-amber-600 shrink-0" />
            <p className="text-[10px] text-amber-700 font-semibold">Hidden from public · Admin view only</p>
          </div>
        )}

        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2 line-clamp-2">{blog.title}</h3>
        {blog.metaDescription && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-grow">{blog.metaDescription}</p>
        )}
        {blog.permalink && (
          <p className="text-[10px] text-gray-400 font-mono mb-2 truncate">/blog/{blog.permalink}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <Calendar size={11} />{formatDate(blog.createdAt)}
          </span>
          {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <RefreshCw size={10} /> Updated
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-3">
          <button onClick={() => onEdit(blog)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold text-xs transition">
            <Edit2 size={12} /> Edit
          </button>
          {isDraft ? (
            <button onClick={() => onPublish(blog)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-50 hover:bg-green-100 text-green-700 py-2 rounded-lg font-semibold text-xs transition">
              <Globe size={12} /> Publish
            </button>
          ) : (
            <button onClick={() => onUnpublish(blog)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 py-2 rounded-lg font-semibold text-xs transition">
              <EyeOff size={12} /> To Draft
            </button>
          )}
          {!isDraft && (
            <button onClick={copyLink}
              title={copied ? "Copied!" : "Copy share link"}
              className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                copied ? "bg-green-100 text-green-700" : "bg-purple-50 hover:bg-purple-100 text-purple-700"
              }`}>
              {copied ? <CheckCircle size={12} /> : <Copy size={12} />}
            </button>
          )}
          <button onClick={() => onDelete(blog)}
            className="flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-lg text-xs transition">
            <Trash2 size={12} />
          </button>
        </div>

        {copied && (
          <div className="mt-2 flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 animate-fadeIn">
            <CheckCircle size={11} className="text-green-600 shrink-0" />
            <p className="text-[10px] text-green-700 font-semibold">Share link copied! Paste on WhatsApp, Twitter, etc.</p>
          </div>
        )}
      </div>
    </div>
  );
}


function Field({ label, required, hint, icon: Icon, children }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
        {Icon && <Icon size={14} className="text-[#0D1B4B]" />}
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-400 pl-1">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:border-[#0D1B4B] focus:ring-4 focus:ring-[#0D1B4B]/10 outline-none transition font-medium";


function KeywordsInput({ value, onChange }) {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const tags = value ? value.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const addTag = (raw) => {
    const newTags = raw.split(",").map((t) => t.trim()).filter(Boolean);
    onChange([...new Set([...tags, ...newTags])].join(", "));
  };
  const removeTag = (idx) => onChange(tags.filter((_, i) => i !== idx).join(", "));

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (inputVal.trim()) { addTag(inputVal); setInputVal(""); }
    } else if (e.key === "Backspace" && !inputVal && tags.length) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div
      className="flex flex-wrap gap-2 items-center px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl focus-within:border-[#0D1B4B] focus-within:ring-4 focus-within:ring-[#0D1B4B]/10 transition cursor-text min-h-[48px]"
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      {tags.map((tag, idx) => (
        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: "#F3EBE3", color: "#0D1B4B", border: "1px solid #D4B49A" }}>
          {tag}
          <button type="button" onClick={(e) => { e.stopPropagation(); removeTag(idx); }}
            className="ml-0.5 rounded-full hover:bg-[#0D1B4B]/20 p-0.5 transition" style={{ color: "#0D1B4B" }}>
            <X size={10} strokeWidth={2.5} />
          </button>
        </span>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => { if (inputVal.trim()) { addTag(inputVal); setInputVal(""); } }}
        placeholder={tags.length === 0 ? "Type a keyword and press Enter or comma…" : "Add more…"}
        className="flex-1 min-w-[120px] text-sm text-gray-900 placeholder-gray-400 outline-none bg-transparent font-medium py-0.5"
      />
    </div>
  );
}


const CATEGORIES = [
  "BHM","BBA","MBA","HM Diploma","PGDHM","BCA","B.Com",
  "Tourism","Placements","Admissions","Campus","Events",
  "Hospitality","Tech","Careers","News"
];

const EMPTY_FORM = {
  title: "",
  permalink: "",
  metaDescription: "",
  description: "",
  category: "",
  keywords: "",
  image: null,
  imagePreview: "",
  existingImageUrl: "",
};

const toSlug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim().replace(/\s+/g, "-");

const buildPermalink = (title, category) => {
  const t = toSlug(title);
  const c = toSlug(category);
  return c && t ? `${c}/${t}` : t;
};

const formatDate = (ts) => {
  if (!ts) return "—";
  const d = new Date(ts);
  return isNaN(d.getTime())
    ? "—"
    : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};


export default function AdminBlogs() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const formTopRef = useRef(null);

  const [activeTab, setActiveTab] = useState("published");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [dbLoading, setDbLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCat, setFilterCat] = useState("");

  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [manualPermalink, setManualPermalink] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [publishTarget, setPublishTarget] = useState(null);

  const [toast, setToast] = useState(null);
  const showToast = (msg, type = "success") => setToast({ msg, type });

  const [submitting, setSubmitting] = useState(false);
  const [submitAction, setSubmitAction] = useState(null); // "draft" | "publish" | null
  const [publishingDraft, setPublishingDraft] = useState(false);
  const [deletingBlog, setDeletingBlog] = useState(false);


  const fetchBlogs = useCallback(async () => {
    setDbLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/admin/blogs`, {
        headers: { Authorization: token },
      });
      let data = [];
      if (res.ok) {
        data = await res.json();
      } else {
        const pub = await fetch(`${BASE_URL}/api/blogs`);
        data = await pub.json();
      }
      const sorted = Array.isArray(data)
        ? [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        : [];
      setBlogs(sorted);
      return sorted; 
    } catch (err) {
      console.error("fetchBlogs:", err);
      showToast("Could not load blogs.", "error");
      return [];
    } finally {
      setDbLoading(false);
    }
  }, [token]); 

  useEffect(() => { fetchBlogs(); }, []); 

  const publishedBlogs = blogs.filter((b) => b.status === "published");
  const draftBlogs = blogs.filter((b) => b.status === "draft");

  const filteredBlogs = (() => {
    let list = activeTab === "drafts" ? draftBlogs : publishedBlogs;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (b) => (b.title || "").toLowerCase().includes(q) ||
          (b.metaDescription || "").toLowerCase().includes(q)
      );
    }
    if (filterCat) list = list.filter((b) => b.category === filterCat);
    return list;
  })();


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "permalink") {
      setManualPermalink(true);
      setForm((p) => ({ ...p, permalink: value }));
      return;
    }
    setForm((p) => {
      const next = { ...p, [name]: value };
      if ((name === "title" || name === "category") && !manualPermalink) {
        const t = name === "title" ? value : p.title;
        const c = name === "category" ? value : p.category;
        next.permalink = buildPermalink(t, c);
      }
      return next;
    });
  };

  const pickCategory = (cat) => {
    setForm((p) => ({
      ...p,
      category: cat,
      permalink: manualPermalink ? p.permalink : buildPermalink(p.title, cat),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (form.imagePreview && form.imagePreview.startsWith("blob:"))
      URL.revokeObjectURL(form.imagePreview);
    setForm((p) => ({ ...p, image: file, imagePreview: URL.createObjectURL(file) }));
  };

  const removeImage = () => {
    if (form.imagePreview && form.imagePreview.startsWith("blob:"))
      URL.revokeObjectURL(form.imagePreview);
    setForm((p) => ({ ...p, image: null, imagePreview: "", existingImageUrl: "" }));
  };

  const resetForm = () => {
    if (form.imagePreview && form.imagePreview.startsWith("blob:"))
      URL.revokeObjectURL(form.imagePreview);
    setForm(EMPTY_FORM);
    setEditingId(null);
    setManualPermalink(false);
  };

 
  const openEdit = (blog) => {
    setManualPermalink(true);
    setForm({
      title: blog.title || "",
      permalink: blog.permalink || "",
      metaDescription: blog.metaDescription || "",
      description: blog.description || "",
      category: blog.category || "",
      keywords: blog.keywords || "",
      image: null,
      imagePreview: blog.image || "",
      existingImageUrl: blog.image || "",
    });
    setEditingId(blog.id);
    setActiveTab("create");
    setTimeout(() => {
      if (formTopRef.current) formTopRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };


  const handleSubmit = async (submitAsDraft) => {
    const isDraft = Boolean(submitAsDraft);

    if (!form.title.trim()) {
      showToast("Please enter a blog title.", "error");
      return;
    }
    if (!form.category) {
      showToast("Please select a category.", "error");
      return;
    }

    setSubmitAction(isDraft ? "draft" : "publish");
    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("title", form.title.trim());
      fd.append("permalink", form.permalink.trim());
      fd.append("metaDescription", (form.metaDescription || "").trim());
      fd.append("description", form.description || "");
      fd.append("category", form.category);
      fd.append("keywords", form.keywords || "");
      fd.append("status", isDraft ? "draft" : "published");

      if (form.image) {
        fd.append("image", form.image);
      } else if (form.existingImageUrl) {
        fd.append("existingImage", form.existingImageUrl);
      }

      const url = editingId
        ? `${BASE_URL}/api/blogs/${editingId}`
        : `${BASE_URL}/api/blogs`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: token },
        body: fd,
      });

      let result;
      try {
        result = await res.json();
      } catch (_) {
        showToast(`Server error (HTTP ${res.status}). Please try again.`, "error");
        return;
      }

      if (result.success) {
        if (isDraft) {
          showToast(editingId
            ? "✏️ Changes saved as draft!"
            : "📝 Blog saved as draft — hidden from users!");
        } else {
          showToast(editingId
            ? "✅ Blog updated and published!"
            : "🎉 Blog published successfully!");
        }

        resetForm();

        await fetchBlogs();

       
        if (!editingId) {
          setActiveTab(isDraft ? "drafts" : "published");
        } else {
         
          setActiveTab(isDraft ? "drafts" : "published");
        }

      } else {
        console.error("Server returned failure:", result);
        showToast(result.message || "Something went wrong. Please try again.", "error");
      }

    } catch (err) {
      console.error("handleSubmit error:", err);
      showToast("Network error. Please check your connection.", "error");
    } finally {
      setSubmitting(false);
      setSubmitAction(null);
    }
  };

 
  const confirmPublishDraft = async () => {
    if (!publishTarget) return;
    setPublishingDraft(true);
    try {
      const fd = new FormData();
      fd.append("title", publishTarget.title || "");
      fd.append("permalink", publishTarget.permalink || "");
      fd.append("metaDescription", publishTarget.metaDescription || "");
      fd.append("description", publishTarget.description || "");
      fd.append("category", publishTarget.category || "");
      fd.append("keywords", publishTarget.keywords || "");
      fd.append("status", "published");
      if (publishTarget.image) fd.append("existingImage", publishTarget.image);

      const res = await fetch(`${BASE_URL}/api/blogs/${publishTarget.id}`, {
        method: "PUT",
        headers: { Authorization: token },
        body: fd,
      });

      let result;
      try { result = await res.json(); } catch (_) {
        showToast(`Server error (HTTP ${res.status}).`, "error");
        return;
      }

      if (result.success) {
        showToast("Blog is now LIVE! 🎉");
        setPublishTarget(null);
        // ★ Await fetch first, then switch tab
        await fetchBlogs();
        setActiveTab("published");
      } else {
        showToast(result.message || "Error publishing blog.", "error");
      }
    } catch (err) {
      console.error("confirmPublishDraft:", err);
      showToast("Network error publishing blog.", "error");
    } finally {
      setPublishingDraft(false);
    }
  };


  const handleUnpublish = async (blog) => {
    try {
      const fd = new FormData();
      fd.append("title", blog.title || "");
      fd.append("permalink", blog.permalink || "");
      fd.append("metaDescription", blog.metaDescription || "");
      fd.append("description", blog.description || "");
      fd.append("category", blog.category || "");
      fd.append("keywords", blog.keywords || "");
      fd.append("status", "draft");
      if (blog.image) fd.append("existingImage", blog.image);

      const res = await fetch(`${BASE_URL}/api/blogs/${blog.id}`, {
        method: "PUT",
        headers: { Authorization: token },
        body: fd,
      });
      const result = await res.json();
      if (result.success) {
        showToast("Blog moved to drafts — hidden from users.");
        await fetchBlogs();
        setActiveTab("drafts");
      } else {
        showToast(result.message || "Error moving to draft.", "error");
      }
    } catch (err) {
      console.error("handleUnpublish:", err);
      showToast("Error moving blog to draft.", "error");
    }
  };


  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeletingBlog(true);
    try {
      const res = await fetch(`${BASE_URL}/api/blogs/${deleteTarget.id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      const result = await res.json();
      if (result.success) {
        showToast("Blog deleted successfully.");
        setDeleteTarget(null);
        fetchBlogs(); // no need to await for delete — just refresh in background
      } else {
        showToast(result.message || "Error deleting blog.", "error");
      }
    } catch (err) {
      console.error("confirmDelete:", err);
      showToast("Network error deleting blog.", "error");
    } finally {
      setDeletingBlog(false);
    }
  };

  const handleLogout = () => { localStorage.removeItem("token"); navigate("/admin"); };


  return (
    <main className="w-full min-h-screen bg-[#F7F6F3] overflow-x-hidden font-sans">
      <style>{`
        @keyframes slideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.92)}        to{opacity:1;transform:scale(1)} }
        @keyframes fadeIn  { from{opacity:0;transform:translateY(-6px)}  to{opacity:1;transform:translateY(0)} }
        .animate-slideUp{animation:slideUp .35s ease forwards}
        .animate-scaleIn{animation:scaleIn .25s ease forwards}
        .animate-fadeIn {animation:fadeIn  .2s  ease forwards}
        .admin-nav{
          position:sticky;top:0;z-index:30;
          background:rgba(255,255,255,0.97);
          backdrop-filter:blur(12px);
          border-bottom:1px solid rgba(0,0,0,0.07);
          box-shadow:0 2px 16px rgba(0,0,0,0.07);
        }
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
        .no-scrollbar::-webkit-scrollbar{display:none}
        .editor-wrap{border:2px solid #e5e7eb;border-radius:0.75rem;overflow:hidden;transition:border-color .2s}
        .editor-wrap:focus-within{border-color:#0D1B4B;box-shadow:0 0 0 4px rgba(107,74,45,.08)}
      `}</style>

      <Toast toast={toast} onClose={() => setToast(null)} />

      <DeleteModal
        blog={deleteTarget}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
        busy={deletingBlog}
      />
      <PublishModal
        blog={publishTarget}
        onConfirm={confirmPublishDraft}
        onCancel={() => setPublishTarget(null)}
        busy={publishingDraft}
      />

      <header className="relative min-h-[40vh] sm:min-h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://alliancemgt.org/Alliance%20Images/adminbgg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Blog Management</h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
            Create, edit, and manage all your blog content in one place
          </p>
          <div className="flex items-center justify-center gap-6 mt-5">
            {[
              { label: "Published", val: publishedBlogs.length, color: "text-white" },
              { label: "Drafts", val: draftBlogs.length, color: "text-amber-400" },
              { label: "Categories", val: CATEGORIES.length, color: "text-white" },
            ].map(({ label, val, color }, i, arr) => (
              <React.Fragment key={label}>
                <div className="text-center">
                  <p className={`text-2xl font-black ${color}`}>{val}</p>
                  <p className="text-[10px] text-gray-400">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-white/20" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      <nav className="admin-nav">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex overflow-x-auto no-scrollbar">
              <button onClick={() => setActiveTab("published")}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "published"
                    ? "border-[#0D1B4B] text-[#0D1B4B]"
                    : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                <Globe size={14} />
                <span>Published</span>
                <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: "#0D1B4B", color: "#fff" }}>
                  {publishedBlogs.length}
                </span>
              </button>

              <button onClick={() => setActiveTab("drafts")}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "drafts"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                <Lock size={13} />
                <span>Drafts</span>
                {draftBlogs.length > 0 && (
                  <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">
                    {draftBlogs.length}
                  </span>
                )}
              </button>

              <button onClick={() => { resetForm(); setActiveTab("create"); }}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === "create"
                    ? "border-[#0D1B4B] text-[#0D1B4B]"
                    : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                <Plus size={14} />
                <span>{editingId ? "Edit Blog" : "New Blog"}</span>
                {editingId && (
                  <span className="ml-1 text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-bold">
                    Editing
                  </span>
                )}
              </button>
            </div>

            <button onClick={handleLogout}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-red-600 text-white rounded-xl font-semibold text-sm transition shrink-0">
              <LogOut size={15} /> Logout
            </button>
            <button onClick={() => setMobileMenuOpen((p) => !p)} className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden pb-3 pt-1">
              <button onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold text-sm transition">
                <LogOut size={15} /> Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {(activeTab === "published" || activeTab === "drafts") && (
        <section className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10">

          {activeTab === "drafts" && (
            <div className="mb-6 bg-amber-50 border-2 border-amber-200 rounded-2xl px-4 sm:px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Lock size={18} className="text-amber-700 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-bold text-amber-800">🔒 Drafts are ADMIN-ONLY — completely hidden from all users</p>
                <p className="text-xs text-amber-600 mt-1">
                  Click <strong>Publish</strong> on any card below to make it live for visitors.
                </p>
              </div>
              {draftBlogs.length > 0 && (
                <span className="shrink-0 text-xs font-bold px-3 py-1.5 bg-amber-200 text-amber-900 rounded-full">
                  {draftBlogs.length} pending
                </span>
              )}
            </div>
          )}

          <div className="bg-white rounded-2xl p-4 sm:p-5 mb-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
            <div className="flex-1">
              <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Search</label>
              <div className="relative">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search by title or description…"
                  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#0D1B4B] outline-none transition" />
              </div>
            </div>
            <div className="w-full sm:w-52">
              <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Category</label>
              <div className="relative">
                <Filter size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#0D1B4B] outline-none transition appearance-none bg-white cursor-pointer">
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              {(searchTerm || filterCat) && (
                <button onClick={() => { setSearchTerm(""); setFilterCat(""); }}
                  className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 py-2.5 px-3 border-2 border-gray-200 rounded-xl transition">
                  <X size={12} /> Clear
                </button>
              )}
              <button onClick={() => { resetForm(); setActiveTab("create"); }}
                className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm text-white transition shadow-md hover:shadow-lg"
                style={{ background: "#0D1B4B" }}>
                <Plus size={15} /> New Blog
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-4 font-medium">
            Showing <strong className="text-gray-800">{filteredBlogs.length}</strong> of{" "}
            <strong className="text-gray-800">
              {activeTab === "drafts" ? draftBlogs.length : publishedBlogs.length}
            </strong>{" "}
            {activeTab === "drafts" ? "drafts" : "published blogs"}
          </p>

          {dbLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <Loader size={32} className="animate-spin" style={{ color: "#0D1B4B" }} />
              <p className="text-sm text-gray-400 font-medium">Loading blogs…</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center px-4">
              {activeTab === "drafts"
                ? <Lock size={44} className="mx-auto text-gray-300 mb-4" />
                : <BookOpen size={44} className="mx-auto text-gray-300 mb-4" />}
              <h3 className="text-lg font-bold text-gray-600 mb-2">
                {activeTab === "drafts" ? "No drafts saved" : "No published blogs"}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {activeTab === "drafts"
                  ? "Save a blog as draft — hidden from users until you publish."
                  : blogs.length === 0 ? "You haven't created any blogs yet." : "Try a different search or filter."}
              </p>
              <button onClick={() => { resetForm(); setActiveTab("create"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition"
                style={{ background: "#0D1B4B" }}>
                <Plus size={15} /> Create New Blog
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onEdit={openEdit}
                  onDelete={(b) => setDeleteTarget(b)}
                  onPublish={(b) => setPublishTarget(b)}
                  onUnpublish={handleUnpublish}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === "create" && (
        <section className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-10" ref={formTopRef}>

          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <button onClick={() => { resetForm(); setActiveTab("published"); }}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#0D1B4B] font-semibold transition">
              <ArrowLeft size={14} /> Back
            </button>
            <ChevronRight size={13} className="text-gray-300" />
            <span className="text-sm font-bold text-gray-700">{editingId ? "Edit Blog" : "New Blog"}</span>
            {editingId && (
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Editing mode</span>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-5 sm:px-8 py-5 border-b border-gray-100 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#0D1B4B" }}>
                {editingId ? <Edit2 size={18} color="#fff" /> : <FileText size={18} color="#fff" />}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">
                  {editingId ? "Update Blog Post" : "Create New Blog Post"}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {editingId ? "Modify the details and save changes" : "Fill in the details below and save or publish"}
                </p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="px-4 sm:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">

              <Field label="Blog Title" required icon={FileText}>
                <input type="text" name="title" value={form.title} onChange={handleChange}
                  placeholder="Enter an engaging blog title…" className={inputCls} />
              </Field>

              <Field label="Category" required icon={Tag}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button key={cat} type="button" onClick={() => pickCategory(cat)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border-2 transition-all text-left ${
                        form.category === cat
                          ? "border-[#0D1B4B] bg-[#0D1B4B] text-white shadow-md"
                          : "border-gray-200 text-gray-600 hover:border-[#0D1B4B] hover:text-[#0D1B4B]"}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Permalink" icon={Link2}
                hint={manualPermalink
                  ? "Manually edited — auto-generate disabled"
                  : "Auto-generated from category + title"}>
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-[#0D1B4B] transition">
                  <span className="px-3 py-3 bg-gray-50 text-gray-400 text-xs sm:text-sm border-r-2 border-gray-200 font-mono whitespace-nowrap shrink-0">
                    /blog/
                  </span>
                  <input type="text" name="permalink" value={form.permalink} onChange={handleChange}
                    placeholder="category/blog-title"
                    className="flex-1 px-3 py-3 text-xs sm:text-sm text-gray-700 font-mono outline-none bg-white min-w-0" />
                  {manualPermalink && !editingId && (
                    <button type="button"
                      onClick={() => {
                        setManualPermalink(false);
                        setForm((p) => ({ ...p, permalink: buildPermalink(p.title, p.category) }));
                      }}
                      className="px-3 py-3 text-xs text-amber-600 hover:text-amber-800 font-semibold whitespace-nowrap border-l-2 border-gray-200 bg-amber-50 hover:bg-amber-100 transition">
                      Reset
                    </button>
                  )}
                </div>
                {form.permalink && (
                  <p className="text-[11px] text-gray-400 font-mono mt-1.5 pl-1">
                    Preview: <span className="text-[#0D1B4B]">yourdomain.com/blog/{form.permalink}</span>
                  </p>
                )}
              </Field>

              <Field label="Meta Description" icon={AlignLeft}
                hint={`${(form.metaDescription || "").length}/160 characters — shown in Google search results`}>
                <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange}
                  placeholder="Brief summary for SEO…" rows={3} maxLength={160}
                  className={inputCls + " resize-none"} />
              </Field>

              <Field label="Keywords (SEO)" icon={Tag} hint="Press Enter or comma to add · click × to remove">
                <KeywordsInput
                  value={form.keywords}
                  onChange={(val) => setForm((p) => ({ ...p, keywords: val }))}
                />
              </Field>

              <Field label="Featured Image" icon={Image}>
                <label htmlFor="blog-img"
                  className="flex flex-col items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-xl py-6 px-4 cursor-pointer hover:border-[#0D1B4B] hover:bg-[#0D1B4B]/5 transition group">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-[#0D1B4B]/10 flex items-center justify-center transition">
                    <Image size={18} className="text-gray-400 group-hover:text-[#0D1B4B] transition" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 group-hover:text-[#0D1B4B] transition">
                      {form.image
                        ? form.image.name
                        : editingId && form.existingImageUrl
                          ? "✅ Image saved — click to replace"
                          : "Click to upload image"}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WebP · max 5 MB · recommended 1200×675 px</p>
                  </div>
                  <input id="blog-img" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>

                {form.imagePreview && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center gap-1.5">
                      {form.image
                        ? <><CheckCircle size={11} className="text-green-500" /> New image selected</>
                        : <><CheckCircle size={11} className="text-blue-500" /> Current saved image</>}
                    </p>
                    <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-100 w-full"
                      style={{ aspectRatio: "16/9" }}>
                      <img src={form.imagePreview} alt="Preview" className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = "none"; }} />
                      <button type="button" onClick={removeImage}
                        className="absolute top-2 right-2 w-7 h-7 bg-black/60 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition"
                        title="Remove image">
                        <X size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </Field>

              <Field label="Blog Content" required icon={FileText}>
                <div className="editor-wrap">
                  <BlogEditor
                    value={form.description}
                    onChange={(val) => setForm((p) => ({ ...p, description: val }))}
                  />
                </div>
              </Field>

              {/* Info box */}
              <div className="rounded-xl border-2 border-dashed border-gray-200 p-4 bg-gray-50 space-y-3">
                <p className="text-sm font-bold text-gray-700">What does each button do?</p>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                    <Lock size={13} className="text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-800">Save as Draft → goes to Drafts tab</p>
                    <p className="text-[11px] text-amber-700 mt-0.5">Saved for you only. Users cannot see it until you Publish.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                    <Globe size={13} className="text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-800">Publish Now → goes to Published tab</p>
                    <p className="text-[11px] text-green-700 mt-0.5">Goes live immediately. All visitors can find and read it.</p>
                  </div>
                </div>
              </div>

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  SUBMIT BUTTONS

                  Both are type="button" so they never trigger form submit.
                  handleSubmit(true)  = Save as Draft  → navigates to Drafts tab
                  handleSubmit(false) = Publish Now    → navigates to Published tab

                  The isDraft local const inside handleSubmit is captured
                  synchronously from the argument — zero async race possible.
                  fetchBlogs() is AWAITED before setActiveTab() so the grid
                  is fully populated when the tab switch renders.
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">

                {editingId && (
                  <button type="button"
                    onClick={() => { resetForm(); setActiveTab("published"); }}
                    disabled={submitting}
                    className="sm:w-28 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-sm transition disabled:opacity-50 flex items-center justify-center gap-2">
                    <X size={14} /> Cancel
                  </button>
                )}

                {/* ── Save as Draft ── */}
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleSubmit(true)}
                  className="flex-1 py-3 sm:py-3.5 rounded-xl font-extrabold text-sm transition-all shadow border-2 border-amber-400 bg-amber-50 hover:bg-amber-100 text-amber-800 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting && submitAction === "draft" ? (
                    <><Loader size={15} className="animate-spin" /> Saving Draft…</>
                  ) : (
                    <><Lock size={14} /> Save as Draft</>
                  )}
                </button>

                {/* ── Publish Now ── */}
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleSubmit(false)}
                  className="flex-1 py-3 sm:py-3.5 rounded-xl font-extrabold text-sm text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  style={{ background: submitting ? "#9d7a5f" : "#0D1B4B" }}
                >
                  {submitting && submitAction === "publish" ? (
                    <><Loader size={15} className="animate-spin" /> {editingId ? "Saving…" : "Publishing…"}</>
                  ) : editingId ? (
                    <><Globe size={14} /> Update &amp; Publish</>
                  ) : (
                    <><Globe size={14} /> Publish Now</>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Tips */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-amber-800 mb-3">💡 Quick Tips</h4>
            <ul className="text-xs text-amber-700 space-y-1.5">
              <li className="flex items-start gap-2"><span>→</span> <span>Permalink auto-generates as <strong>category/blog-title</strong> — select category first</span></li>
              <li className="flex items-start gap-2"><span>→</span> <span>Keep meta description under 160 chars for best SEO</span></li>
              <li className="flex items-start gap-2"><span>→</span> <span>Press <kbd className="bg-amber-100 px-1 rounded font-mono">Enter</kbd> or <kbd className="bg-amber-100 px-1 rounded font-mono">,</kbd> to add keyword tags</span></li>
              <li className="flex items-start gap-2"><span>→</span> <span>Best image: <strong>1200×675 px · JPG/WebP · 16:9 · max 500 KB</strong></span></li>
              <li className="flex items-start gap-2"><span>→</span> <span>When editing, the existing image is preserved unless you upload a new one</span></li>
              <li className="flex items-start gap-2"><span>→</span> <span><strong>Save as Draft</strong> → lands on Drafts tab. <strong>Publish Now</strong> → lands on Published tab.</span></li>
            </ul>
          </div>

        </section>
      )}
    </main>
  );
}