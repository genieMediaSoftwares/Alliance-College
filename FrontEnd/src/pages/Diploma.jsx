import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  Briefcase,
  GraduationCap,
  Users,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  BarChart3,
  Monitor,
  Briefcase as BriefcaseIcon,
  Plane,
  ShoppingBag,
  HeadphonesIcon,
  UtensilsCrossed,
  Globe,
  TrendingUp,
  BookOpen,
  Award,
  ChefHat,
} from "lucide-react";

const NAV_BLUE = "#0F2B5B";
const GOLD = "#F5A623";
const LIGHT_BG = "#F5F7FA";
const ICON_BLUE = "#1B4F9C";

/* ── Inline Social SVG Icons ── */
const FacebookIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const TwitterIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const InstagramIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>);
const LinkedinIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);
const YoutubeIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>);

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 390 }}>
      {/* BG campus image */}
      <img
        src="https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80"
        alt="Diploma Campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Gradient overlay – heavier on left */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(90deg,rgba(10,30,66,0.97) 0%,rgba(10,30,66,0.93) 40%,rgba(10,30,66,0.52) 68%,rgba(10,30,66,0.15) 100%)" }}
      />

      {/* Student image – right */}
      <div className="absolute right-0 bottom-0 h-full hidden lg:block" style={{ width: "38%" }}>
        <img
          src="https://i.pinimg.com/736x/1a/87/7e/1a877e10ae10fff4614b9fe8a5e5820a.jpg"
          alt="Diploma Student"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: "linear-gradient(to right,transparent 0%,black 25%)",
            WebkitMaskImage: "linear-gradient(to right,transparent 0%,black 25%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] lg:min-h-[410px] py-10 lg:py-0">
          <div className="flex-1 text-white pt-4 lg:pt-0 text-center lg:text-left lg:max-w-[58%]">
            <p className="text-blue-300 mb-3 hidden lg:block" style={{ fontSize: "0.82rem" }}>
              Home &rsaquo; Courses &rsaquo; Diploma Courses
            </p>
            <h1 className="font-extrabold text-white leading-tight mb-1"
              style={{ fontSize: "clamp(2rem,5.5vw,3.8rem)" }}>
              Diploma Courses
            </h1>
            <p className="text-blue-100 mb-6" style={{ fontSize: "clamp(0.95rem,2.2vw,1.2rem)" }}>
              Multiple Diploma Programs
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { icon: <Clock size={17} />, label: "Duration", value: "1–2 Years" },
                { icon: <Briefcase size={17} />, label: "Mode", value: "Full Time" },
                { icon: <GraduationCap size={17} />, label: "Eligibility", value: "10th / 12th Pass" },
                { icon: <Users size={17} />, label: "Intake", value: "Varies" },
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
              <button className="px-7 py-2.5 font-bold rounded transition-all hover:brightness-110 active:scale-95 shadow-lg" onClick={() => { navigate("/applynow") }}
                style={{ background: GOLD, color: "#fff", fontSize: "0.9rem" }}>
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

