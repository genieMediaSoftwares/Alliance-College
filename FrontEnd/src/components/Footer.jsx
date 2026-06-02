import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Courses", path: "/courses" },
  { label: "Placements", path: "/placements" },
  { label: "Campus", path: "/campus" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" }
];
const courseLinks = [
  { label: "BHM", path: "/courses/bhm" },
  { label: "BBA", path: "/courses/bba" },
  { label: "MBA", path: "/courses/mba" },
  { label: "Diploma in Hm", path: "/courses/diploma-hm" },
  { label: "PGDHM", path: "/courses/pgdhm" },
];
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/www.alliancemgt.org/", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg", bg: "#1877F2" },
  { label: "Instagram", href: "https://www.instagram.com/alliancecollegevizag/", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg", bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" },
  { label: "YouTube", href: "https://www.youtube.com/@alliancecollegevizag639", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg", bg: "#FF0000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alliance-college-vizag-a451a821a/", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg", bg: "#0A66C2" },
];
const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="w-full bg-[#0d1b4b] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="flex flex-col gap-2 lg:w-[240px] flex-shrink-0">
            <Link to="/" onClick={scrollTop} className="flex items-center gap-2 w-fit">
              <img src="https://alliancemgt.org/Alliance%20Images/Alliance%20footer.png" alt="Alliance Degree College" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
              <div className="flex flex-col leading-[1.3] items-start">
                <span className="text-[13px] sm:text-[15px] font-black tracking-[0.1em] text-white uppercase whitespace-nowrap">
                  ALLIANCE COLLEGE
                </span>
                <span className="text-[8.5px] sm:text-[10px] tracking-[0.22em] text-gray-300 font-semibold uppercase whitespace-nowrap">
                  OF HOTEL MANAGEMENT
                </span>
                <span className="text-[7px] sm:text-[9px] lg:text-[11px] italic text-[#f59e0b] font-medium mt-1">
                  Right Choice for a Bright Career...
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-[10px] sm:text-sm leading-snug max-w-[200px] sm:max-w-xs">
              Empowering students with knowledge, skills and confidence to build a successful career.
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {socialLinks.map(({ label, href, iconUrl, bg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-6 h-6 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80 hover:scale-110 transition-all duration-200"
                  style={{ background: bg }}>
                  <img src={iconUrl} alt={label}
                    className="w-2.5 h-2.5 sm:w-4 sm:h-4 object-contain brightness-0 invert" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-[9px] sm:text-sm uppercase tracking-wide border-b border-white/10 pb-0.5">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-0.5 sm:gap-2 leading-tight">
                {quickLinks.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={scrollTop}
                      className="text-gray-400 text-[9px] sm:text-sm hover:text-[#f5c518] transition inline-flex items-center gap-0.5 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-[#f5c518] text-[10px]">›</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-[9px] sm:text-sm uppercase tracking-wide border-b border-white/10 pb-0.5">
                Courses
              </h3>
              <ul className="flex flex-col gap-0.5 sm:gap-2 leading-tight">
                {courseLinks.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} onClick={scrollTop} className="text-gray-400 text-[9px] sm:text-sm hover:text-[#f5c518] transition inline-flex items-center gap-0.5 group">
                      <span className="opacity-0 group-hover:opacity-100 text-[#f5c518] text-[10px]">›</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1 col-span-2 lg:col-span-1">
              <h3 className="text-white font-semibold text-[9px] sm:text-sm uppercase tracking-wide border-b border-white/10 pb-0.5">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-1 sm:gap-3 text-[9px] sm:text-sm leading-tight">
                <li className="flex items-start gap-1">
                  <Phone size={12} className="text-[#f5c518] mt-[2px]" />
                  <div className="flex flex-col gap-[2px]">
                    <a href="tel:8885066502" className="text-gray-400 hover:text-white">
                      8885066502
                    </a>
                    <a href="tel:9848127344" className="text-gray-400 hover:text-white">
                      9848127344
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-1">
                  <Mail size={12} className="text-[#f5c518] mt-[2px]" />
                  <a href="mailto:info@alliancedegreecollege.com" className="text-gray-400 hover:text-white break-all">
                    alliancesince2003@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={12} className="text-[#f5c518] mt-1 flex-shrink-0" />
                  <a href="https://www.google.com/maps?q=Dr.+V.S,+54-11-40/1,+Krishna+College+Road,+Bhanu+Nagar,+Maddilapalem,+Visakhapatnam,+Andhra+Pradesh+530022" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white leading-relaxed" >
                    Dr. V.S, 54-11-40/1, Krishna College Road, Bhanu Nagar,
                    Maddilapalem, Visakhapatnam, Andhra Pradesh 530022
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
          <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
            © 2024 Alliance Degree College. All Rights Reserved.<br />powered by:kkdigitalgrowthsoftwares
          </p>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-500">
            <Link to="/privacy-policy" onClick={scrollTop} className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms" onClick={scrollTop} className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;