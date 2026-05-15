

import { useEffect, useState } from "react";
import {
  MapPin, Phone, Mail, Clock, Globe, Send, Shield,
  ChevronDown, ChevronRight, Home, MessageCircle,
  PhoneCall, HelpCircle, Navigation, CheckCircle,
} from "lucide-react";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
function usePoppins() {
  useEffect(() => {
    if (document.getElementById("poppins-font")) return;
    const link = document.createElement("link");
    link.id   = "poppins-font";
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
}

// ─── Colors ───────────────────────────────────────────────────────────────────
const C = {
  primaryBlue:   "#0D1B3D",
  secondaryBlue: "#1E3A8A",
  accentYellow:  "#FBBF24",
  lightBlue:     "#EFF6FF",
  grayText:      "#4B5563",
  lightGray:     "#F3F4F6",
  borderGray:    "#E5E7EB",
  white:         "#FFFFFF",
};

// ─── Social SVGs (safe alternative to removed lucide exports) ─────────────────
const FbSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IgSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
);
const YtSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D1B3D"/>
  </svg>
);
const LiSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialLinks = [
  { Svg: FbSvg, href: "#" },
  { Svg: IgSvg, href: "#" },
  { Svg: YtSvg, href: "#" },
  { Svg: LiSvg, href: "#" },
];

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    Icon: MapPin,
    label: "Address",
    value:
      "D.No. 15-9-20, New Resapuvanipalem,\nVisakhapatnam – 530013, A.P., India",
    link: "https://maps.google.com/?q=Alliance+Degree+College+Visakhapatnam",
    color: "#F59E0B",
    bg: "#FFF7ED",
  },

  {
    Icon: Phone,
    label: "Phone",
    value: "9848127344",
    link: "tel:9848127344",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },

  {
    Icon: Mail,
    label: "Email",
    value: "info@alliancedegreecollege.com",
    link: "mailto:info@alliancedegreecollege.com",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },

  {
    Icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
    link: null,
    color: "#10B981",
    bg: "#ECFDF5",
  },

  {
    Icon: Globe,
    label: "Website",
    value: "www.alliancedegreecollege.com",
    link: "https://www.alliancedegreecollege.com",
    color: "#0D1B3D",
    bg: "#EFF6FF",
  },
];

const faqs = [
  { q: "What courses does Alliance Degree College offer?",
    a: "We offer MBA, BBA, B.Sc Hotel Management, and various Diploma programs in Culinary Arts, Front Office, and Housekeeping." },
  { q: "What is the admission process?",
    a: "Fill out the online application form, submit required documents, attend counselling, and confirm your seat with fee payment." },
  { q: "What are the admission requirements?",
    a: "Candidates must have passed 10+2 (any stream) for UG programs. For MBA, a graduation degree is required." },
  { q: "Do you provide placement assistance?",
    a: "Yes! We provide 100% placement assistance with connections to 100+ top recruiters including Taj Hotels, ITC, Hyatt and more." },
];

