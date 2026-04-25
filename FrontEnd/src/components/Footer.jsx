import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/about/mission" },
  { label: "Infrastructure", to: "/about/infrastructure" },
  { label: "Faculty", to: "/about/faculty" },
  { label: "News & Events", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

const COURSES = [
  { label: "B.Com", to: "/courses/bcom" },
  { label: "B.Sc", to: "/courses/bsc" },
  { label: "B.A", to: "/courses/ba" },
  { label: "BBA / BBM", to: "/courses/bba" },
  { label: "PUC / Intermediate", to: "/courses/puc" },
  { label: "All Courses", to: "/courses" },
];

const STUDENT_CORNER = [
  { label: "Results", to: "/students/results" },
  { label: "Attendance", to: "/students/attendance" },
  { label: "Examination", to: "/students/exams" },
  { label: "Scholarships", to: "/students/scholarships" },
  { label: "Downloads", to: "/students/downloads" },
  { label: "Student Login", to: "/students/login" },
];

const SOCIALS = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/alliance_college_vizag" },
  { Icon: FaYoutube, label: "YouTube", href: "https://m.youtube.com/@alliancecollegevizag639" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

const LOGO_URL = "https://images.shiksha.com/mediadata/images/1706678186phpyTNUJD.jpeg";
const ADDRESS_TEXT = "#54-11-40/1/1, Dr. V.S. Krishna College Road, Near SBI Bank, Maddilapalem, Visakhapatnam - 530013";
const ADDRESS_MAPS = "https://www.google.com/maps/search/?api=1&query=54-11-40%2F1%2F1+Dr+VS+Krishna+College+Road+Maddilapalem+Visakhapatnam+530013";
const PHONES = [
  { display: "+91 88850 66502", href: "tel:+918885066502" },
  { display: "+91 88866 63650", href: "tel:+918886663650" },
];
const EMAIL = "info@alliancemgt.org";
const EMAIL_HREF = "mailto:info@alliancemgt.org";
const HOURS = "Mon – Sat: 9:00 AM – 5:00 PM";

// ── Shared brand block — logo + Alliance text ─────────────────────────────────
// `size` = "sm" (mobile/compact) | "lg" (desktop col)
function BrandBlock({ size = "lg" }) {
  const isLg = size === "lg";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">

      {/* Emblem */}
      <img
        src={LOGO_URL}
        alt="Alliance Degree College"
        className={`object-contain shrink-0
          ${isLg ? "h-14 w-auto" : "h-10 w-auto max-w-[56px]"}`}
      />

      {/* Text block */}
      <div className="flex flex-col justify-center leading-none min-w-0">

        {/* Row 1: Alliance + tagline */}
        <div className="flex items-baseline gap-1.5 flex-wrap">
          {/* Alliance */}
          <span
            className={`text-[#c0392b] font-extrabold leading-none tracking-tight
              ${isLg ? "text-[22px]" : "text-[16px]"}`}
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Alliance
          </span>
          {/* Tagline */}
          <span
            className={`text-white italic font-medium leading-none tracking-wide whitespace-nowrap
              ${isLg ? "text-[10px]" : "text-[7.5px]"}`}
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Right choice for a bright career...
          </span>
        </div>

        {/* Separator */}
        <div className={`bg-gradient-to-r from-[#c0392b] via-[#e74c3c] to-transparent
          rounded-full ${isLg ? "my-[4px] h-[1.5px]" : "my-[3px] h-[1px]"}`}
        />

        {/* Subtitle */}
        <span
          className={`text-white font-medium tracking-wide leading-none whitespace-nowrap
            group-hover:text-gray-200 transition-colors
            ${isLg ? "text-[9.5px]" : "text-[7px]"}`}
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          College of Management &amp; Hotel Management
        </span>

      </div>
    </Link>
  );
}

// ── Column heading ────────────────────────────────────────────────────────────
function ColHeading({ children }) {
  return (
    <div className="mb-3">
      <h3 className="text-white text-[10px] font-extrabold tracking-[0.18em] uppercase mb-1.5"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {children}
      </h3>
      <div className="w-5 h-[2px] bg-[#c0392b] rounded-full" />
    </div>
  );
}

// ── Link row ──────────────────────────────────────────────────────────────────
function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to}
        className="group flex items-center gap-1 text-[11px] lg:text-[13px] text-gray-400
          hover:text-white transition-colors duration-200 py-[2px] leading-snug"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <ChevronRight size={10}
          className="text-[#c0392b] shrink-0 transition-transform duration-200
            group-hover:translate-x-0.5" />
        {children}
      </Link>
    </li>
  );
}

