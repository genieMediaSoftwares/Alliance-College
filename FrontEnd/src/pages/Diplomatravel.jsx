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
  TrendingUp,
  BadgePercent,
  MapPin,
  Plane,
  Hotel,
  Compass,
  Camera,
  FileText,
  Landmark,
  Handshake,
  Map,
  Cpu,
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
        src="https://alliancemgt.org/Alliance%20Images/travbg1.jpg"
        alt="Travel and Tourism Management"
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
          src="https://alliancemgt.org/Alliance%20Images/travbg.jpg"
          alt="Travel Tourism Student"
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
              Home &rsaquo; Courses &rsaquo; Diploma in Travel &amp; Tourism
            </p>
           
            <h1
              className="font-extrabold text-white leading-tight mb-1"
              style={{ fontSize: "clamp(2rem,5.5vw,3.6rem)" }}
            >
              Diploma — Travel &amp; Tourism
            </h1>
            <p
              className="text-blue-100 mb-6"
              style={{ fontSize: "clamp(0.95rem,2.2vw,1.2rem)" }}
            >
              Diploma in Travel &amp; Tourism Management
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              {[
                { icon: <Clock size={17} />, label: "Duration", value: "1 Year" },
                { icon: <Briefcase size={17} />, label: "Mode", value: "Full Time" },
                { icon: <GraduationCap size={17} />, label: "Eligibility", value: "10+2 Pass" },
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

    { icon: <Plane size={24} color={ICON_BLUE} />, label: "Industry Links", value: "Airlines & Travel Cos." },
    { icon: <Globe size={24} color={ICON_BLUE} />, label: "Global Scope", value: "International Tourism" },
    { icon: <Award size={24} color={ICON_BLUE} />, label: "Industry Exposure", value: "Internships & Live Training", },
    { icon: <Plane size={24} color={ICON_BLUE} />, label: "Tourism Training", value: "Airline & Travel Operations", }
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
              About the Diploma
            </h2>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "0.88rem" }}
            >
              The Diploma in Travel &amp; Tourism Management is a 1-year
              job-ready programme covering travel agency operations, airline
              ticketing, tour planning, destination management, and hospitality
              fundamentals. Designed for students who want to build a fast-track
              career in one of the world's fastest-growing industries — travel,
              tourism, and aviation — with real-world exposure from day one.
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
    ["Programme", "Diploma in Travel & Tourism Management"],
    ["Duration", "1 Year (2 Semesters)"],
    ["Mode", "Full Time"],
    ["Eligibility", "10+2 Pass (Any Stream)"],
    ["Campus", "Visakhapatnam, Andhra Pradesh"],
  ];
  const highlights = [
    { icon: <Plane size={28} color={ICON_BLUE} />, label: "Airline Ticketing", sub: "GDS & Amadeus Training" },
    { icon: <Map size={28} color={ICON_BLUE} />, label: "Tour Planning", sub: "Itinerary & Packages" },
    { icon: <Compass size={28} color={ICON_BLUE} />, label: "Destination Management", sub: "Domestic & International" },
    { icon: <UserCheck size={28} color={ICON_BLUE} />, label: "Grooming & Etiquette", sub: "Industry Readiness" },
    { icon: <Globe size={28} color={ICON_BLUE} />, label: "Global Tourism Trends", sub: "Emerging Markets" },
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
                  className={`flex gap-4 px-5 py-3.5 ${i !== overview.length - 1 ? "border-b border-gray-100" : ""
                    }`}
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
        "Introduction to Travel & Tourism Industry",
        "Airline Ticketing & GDS (Amadeus / Galileo)",
        "Geography of Tourism — Domestic Destinations",
        "Communication Skills & Personality Development",
      ],
    },
    {
      sem: "Semester 2",
      subjects: [
        "Tour Package Design & Itinerary Planning",
        "International Tourism & Destination Management",
        "Travel Agency & Tour Operations Management",
        "Industry Internship & Field Exposure",
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
    { icon: <Plane size={30} color={ICON_BLUE} />, label: "GDS / Ticketing Lab", sub: "Amadeus & Galileo" },
    { icon: <Map size={30} color={ICON_BLUE} />, label: "Tourism Resource Centre", sub: "Maps & Destination Data" },
    { icon: <Camera size={30} color={ICON_BLUE} />, label: "Destination Media Lab", sub: "Virtual Tour Tools" },
    { icon: <Handshake size={30} color={ICON_BLUE} />, label: "Seminar & Guest Hall", sub: "Industry Expert Talks" },
    { icon: <FileText size={30} color={ICON_BLUE} />, label: "Itinerary Planning Studio", sub: "Package Design Practice" },
    { icon: <Cpu size={30} color={ICON_BLUE} />, label: "Computer Lab", sub: "Tourism & Travel Software" },
  ];
  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center font-bold mb-8"
          style={{ color: NAV_BLUE, fontSize: "1.5rem" }}
        >
          Our Facilities &amp; Resources
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
  { label: "Destination Training", img: "https://alliancemgt.org/Alliance%20Images/tr1.jpg" },
  { label: "GDS Ticketing Lab", img: "https://alliancemgt.org/Alliance%20Images/tr2.jpg" },
  { label: "Tour Planning Session", img: "https://alliancemgt.org/Alliance%20Images/tr3.jpg" },
  { label: "Industry Field Visit", img: "https://alliancemgt.org/Alliance%20Images/tr4.jpg" },
  { label: "Campus Events", img: "https://alliancemgt.org/Alliance%20Images/tr5.jpg" },
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
    { value: "80+", label: "Recruiters", icon: <Users size={26} color="#93c5fd" /> },
    { value: "₹7 LPA", label: "Highest Package", icon: <TrendingUp size={26} color="#93c5fd" /> },
    { value: "₹3 LPA", label: "Average Package", icon: <BadgePercent size={26} color="#93c5fd" /> },
  ];

  const testimonials = [
    {
      text: "The GDS and Amadeus ticketing training was incredibly practical. Within a month of joining my travel agency job, I was independently handling international bookings. The diploma prepared me better than I expected.",
      name: "Meenakshi Rao",
      batch: "Travel & Tourism Batch 2023",
      role: "Travel Consultant, MakeMyTrip Vizag",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
    },
    {
      text: "I always wanted to work in aviation. The diploma gave me the industry knowledge and grooming to crack the IndiGo cabin crew selection. The personality development sessions were a real differentiator.",
      name: "Kiran Varma",
      batch: "Travel & Tourism Batch 2023",
      role: "Cabin Crew, IndiGo Airlines",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
    },
    {
      text: "The tour package design module helped me start my own boutique travel company within six months of graduating. The curriculum was practical, industry-relevant, and inspiring.",
      name: "Divya Nair",
      batch: "Travel & Tourism Batch 2022",
      role: "Founder, ExploreAP Travel Co.",
      photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",
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
                    setIdx(
                      (p) => (p - 1 + testimonials.length) % testimonials.length
                    )
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
    q: "What is the eligibility for the Diploma in Travel & Tourism?",
    a: "Candidates who have completed 10+2 in any stream from a recognised board are eligible to apply. There is no minimum percentage requirement, making this an accessible programme for all students passionate about travel and tourism.",
  },
  {
    q: "What is GDS and will I get hands-on training?",
    a: "GDS (Global Distribution System) is the software platform used by travel professionals worldwide to book flights, hotels, and holiday packages. Amadeus and Galileo are the most widely used GDS platforms. Yes, our dedicated GDS lab gives students hands-on ticketing and reservation practice from Semester 1.",
  },
  {
    q: "What types of jobs can I get after this diploma?",
    a: "Graduates can pursue roles such as Travel Consultant, Tour Coordinator, Airline Ground Staff, Airport Customer Service Executive, Ticketing & Reservation Agent, Destination Management Executive, and Travel Agency Manager. The tourism and aviation sectors have abundant entry-level opportunities.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, the college provides separate hostel facilities for boys and girls with all basic amenities including food, Wi-Fi, and 24-hour security.",
  },
  {
    q: "Does the programme include an internship or field visit?",
    a: "Yes. Semester 2 includes a compulsory industry internship with travel agencies, tour operators, or airline partners. Students also undertake field visits to airports, travel expos, and tourism destinations as part of the curriculum.",
  },
  {
    q: "Can I pursue higher education after this diploma?",
    a: "Yes. After completing the Diploma in Travel & Tourism, you can upgrade to a B.Sc. or B.A. in Travel & Tourism Management, MBA in Tourism, or pursue professional certifications from IATA (International Air Transport Association) for a global career in aviation and travel.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden bg-white transition-all ${open ? "border-blue-200" : "border-gray-100"
        }`}
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
            {faqs.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            {left.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            {right.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Diplomatravel() {
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