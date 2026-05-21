import { useState } from "react";
import {
  Clock,
  Briefcase,
  GraduationCap,
  Users,
  Download,
  CheckCircle2,
  TrendingUp,
  Megaphone,
  UserCheck,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Building2,
  Award,
  Network,
  Target,
  Lightbulb,
  BookOpen,
  ShieldCheck,
  Handshake,
  Globe,
  MapPin,
  Phone,
  Mail,
  BriefcaseBusiness,
  UserRound,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const NAV_BLUE = "#0F2B5B";

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const GOLD = "#F5A623";
const LIGHT_BG = "#F5F7FA";
const ICON_BLUE = "#1B4F9C";

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
      <img
        src="https://alliancemgt.org/Alliance%20Images/bbabg1.jpg"
        alt="BBA Campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,30,66,0.97) 0%, rgba(10,30,66,0.93) 40%, rgba(10,30,66,0.55) 70%, rgba(10,30,66,0.25) 100%)",
        }}
      />

      <div className="absolute right-0 bottom-0 h-full hidden lg:block" style={{ width: "38%" }}>
        <img
          src="https://alliancemgt.org/Alliance%20Images/bbabg.jpg"
          alt="BBA Student"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[380px] lg:min-h-[400px] py-10 lg:py-0">
          <div className="flex-1 text-white pt-4 lg:pt-0 text-center lg:text-left lg:max-w-[58%]">
            <p className="text-blue-300 mb-3 hidden lg:block" style={{ fontSize: "0.82rem" }}>
              Home &rsaquo; Courses &rsaquo; BBA
            </p>

            <h1
              className="font-extrabold text-white leading-none mb-1"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              BBA(Hons)
            </h1>
            <p className="text-blue-100 mb-6" style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>
              Bachelor of Business Administration(Honours)
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { icon: <Clock size={17} />, label: "Duration", value: "3 Years" },
                { icon: <Briefcase size={17} />, label: "Mode", value: "Full Time" },
                { icon: <GraduationCap size={17} />, label: "Eligibility", value: "Graduation" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="text-blue-300">{icon}</div>
                  <div>
                    <p className="text-white font-semibold leading-tight" style={{ fontSize: "0.85rem" }}>
                      {value}
                    </p>
                    <p className="text-blue-400 leading-tight" style={{ fontSize: "0.7rem" }}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                className="px-7 py-2.5 font-bold rounded transition-all hover:brightness-110 active:scale-95 shadow-lg" onClick={() => { navigate("/applynow") }}
                style={{ background: GOLD, color: "#fff", fontSize: "0.9rem" }}
              >
                Apply Now
              </button>
              <a href="/Brochure.pdf" download="Brochure.pdf">
                <button
                  className="px-6 py-2.5 font-semibold rounded border-2 border-white text-white flex items-center gap-2 transition-all hover:bg-white hover:text-[#0F2B5B] active:scale-95"
                  style={{ fontSize: "0.9rem" }}
                >
                  <Download size={15} />
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBBA() {
  const cards = [
    { icon: <Building2 size={24} color={ICON_BLUE} />, label: "Affiliation", value: "Andhra University" },
    { icon: <Network size={24} color={ICON_BLUE} />, label: "Industry Exposure", value: "100+ Corporate Tie-ups" },
    { icon: <Target size={24} color={ICON_BLUE} />, label: "Focus", value: "Entrepreneurship & Leadership" },
              {icon: <Award size={24} color={ICON_BLUE} />,label: "Industry Exposure",value: "Internships & Live Training",},
    
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-72 flex-shrink-0">
            <h2 className="font-bold mb-3" style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>
              About BBA
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "0.88rem" }}>
              The BBA program builds a strong foundation in business principles, management and entrepreneurship
              with practical exposure. Students gain industry-relevant skills through case studies, internships,
              and live projects.
            </p>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-2" />

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                style={{ background: LIGHT_BG }}
              >
                <div className="mb-2 p-2.5 rounded-full bg-blue-50">{icon}</div>
                <p className="font-bold text-gray-800 leading-snug" style={{ fontSize: "0.82rem" }}>
                  {value}
                </p>
                <p className="text-gray-500 mt-0.5" style={{ fontSize: "0.72rem" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramOverviewAndHighlights() {
  const overview = [
    ["Duration", "3 Years"],
    ["Mode", "Full Time"],
    ["Eligibility", "10+2 (Any Stream) with 50% marks"],
    ["Campus", "Visakhapatnam, Andhra Pradesh"],
  ];

  const highlights = [
    { icon: <Globe size={28} color={ICON_BLUE} />, label: "Industry Exposure" },
    { icon: <UserCheck size={28} color={ICON_BLUE} />, label: "Soft Skills Training" },
    { icon: <Handshake size={28} color={ICON_BLUE} />, label: "Internship Support" },
    { icon: <ShieldCheck size={28} color={ICON_BLUE} />, label: "100% Placement Assistance" },
    { icon: <Lightbulb size={28} color={ICON_BLUE} />, label: "Entrepreneurship Development" },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.25rem" }}>
              Program Overview
            </h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              {overview.map(([key, val], i) => (
                <div
                  key={key}
                  className={`flex gap-4 px-5 py-3.5 ${i !== overview.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="text-gray-500 w-24 flex-shrink-0" style={{ fontSize: "0.86rem" }}>
                    {key}
                  </span>
                  <span className="text-gray-400 flex-shrink-0">:</span>
                  <span className="text-gray-700 font-medium" style={{ fontSize: "0.86rem" }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.25rem" }}>
              Program Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {highlights.map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2.5 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group text-center"
                >
                  <div className="p-2.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {icon}
                  </div>
                  <p className="font-semibold text-gray-700" style={{ fontSize: "0.8rem" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const curriculum = {
  "Year 1": [
    {
      sem: "Semester 1",
      subjects: ["Business Communication", "Principles of Management", "Financial Accounting", "Business Mathematics"],
    },
    {
      sem: "Semester 2",
      subjects: ["Organizational Behavior", "Business Law", "Cost Accounting", "Business Economics"],
    },
  ],
  "Year 2": [
    {
      sem: "Semester 3",
      subjects: ["Marketing Management", "Human Resource Management", "Entrepreneurship Development", "Statistics for Business"],
    },
    {
      sem: "Semester 4",
      subjects: ["Corporate Accounting", "E-Commerce", "Research Methodology", "Business Environment"],
    },
  ],
  "Year 3": [
    {
      sem: "Semester 5",
      subjects: ["International Business", "Investment Management", "Supply Chain Management", "Project Work"],
    },
    {
      sem: "Semester 6",
      subjects: ["Strategic Management", "Retail Management", "Management Information Systems", "Project Work & Viva"],
    },
  ],
};

function Curriculum() {
  const [activeYear, setActiveYear] = useState("Year 1");
  const years = Object.keys(curriculum);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>
          Curriculum Overview
        </h2>

        {/* Year tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setActiveYear(yr)}
                className="px-6 sm:px-10 py-2 rounded-md font-semibold transition-all"
                style={{
                  fontSize: "0.88rem",
                  background: activeYear === yr ? NAV_BLUE : "transparent",
                  color: activeYear === yr ? "#fff" : "#6b7280",
                }}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {curriculum[activeYear].map(({ sem, subjects }) => (
            <div
              key={sem}
              className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
              style={{ background: LIGHT_BG }}
            >
              <h3 className="font-bold mb-4" style={{ color: NAV_BLUE, fontSize: "0.97rem" }}>
                {sem}
              </h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-gray-600" style={{ fontSize: "0.87rem" }}>
                    <span
                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: ICON_BLUE }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerWhyTestimonials() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const careers = [
    { icon: <BriefcaseBusiness size={19} color={ICON_BLUE} />, role: "Business Executive" },
    { icon: <Megaphone size={19} color={ICON_BLUE} />, role: "Marketing Executive" },
    { icon: <ShoppingBag size={19} color={ICON_BLUE} />, role: "Sales Manager" },
    { icon: <Lightbulb size={19} color={ICON_BLUE} />, role: "Entrepreneur" },
    { icon: <UserRound size={19} color={ICON_BLUE} />, role: "HR Assistant" },
  ];

  const whyPoints = [
    "Industry-oriented Curriculum",
    "Experienced Faculty",
    "Practical Learning Approach",
    "Strong Placement Support",
    "Personality Development Programs",
  ];

  const testimonials = [
    {
      text: "BBA at Alliance helped me discover my passion for business and leadership.",
      name: "Neha Kumari",
      batch: "BBA Batch 2023",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
    },
    {
      text: "The practical approach and internship support gave me a strong head start in my career.",
      name: "Siddharth Rao",
      batch: "BBA Batch 2022",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
    },
    {
      text: "Alliance's faculty and industry exposure shaped me into a confident professional.",
      name: "Divya Reddy",
      batch: "BBA Batch 2023",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
    },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.05rem" }}>
              Career Opportunities
            </h3>
            <div className="flex flex-col gap-3 mb-5">
              {careers.map(({ icon, role }) => (
                <div key={role} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-50 flex-shrink-0">{icon}</div>
                  <span className="text-gray-700" style={{ fontSize: "0.85rem" }}>
                    {role}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="w-full py-2.5 rounded-lg font-semibold text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: NAV_BLUE, fontSize: "0.85rem" }}
            >
              View More Opportunities
            </button>
          </div>

          <div
            className="rounded-xl p-6 shadow-md"
            style={{ background: NAV_BLUE }}
          >
            <h3 className="font-bold text-white mb-5" style={{ fontSize: "1.05rem" }}>
              Why Choose Alliance?
            </h3>
            <ul className="space-y-3.5">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-blue-100" style={{ fontSize: "0.88rem" }}>
                  <CheckCircle2 size={16} color={GOLD} className="flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-3" style={{ color: NAV_BLUE, fontSize: "1.05rem" }}>
                Student Testimonials
              </h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill={GOLD} color={GOLD} />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-5 italic" style={{ fontSize: "0.88rem" }}>
                "{testimonials[testimonialIdx].text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[testimonialIdx].photo}
                  alt={testimonials[testimonialIdx].name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-blue-100"
                />
                <div>
                  <p className="font-semibold text-gray-800" style={{ fontSize: "0.88rem" }}>
                    {testimonials[testimonialIdx].name}
                  </p>
                  <p className="text-gray-400" style={{ fontSize: "0.76rem" }}>
                    {testimonials[testimonialIdx].batch}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ background: i === testimonialIdx ? NAV_BLUE : "#d1d5db" }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
                  className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  <ChevronLeft size={13} color="#6b7280" />
                </button>
                <button
                  onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}
                  className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  <ChevronRight size={13} color="#6b7280" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  {
    label: "Classroom Learning",
    img: "https://alliancemgt.org/Alliance%20Images/Img24.jpeg",
  },
  {
    label: "Group Discussions",
    img: "https://alliancemgt.org/Alliance%20Images/Img31.jpeg",
  },
  {
    label: "Campus Activities",
    img: "https://alliancemgt.org/Alliance%20Images/foodproductionlab.jpg",
  },
  {
    label: "Industrial Visit",
    img: "https://alliancemgt.org/Alliance%20Images/Img30.jpeg",
  },
  {
    label: "Seminars & Workshops",
    img: "https://alliancemgt.org/Alliance%20Images/Img48.jpeg",
  },
];


function GalleryCard({ label, img }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-auto snap-start">
      <div className="rounded-xl overflow-hidden bg-gray-100"
        style={{ height: "220px" }}>
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-center text-gray-600 mt-2 font-medium"
        style={{ fontSize: "0.82rem" }}>
        {label}
      </p>
    </div>
  );
}

function Gallery() {
  const [startIdx, setStartIdx] = useState(0);
  const desktopVisible = 3;
  const mobileVisible = 3;

  const prev = () => setStartIdx((p) => Math.max(0, p - 1));
  const next = () =>
    setStartIdx((p) => Math.min(galleryItems.length - desktopVisible, p + 1));

  const visibleSlice = galleryItems.slice(startIdx, startIdx + desktopVisible);
  const visibleMobile = galleryItems.slice(startIdx, startIdx + mobileVisible);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>
          Gallery
        </h2>

        <div className="relative">
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {galleryItems.map(({ label, img }) => (
              <GalleryCard key={label} label={label} img={img} />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={startIdx === 0}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 flex-shrink-0"
            >
              <ChevronLeft size={20} color="#374151" />
            </button>
            <div className="flex-1 grid grid-cols-3 gap-5">
              {visibleSlice.map(({ label, img }) => (
                <GalleryCard key={label} label={label} img={img} />
              ))}
            </div>
            <button
              onClick={next}
              disabled={startIdx >= galleryItems.length - desktopVisible}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 flex-shrink-0"
            >
              <ChevronRight size={20} color="#374151" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
const faqs = [
  {
    q: "What is the eligibility for BBA?",
    a: "Candidates must have completed 10+2 in any stream with a minimum of 50% marks from a recognized board.",
  },
  {
    q: "What are the career opportunities after BBA?",
    a: "BBA graduates can pursue careers as Business Executives, Marketing Managers, Entrepreneurs, Sales Managers, HR Assistants, and more.",
  },
  {
    q: "Does the college provide placement support?",
    a: "Absolutely. Our dedicated placement cell provides 100% placement assistance, organizing campus drives with 100+ recruiting companies.",
  },
  {
    q: "What are the internship opportunities?",
    a: "Students are placed in internships with industry partners during the program. Our strong corporate network ensures diverse and relevant internship placements.",
  },
  {
    q: "What is the fee structure for BBA?",
    a: "Please download the brochure or contact our admissions office for detailed information on fees, scholarships, and financial aid options.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all bg-white ${open ? "border-blue-200" : "border-gray-100"}`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-700 pr-4" style={{ fontSize: "0.88rem" }}>
          {q}
        </span>
        <ChevronDown
          size={17}
          color="#6b7280"
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-gray-100">
          <p className="text-gray-600 pt-3 leading-relaxed" style={{ fontSize: "0.86rem" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const left = faqs.slice(0, 3);
  const right = faqs.slice(3);
  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:hidden flex flex-col gap-3">
            {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            {left.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            {right.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  );
}



export default function Bba() {
  return (
    <div className="w-full">
      <Hero />
      <AboutBBA />
      <ProgramOverviewAndHighlights />
      <Curriculum />
      <CareerWhyTestimonials />
      <Gallery />
      <FAQ />
    </div>
  );
}