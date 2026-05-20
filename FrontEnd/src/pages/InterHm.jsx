import { useState } from "react";
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
  Building2,
  Award,
  Globe,
  ShieldCheck,
  UserCheck,
  Handshake,
  UtensilsCrossed,
  ConciergeBell,
  BedDouble,
  Cpu,
  CakeSlice,
  TrendingUp,
  BadgePercent,
  ClipboardList,
  CalendarDays,
  Hotel
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NAV_BLUE = "#0F2B5B";
const GOLD = "#F5A623";
const LIGHT_BG = "#F5F7FA";
const ICON_BLUE = "#1B4F9C";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 390 }}>
      <img
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
        alt="Hotel Management Training"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(10,30,66,0.97) 0%,rgba(10,30,66,0.92) 38%,rgba(10,30,66,0.55) 68%,rgba(10,30,66,0.18) 100%)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-full hidden lg:block"
        style={{ width: "40%" }}
      >
        <img
          src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=700&q=85"
          alt="Intermediate HM Student"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: "linear-gradient(to right,transparent 0%,black 28%)",
            WebkitMaskImage:
              "linear-gradient(to right,transparent 0%,black 28%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] lg:min-h-[410px] py-10 lg:py-0">
          <div className="flex-1 text-white pt-4 lg:pt-0 text-center lg:text-left lg:max-w-[58%]">
            <p
              className="text-blue-300 mb-3 hidden lg:block"
              style={{ fontSize: "0.82rem" }}
            >
              Home &rsaquo; Courses &rsaquo; Intermediate Diploma in Hotel Management
            </p>
           
            <h1
              className="font-extrabold text-white leading-tight mb-1"
              style={{ fontSize: "clamp(2rem,5.5vw,3.6rem)" }}
            >
              Intermediate in HM
            </h1>
            <p
              className="text-blue-100 mb-6"
              style={{ fontSize: "clamp(0.95rem,2.2vw,1.2rem)" }}
            >
              Intermediate Diploma in Hotel Management
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              {[
                { icon: <Clock size={17} />, label: "Duration", value: "2 Years" },
                { icon: <Briefcase size={17} />, label: "Mode", value: "Full Time" },
                { icon: <GraduationCap size={17} />, label: "Eligibility", value: "10th Pass" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="text-blue-300">{icon}</div>
                  <div>
                    <p
                      className="text-white font-semibold leading-tight"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-blue-400 leading-tight"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                className="px-7 py-2.5 font-bold rounded transition-all hover:brightness-110 active:scale-95 shadow-lg"
                onClick={() => navigate("/applynow")}
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

function AboutSection() {
  const cards = [

    { icon: <CalendarDays size={24} color={ICON_BLUE} />, label: "Programme Length", value: "2 Years / 4 Semesters" },
    { icon: <Globe size={24} color={ICON_BLUE} />, label: "Career Start", value: "Industry Placements" },
    { icon: <Award size={24} color={ICON_BLUE} />, label: "Industry Exposure", value: "Internships & Live Training", },
    { icon: <Hotel size={24} color={ICON_BLUE} />, label: "Hospitality Skills", value: "Advanced Hotel Operations", }
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-72 flex-shrink-0">
            <h2
              className="font-bold mb-3"
              style={{ color: NAV_BLUE, fontSize: "1.35rem" }}
            >
              About Intermediate Diploma
            </h2>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "0.88rem" }}
            >
              A 2-year programme advancing skills in F&amp;B service,
              accommodation operations, event management, and hospitality
              supervision. Building on foundational knowledge, this diploma
              prepares students for supervisory and team-lead roles in hotels,
              resorts, and hospitality enterprises — with deeper industry
              immersion than a 1-year diploma.
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
                <p
                  className="font-bold text-gray-800 leading-snug"
                  style={{ fontSize: "0.82rem" }}
                >
                  {value}
                </p>
                <p
                  className="text-gray-500 mt-0.5"
                  style={{ fontSize: "0.72rem" }}
                >
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
    ["Programme", "Intermediate Diploma in Hotel Management"],
    ["Duration", "2 Years (4 Semesters)"],
    ["Mode", "Full Time"],
    ["Eligibility", "10th Pass / 10+2 (Any Stream)"],
    ["Campus", "Visakhapatnam, Andhra Pradesh"],
  ];
  const highlights = [
    { icon: <UtensilsCrossed size={28} color={ICON_BLUE} />, label: "Advanced F&B Training", sub: "Practical Lab Sessions" },
    { icon: <ConciergeBell size={28} color={ICON_BLUE} />, label: "Accommodation Ops", sub: "Rooms Division Skills" },
    { icon: <CalendarDays size={28} color={ICON_BLUE} />, label: "Event Management", sub: "Banquets & Conferences" },
    { icon: <UserCheck size={28} color={ICON_BLUE} />, label: "Supervisory Skills", sub: "Team Leadership" },
    { icon: <ClipboardList size={28} color={ICON_BLUE} />, label: "Industry Internship", sub: "Live Hotel Exposure" },
    { icon: <ShieldCheck size={28} color={ICON_BLUE} />, label: "100% Placement Assistance", sub: "" },
  ];
  return (
    <section style={{ background: LIGHT_BG }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2
              className="font-bold mb-5"
              style={{ color: NAV_BLUE, fontSize: "1.2rem" }}
            >
              Program Overview
            </h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              {overview.map(([key, val], i) => (
                <div
                  key={key}
                  className={`flex gap-4 px-5 py-3.5 ${i !== overview.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span
                    className="text-gray-500 w-28 flex-shrink-0"
                    style={{ fontSize: "0.86rem" }}
                  >
                    {key}
                  </span>
                  <span className="text-gray-400 flex-shrink-0">:</span>
                  <span
                    className="text-gray-700 font-medium"
                    style={{ fontSize: "0.86rem" }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2
              className="font-bold mb-5"
              style={{ color: NAV_BLUE, fontSize: "1.2rem" }}
            >
              Program Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {highlights.map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group text-center"
                >
                  <div className="p-2.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {icon}
                  </div>
                  <p
                    className="font-semibold text-gray-700 leading-snug"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {label}
                  </p>
                  {sub && (
                    <p className="text-gray-400" style={{ fontSize: "0.72rem" }}>
                      {sub}
                    </p>
                  )}
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
      subjects: [
        "Food Production & Kitchen Operations",
        "Food & Beverage Service Fundamentals",
        "Front Office Operations",
        "Communication & Hospitality English",
      ],
    },
    {
      sem: "Semester 2",
      subjects: [
        "Accommodation & Housekeeping Operations",
        "Basic Bakery & Confectionery",
        "Guest Relations & Service Standards",
        "Introduction to Event Management",
      ],
    },
  ],
  "Year 2": [
    {
      sem: "Semester 3",
      subjects: [
        "Advanced F&B Service & Bar Operations",
        "Accommodation Management",
        "Event Planning & Banquet Operations",
        "Hospitality Supervision & Team Management",
      ],
    },
    {
      sem: "Semester 4",
      subjects: [
        "Industry Internship (Compulsory)",
        "Hotel Cost Control & Basic Accounting",
        "Personality Development & Grooming",
        "Project Work & Viva Voce",
      ],
    },
  ],
};

function Curriculum() {
  const [activeYear, setActiveYear] = useState("Year 1");
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.5rem" }}
        >
          Curriculum Overview
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
            {Object.keys(curriculum).map((yr) => (
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
              <h3
                className="font-bold mb-4"
                style={{ color: NAV_BLUE, fontSize: "0.97rem" }}
              >
                {sem}
              </h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-gray-600"
                    style={{ fontSize: "0.87rem" }}
                  >
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

function Facilities() {
  const items = [
    { icon: <UtensilsCrossed size={30} color={ICON_BLUE} />, label: "Modern Kitchen Lab", sub: "Food Production Training" },
    { icon: <ConciergeBell size={30} color={ICON_BLUE} />, label: "Front Office Lab", sub: "Hands-on Practice" },
    { icon: <BedDouble size={30} color={ICON_BLUE} />, label: "Housekeeping Lab", sub: "Practical Training" },
    { icon: <Handshake size={30} color={ICON_BLUE} />, label: "Restaurant Lab", sub: "F&B Service Training" },
    { icon: <CakeSlice size={30} color={ICON_BLUE} />, label: "Bakery & Confectionery", sub: "Specialized Lab" },
    { icon: <Cpu size={30} color={ICON_BLUE} />, label: "Computer Lab", sub: "Industry Software" },
  ];
  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.5rem" }}
        >
          Our Facilities &amp; Training
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon, label, sub }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2.5 text-center hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
            >
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {icon}
              </div>
              <p
                className="font-semibold text-gray-700 leading-snug"
                style={{ fontSize: "0.8rem" }}
              >
                {label}
              </p>
              <p
                className="text-gray-400 leading-snug"
                style={{ fontSize: "0.72rem" }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
 { label: "Kitchen Training", img: "https://alliancemgt.org/Alliance%20Images/foodproductionlab.jpg" },
  { label: "Front Office Practice", img: "https://alliancemgt.org/Alliance%20Images/Img12.jpeg" },
  { label: "Restaurant Service", img: "https://alliancemgt.org/Alliance%20Images/g13.jpg" },
  { label: "Housekeeping Lab", img: "https://alliancemgt.org/Alliance%20Images/Img25.jpeg" },
  { label: "Campus Event", img: "https://alliancemgt.org/Alliance%20Images/Img30.jpeg" },
];

function GalleryCard({ label, img }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-auto snap-start">
      <div
        className="rounded-xl overflow-hidden bg-gray-100"
        style={{ height: "220px" }}
      >
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p
        className="text-center text-gray-600 mt-2 font-medium"
        style={{ fontSize: "0.82rem" }}
      >
        {label}
      </p>
    </div>
  );
}

function Gallery() {
  const [startIdx, setStartIdx] = useState(0);
  const desktopVisible = 3;

  const prev = () => setStartIdx((p) => Math.max(0, p - 1));
  const next = () =>
    setStartIdx((p) => Math.min(galleryItems.length - desktopVisible, p + 1));

  const visibleSlice = galleryItems.slice(startIdx, startIdx + desktopVisible);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.4rem" }}
        >
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

function PlacementAndTestimonials() {
  const [idx, setIdx] = useState(0);

  const stats = [
    { value: "100%", label: "Placement Assistance", icon: <ShieldCheck size={26} color="#93c5fd" /> },
    { value: "120+", label: "Recruiters", icon: <Users size={26} color="#93c5fd" /> },
    { value: "₹8 LPA", label: "Highest Package", icon: <TrendingUp size={26} color="#93c5fd" /> },
    { value: "₹4 LPA", label: "Average Package", icon: <BadgePercent size={26} color="#93c5fd" /> },
  ];

  const testimonials = [
    {
      text: "The 2-year programme gave me the time to master both kitchen skills and event management. By Year 2, I was already supervising junior students in lab sessions — that confidence got me hired.",
      name: "Arun Kagathkar",
      batch: "Intermediate HM ",
      role: "The Cheesecake factory , Doha",
      photo: "https://alliancemgt.org/Alliance%20Images/Picture14.jpg",
    },
    {
      text: "The event management module in Year 2 was outstanding. I was part of organising an actual banquet for 300+ guests on campus. That hands-on experience was invaluable.",
      name: "Vijayaputra nani",
      batch: "Intermediate HM ",
      role: "Banquet Coordinator, Marriott Hyderabad",
      photo: "https://alliancemgt.org/Alliance%20Images/Picture15.jpg",
    },
    {
      text: "Coming in after my 10th, I wasn't sure what path to take. The Intermediate Diploma gave me clarity, skills, and a placement at a 5-star property — all in 2 years.",
      name: "M. Harish",
      batch: "Intermediate HM Batch",
      role: "F&B Service",
      photo: "https://alliancemgt.org/Alliance%20Images/Picture16.jpg",
    },
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="rounded-xl p-7 shadow-md"
            style={{ background: NAV_BLUE }}
          >
            <h3
              className="font-bold text-white mb-6"
              style={{ fontSize: "1.1rem" }}
            >
              Placement Highlights
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    {icon}
                  </div>
                  <p
                    className="font-extrabold text-white leading-none"
                    style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-blue-300 leading-snug"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-extrabold leading-none"
                  style={{ color: NAV_BLUE, fontSize: "2.5rem", lineHeight: 1 }}
                >
                  &ldquo;&ldquo;
                </span>
                <h3
                  className="font-bold"
                  style={{ color: NAV_BLUE, fontSize: "1.05rem" }}
                >
                  Student Testimonials
                </h3>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill={GOLD} color={GOLD} />
                ))}
              </div>
              <p
                className="text-gray-600 leading-relaxed mb-5 italic"
                style={{ fontSize: "0.88rem" }}
              >
                "{testimonials[idx].text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[idx].photo}
                  alt={testimonials[idx].name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-blue-100"
                />
                <div>
                  <p
                    className="font-semibold text-gray-800"
                    style={{ fontSize: "0.88rem" }}
                  >
                    {testimonials[idx].name}
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "0.76rem" }}>
                    {testimonials[idx].batch}
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: ICON_BLUE, fontSize: "0.76rem" }}
                  >
                    {testimonials[idx].role}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ background: i === idx ? NAV_BLUE : "#d1d5db" }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)
                  }
                  className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  <ChevronLeft size={13} color="#6b7280" />
                </button>
                <button
                  onClick={() => setIdx((p) => (p + 1) % testimonials.length)}
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

const faqs = [
  {
    q: "What is the eligibility for the Intermediate Diploma in Hotel Management?",
    a: "Candidates who have passed 10th Standard (SSC) or 10+2 in any stream from a recognised board are eligible to apply. No minimum percentage is required.",
  },
  {
    q: "How is the Intermediate Diploma different from the 1-year Diploma?",
    a: "The Intermediate Diploma spans 2 years and 4 semesters, covering advanced topics such as event management, accommodation management, bar operations, hospitality supervision, and cost control — subjects not covered in the 1-year diploma. It prepares students for supervisory roles rather than entry-level positions.",
  },
  {
    q: "Can I upgrade to a BHM degree after this diploma?",
    a: "Yes. Holders of the Intermediate Diploma may be eligible for lateral entry into the second year of the BHM degree programme, subject to university norms and seat availability.",
  },
  {
    q: "Is there an internship included in the programme?",
    a: "Yes. Semester 4 includes a compulsory industry internship at partner hotels, giving students real-world supervisory exposure and a strong placement advantage.",
  },
  {
    q: "What are the career opportunities after the Intermediate Diploma?",
    a: "Graduates can pursue roles such as F&B Supervisor, Banquet Coordinator, Accommodation Executive, Front Office Team Lead, Events Assistant, and Housekeeping Supervisor in 3-star to 5-star properties.",
  },
  {
    q: "What is the fee structure for the Intermediate Diploma?",
    a: "Please download the brochure or contact our admissions office for the latest fee structure, scholarship details, and instalment options available for this programme.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden bg-white transition-all ${open ? "border-blue-200" : "border-gray-100"}`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span
          className="font-medium text-gray-700 pr-4"
          style={{ fontSize: "0.88rem" }}
        >
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
          <p
            className="text-gray-600 pt-3 leading-relaxed"
            style={{ fontSize: "0.86rem" }}
          >
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
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.4rem" }}
        >
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

export default function InterHm() {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <ProgramOverviewAndHighlights />
      <Curriculum />
      <Facilities />
      <Gallery />
      <PlacementAndTestimonials />
      <FAQ />
    </div>
  );
}