const subjectOptions   = ["Select a subject","Admission Enquiry","Course Information","Placement Information","Campus Visit","Other"];
const footerQuickLinks = ["Home","About Us","Courses","Placements","Campus","Contact Us"];
const footerCourses    = ["MBA","BBA","Hotel Management","Diploma Courses"];
const footerResources  = ["Brochure","FAQs","Gallery","News & Events"];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const IconBadge = ({ Icon, color, bg, size = 42 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", backgroundColor: bg,
    flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Icon size={16} color={color} strokeWidth={2} />
  </div>
);

const FieldLabel = ({ text, required }) => (
  <label style={{ color: C.primaryBlue, fontSize: 13, fontWeight: 600, fontFamily: "'Poppins',sans-serif" }}>
    {text}{required && <span style={{ color: "#EF4444" }}> *</span>}
  </label>
);

const baseInput = {
  border: `1.5px solid ${C.borderGray}`, fontSize: 13, color: C.primaryBlue,
  backgroundColor: C.white, borderRadius: 8, padding: "10px 14px",
  width: "100%", outline: "none", boxSizing: "border-box",
  fontFamily: "'Poppins',sans-serif", transition: "border-color .2s",
};
const onFocus = (e) => (e.target.style.borderColor = C.secondaryBlue);
const onBlur  = (e) => (e.target.style.borderColor = C.borderGray);

// ─── FAQ item ────────────────────────────────────────────────────────────────
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1.5px solid ${open ? C.secondaryBlue : C.borderGray}`,
      borderRadius: 12, overflow: "hidden", backgroundColor: C.white, transition: "border-color .2s" }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 16px", textAlign: "left", gap: 12, cursor: "pointer", border: "none",
          backgroundColor: open ? "#F0F5FF" : C.white, transition: "background-color .2s" }}>
        <span style={{ color: C.primaryBlue, fontSize: 13, fontWeight: 500, lineHeight: 1.5,
          fontFamily: "'Poppins',sans-serif" }}>{q}</span>
        <ChevronDown size={17} color={C.primaryBlue} strokeWidth={2.5}
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .25s" }} />
      </button>
      {open && (
        <div style={{ padding: "0 16px 14px" }}>
          <p style={{ color: C.grayText, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  usePoppins();

  const [form, setForm]           = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }); }, 3000);
  };

  const poppins = { fontFamily: "'Poppins',sans-serif" };

  return (
    <div style={{ ...poppins, backgroundColor: C.white, color: C.primaryBlue, overflowX: "hidden" }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=75"
          alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right,rgba(13,27,61,.93) 45%,rgba(13,27,61,.55) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
            <Home size={13} color="#9CA3AF" />
            <span style={{ color: "#9CA3AF", fontSize: 12 }}>Home</span>
            <ChevronRight size={13} color="#9CA3AF" />
            <span style={{ color: "#D1D5DB", fontSize: 12 }}>Contact Us</span>
          </nav>
          <h1 className="font-extrabold mb-3"
            style={{ color: C.white, fontSize: "clamp(1.9rem,5vw,2.75rem)", lineHeight: 1.15 }}>
            Contact Us
          </h1>
          <p style={{ color: "#D1D5DB", maxWidth: 420, lineHeight: 1.65 }}>
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
        </div>
      </section>

      {/* ══ 3-COLUMN SECTION ══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: C.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* FORM */}
            <div className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: C.white, border: `1px solid ${C.borderGray}` }}>
              <h2 className="font-bold mb-5" style={{ color: C.primaryBlue, fontSize: 18 }}>Get In Touch</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="flex flex-col gap-1">
                  <FieldLabel text="Full Name" required />
                  <input type="text" placeholder="Enter your full name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="flex flex-col gap-1">
                  <FieldLabel text="Email Address" required />
                  <input type="email" placeholder="Enter your email"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="flex flex-col gap-1">
                  <FieldLabel text="Phone Number" required />
                  <input type="tel" placeholder="Enter phone number"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="flex flex-col gap-1">
                  <FieldLabel text="Subject" required />
                  <div style={{ position: "relative" }}>
                    <select value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      style={{ ...baseInput, paddingRight: 36, appearance: "none", cursor: "pointer",
                        color: form.subject ? C.primaryBlue : "#9CA3AF" }}
                      onFocus={onFocus} onBlur={onBlur}>
                      {subjectOptions.map((s) => (
                        <option key={s} value={s === "Select a subject" ? "" : s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} color="#9CA3AF"
                      style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <FieldLabel text="Message" required />
                  <textarea placeholder="Write your message here..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required rows={2}
                    style={{ ...baseInput, resize: "none" }}
                    onFocus={onFocus} onBlur={onBlur} />
                </div>

                <button type="submit"
                  style={{ backgroundColor: submitted ? "#10B981" : C.primaryBlue,
                    color: C.white, fontSize: 14, fontWeight: 600,
                    border: "none", borderRadius: 10, padding: "12px 16px",
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 8, width: "100%",
                    fontFamily: "'Poppins',sans-serif", transition: "background-color .3s" }}>
                  {submitted
                    ? <><CheckCircle size={16} color={C.white} /> Message Sent!</>
                    : <><Send size={15} color={C.white} /> Send Message</>}
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Shield size={13} color="#9CA3AF" />
                  <span style={{ color: "#9CA3AF", fontSize: 11 }}>
                    Your information is safe with us. We don't share your data.
                  </span>
                </div>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: C.white, border: `1px solid ${C.borderGray}` }}>
              <h2 className="font-bold mb-5" style={{ color: C.primaryBlue, fontSize: 18 }}>Contact Information</h2>
              <div className="flex flex-col gap-5">
  {contactInfo.map((item, i) => {
    const CardWrapper = item.link ? "a" : "div";

    return (
      <CardWrapper
        key={i}
        href={item.link || undefined}
        target={item.link?.startsWith("http") ? "_blank" : undefined}
        rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="transition-all duration-300 hover:scale-[1.01] hover:opacity-90"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          textDecoration: "none",
          cursor: item.link ? "pointer" : "default",
        }}
      >
        <IconBadge
          Icon={item.Icon}
          color={item.color}
          bg={item.bg}
        />

        <div>
          <p
            style={{
              color: C.primaryBlue,
              fontSize: 13,
              fontWeight: 600,
              margin: "0 0 3px",
            }}
          >
            {item.label}
          </p>

          <p
            style={{
              color: C.grayText,
              fontSize: 13,
              lineHeight: 1.65,
              whiteSpace: "pre-line",
              margin: 0,
            }}
          >
            {item.value}
          </p>
        </div>
      </CardWrapper>
    );
  })}
</div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-sm flex flex-col max-h-50"
              style={{ backgroundColor: C.white, border: `1px solid ${C.borderGray}` }}>
              <div style={{ padding: "24px 24px 12px", marginBottom:"20px" }}>
                <h2 style={{ color: C.primaryBlue, fontSize: 18, fontWeight: 700, margin: 0 }}>
                  Visit Our Campus
                </h2>
              </div>
             <div className="mx-4">
  <div
    className="w-full rounded-xl overflow-hidden"
    style={{ height: 260 }}
  >
    <iframe
      title="Alliance Degree College"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3149!3d17.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b26e0c3fa43%3A0x0!2sAlliance+Degree+College%2C+Visakhapatnam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
      width="100%"
      height="260"
      style={{ border: 0, display: "block" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

<div className="px-4 py-3 mt-8">
  <a
    href="https://maps.google.com/?q=Alliance+Degree+College+Visakhapatnam"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: C.primaryBlue,
      color: C.white,
      borderRadius: 12,
      padding: "12px 16px",
      fontSize: 13,
      fontWeight: 600,
      textDecoration: "none",
      fontFamily: "'Poppins',sans-serif",
    }}
  >
    <Navigation size={15} color={C.white} />
    Get Directions
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold mb-8"
            style={{ color: C.primaryBlue, fontSize: "clamp(1.3rem,3vw,1.6rem)" }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ══ ASSISTANCE BANNER ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.lightGray, borderTop: `1px solid ${C.borderGray}`, padding: "24px 16px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: C.primaryBlue,
                flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HelpCircle size={28} color={C.accentYellow} />
              </div>
              <div>
                <h3 style={{ color: C.primaryBlue, fontSize: "clamp(.95rem,2.5vw,1.1rem)", fontWeight: 700, margin: "0 0 4px" }}>
                  Need Immediate Assistance?
                </h3>
                <p style={{ color: C.grayText, fontSize: 13, margin: 0 }}>
                  Our admission counselors are ready to help you.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
               <a href="tel:9848127344">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: C.lightBlue,
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <PhoneCall size={16} color={C.primaryBlue} />
                </div>
                <div>
                 <div style={{ color: C.grayText, fontSize: 11, fontWeight: 500 }}>Call Us Now</div>
                  <div style={{ color: C.primaryBlue, fontSize: 16, fontWeight: 700 }}>9848127344</div> 
                </div>
              </div>
              </a>
              <a href="https://wa.me/919848127344" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8,
                  backgroundColor: C.primaryBlue, color: C.white, borderRadius: 12,
                  padding: "12px 20px", fontSize: 14, fontWeight: 600,
                  textDecoration: "none", fontFamily: "'Poppins',sans-serif", whiteSpace: "nowrap" }}>
                <MessageCircle size={16} color={C.white} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}