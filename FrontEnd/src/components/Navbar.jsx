import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/* ── Icons ── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ── Data ── */
const courseDropdown = [
  { label: "BHM (Hons)", path: "/courses/bhm", desc: "Bachelor of Hotel Management (Honours)" },
  { label: "BBA (Hons)", path: "/courses/bba", desc: "Bachelor of Business Administration (Honours)" },
  { label: "MBA", path: "/courses/mba", desc: "Master of Business Administration" },
  { label: "Diploma in HM", path: "/courses/diploma-hm", desc: "Diploma in Hotel Management" },
  { label: "PGDHM", path: "/courses/pgdhm", desc: "Post Graduate Diploma in Hotel Management" },
  { label: "Aviation", path: "/courses/aviationmanagementpage", desc: "Build your career in the Aviation, Airport and Airline Industry." },
];

const navLinks = [
  { label: "Home", path: "/", dropdown: null },
  { label: "Courses", path: "/courses", dropdown: courseDropdown },
  { label: "Placements", path: "/placements", dropdown: null },
  { label: "About Us", path: "/aboutus", dropdown: null },
  { label: "Campus", path: "/campus", dropdown: null },
  { label: "Faculty", path: "/faculty", dropdown: null },
  { label: "Gallery", path: "/gallery", dropdown: null },
  { label: "Press Release", path: "/press", dropdown: null },
  { label: "Contact", path: "/contact", dropdown: null },
];

