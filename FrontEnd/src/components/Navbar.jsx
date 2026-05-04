import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" width="14" height="14"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const courseDropdown = [
  { label: "MBA",              path: "/courses/mba",              desc: "Master of Business Administration" },
  { label: "BBA",              path: "/courses/bba",              desc: "Bachelor of Business Administration" },
  { label: "Hotel Management", path: "/courses/hotel-management", desc: "Hospitality & Tourism" },
  { label: "Diploma Courses",  path: "/courses/diploma",          desc: "Short-term Skill Programs" },
];

const navLinks = [
  { label: "Home",       path: "/",           dropdown: null },
  { label: "Courses",    path: "/courses",    dropdown: courseDropdown },
  { label: "Placements", path: "/placements", dropdown: null },
  { label: "About Us",   path: "/about",      dropdown: null },
  { label: "Campus",     path: "/campus",     dropdown: null },
  { label: "Contact",    path: "/contact",    dropdown: null },
];

const Navbar = () => {
  const location   = useLocation();
  const [menuOpen, setMenuOpen]             = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

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


  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="w-full sticky top-0 z-50">


      <div className="w-full bg-[#0d1b4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
          <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-center sm:text-left w-full sm:w-auto">
            Admissions Open 2024-25 &nbsp;|&nbsp; Limited Seats, Enroll Now!
          </p>
          <a
            href="tel:08912951555"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap hover:text-[#f5c518] transition-colors duration-200 flex-shrink-0"
          >
            <PhoneIcon />
            <span>0891-2951555, 94900 89077</span>
          </a>
        </div>
      </div>


      <nav className={`w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44veK2Tk0lozmp3CJr65qDwVxINsnujrMHg&s"
                alt="Alliance Degree College"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-xl lg:text-2xl font-black tracking-[0.1em] text-[#0d1b4b] uppercase">
                  ALLIANCE
                </span>
                <span className="text-[8px] sm:text-[10px] lg:text-xs tracking-[0.18em] text-[#0d1b4b] font-semibold uppercase">
                  DEGREE COLLEGE
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map(({ label, path, dropdown }) =>
                dropdown ? (
                  <div key={path} className="relative group/courses">
                    <Link
                      to={path}
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-md text-[13px] xl:text-sm font-semibold transition-colors duration-200 ${
                        isActive(path) ? "text-[#0d1b4b]" : "text-gray-600 hover:text-[#0d1b4b]"
                      }`}
                    >
                      {label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" width="13" height="13"
                        className="transition-transform duration-200 group-hover/courses:rotate-180">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className={`absolute bottom-0 left-3 xl:left-4 h-[3px] bg-[#f5c518] rounded-full transition-all duration-300 ${
                        isActive(path) ? "w-8" : "w-0 group-hover/courses:w-6"
                      }`} />
                    </Link>

                    <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                    <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-64
                      bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden
                      opacity-0 scale-95 pointer-events-none
                      group-hover/courses:opacity-100 group-hover/courses:scale-100 group-hover/courses:pointer-events-auto
                      transition-all duration-200 ease-out origin-top">
                      <div className="p-1.5">
                        {dropdown.map(({ label: dl, path: dp, desc }) => (
                          <Link
                            key={dp}
                            to={dp}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f5c518]/10 group/item transition-colors duration-150"
                          >
                            <span className="mt-0.5 text-[#f5c518] font-bold text-base leading-none">›</span>
                            <div>
                              <p className={`text-sm font-semibold leading-tight ${isActive(dp) ? "text-[#0d1b4b]" : "text-gray-800 group-hover/item:text-[#0d1b4b]"}`}>
                                {dl}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 px-3 py-2 bg-gray-50">
                        <Link
                          to="/courses"
                          className="text-xs font-semibold text-[#0d1b4b] hover:text-[#f5c518] transition-colors duration-150"
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
                    className={`relative px-3 xl:px-4 py-2 rounded-md text-[13px] xl:text-sm font-semibold transition-colors duration-200 group ${
                      isActive(path) ? "text-[#0d1b4b]" : "text-gray-600 hover:text-[#0d1b4b]"
                    }`}
                  >
                    {label}
                    <span className={`absolute bottom-0 left-3 xl:left-4 h-[3px] bg-[#f5c518] rounded-full transition-all duration-300 ${
                      isActive(path) ? "w-8" : "w-0 group-hover:w-6"
                    }`} />
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/apply"
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#f5c518] text-[#0d1b4b] font-bold text-[13px] sm:text-sm rounded-lg hover:bg-[#e0b300] active:scale-95 transition-all duration-200 shadow-sm whitespace-nowrap"
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


        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="border-t border-gray-100 bg-white px-3 sm:px-5 py-3 flex flex-col gap-0.5">

            {navLinks.map(({ label, path, dropdown }) =>
              dropdown ? (
                <div key={path}>
                  <button
                    onClick={() => setMobileCoursesOpen((p) => !p)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive(path)
                        ? "bg-[#f5c518]/15 text-[#0d1b4b] border-l-[3px] border-[#f5c518]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0d1b4b]"
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown open={mobileCoursesOpen} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-200 ${
                    mobileCoursesOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l-2 border-[#f5c518]/40 pl-3 pb-1">
                      {dropdown.map(({ label: dl, path: dp }) => (
                        <Link
                          key={dp}
                          to={dp}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                            isActive(dp)
                              ? "text-[#0d1b4b] font-semibold"
                              : "text-gray-500 hover:text-[#0d1b4b] hover:bg-gray-50 font-medium"
                          }`}
                        >
                          <span className="text-[#f5c518] font-bold">›</span>
                          {dl}
                        </Link>
                      ))}
                      <Link
                        to="/courses"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#0d1b4b]/60 hover:text-[#0d1b4b] transition-colors duration-200"
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
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    isActive(path)
                      ? "bg-[#f5c518]/15 text-[#0d1b4b] border-l-[3px] border-[#f5c518]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0d1b4b]"
                  }`}
                >
                  {label}
                </Link>
              )
            )}

            <div className="sm:hidden pt-2 mt-1 border-t border-gray-100">
              <Link
                to="/apply"
                className="flex items-center justify-center w-full py-3 bg-[#f5c518] text-[#0d1b4b] font-bold text-sm rounded-lg hover:bg-[#e0b300] transition-colors duration-200"
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