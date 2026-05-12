import {
  Shield,
  FolderOpen,
  Lock,
  User,
  FileText,
  Mail,
  GraduationCap,
  Users,
  TrendingUp,
  Trophy,
  Phone,
  ChevronRight,
  Image,
} from "lucide-react";

const NAVY = "#0A1F44";
const GOLD = "#F5A623";



/* ── Policy Sections ─────────────────────────────────────── */
const policies = [
  {
    icon: Shield,
    title: "1. Information We Collect",
    body: "We collect personal information that you provide to us, such as your name, email address, phone number, and academic details when you fill out forms or contact us.",
  },
  {
    icon: FolderOpen,
    title: "2. How We Use Your Information",
    body: "We use your information to provide and improve our services, communicate with you, process applications, and send important updates related to our programs and events.",
  },
  {
    icon: Lock,
    title: "3. Data Security",
    body: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    icon: User,
    title: "4. Your Rights",
    body: "You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time.",
  },
  {
    icon: FileText,
    title: "5. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.",
  },
];

/* ── Gallery Images (Unsplash college/campus photos) ─────── */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    alt: "College Building",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    alt: "Campus Life",
  },
  {
    src: "https://i.pinimg.com/736x/e5/83/50/e583508d50e353c778aa63840373ed27.jpg",
    alt: "Students",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    alt: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    alt: "Lab",
  },
];

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] sm:min-h-[380px] flex items-end pb-0 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80"
          alt="Alliance Degree College campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay — left heavy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,31,68,0.92) 0%, rgba(10,31,68,0.75) 45%, rgba(10,31,68,0.25) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 mb-4 text-white/70 text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <h1
            className="font-extrabold text-white leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/85 max-w-md leading-relaxed text-sm sm:text-base">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>



      {/* ── Policy Sections ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-4">
          {policies.map(({ icon: Icon, title, body }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 sm:gap-6 bg-white border border-gray-100 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon box */}
              <div
                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                style={{ background: "#EFF6FF" }}
              >
                <Icon size={22} style={{ color: "#1D4ED8" }} />
              </div>

              <div>
                <h3
                  className="font-bold mb-1.5 text-gray-900"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {body}
                </p>
              </div>
            </div>
          ))}

          {/* Contact Section Card */}
          <div
            className="flex items-start gap-4 sm:gap-6 rounded-xl p-5 sm:p-6"
            style={{ background: "#F0F4FF" }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
              style={{ background: "#1D4ED8" }}
            >
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <h3
                className="font-bold mb-1.5 text-gray-900"
                style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
              >
                Contact Us
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:info@alliancedegreecollege.edu.in"
                  className="text-blue-600 underline underline-offset-2"
                >
                  info@alliancedegreecollege.edu.in
                </a>{" "}
                or call us at{" "}
                <a
                  href="tel:08912951555"
                  className="text-gray-700 font-medium"
                >
                  0891-2951555
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus Gallery ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2
          className="font-bold text-gray-900 mb-2"
          style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)" }}
        >
          Our Campus Gallery
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Take a glimpse at life on the Alliance campus.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "col-span-2 sm:col-span-1 row-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA Banner ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 max-w-6xl mx-auto">
        <div
          className="rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10"
          style={{ background: NAVY }}
        >
          {/* Left: icon + text */}
          <div className="flex items-center gap-5">
            {/* Shield icon circle */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: GOLD }}
            >
              <Shield size={28} style={{ color: GOLD }} />
            </div>
            <div>
              <h3
                className="font-bold text-white mb-1"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)" }}
              >
                Your Privacy, Our Priority
              </h3>
              <p className="text-white/65 text-sm sm:text-base">
                We are committed to keeping your information safe and secure.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="tel:08912951555"
            className="flex-shrink-0 flex items-center gap-2 font-bold text-gray-900 rounded-lg px-7 py-3 sm:py-3.5 transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: GOLD, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
          >
            <Phone size={16} />
            Contact Us
          </a>
        </div>
      </section>


    </div>
  );
}