/* ─────────────────────────── ABOUT ─────────────────────────── */
function AboutDiploma() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left – description */}
          <div>
            <h2 className="font-bold mb-3" style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>
              About Diploma Programs
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "0.9rem" }}>
              Our diploma courses offer industry-relevant skills and practical knowledge to help you build a
              successful career. Choose from a wide range of specialised programs designed by industry experts.
              Each program combines theoretical knowledge with hands-on training to ensure job-ready graduates.
            </p>
          </div>

          {/* Right – quick info table */}
          <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm" style={{ background: LIGHT_BG }}>
            {[
              ["Duration", "1–2 Years"],
              ["Mode", "Full Time"],
              ["Eligibility", "10th / 12th Pass"],
              ["Intake", "Varies"],
            ].map(([key, val], i, arr) => (
              <div key={key}
                className={`flex gap-4 px-6 py-3.5 bg-white ${i !== arr.length - 1 ? "border-b border-gray-100" : ""}`}>
                <span className="text-gray-500 w-28 flex-shrink-0" style={{ fontSize: "0.88rem" }}>{key}</span>
                <span className="text-gray-400 flex-shrink-0">:</span>
                <span className="text-gray-700 font-semibold" style={{ fontSize: "0.88rem" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── POPULAR DIPLOMA COURSES ─────────────────────── */
function PopularCourses() {
  const courses = [
    { icon: <BarChart3 size={30} color={ICON_BLUE} />, label: "Diploma in Business Management" },
    { icon: <Monitor size={30} color={ICON_BLUE} />, label: "Diploma in Computer Applications" },
    { icon: <TrendingUp size={30} color={ICON_BLUE} />, label: "Diploma in Management" },
    { icon: <Globe size={30} color={ICON_BLUE} />, label: "Diploma in Tourism Management" },
    { icon: <Award size={30} color={ICON_BLUE} />, label: "Diploma in Hospitality Management" },
    { icon: <ChefHat size={30} color={ICON_BLUE} />, label: "PGDHM – Food Production" },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }}>
          Popular Diploma Courses
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {courses.map(({ icon, label }) => (
            <div key={label}
              className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-3 text-center hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group">
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">{icon}</div>
              <p className="font-semibold text-gray-700 leading-snug" style={{ fontSize: "0.78rem" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CURRICULUM ─────────────────────── */
const curriculum = {
  "Year 1": [
    { sem: "Semester 1", subjects: ["Basic Concepts", "Practical Training", "Communication Skills", "Workshop Training"] },
    { sem: "Semester 2", subjects: ["Advanced Concepts", "Industry Projects", "Internship", "Skill Development"] },
  ],
  "Year 2": [
    { sem: "Semester 3", subjects: ["Specialisation Modules", "Project Management", "Industry Exposure", "Case Studies"] },
    { sem: "Semester 4", subjects: ["Final Project / Viva", "Entrepreneurship Skills", "Placement Training", "Certification"] },
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
              <button key={yr} onClick={() => setActiveYear(yr)}
                className="px-10 sm:px-16 py-2 rounded-md font-semibold transition-all"
                style={{ fontSize: "0.88rem", background: activeYear === yr ? NAV_BLUE : "transparent", color: activeYear === yr ? "#fff" : "#6b7280" }}>
                {yr}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {curriculum[activeYear].map(({ sem, subjects }) => (
            <div key={sem} className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow" style={{ background: LIGHT_BG }}>
              <h3 className="font-bold mb-4" style={{ color: NAV_BLUE, fontSize: "0.97rem" }}>{sem}</h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-gray-600" style={{ fontSize: "0.87rem" }}>
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

/* ─────────────────────── GALLERY ─────────────────────── */
const galleryItems = [
  { label: "Classroom Learning", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=85" },
  { label: "Group Discussion", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=85" },
  { label: "Seminars & Workshops", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85" },
  { label: "Hospitality Training", img: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=700&q=85" },
  { label: "Campus Event", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&q=85" },
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
          {/* Mobile: horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {galleryItems.map(({ label, img }) => (
              <GalleryCard key={label} label={label} img={img} />
            ))}
          </div>

          {/* Tablet + Desktop: 3 items with arrows */}
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
/* ─────────────────────── CAREER OPPORTUNITIES ─────────────────────── */
function CareerOpportunities() {
  const careers = [
    { icon: <BriefcaseIcon size={20} color={ICON_BLUE} />, role: "Office Executive" },
    { icon: <Monitor size={20} color={ICON_BLUE} />, role: "IT Support" },
    { icon: <Award size={20} color={ICON_BLUE} />, role: "Hotel Executive" },
    { icon: <Plane size={20} color={ICON_BLUE} />, role: "Travel Consultant" },
    { icon: <ShoppingBag size={20} color={ICON_BLUE} />, role: "Sales Executive" },
    { icon: <HeadphonesIcon size={20} color={ICON_BLUE} />, role: "Customer Service" },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-6" style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>Career Opportunities</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {careers.map(({ icon, role }) => (
              <div key={role} className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {icon}
                </div>
                <p className="text-gray-700 font-medium" style={{ fontSize: "0.8rem" }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── STUDENT TESTIMONIALS (full-width navy card) ─────────────────────── */
function Testimonials() {
  const [idx, setIdx] = useState(0);

  const testimonials = [
    {
      text: "The diploma course gave me practical skills and a great start to my career.",
      name: "Pooja Singh", batch: "Diploma Batch 2023",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
      text: "I gained hands-on experience and industry knowledge that helped me land my first job within months of graduating.",
      name: "Ravi Kumar", batch: "Diploma Batch 2022",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80"
    },
    {
      text: "The faculty mentorship and practical training at Alliance prepared me for the real world like no other program.",
      name: "Sneha Patil", batch: "Diploma Batch 2023",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: NAV_BLUE }}>
          <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-10 sm:py-12">
            {/* Text content – center */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-white mb-5" style={{ fontSize: "1.2rem" }}>
                Student Testimonials
              </h3>

              {/* Stars */}
              <div className="flex gap-1 justify-center sm:justify-start mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill={GOLD} color={GOLD} />)}
              </div>

              {/* Quote */}
              <p className="text-blue-100 leading-relaxed mb-3" style={{ fontSize: "1rem", fontStyle: "italic" }}>
                &ldquo;{testimonials[idx].text}&rdquo;
              </p>
              <p className="text-blue-300 font-semibold" style={{ fontSize: "0.88rem" }}>
                &ndash; {testimonials[idx].name}, {testimonials[idx].batch}
              </p>

              {/* Dots */}
              <div className="flex gap-2 justify-center sm:justify-start mt-5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === idx ? "20px" : "8px", height: "8px",
                      background: i === idx ? GOLD : "rgba(255,255,255,0.35)"
                    }} />
                ))}
              </div>
            </div>

            {/* Student photo – right */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={testimonials[idx].photo}
                  alt={testimonials[idx].name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white/20 shadow-xl transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: GOLD }}>
                  <Star size={12} fill="#fff" color="#fff" />
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next arrows inside card */}
          <div className="flex justify-end gap-2 px-8 pb-6 -mt-2">
            <button onClick={() => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
              <ChevronLeft size={14} color="#fff" />
            </button>
            <button onClick={() => setIdx((p) => (p + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
              <ChevronRight size={14} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
const faqs = [
  {
    q: "What is the eligibility for Diploma courses?",
    a: "Most diploma programs require a 10th or 12th pass certificate from a recognised board. Specific programs may have additional requirements."
  },
  {
    q: "How can I apply for diploma courses?",
    a: "You can apply online through our website or visit the campus admissions office. Click the Apply Now button on this page to get started."
  },
  {
    q: "Are diploma programs AICTE approved?",
    a: "Yes, our diploma programs are affiliated to Andhra University and approved by relevant bodies, ensuring your certification is nationally recognised."
  },
  {
    q: "Do you provide internship opportunities?",
    a: "Yes, all diploma programs include industry internships as part of the curriculum to give students hands-on real-world experience."
  },
  {
    q: "What are the placement opportunities?",
    a: "Our placement cell actively assists diploma students. Graduates have been placed as Office Executives, IT Support, Hotel Executives, Travel Consultants, and more."
  },
  {
    q: "What is the fee structure for diploma courses?",
    a: "Fee varies by program. Please download the brochure or contact our admissions team for the latest fee details and scholarship options."
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden bg-white transition-all ${open ? "border-blue-200" : "border-gray-100"}`}>
      <button onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-700 pr-4" style={{ fontSize: "0.88rem" }}>{q}</span>
        <ChevronDown size={17} color="#6b7280" className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-gray-100">
          <p className="text-gray-600 pt-3 leading-relaxed" style={{ fontSize: "0.86rem" }}>{a}</p>
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
        <h2 className="font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.4rem" }}>Frequently Asked Questions</h2>
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
export default function Diploma() {
  return (
    <div className="w-full">
      <Hero />
      <AboutDiploma />
      <PopularCourses />
      <Curriculum />
      <Gallery />
      <CareerOpportunities />
      <Testimonials />
      <FAQ />

    </div>
  );
}