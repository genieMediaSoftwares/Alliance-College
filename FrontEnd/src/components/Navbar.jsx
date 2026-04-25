import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const LOGO_URL = "https://images.shiksha.com/mediadata/images/1706678186phpyTNUJD.jpeg";

// ── Nav Data ──────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT US", to: "/about",
    children: [
      { label: "Our Vision",           to: "/about/vision" },
      { label: "Mission & Values",     to: "/about/mission" },
      { label: "Principal's Message",  to: "/about/principal" },
      { label: "Faculty",              to: "/about/faculty" },
      { label: "Infrastructure",       to: "/about/infrastructure" },
    ],
  },
  {
    label: "COURSES", to: "/courses",
    children: [
      { label: "B.Com",               to: "/courses/bcom" },
      { label: "BBA",                 to: "/courses/bba" },
      { label: "BCA",                 to: "/courses/bca" },
      { label: "B.Sc (CS)",           to: "/courses/bsc-cs" },
      { label: "B.Sc (Mathematics)",  to: "/courses/bsc-maths" },
      { label: "BA",                  to: "/courses/ba" },
    ],
  },
  {
    label: "ADMISSIONS", to: "/admissions",
    children: [
      { label: "Admission Process",    to: "/admissions/process" },
      { label: "Eligibility Criteria", to: "/admissions/eligibility" },
      { label: "Fee Structure",        to: "/admissions/fees" },
      { label: "Scholarships",         to: "/admissions/scholarships" },
      { label: "Apply Online",         to: "/admissions/apply" },
    ],
  },
  {
    label: "STUDENT CORNER", to: "/students",
    children: [
      { label: "Timetable",           to: "/students/timetable" },
      { label: "Results",             to: "/students/results" },
      { label: "Exam Schedule",       to: "/students/exams" },
      { label: "Student Activities",  to: "/students/activities" },
      { label: "Clubs & Societies",   to: "/students/clubs" },
    ],
  },
  { label: "GALLERY",    to: "/gallery" },
  { label: "CONTACT US", to: "/contact" },
];

const SOCIALS = [
  { Icon: FaFacebookF,  label: "Facebook",  href: "#" },
  { Icon: FaInstagram,  label: "Instagram", href: "https://www.instagram.com/alliance_college_vizag" },
  { Icon: FaYoutube,    label: "YouTube",   href: "https://youtube.com/@alliancecollegevizag639" },
  { Icon: FaLinkedinIn, label: "LinkedIn",  href: "#" },
];

// ── Two separate phone numbers ────────────────────────────────────────────────
const PHONES = [
  { display: "+91 88850 66502", href: "tel:+918885066502" },
  { display: "+91 88866 63650", href: "tel:+918886663650" },
];

