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
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const NAV_BLUE  = "#0F2B5B";
const GOLD      = "#F5A623";
const LIGHT_BG  = "#F5F7FA";
const ICON_BLUE = "#1B4F9C";

/* ── Inline Social SVG Icons ── */
const FacebookIcon  = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const TwitterIcon   = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const InstagramIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>);
const LinkedinIcon  = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const YoutubeIcon   = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>);

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 400 }}>
      {/* BG image */}
      <img
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80"
        alt="MBA Campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(10,30,66,0.97) 0%,rgba(10,30,66,0.93) 40%,rgba(10,30,66,0.55) 70%,rgba(10,30,66,0.18) 100%)",
        }}
      />

      {/* Student image right */}
      <div className="absolute right-0 bottom-0 h-full hidden lg:block" style={{ width: "38%" }}>
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=85"
          alt="MBA Student"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[420px] py-10 lg:py-0">
          <div className="flex-1 text-white pt-4 lg:pt-0 text-center lg:text-left lg:max-w-[58%]">
            <p className="text-blue-300 mb-3 hidden lg:block" style={{ fontSize: "0.82rem" }}>
              Home &rsaquo; Courses &rsaquo; MBA
            </p>
            <h1
              className="font-extrabold text-white leading-none mb-1"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              MBA
            </h1>
            <p className="text-blue-200 mb-6" style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)" }}>
              Master of Business Administration
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              {[
                { icon: <Clock size={17} />,         label: "Duration",    value: "2 Years" },
                { icon: <Briefcase size={17} />,      label: "Mode",        value: "Full Time" },
                { icon: <GraduationCap size={17} />,  label: "Eligibility", value: "Graduation" },
                { icon: <Users size={17} />,          label: "Intake",      value: "60 Students" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="text-blue-300">{icon}</div>
                  <div>
                    <p className="text-white font-semibold leading-tight" style={{ fontSize: "0.85rem" }}>{value}</p>
                    <p className="text-blue-400 leading-tight" style={{ fontSize: "0.7rem" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                className="px-7 py-2.5 font-bold rounded transition-all hover:brightness-110 active:scale-95 shadow-lg"
                style={{ background: GOLD, color: "#fff", fontSize: "0.9rem" }}
              >
                Apply Now
              </button>
              <button
                className="px-6 py-2.5 font-semibold rounded border-2 border-white text-white flex items-center gap-2 transition-all hover:bg-white hover:text-[#0F2B5B] active:scale-95"
                style={{ fontSize: "0.9rem" }}
              >
                <Download size={15} /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */
function AboutMBA() {
  const cards = [
    { icon: <Building2 size={26} color={ICON_BLUE} />, label: "Affiliation",       value: "Andhra University" },
    { icon: <Award size={26} color={ICON_BLUE} />,     label: "Approval",          value: "AICTE Approved" },
    { icon: <Network size={26} color={ICON_BLUE} />,   label: "Industry Exposure", value: "100+ Corporate Tie-ups" },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-2/5">
            <h2 className="font-bold mb-3" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>About MBA</h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "0.92rem" }}>
              Our MBA program develops leadership, strategic thinking and decision-making skills. The curriculum
              is designed to prepare students for global business challenges, equipping them with real-world
              knowledge through industry interactions, live projects, and expert mentorship.
            </p>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-4" />

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                style={{ background: LIGHT_BG }}
              >
                <div className="mb-3 p-3 rounded-full bg-blue-50">{icon}</div>
                <p className="font-bold text-gray-800" style={{ fontSize: "0.95rem" }}>{value}</p>
                <p className="text-gray-500 mt-0.5" style={{ fontSize: "0.78rem" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PROGRAM + SPECIALIZATIONS ─────────────────────── */
function ProgramAndSpec() {
  const overview = [
    ["Duration",    "2 Years"],
    ["Mode",        "Full Time"],
    ["Eligibility", "Graduation in any stream with 50% marks"],
    ["Intake",      "60 Students"],
    ["Campus",      "Visakhapatnam, Andhra Pradesh"],
  ];

  const specs = [
    { icon: <TrendingUp size={30} color={ICON_BLUE} />, label: "Finance" },
    { icon: <Megaphone size={30} color={ICON_BLUE} />,  label: "Marketing" },
    { icon: <UserCheck size={30} color={ICON_BLUE} />,  label: "Human Resources" },
    { icon: <BarChart3 size={30} color={ICON_BLUE} />,  label: "Business Analytics" },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Overview */}
          <div>
            <h2 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.3rem" }}>Program Overview</h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              {overview.map(([key, val], i) => (
                <div
                  key={key}
                  className={`flex gap-4 px-5 py-3.5 ${i !== overview.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="text-gray-500 w-28 flex-shrink-0" style={{ fontSize: "0.88rem" }}>{key}</span>
                  <span className="text-gray-400 flex-shrink-0">:</span>
                  <span className="text-gray-700 font-medium" style={{ fontSize: "0.88rem" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h2 className="font-bold mb-2" style={{ color: NAV_BLUE, fontSize: "1.3rem" }}>Specializations</h2>
            <p className="text-gray-500 mb-5" style={{ fontSize: "0.88rem" }}>Choose a specialization in your area of interest.</p>
            <div className="grid grid-cols-2 gap-4">
              {specs.map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center gap-3 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">{icon}</div>
                  <p className="font-semibold text-gray-700 text-center" style={{ fontSize: "0.88rem" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CURRICULUM ─────────────────────── */
const curriculum = {
  "Year 1": [
    { sem: "Semester 1", subjects: ["Principles of Management","Financial Accounting","Business Economics","Marketing Management"] },
    { sem: "Semester 2", subjects: ["Organizational Behavior","Business Law","Cost Accounting","Statistics for Management"] },
  ],
  "Year 2": [
    { sem: "Semester 3", subjects: ["Business Communication","Strategic Management","Financial Management","Research Methodology"] },
    { sem: "Semester 4", subjects: ["Operations Management","Entrepreneurship Development","International Business","Project Work"] },
  ],
};

function Curriculum() {
  const [activeYear, setActiveYear] = useState("Year 1");
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>
          Curriculum Overview
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
            {Object.keys(curriculum).map((yr) => (
              <button
                key={yr}
                onClick={() => setActiveYear(yr)}
                className="px-8 py-2 rounded-md font-semibold transition-all"
                style={{ fontSize: "0.9rem", background: activeYear === yr ? NAV_BLUE : "transparent", color: activeYear === yr ? "#fff" : "#6b7280" }}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {curriculum[activeYear].map(({ sem, subjects }) => (
            <div key={sem} className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow" style={{ background: LIGHT_BG }}>
              <h3 className="font-bold mb-4" style={{ color: NAV_BLUE, fontSize: "1rem" }}>{sem}</h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-gray-600" style={{ fontSize: "0.875rem" }}>
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: ICON_BLUE }} />
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

/* ─────────────────────── CAREER + WHY + TESTIMONIALS ─────────────────────── */
function CareerWhyTestimonials() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const careers = [
    { icon: <TrendingUp size={20} color={ICON_BLUE} />, role: "Business Analyst" },
    { icon: <Megaphone size={20} color={ICON_BLUE} />,  role: "Marketing Manager" },
    { icon: <UserCheck size={20} color={ICON_BLUE} />,  role: "HR Manager" },
    { icon: <BarChart3 size={20} color={ICON_BLUE} />,  role: "Financial Consultant" },
  ];

  const whyPoints = [
    "Industry-focused Curriculum",
    "Experienced Faculty",
    "100+ Recruiters",
    "Excellent Placement Record",
    "Modern Infrastructure",
    "Personality Development Programs",
  ];

  const testimonials = [
    { text: "The MBA program at Alliance helped me gain the confidence and skills to grow in my career.",
      name: "Rahul Verma",  batch: "MBA Batch 2023",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    { text: "World-class faculty and an industry-focused curriculum gave me an edge in campus placements.",
      name: "Priya Sharma", batch: "MBA Batch 2022",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "The exposure I got through corporate tie-ups was invaluable for my professional growth.",
      name: "Anil Kumar",   batch: "MBA Batch 2023",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Career */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.1rem" }}>Career Opportunities</h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {careers.map(({ icon, role }) => (
                <div key={role} className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-50">{icon}</div>
                  <span className="text-gray-700" style={{ fontSize: "0.82rem" }}>{role}</span>
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

          {/* Why */}
          <div className="rounded-xl p-6 shadow-md flex flex-col justify-between" style={{ background: NAV_BLUE }}>
            <div>
              <h3 className="font-bold text-white mb-5" style={{ fontSize: "1.1rem" }}>Why Choose Alliance?</h3>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-blue-100" style={{ fontSize: "0.88rem" }}>
                    <CheckCircle2 size={16} color={GOLD} className="flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-4" style={{ color: NAV_BLUE, fontSize: "1.1rem" }}>Student Testimonials</h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={GOLD} color={GOLD} />)}
              </div>
              <p className="text-gray-600 leading-relaxed mb-5 italic" style={{ fontSize: "0.88rem" }}>
                "{testimonials[testimonialIdx].text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[testimonialIdx].photo}
                  alt={testimonials[testimonialIdx].name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-blue-100"
                />
                <div>
                  <p className="font-semibold text-gray-800" style={{ fontSize: "0.88rem" }}>{testimonials[testimonialIdx].name}</p>
                  <p className="text-gray-400" style={{ fontSize: "0.78rem" }}>{testimonials[testimonialIdx].batch}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ background: i === testimonialIdx ? NAV_BLUE : "#d1d5db" }} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
                  className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50">
                  <ChevronLeft size={14} color="#6b7280" />
                </button>
                <button onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}
                  className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50">
                  <ChevronRight size={14} color="#6b7280" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── GALLERY ─────────────────────── */
const galleryItems = [
  { label: "Classroom Learning",   img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=85" },
  { label: "Group Discussion",     img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=85" },
  { label: "Seminars & Workshops", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85" },
  { label: "Campus Events",        img: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=85" },
  { label: "Placement Drive",      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=85" },
];

function GalleryCard({ label, img }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-xl overflow-hidden bg-gray-100 group" style={{ aspectRatio: "7/6" }}>
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-center text-gray-600 font-medium" style={{ fontSize: "0.78rem" }}>{label}</p>
    </div>
  );
}

function Gallery() {
  const [startIdx, setStartIdx] = useState(0);
  const tabletVisible = 3;

  const prev = () => setStartIdx((p) => Math.max(0, p - 1));
  const next = (max) => setStartIdx((p) => Math.min(galleryItems.length - max, p + 1));

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>Gallery</h2>

        {/* ── DESKTOP: all 5 equal columns with side arrows ── */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 hover:bg-gray-50 disabled:opacity-30 transition-all shadow-sm"
          >
            <ChevronLeft size={18} color="#374151" />
          </button>
          <div className="flex-1 grid grid-cols-5 gap-4">
            {galleryItems.map(({ label, img }) => (
              <GalleryCard key={label} label={label} img={img} />
            ))}
          </div>
          <button
            disabled
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 opacity-30 shadow-sm"
          >
            <ChevronRight size={18} color="#374151" />
          </button>
        </div>

        {/* ── TABLET: 3 visible with working arrows ── */}
        <div className="hidden sm:flex lg:hidden items-center gap-4">
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 hover:bg-gray-50 disabled:opacity-30 transition-all shadow-sm"
          >
            <ChevronLeft size={18} color="#374151" />
          </button>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {galleryItems.slice(startIdx, startIdx + tabletVisible).map(({ label, img }) => (
              <GalleryCard key={label} label={label} img={img} />
            ))}
          </div>
          <button
            onClick={() => next(tabletVisible)}
            disabled={startIdx >= galleryItems.length - tabletVisible}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 hover:bg-gray-50 disabled:opacity-30 transition-all shadow-sm"
          >
            <ChevronRight size={18} color="#374151" />
          </button>
        </div>

        {/* ── MOBILE: horizontal scroll ── */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
          {galleryItems.map(({ label, img }) => (
            <div key={label} className="flex-shrink-0 w-64 snap-start">
              <GalleryCard label={label} img={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
const faqs = [
  { q: "What is the eligibility for MBA?",
    a: "Candidates must hold a graduation degree in any stream with a minimum of 50% marks from a recognized university." },
  { q: "How can I apply for the MBA program?",
    a: "You can apply online through our website or visit the campus directly. Click the Apply Now button on this page to begin." },
  { q: "Is the MBA program AICTE approved?",
    a: "Yes, our MBA program is approved by AICTE, ensuring quality education standards and national recognition." },
  { q: "Does the college provide internship opportunities?",
    a: "Yes, the college has tie-ups with 100+ corporate partners. Students are assisted in securing internships through our placement cell." },
  { q: "What are the placement opportunities?",
    a: "Our placement cell actively facilitates campus recruitments. Students have been placed across Finance, Marketing, HR, and Analytics roles." },
  { q: "What is the fee structure for MBA?",
    a: "Please download the brochure or contact our admissions office for the latest fee structure, scholarships, and financial aid options." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden bg-white transition-all ${open ? "border-blue-200" : "border-gray-100"}`}>
      <button onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-700 pr-4" style={{ fontSize: "0.9rem" }}>{q}</span>
        <ChevronDown size={18} color="#6b7280" className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-gray-100">
          <p className="text-gray-600 pt-3 leading-relaxed" style={{ fontSize: "0.875rem" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const left  = faqs.slice(0, 3);
  const right = faqs.slice(3);
  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:hidden flex flex-col gap-3">{faqs.map((f) => <FAQItem key={f.q} {...f} />)}</div>
          <div className="hidden lg:flex flex-col gap-3">{left.map((f) => <FAQItem key={f.q} {...f} />)}</div>
          <div className="hidden lg:flex flex-col gap-3">{right.map((f) => <FAQItem key={f.q} {...f} />)}</div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────── ROOT ─────────────────────── */
export default function Mba() {
  return (
    <div className="w-full">
      <Hero />
      <AboutMBA />
      <ProgramAndSpec />
      <Curriculum />
      <CareerWhyTestimonials />
      <Gallery />
      <FAQ />
    </div>
  );
}