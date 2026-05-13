import { useEffect } from "react";
import { Flag, BookOpen, Building2, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
// ─── Google Fonts injection ──────────────────────────────────────────────────
function usePoppins() {
  useEffect(() => {
    if (document.getElementById("poppins-font")) return;
    const link = document.createElement("link");
    link.id = "poppins-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
}

// ─── Design tokens (exact from spec) ─────────────────────────────────────────
const C = {
  primaryBlue: "#0D1B3D",
  secondaryBlue: "#1E3A8A",
  accentYellow: "#FBBF24",
  lightBlue: "#EFF6FF",
  grayText: "#4B5563",
  lightGray: "#F3F4F6",
  white: "#FFFFFF",
};

// ─── SVG icon primitives ─────────────────────────────────────────────────────
const Icon = ({
  d,
  size = 22,
  color = C.primaryBlue,
  viewBox = "0 0 24 24",
  children,
  strokeWidth = 1.8,
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d ? <path d={d} /> : children}
  </svg>
);

const GradCapIcon = ({ size = 28, color = "#163B8F" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 9.5L12 4L22 9.5L12 15L2 9.5Z" fill={color} />
    <path
      d="M6 12.5V16C6 16 8 18 12 18C16 18 18 16 18 16V12.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 9.5V15"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const UsersIcon = ({ size = 28, color = "#D98B00" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="8" r="3" fill={color} />
    <circle cx="17" cy="10" r="2.5" fill={color} />

    <path
      d="M3.5 18C3.5 15.5 6 14 9 14C12 14 14.5 15.5 14.5 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M14 18C14 16.3 15.7 15 18 15C20.3 15 22 16.3 22 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BriefcaseIcon = ({ size = 28, color = "#163B8F" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="7" width="18" height="12" rx="2" fill={color} />

    <path
      d="M9 7V5.5C9 4.7 9.7 4 10.5 4H13.5C14.3 4 15 4.7 15 5.5V7"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path d="M3 11H21" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ShieldIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
);
const LightbulbIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <path d="M9 21h6" />
    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
  </Icon>
);
const TrophyIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </Icon>
);
const StarIcon2 = ({ size, color }) => (
  <Icon size={size} color={color}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Icon>
);
const ArrowRightIcon = ({ size = 18, color = C.white }) => (
  <Icon size={size} color={color}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
);
const HomeIconSvg = ({ size = 14, color = "#9CA3AF" }) => (
  <Icon size={size} color={color}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
);
const ChevronRightSvg = ({ size = 14, color = "#9CA3AF" }) => (
  <Icon size={size} color={color} strokeWidth={2.5}>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);
const CheckIcon = ({ size = 14, color = C.accentYellow }) => (
  <Icon size={size} color={color} strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);
const FlagIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </Icon>
);
const BookOpenIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Icon>
);
const BuildingIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <rect x="2" y="3" width="20" height="18" rx="1" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
  </Icon>
);
const AwardIcon = ({ size, color }) => (
  <Icon size={size} color={color}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </Icon>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const infoCards = [
  {
    Icon: GradCapIcon,
    title: "Industry-Focused Education",
    desc: "Curriculum designed by experts and updated as per industry standards.",
    iconBg: "#EAF1FF",
    iconColor: "#163B8F",
  },
  {
    Icon: UsersIcon,
    title: "Experienced Faculty",
    desc: "Learn from highly qualified educators with real-world industry experience.",
    iconBg: "#FFF4DD",
    iconColor: "#D98B00",
  },
  {
    Icon: BriefcaseIcon,
    title: "Holistic Development",
    desc: "Beyond academics – we focus on overall growth, skills and personality.",
    iconBg: "#EAF1FF",
    iconColor: "#163B8F",
  },
];

const stats = [
  { Icon: GradCapIcon, value: "5000+", label: "Students Trained" },
  { Icon: UsersIcon, value: "100+", label: "Recruiters" },
  { Icon: AwardIcon, value: "26 LPA", label: "Highest Package" },
  { Icon: TrophyIcon, value: "22+", label: "Years of Excellence" },
];

const journey = [
  {
    year: "2004",
    desc: "Alliance Degree College was established with a vision to deliver quality education.",
    Icon: Flag,
  },
  {
    year: "2012",
    desc: "Introduced industry-oriented programs in Hotel & Business Management.",
    Icon: BookOpen,
  },
  {
    year: "2016",
    desc: "Expanded campus facilities and advanced laboratories for practical learning.",
    Icon: Building2,
  },
  {
    year: "2020",
    desc: "Strengthened industry tie-ups and placement opportunities for students.",
    Icon: Users,
  },
  {
    year: "2026",
    desc: "Continuing our legacy of excellence and shaping future leaders.",
    Icon: Trophy,
  },
];

const values = [
  {
    Icon: StarIcon2,
    label: "Excellence",
    desc: "Striving for the highest standards in education.",
  },
  {
    Icon: ShieldIcon,
    label: "Integrity",
    desc: "Uphold honesty, transparency and ethical practices.",
  },
  {
    Icon: LightbulbIcon,
    label: "Innovation",
    desc: "Encouraging creativity and forward-thinking solutions.",
  },
  {
    Icon: TrophyIcon,
    label: "Commitment",
    desc: "Dedicated to student success and community growth.",
  },
];

// ─── Shared styled components ────────────────────────────────────────────────

const IconCircle = ({ children, bg = C.lightBlue, size = 52 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function About() {
  const navigate=useNavigate()
  usePoppins();

  const poppins = { fontFamily: "'Poppins', sans-serif" };

  return (
    <div
      style={{
        ...poppins,
        backgroundColor: C.white,
        color: C.primaryBlue,
        overflowX: "hidden",
      }}
    >
      {/* ══════════════════════════════════════════════════════════════════════
          1 — HERO BANNER
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 340 }}>
        {/* Background campus photo */}
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,27,61,0.92) 50%, rgba(13,27,61,0.7) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-5">
            <HomeIconSvg />
            <span style={{ color: "#9CA3AF", fontSize: 13 }}>Home</span>
            <ChevronRightSvg />
            <span style={{ color: "#D1D5DB", fontSize: 13 }}>About Us</span>
          </nav>

          {/* Heading */}
          <h1
            className="font-extrabold mb-3"
            style={{
              color: C.white,
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              lineHeight: 1.15,
            }}
          >
            About Alliance
          </h1>

          {/* Tagline */}
          <p
            className="font-semibold mb-4"
            style={{
              color: C.accentYellow,
              
            }}
          >
            Empowering Futures. Enriching Lives.
          </p>

          {/* Description */}
          <p
            className="max-w-lg leading-relaxed align-center"
            style={{ color: "#D1D5DB", fontSize: 15 }}
          >
            Alliance Degree College is a premier institution dedicated to
            providing quality education in Hotel Management, Business Management
            and related fields.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2 — OUR STORY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
            {/* Left — campus photo */}
            <div className="w-full lg:w-[44%] flex-shrink-0">
              <div
                className="overflow-hidden"
                style={{ height: "clamp(220px, 30vw, 300px)" }}
              >
                <img
                  src="/Alliance college (2).png"
                  alt="Alliance Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right — text */}
            <div className="flex-1 max-w-[500px] px-3">
              <h2
                className="font-bold mb-4"
                style={{
                  color: C.primaryBlue,
                  fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
                }}
              >
                Our Story
              </h2>

              <p
                className="leading-relaxed mb-4"
                style={{ color: C.grayText, fontSize: 15 }}
              >
                Founded with a vision to bridge the gap between education and
                industry, Alliance Degree College has been at the forefront of
                academic excellence and practical learning.
              </p>
              <p
                className="leading-relaxed mb-6"
                style={{ color: C.grayText, fontSize: 15 }}
              >
                Our industry-focused programs are designed to equip students
                with the skills, knowledge and confidence to excel in their
                careers and make a meaningful impact in the global industry.
              </p>

              <button
                className="inline-flex items-center gap-2 font-semibold rounded-lg px-6 py-3 transition-all hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: C.primaryBlue,
                  color: C.white,
                  fontSize: 14,
                }}
              >
                Know More About Us
                <ArrowRightIcon size={16} color={C.white} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3 — INFO CARDS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pb-14 sm:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="flex gap-4 items-start rounded-2xl p-5 sm:p-6 border hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: "#E5E7EB", backgroundColor: C.white }}
              >
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <card.Icon size={42} color={card.iconColor} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1.5 leading-tight"
                    style={{ color: C.primaryBlue, fontSize: 15 }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{ color: C.grayText, fontSize: 13, lineHeight: 1.6 }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4 — STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: C.primaryBlue }}
        className="py-10 sm:py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-center gap-3 text-center sm:text-left"
              >
                <IconCircle bg="rgba(255,255,255,0.1)" size={52}>
                  <s.Icon size={34} color={C.white} />
                </IconCircle>
                <div>
                  <div
                    className="font-extrabold leading-none"
                    style={{
                      color: C.white,
                      fontSize: "clamp(1.4rem, 2vw, 1.50rem)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: "#9CA3AF", fontSize: 12, marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5 — OUR JOURNEY TIMELINE
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-14 sm:py-16"
        style={{ backgroundColor: C.lightGray }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{
                color: C.primaryBlue,
                fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
              }}
            >
              Our Journey
            </h2>
            <p style={{ color: C.grayText, fontSize: 14, marginTop: 6 }}>
              Milestones that mark our path of excellence
            </p>
          </div>

          {/* ── Desktop timeline ─────────────────────────────────────────── */}
          <div className="hidden sm:block relative">
            {/* Horizontal connector line */}
            <div
              className="absolute"
              style={{
                top: 34,
                left: "calc(10% + 16px)",
                right: "calc(10% + 16px)",
                height: 2,
                backgroundColor: "#CBD5E1",
              }}
            />

            <div className="grid grid-cols-5 gap-2">
              {journey.map((j, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Dot */}
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                      flexShrink: 0,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <j.Icon size={28} color={C.primaryBlue} strokeWidth={2.3} />
                  </div>

                  {/* Year */}
                  <div
                    className="font-bold mt-4 mb-2"
                    style={{ color: C.primaryBlue, fontSize: 16 }}
                  >
                    {j.year}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: C.grayText,
                      fontSize: 12,
                      lineHeight: 1.6,
                      maxWidth: 140,
                    }}
                  >
                    {j.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile timeline (vertical) ───────────────────────────────── */}
          <div className="sm:hidden relative pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-[18px] top-2 bottom-2"
              style={{ width: 2, backgroundColor: "#CBD5E1" }}
            />

            <div className="flex flex-col gap-8 ml-2">
              {journey.map((j, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                 <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      
                      zIndex: 2,
                      flexShrink: 0,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <j.Icon size={28} color={C.primaryBlue} strokeWidth={2.3} />
                  </div>

                  <div className="ml-1">
                    <div
                      className="font-bold mb-1"
                      style={{ color: C.primaryBlue, fontSize: 15 }}
                    >
                      {j.year}
                    </div>
                    <p
                      style={{
                        color: C.grayText,
                        fontSize: 13,
                        lineHeight: 1.6,
                      }}
                    >
                      {j.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6 — OUR CORE VALUES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="font-bold"
              style={{
                color: C.primaryBlue,
                fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
              }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex flex-row sm:flex-col lg:flex-row items-start gap-4 rounded-xl p-4 sm:p-5 border hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: "#E5E7EB" }}
              >
                {/* Icon bubble with yellow accent */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "#d0cfd1",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1.5px solid ${C.accentYellow}33`,
                  }}
                >
                  <v.Icon size={22} color={C.primaryBlue} />
                </div>
                <div>
                  <div
                    className="font-semibold mb-1"
                    style={{ color: C.primaryBlue, fontSize: 14 }}
                  >
                    {v.label}
                  </div>
                  <p
                    style={{ color: C.grayText, fontSize: 12, lineHeight: 1.6 }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7 — CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
          alt="Students"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,27,61,0.92) 55%, rgba(13,27,61,0.6) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-lg">
            <h2
              className="font-bold mb-3"
              style={{ color: C.white, fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Be a Part of Alliance
            </h2>
            <p
              className="mb-7 leading-relaxed"
              style={{ color: "#D1D5DB", fontSize: 15 }}
            >
              Join a community that inspires you to learn, grow and succeed.
            </p>
            <button
              className="inline-flex items-center gap-2 font-bold rounded-lg px-8 py-3 transition-all hover:brightness-105 active:scale-95"  onClick={()=>{navigate("/applynow")}}
              style={{
                backgroundColor: C.accentYellow,
                color: C.primaryBlue,
                fontSize: 14,
              }}
            >
              Apply Now
              <ArrowRightIcon size={16} color={C.primaryBlue} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