/* ── Component ── */
const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [desktopDropOpen, setDesktopDropOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileCoursesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="w-full fixed top-0 left-0 z-50">

      {/* ── Top bar ── */}
      <div className="w-full bg-[#0d1b4b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="text-[11px] sm:text-xs font-medium tracking-wide text-white/90 truncate pr-4">
            Admissions Open 2026‑27&nbsp;&nbsp;|&nbsp;&nbsp;Limited Seats — Enroll Now!
          </p>
          <a
            href="tel:8885066502"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap hover:text-[#f5c518] transition-colors duration-200 flex-shrink-0"
          >
            <PhoneIcon />
            <span className="hidden xs:inline">8885066502 / 9848127344</span>
            <span className="xs:hidden">Call Us</span>
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        className={`w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] sm:h-[68px] lg:h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
              <img
                src="https://alliancemgt.org/Alliance%20Images/Alliance%20Logos.png"
                alt="Alliance Degree College"
                className="h-9 sm:h-11 lg:h-12 w-auto object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-[17px] sm:text-xl lg:text-2xl font-black tracking-[0.08em] text-[#0d1b4b] uppercase leading-none">
                  ALLIANCE COLLEGE
                </span>
                <span className="text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.15em] text-[#0d1b4b] font-semibold uppercase leading-tight mt-0.5">
                  OF HOTEL MANAGEMENT
                </span>
                <span className="text-[10px] sm:text-[11px] italic text-[#f59e0b] font-medium mt-0.5 leading-none">
                  Right Choice for a Bright Career...
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map(({ label, path, dropdown }) =>
                dropdown ? (
                  <div
                    key={path}
                    className="relative group"
                    onMouseEnter={() => setDesktopDropOpen(true)}
                    onMouseLeave={() => setDesktopDropOpen(false)}
                  >
                    <Link
                      to={path}
                      className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 rounded-md ${
                        isActive(path)
                          ? "text-[#0d1b4b]"
                          : "text-gray-500 hover:text-[#0d1b4b]"
                      }`}
                    >
                      {label}
                      <ChevronDown open={false} />
                      <span
                        className={`absolute bottom-0.5 left-2.5 xl:left-3 h-[2.5px] bg-[#f5c518] rounded-full transition-all duration-300 ${
                          isActive(path) ? "w-6" : "w-0 group-hover:w-5"
                        }`}
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div className="absolute top-full left-0 w-2 h-2 bg-transparent" />
                    <div className="absolute top-[calc(100%+2px)] left-1/2 -translate-x-1/2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-out origin-top">
                      <div className="p-1.5">
                        {dropdown.map(({ label: dl, path: dp, desc }) => (
                          <Link
                            key={dp}
                            to={dp}
                            className="flex items-start gap-2.5 px-3 py-2 rounded-lg hover:bg-[#f5c518]/10 group/item transition-colors duration-150"
                          >
                            <span className="mt-0.5 text-[#f5c518] font-bold text-sm leading-none">›</span>
                            <div>
                              <p className={`text-[13px] font-semibold leading-tight ${isActive(dp) ? "text-[#0d1b4b]" : "text-gray-800 group-hover/item:text-[#0d1b4b]"}`}>
                                {dl}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 px-3 py-2 bg-gray-50">
                        <Link to="/courses" className="text-[11px] font-semibold text-[#0d1b4b] hover:text-[#f5c518] transition-colors duration-150">
                          View all courses →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={path}
                    to={path}
                    className={`relative px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 rounded-md group ${
                      isActive(path) ? "text-[#0d1b4b]" : "text-gray-500 hover:text-[#0d1b4b]"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0.5 left-2.5 xl:left-3 h-[2.5px] bg-[#f5c518] rounded-full transition-all duration-300 ${
                        isActive(path) ? "w-6" : "w-0 group-hover:w-5"
                      }`}
                    />
                  </Link>
                )
              )}
            </div>

            {/* Right side: Apply + Hamburger */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                to="/applynow"
                className="hidden sm:inline-flex items-center justify-center px-4 lg:px-5 py-2 lg:py-2.5 bg-[#f5c518] text-[#0d1b4b] font-bold text-[13px] lg:text-[14px] rounded-lg hover:bg-[#e0b300] active:scale-95 transition-all duration-200 shadow-sm whitespace-nowrap"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setMenuOpen((p) => !p)}
                className="lg:hidden p-2 text-[#0d1b4b] hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ overflowY: menuOpen ? "auto" : "hidden" }}
        >
          <div className="border-t border-gray-100 bg-white px-3 py-3 flex flex-col gap-0.5">
            {navLinks.map(({ label, path, dropdown }) =>
              dropdown ? (
                <div key={path}>
                  <button
                    onClick={() => setMobileCoursesOpen((p) => !p)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors duration-200 ${
                      isActive(path)
                        ? "bg-[#f5c518]/15 text-[#0d1b4b] border-l-[3px] border-[#f5c518]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0d1b4b]"
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown open={mobileCoursesOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileCoursesOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-[#f5c518]/40 pl-3 pb-2">
                      {dropdown.map(({ label: dl, path: dp }) => (
                        <Link
                          key={dp}
                          to={dp}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-[14px] transition-colors duration-200 ${
                            isActive(dp)
                              ? "text-[#0d1b4b] font-semibold"
                              : "text-gray-500 hover:text-[#0d1b4b] hover:bg-gray-50 font-medium"
                          }`}
                        >
                          <span className="text-[#f5c518] font-bold text-base leading-none">›</span>
                          {dl}
                        </Link>
                      ))}
                      <Link
                        to="/courses"
                        className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-[#0d1b4b]/50 hover:text-[#0d1b4b] transition-colors duration-200"
                      >
                        View all courses →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors duration-200 ${
                    isActive(path)
                      ? "bg-[#f5c518]/15 text-[#0d1b4b] border-l-[3px] border-[#f5c518]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0d1b4b]"
                  }`}
                >
                  {label}
                </Link>
              )
            )}

            {/* Apply Now — mobile only */}
            <div className="sm:hidden pt-2 mt-1 border-t border-gray-100">
              <Link
                to="/applynow"
                className="flex items-center justify-center w-full py-3 bg-[#f5c518] text-[#0d1b4b] font-bold text-[14px] rounded-xl hover:bg-[#e0b300] transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;