// ── Desktop contact row ───────────────────────────────────────────────────────
function ContactRow({ icon: Icon, href, children }) {
  const cls = `flex items-start gap-2 group ${href ? "cursor-pointer" : ""}`;
  const inner = (
    <>
      <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full
        bg-white/8 border border-white/10 shrink-0
        group-hover:bg-[#c0392b]/20 group-hover:border-[#c0392b]/40 transition-colors duration-200">
        <Icon size={11} className="text-[#c0392b]" />
      </span>
      <span className="text-[11px] lg:text-[13px] text-gray-300 leading-relaxed
        group-hover:text-white transition-colors duration-200 font-sans">
        {children}
      </span>
    </>
  );
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer" className={cls}>{inner}</a>
    : <div className={cls}>{inner}</div>;
}

// ── Mobile contact card ───────────────────────────────────────────────────────
function MobileContactCard({ icon: Icon, label, href, children }) {
  const cls = `flex items-start gap-2 bg-white/[0.04] border border-white/[0.07]
    rounded-xl px-2.5 py-2.5 h-full transition-all duration-200
    ${href ? "cursor-pointer hover:bg-white/[0.08] hover:border-[#c0392b]/30 active:scale-[0.98]" : ""}`;
  const inner = (
    <>
      <span className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-lg
        bg-[#c0392b]/15 border border-[#c0392b]/20 shrink-0">
        <Icon size={11} className="text-[#c0392b]" />
      </span>
      <div className="min-w-0">
        <p className="text-[8.5px] font-extrabold tracking-[0.15em] text-gray-500 uppercase mb-0.5"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {label}
        </p>
        <p className="text-[9px] text-gray-300 font-sans leading-[1.5] break-words">
          {children}
        </p>
      </div>
    </>
  );
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer" className={cls}>{inner}</a>
    : <div className={cls}>{inner}</div>;
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1f3a]">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-6">

        {/* ══════════════════════════════════════════════════════════
            MOBILE + TABLET  (< lg)
        ══════════════════════════════════════════════════════════ */}
        <div className="lg:hidden">

          {/* [1] Brand row — logo + Alliance text left, socials right */}
          <div className="flex items-start justify-between gap-3 mb-5">

            {/* Brand block compact */}
            <BrandBlock size="sm" />

            {/* Socials — 2×2 grid on mobile */}
            <div className="grid grid-cols-2 gap-1.5 shrink-0">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full
                    border border-white/15 text-gray-400
                    hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white
                    transition-all duration-200">
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>

          {/* Tagline below brand on mobile */}
          <p className="text-[11px] text-gray-400 leading-[1.75] mb-4 max-w-sm"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Committed to quality education and overall student development.
          </p>


          {/* [2] Quick Links | Courses — 2-col */}
          <div className="grid grid-cols-2 gap-x-4 mb-5">
            <div>
              <ColHeading>Quick Links</ColHeading>
              <ul className="space-y-0">
                {QUICK_LINKS.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
              </ul>
            </div>
            <div>
              <ColHeading>Courses</ColHeading>
              <ul className="space-y-0">
                {COURSES.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
              </ul>
            </div>
          </div>

          {/* [3] Student Corner */}
          <div className="mb-5">
            <ColHeading>Student Corner</ColHeading>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-3">
              {STUDENT_CORNER.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
            </ul>
          </div>


          {/* [4] Contact Us — 2×2 cards */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <div className="grid grid-cols-2 gap-2">
              <MobileContactCard icon={MapPin} label="Address" href={ADDRESS_MAPS}>
                {ADDRESS_TEXT}
              </MobileContactCard>
              <MobileContactCard icon={Phone} label="Phone">
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href}
                    className="block hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    {p.display}
                  </a>
                ))}
              </MobileContactCard>
              <MobileContactCard icon={Mail} label="Email" href={EMAIL_HREF}>
                {EMAIL}
              </MobileContactCard>
              <MobileContactCard icon={Clock} label="Hours">
                Mon – Sat{"\n"}9:00 AM – 5:00 PM
              </MobileContactCard>
            </div>
          </div>

        </div>
        {/* end mobile */}

        {/* ══════════════════════════════════════════════════════════
            DESKTOP  (≥ lg) — 5-col grid
        ══════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-5">

          {/* Col 1 — Brand */}
          <div>
            {/* Logo + Alliance text in one row */}
            <div className="mb-4">
              <BrandBlock size="lg" />
            </div>

            <p className="text-[12px] text-gray-400 leading-[1.8] mb-4 max-w-[210px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Committed to quality education and overall development to shape a
              successful future for our students.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full
                    border border-white/15 text-gray-400
                    hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white
                    transition-all duration-200">
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-0">
              {QUICK_LINKS.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <ColHeading>Courses</ColHeading>
            <ul className="space-y-0">
              {COURSES.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <ColHeading>Student Corner</ColHeading>
            <ul className="space-y-0">
              {STUDENT_CORNER.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
            </ul>
          </div>

          {/* Col 5 — Contact */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <div className="space-y-2.5">
              <ContactRow icon={MapPin} href={ADDRESS_MAPS}>{ADDRESS_TEXT}</ContactRow>
              <ContactRow icon={Phone}>
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href}
                    className="block hover:text-white transition-colors duration-200
                      hover:underline underline-offset-2">
                    {p.display}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={Mail} href={EMAIL_HREF}>{EMAIL}</ContactRow>
              <ContactRow icon={Clock}>{HOURS}</ContactRow>
            </div>
          </div>

        </div>

      </div>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10" />

      {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <p className="text-[10.5px] text-gray-500 text-center sm:text-left"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            © 2024 Alliance Degree College. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Sitemap", to: "/sitemap" },
            ].map((item, i, arr) => (
              <span key={item.to} className="flex items-center gap-2">
                <Link to={item.to}
                  className="text-[10.5px] text-gray-500 hover:text-white
                    transition-colors duration-200"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  {item.label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-gray-700 select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}