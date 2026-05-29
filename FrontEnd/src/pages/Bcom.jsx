import { useState } from "react";
import { Clock, Briefcase, GraduationCap, Users, Download, ChevronDown, ChevronLeft, ChevronRight, Star, Building2, Award, Globe, ShieldCheck, UserCheck, TrendingUp, BadgePercent, BarChart2, BookOpen, Calculator, Landmark, FileText, PieChart, Layers, Handshake, Receipt, Scale, } from "lucide-react";
import { useNavigate } from "react-router-dom";
const NAV_BLUE = "#0F2B5B";
const GOLD = "#F5A623";
const LIGHT_BG = "#F5F7FA";
const ICON_BLUE = "#1B4F9C";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 390 }}>
      <img src="https://alliancemgt.org/Alliance%20Images/bcombg1.jpg" alt="Bachelor of Commerce" className="absolute inset-0 w-full h-full object-cover object-center"/>
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(10,30,66,0.97) 0%,rgba(10,30,66,0.92) 38%,rgba(10,30,66,0.55) 68%,rgba(10,30,66,0.18) 100%)", }} />
      <div className="absolute right-0 bottom-0 h-full hidden lg:block" style={{ width: "40%" }} >
        <img src="https://alliancemgt.org/Alliance%20Images/bcombg.jpg" alt="B.Com Student" className="h-full w-full object-cover object-top" style={{ maskImage: "linear-gradient(to right,transparent 0%,black 28%)", WebkitMaskImage:"linear-gradient(to right,transparent 0%,black 28%)", }}/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] lg:min-h-[410px] py-10 lg:py-0">
          <div className="flex-1 text-white pt-4 lg:pt-0 text-center lg:text-left lg:max-w-[58%]">
            <p className="text-blue-300 mb-3 hidden lg:block" style={{ fontSize: "0.82rem" }} >
              Home &rsaquo; Courses &rsaquo; B.Com
            </p>
            <h1 className="font-extrabold text-white leading-tight mb-1" style={{ fontSize: "clamp(2rem,5.5vw,3.6rem)" }} >
              B.Com
            </h1>
            <p className="text-blue-100 mb-6" style={{ fontSize: "clamp(0.95rem,2.2vw,1.2rem)" }}>
              Bachelor of Commerce
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              {[
                { icon: <Clock size={17} />, label: "Duration", value: "3 Years" },
                { icon: <Briefcase size={17} />, label: "Mode", value: "Full Time" },
                { icon: <GraduationCap size={17} />, label: "Eligibility", value: "10+2 (50%)" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="text-blue-300">{icon}</div>
                  <div>
                    <p className="text-white font-semibold leading-tight" style={{ fontSize: "0.85rem" }} >
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
              <button className="px-7 py-2.5 font-bold rounded transition-all hover:brightness-110 active:scale-95 shadow-lg" onClick={() => navigate("/applynow")} style={{ background: GOLD, color: "#fff", fontSize: "0.9rem" }}>
                Apply Now
              </button>
              <a href="/Brochure.pdf" download="Brochure.pdf">
                <button className="px-6 py-2.5 font-semibold rounded border-2 border-white text-white flex items-center gap-2 transition-all hover:bg-white hover:text-[#0F2B5B] active:scale-95" style={{ fontSize: "0.9rem" }}>
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
    { icon: <Building2 size={24} color={ICON_BLUE} />, label: "Affiliation", value: "Andhra University" },
    { icon: <Calculator size={24} color={ICON_BLUE} />, label: "CA / CMA Gateway", value: "Professional Entry" },
    { icon: <Globe size={24} color={ICON_BLUE} />, label: "Career Scope", value: "Finance & Banking" },
    { icon: <Award size={24} color={ICON_BLUE} />, label: "Industry Exposure", value: "Internships & Live Training", },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-72 flex-shrink-0">
            <h2 className="font-bold mb-3" style={{ color: NAV_BLUE, fontSize: "1.35rem" }} >
              About B.Com
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "0.88rem" }}>
              The Bachelor of Commerce is a 3-year undergraduate programme
              covering accounting, finance, taxation, business law, economics,
              and management. It builds a strong foundation for careers in
              banking, finance, audit, and corporate sectors — while also
              serving as the ideal launchpad for professional qualifications
              such as CA, CMA, CS, and MBA.
            </p>
          </div>
          <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-2" />
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map(({ icon, label, value }) => (
              <div key={label} className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow" style={{ background: LIGHT_BG }}>
                <div className="mb-2 p-2.5 rounded-full bg-blue-50">{icon}</div>
                <p className="font-bold text-gray-800 leading-snug" style={{ fontSize: "0.82rem" }} >
                  {value}
                </p>
                <p className="text-gray-500 mt-0.5" style={{ fontSize: "0.72rem" }} >
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
    ["Programme", "Bachelor of Commerce"],
    ["Duration", "3 Years (6 Semesters)"],
    ["Mode", "Full Time"],
    ["Eligibility", "10+2 (Any Stream) with 50% marks"],
    ["Campus", "Visakhapatnam, Andhra Pradesh"],
  ];
  const highlights = [
    { icon: <Calculator size={28} color={ICON_BLUE} />, label: "Accounting & Audit", sub: "Core Finance Skills" },
    { icon: <Receipt size={28} color={ICON_BLUE} />, label: "Taxation & GST", sub: "Practical Tax Training" },
    { icon: <Landmark size={28} color={ICON_BLUE} />, label: "Banking & Finance", sub: "Industry Readiness" },
    { icon: <Scale size={28} color={ICON_BLUE} />, label: "Business Law", sub: "Legal Foundations" },
    { icon: <BarChart2 size={28} color={ICON_BLUE} />, label: "CA / CMA Gateway", sub: "Professional Pathway" },
    { icon: <ShieldCheck size={28} color={ICON_BLUE} />, label: "100% Placement Assistance", sub: "" },
  ];
  return (
    <section style={{ background: LIGHT_BG }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.2rem" }}>
              Program Overview
            </h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              {overview.map(([key, val], i) => (
                <div key={key} className={`flex gap-4 px-5 py-3.5 ${i !== overview.length - 1 ? "border-b border-gray-100" : ""}`} >
                  <span className="text-gray-500 w-28 flex-shrink-0" style={{ fontSize: "0.86rem" }} >
                    {key}
                  </span>
                  <span className="text-gray-400 flex-shrink-0">:</span>
                  <span className="text-gray-700 font-medium" style={{ fontSize: "0.86rem" }} >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-5" style={{ color: NAV_BLUE, fontSize: "1.2rem" }} >
              Program Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {highlights.map(({ icon, label, sub }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group text-center">
                  <div className="p-2.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {icon}
                  </div>
                  <p className="font-semibold text-gray-700 leading-snug" style={{ fontSize: "0.8rem" }} >
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
      subjects: ["Financial Accounting", "Business Organisation & Management", "Business Economics","Business Mathematics & Statistics",],
    },
    {
      sem: "Semester 2",
      subjects: [ "Advanced Financial Accounting","Business Communication", "Principles of Marketing", "Computer Applications in Commerce", ],
    },
  ],
  "Year 2": [
    {
      sem: "Semester 3",
      subjects: [ "Corporate Accounting","Income Tax Law & Practice", "Business Law (Contract & Sale of Goods Act)","Cost Accounting", ],
    },
    {
      sem: "Semester 4",
      subjects: [ "Auditing & Assurance", "GST & Indirect Taxation", "Banking & Financial Services", "Human Resource Management",],
    },
  ],
  "Year 3": [
    {
      sem: "Semester 5",
      subjects: [ "Financial Management", "Company Law & Secretarial Practice","E-Commerce & Digital Business","Entrepreneurship Development",],
    },
    {
      sem: "Semester 6",
      subjects: ["Investment Management & Security Analysis","International Business & Trade","Project Work & Case Studies", "Viva Voce",],
    },
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
              <button key={yr} onClick={() => setActiveYear(yr)} className="px-6 sm:px-10 py-2 rounded-md font-semibold transition-all" style={{ fontSize: "0.88rem", background: activeYear === yr ? NAV_BLUE : "transparent", color: activeYear === yr ? "#fff" : "#6b7280", }} >
                {yr}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {curriculum[activeYear].map(({ sem, subjects }) => (
            <div key={sem} className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow" style={{ background: LIGHT_BG }}>
              <h3 className="font-bold mb-4" style={{ color: NAV_BLUE, fontSize: "0.97rem" }} >
                {sem}
              </h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-gray-600" style={{ fontSize: "0.87rem" }} >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: ICON_BLUE }}/>
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
    { icon: <Calculator size={30} color={ICON_BLUE} />, label: "Accounting Lab", sub: "Tally & ERP Practice" },
    { icon: <BarChart2 size={30} color={ICON_BLUE} />, label: "Finance Lab", sub: "Market Simulation" },
    { icon: <BookOpen size={30} color={ICON_BLUE} />, label: "Commerce Library", sub: "Reference & Study" },
    { icon: <FileText size={30} color={ICON_BLUE} />, label: "Taxation Studio", sub: "GST & ITR Filing" },
    { icon: <Handshake size={30} color={ICON_BLUE} />, label: "Seminar Hall", sub: "Industry Talks & Events" },
    { icon: <PieChart size={30} color={ICON_BLUE} />, label: "Computer Lab", sub: "Commerce Software" },
  ];
  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.5rem" }} >
          Our Facilities &amp; Resources
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon, label, sub }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2.5 text-center hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group" >
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {icon}
              </div>
              <p className="font-semibold text-gray-700 leading-snug" style={{ fontSize: "0.8rem" }} >
                {label}
              </p>
              <p className="text-gray-400 leading-snug" style={{ fontSize: "0.72rem" }} >
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
  { label: "Programming Lab", img: "https://alliancemgt.org/Alliance%20Images/comp%20lab.jpg" },
  { label: "Networking Lab", img: "https://alliancemgt.org/Alliance%20Images/Networking.jpg" },
  { label: "Student Projects", img: "https://alliancemgt.org/Alliance%20Images/proj.jpg" },
  { label: "Campus Life", img: "https://alliancemgt.org/Alliance%20Images/Img55.jpeg" },
  { label: "Tech Events", img: "https://alliancemgt.org/Alliance%20Images/grp.jpg" },
];

function GalleryCard({ label, img }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-auto snap-start">
      <div className="rounded-xl overflow-hidden bg-gray-100" style={{ height: "220px" }}>
        <img src={img} alt={label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <p className="text-center text-gray-600 mt-2 font-medium" style={{ fontSize: "0.82rem" }}>
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
        <h2 className="font-bold mb-8" style={{ color: NAV_BLUE, fontSize: "1.4rem" }} >
          Gallery
        </h2>
        <div className="relative">
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {galleryItems.map(({ label, img }) => (
              <GalleryCard key={label} label={label} img={img} />
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button onClick={prev} disabled={startIdx === 0} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 flex-shrink-0" >
              <ChevronLeft size={20} color="#374151" />
            </button>
            <div className="flex-1 grid grid-cols-3 gap-5">
              {visibleSlice.map(({ label, img }) => (
                <GalleryCard key={label} label={label} img={img} />
              ))}
            </div>
            <button onClick={next} disabled={startIdx >= galleryItems.length - desktopVisible} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 flex-shrink-0" >
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
    { value: "180+", label: "Recruiters", icon: <Users size={26} color="#93c5fd" /> },
    { value: "₹14 LPA", label: "Highest Package", icon: <TrendingUp size={26} color="#93c5fd" /> },
    { value: "₹4 LPA", label: "Average Package", icon: <BadgePercent size={26} color="#93c5fd" /> },
  ];
  const testimonials = [
    { text: "The B.Com curriculum here gave me a strong grip on taxation and GST from Year 2 itself. By the time I graduated, I had practical experience in Tally and ITR filing — things most freshers learn on the job. I was placed at Deloitte before my final exams.", name: "Kavya Reddy", batch: "B.Com Batch 2023", role: "Tax Associate, Deloitte Hyderabad",photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",},
    {text: "I cleared CA Foundation while studying B.Com here. The faculty was incredibly supportive and the accounting labs made concepts click fast. The dual preparation made me exceptionally well-rounded.",name: "Harish Babu",batch: "B.Com Batch 2022",role: "Article Assistant, KPMG Vizag", photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",},
    {text: "The Investment Management module in Year 3 sparked my interest in equity research. The placement cell connected me with an internship that converted into a full-time offer at a leading NBFC.",name: "Shalini Patro",batch: "B.Com Batch 2023",role: "Junior Analyst, Bajaj Finance Vizag", photo: "https://alliancemgt.org/Alliance%20Images/test.jpg",},
  ];

  return (
    <section style={{ background: LIGHT_BG }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl p-7 shadow-md" style={{ background: NAV_BLUE }}>
            <h3 className="font-bold text-white mb-6" style={{ fontSize: "1.1rem" }}>
              Placement Highlights
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, icon }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2" >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }} >
                    {icon}
                  </div>
                  <p className="font-extrabold text-white leading-none" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }} >
                    {value}
                  </p>
                  <p className="text-blue-300 leading-snug"  style={{ fontSize: "0.78rem" }} >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-extrabold leading-none" style={{ color: NAV_BLUE, fontSize: "2.5rem", lineHeight: 1 }} >
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
    q: "What is the eligibility for B.Com?",
    a: "Candidates must have completed 10+2 in any stream — Commerce, Science, or Arts — with a minimum of 50% marks from a recognised board. Students from a Commerce background with Accountancy and Mathematics will find the transition easiest, though it is not mandatory.",
  },
  {
    q: "Can I pursue CA or CMA alongside B.Com?",
    a: "Yes. B.Com is widely recognised as the ideal companion degree for CA (Chartered Accountancy) and CMA (Cost & Management Accountancy) preparation. The overlapping syllabus in accounting, taxation, law, and finance gives you a significant advantage in clearing these professional exams.",
  },
  {
    q: "What software and tools will I learn during B.Com?",
    a: "Students get hands-on training in Tally Prime (accounting & GST), MS Excel for financial modelling, and exposure to ERP systems used in corporate finance. E-Commerce and Digital Business in Year 3 also covers online business tools and platforms.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, the college provides separate hostel facilities for boys and girls with all basic amenities including food, Wi-Fi, and 24-hour security.",
  },
  {
    q: "What higher education options are available after B.Com?",
    a: "After B.Com, you can pursue M.Com, MBA (Finance / Marketing), CA, CMA, CS, CFA, ACCA, or LLB. The degree opens pathways into corporate finance, banking, investment, audit, taxation, and management consulting.",
  },
  {
    q: "What are the career opportunities after B.Com?",
    a: "B.Com graduates can work as Accountants, Tax Consultants, Financial Analysts, Auditors, Banking Officers, Investment Advisors, Credit Analysts, GST Practitioners, and Finance Executives in sectors ranging from Big 4 audit firms to banks, NBFCs, and corporate finance departments.",
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

export default function Bcom() {
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