// ── Desktop Dropdown ──────────────────────────────────────────────────────────
function DesktopDropdown({ items, open }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 w-52 bg-white
        shadow-2xl rounded-b-lg border-t-2 border-[#c0392b] z-50 overflow-hidden
        transition-all duration-200 origin-top
        ${open
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-90 pointer-events-none"
        }`}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block px-4 py-2.5 text-[11px] font-semibold tracking-wide
            text-[#1a2a6c] hover:bg-[#1a2a6c] hover:text-white
            transition-colors duration-150 border-b border-gray-100 last:border-0"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ── Desktop Nav Item ──────────────────────────────────────────────────────────
function NavItem({ item, isActive, activeDropdown, onEnter, onLeave }) {
  const active     = isActive(item.to);
  const dropOpen   = activeDropdown === item.label;


  return (
    /*
      No overflow-hidden here — that was clipping the dropdown.
      Underline overlap is fixed by matching the inset to the link's
      own px padding (px-2.5 = 10px, xl:px-3.5 = 14px) so the bar
      never paints outside the text area and cannot visually bleed
      onto a neighbour.
    */
    <div
      className="relative flex flex-col"
      onMouseEnter={() => item.children && onEnter(item.label)}
      onMouseLeave={() => item.children && onLeave()}
    >
      <Link
        to={item.to}
        className={`group relative inline-flex items-center gap-0.5
          px-2.5 xl:px-3.5 pt-2 pb-[10px]
          text-[10px] xl:text-[11px] font-bold tracking-wider
          transition-colors duration-200 whitespace-nowrap select-none
          ${active || dropOpen
            ? "text-[#c0392b]"
            : "text-[#1a2a6c] hover:text-[#c0392b]"
          }`}
      >
        {item.label}

        {item.children && (
          <ChevronDown size={12}
            className={`shrink-0 transition-transform duration-200
              ${dropOpen ? "rotate-180" : ""}`}
          />
        )}

        {/* Underline removed — active state shown via text colour only */}
      </Link>

      {item.children && <DesktopDropdown items={item.children} open={dropOpen} />}
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (
        !e.target.closest("#mobile-menu") &&
        !e.target.closest("#hamburger-btn")
      ) setMobileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const onEnter = (label) => { clearTimeout(timerRef.current); setActiveDropdown(label); };
  const onLeave = () => { timerRef.current = setTimeout(() => setActiveDropdown(null), 120); };

  const toggleExpanded = (label) =>
    setMobileExpanded((v) => (v === label ? null : label));

  return (
    <header className="w-full sticky top-0 z-40">

      {/* ── TOP BAR ──────────────────────────────────────────────────────── */}
      <div className="bg-[#0d1e3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">

            {/* Left: email + phone numbers */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">

              {/* Email */}
              <a
                href="mailto:info@alliancemgt.org"
                className="flex items-center gap-1.5 text-gray-300 hover:text-white
                  transition-colors text-[11px] shrink-0"
              >
                <Mail size={12} className="shrink-0 text-[#e74c3c]" />
                <span className="hidden sm:inline truncate max-w-[200px]">
                  info@alliancemgt.org
                </span>
              </a>

              <span className="text-gray-600 hidden sm:block select-none text-xs">|</span>

              {/*
                FIX — phone numbers:
                Each number is its own <a href="tel:..."> so tapping on
                mobile opens the dialer with the correct number.
                On desktop both show side-by-side separated by " / ".
                On mobile only the Phone icon shows (numbers hidden).
              */}
              <div className="flex items-center gap-1 shrink-0">
                <Phone size={12} className="shrink-0 text-[#e74c3c]" />
                <div className="hidden sm:flex items-center gap-1 text-[11px]">
                  {PHONES.map((p, i) => (
                    <span key={p.href} className="flex items-center gap-1">
                      <a
                        href={p.href}
                        className="text-gray-300 hover:text-white transition-colors
                          hover:underline underline-offset-2"
                      >
                        {p.display}
                      </a>
                      {i < PHONES.length - 1 && (
                        <span className="text-gray-600 select-none">/</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Mobile: show only first number as a tap-to-call link */}
                <a
                  href={PHONES[0].href}
                  className="sm:hidden text-gray-300 hover:text-white
                    transition-colors text-[11px]"
                >
                  {PHONES[0].display}
                </a>
              </div>

            </div>

            {/* Right: socials */}
            <div className="flex items-center">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                    text-gray-400 hover:text-white hover:bg-white/10 rounded
                    transition-all duration-200">
                  <Icon size={12} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── MAIN NAV ─────────────────────────────────────────────────────── */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] sm:h-[68px] xl:h-[74px]">

            {/* ── LOGO + BRAND TEXT ───────────────────────────────────── */}
            <Link to="/" className="shrink-0 flex items-center gap-2 sm:gap-2.5 min-w-0">

              {/* Emblem */}
              <img
                src={LOGO_URL}
                alt="Alliance Degree College emblem"
                className="h-8 sm:h-11 xl:h-[52px] w-auto object-contain shrink-0"
              />

              {/* Text block */}
              <div className="flex flex-col justify-center leading-none min-w-0">

                {/* Row 1: "Alliance" + tagline */}
                <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                  {/* "Alliance" */}
                  <span
                    className="text-[#8b0000] font-extrabold
                      text-[15px] sm:text-[22px] lg:text-[26px] xl:text-[28px]
                      leading-none tracking-tight"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Alliance
                  </span>

                  {/* Tagline — visible on all sizes, smaller on mobile */}
                  <span
                    className="text-[#c0186c] italic font-medium
                      text-[7.5px] sm:text-[9px] lg:text-[10px] xl:text-[11px]
                      leading-none tracking-wide whitespace-nowrap"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Right choice for a bright career...
                  </span>
                </div>

                {/* Separator line */}
                <div className="my-[2.5px] sm:my-[3px] h-[1.5px] w-full bg-gradient-to-r
                  from-[#8b0000] via-[#c0392b] to-transparent rounded-full" />

                {/* Row 2: subtitle — visible on all sizes */}
                <span
                  className="text-gray-600 font-medium tracking-wide
                    text-[7px] sm:text-[8px] lg:text-[9px] xl:text-[10px]
                    leading-none whitespace-nowrap"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  College of Management &amp; Hotel Management
                </span>

              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-stretch shrink-0">
              {NAV_LINKS.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  isActive={isActive}
                  activeDropdown={activeDropdown}
                  onEnter={onEnter}
                  onLeave={onLeave}
                />
              ))}
            </nav>

            {/* Right cluster */}
            <div className="shrink-0 flex items-center gap-2">
              <Link to="/contact"
                className="hidden sm:flex items-center gap-1
                  bg-[#c0392b] hover:bg-[#a93226] active:scale-95
                  text-white text-[10px] xl:text-[11px] font-bold tracking-wider
                  px-3 xl:px-4 py-2 rounded-md
                  transition-all duration-200 shadow-md whitespace-nowrap"
              >
                ENQUIRY NOW
                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor"
                  strokeWidth={3} viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>

              <button
                id="hamburger-btn"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                className="lg:hidden w-[42px] h-[42px] flex items-center justify-center
                  rounded-md text-[#1a2a6c]
                  hover:bg-[#1a2a6c]/8 active:bg-[#1a2a6c]/15
                  border border-transparent hover:border-[#1a2a6c]/20
                  transition-all duration-150 shrink-0"
              >
                {mobileOpen
                  ? <X size={21} strokeWidth={2.5} />
                  : <Menu size={21} strokeWidth={2.5} />
                }
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white border-b border-gray-200 shadow-xl
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[82vh] overflow-y-auto" : "max-h-0 overflow-hidden"}`}
      >
        <div className="max-w-7xl mx-auto px-4 divide-y divide-gray-100">

          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      className={`flex-1 px-1 py-[13px] text-[11px] font-bold
                        tracking-widest transition-colors
                        ${isActive(item.to)
                          ? "text-[#c0392b]"
                          : "text-[#1a2a6c] hover:text-[#c0392b]"
                        }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                      className={`shrink-0 w-9 h-9 flex items-center justify-center
                        rounded-md transition-all duration-200
                        ${mobileExpanded === item.label
                          ? "bg-[#c0392b]/10 text-[#c0392b]"
                          : "text-gray-400 hover:bg-gray-100 hover:text-[#1a2a6c]"
                        }`}
                    >
                      <ChevronDown size={16} strokeWidth={2.5}
                        className={`transition-transform duration-250
                          ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${mobileExpanded === item.label
                        ? "max-h-[320px] pb-2"
                        : "max-h-0"
                      }`}
                  >
                    <div className="ml-1 pl-3 border-l-2 border-[#c0392b]/60 space-y-0.5 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`flex items-center gap-2 px-3 py-[8px]
                            text-[11px] font-semibold rounded-r
                            transition-colors duration-150
                            ${isActive(child.to)
                              ? "text-[#c0392b] bg-[#c0392b]/5"
                              : "text-gray-500 hover:text-[#1a2a6c] hover:bg-gray-50"
                            }`}
                        >
                          <span className={`w-1 h-1 rounded-full shrink-0 transition-colors
                            ${isActive(child.to) ? "bg-[#c0392b]" : "bg-gray-300"}`}
                          />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className={`block px-1 py-[13px] text-[11px] font-bold
                    tracking-widest transition-colors
                    ${isActive(item.to)
                      ? "text-[#c0392b]"
                      : "text-[#1a2a6c] hover:text-[#c0392b]"
                    }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Enquiry CTA */}
          <div className="py-3.5">
            <Link
              to="/enquiry"
              className="flex items-center justify-center gap-1.5 w-full
                bg-[#c0392b] hover:bg-[#a93226] active:scale-[0.98]
                text-white text-[11px] font-bold tracking-widest
                py-2.5 rounded-md transition-all shadow-sm"
            >
              ENQUIRY NOW
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor"
                strokeWidth={3} viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}