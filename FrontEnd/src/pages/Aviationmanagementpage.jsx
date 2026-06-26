import { useState } from "react";
import {
  Clock3,
  Users2,
  GraduationCap,
  Users,
  Download,
  Landmark,
  ShieldCheck,
  Plane,
  Globe2,
  PlaneTakeoff,
  Building2,
  UserCog,
  Truck,
  Briefcase,
  UserCheck,
  Coffee,
  Ticket,
  MessageSquare,
  Monitor,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Award,
  Quote,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NAV_BLUE = "#0B2154";
const GOLD = "#F5A623";
const ICON_BLUE = "#1B4F9C";

/* ---------------------------------------------------------
   COLOR PALETTE (derived from the reference design)
   Navy:        #0B2154 (primary brand / header backgrounds)
   Navy Dark:   #081A40 (footer / deep panels)
   Gold:        #F5A623 (CTA / accent)
   Gold Dark:   #E0941A (hover)
   Surface:     #F4F6FB (section backgrounds)
   Border:      #E3E7F0
   Text Muted:  #5C6478
--------------------------------------------------------- */

const stats = [
  { icon: Clock3, label: "Duration", value: "3 Years" },
  { icon: Briefcase, label: "Mode", value: "Full Time" },
  { icon: GraduationCap, label: "Eligibility", value: "Intermediate Pass" },
];

const aboutCards = [
  { icon: Landmark, title: "Affiliation", subtitle: "Andhra University" },
  { icon: ShieldCheck, title: "AICTE", subtitle: "Approved" },
  { icon: Plane, title: "Airport", subtitle: "Industry Exposure" },
  { icon: Globe2, title: "Global Career", subtitle: "Opportunities" },
];

const overview = [
  { label: "Duration", value: "3 Years" },
  { label: "Mode", value: "Full Time" },
  { label: "Eligibility", value: "Intermediate Passed (Any Stream)" },
  { label: "Intake", value: "60 Students" },
  { label: "Campus", value: "Visakhapatnam, Andhra Pradesh" },
];

const highlights = [
  { icon: PlaneTakeoff, title: "Aviation Industry Training" },
  { icon: Building2, title: "Airport Internships" },
  { icon: UserCog, title: "Cabin Services & Hospitality" },
  { icon: Truck, title: "Ground Handling & Operations" },
  { icon: Briefcase, title: "100% Placement Assistance" },
  { icon: UserCheck, title: "Personality Development" },
];

const curriculum = {
  "Year 1": [
    {
      sem: "Semester 1",
      subjects: [
        "Introduction to Hospitality Industry",
        "Principles of Hospitality Management",
        "Front Office Operations",
        "Food and Beverage Service",
        "Business Communication for Service Professionals",
        "Ethics & Value Education",
        "Vocational Practical-I",
      ],
    },
    {
      sem: "Semester 2",
      subjects: [
        "Introduction to Aviation and Airline Services",
        "Introduction of Airport Ground Services",
        "Passenger Handling and Ground Services",
        "Customer Care and Interpersonal Skills",
        "Environmental Studies",
        "Industry Orientation Project-I",
        "Vocational Practical-II",
      ],
    },
  ],
  "Year 2": [
    {
      sem: "Semester 3",
      subjects: [
        "Baggage, Ramp, Facilitation & Airline Coordination",
        "Reservations and Ticketing Systems",
        "Basics of Logistics and Air Cargo Operations",
        "Airport Customer Service, Facilitation and Passenger Experience",
        "First Aid and Workplace Safety",
        "Airport Safety, Security & Emergency Handling",
        "Vocational Practical-III",
      ],
    },
    {
      sem: "Semester 4",
      subjects: [
        "Airline Cabin Services and In-Flight Procedure",
        "Cabin Crew Safety & Emergency Procedures",
        "Service Operations in Airlines and Airport",
        "Aviation Law and Regulatory Framework",
        "Professional Grooming, Image and Etiquette for Service Career",
        "Industry Orientation Project II",
        "Vocational Practical-IV",
      ],
    },
  ],
  "Year 3": [
    {
      sem: "Semester 5",
      subjects: [
        "Organisational Behaviour in Hospitality and Aviation",
        "Advanced Front Office and Guest Relations",
        "Service Quality, Complaint Handling & CRM",
        "Financial Management in Hospitality and Aviations",
        "Human Resource Management in Hospitality and Aviation",
        "Airport Lounge and VIP Services Management",
        "Vocational Practical-V",
      ],
    },
    {
      sem: "Semester 6",
      subjects: [
        "Strategic Management in Hospitality and Aviation",
        "Service Quality and Customer Relationship Management",
        "Entrepreneurship in Hospitality and Aviation",
        "Research Project",
        "Industrial Training / Internship",
        "Vocational Practical-VI",
      ],
    },
  ],
};

function Curriculum() {
  const [activeYear, setActiveYear] = useState("Year 1");
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
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
              style={{ background: "#F4F6FB" }}
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

const facilities = [
  { icon: Coffee, label: "Airport Operations Lab" },
  { icon: Users2, label: "Cabin Crew Training Lab" },
  { icon: Truck, label: "Ground Handling Training Lab" },
  { icon: Ticket, label: "Reservation & Ticketing Lab (GDS)" },
  { icon: MessageSquare, label: "Language Lab" },
  { icon: Monitor, label: "Smart Classrooms & AV Rooms" },
  { icon: BookOpen, label: "Library & E-Resources" },
];

const gallery = [
  { label: "Airport Operations", img: "https://alliancemgt.org/Alliance%20Images/td5.jpg" },
  { label: "Cabin Crew Training", img: "https://alliancemgt.org/Alliance%20Images/td1.jpg" },
  { label: "Airport Check-in Lab", img: "https://alliancemgt.org/Alliance%20Images/td4.jpg" },
  { label: "Classroom Training", img: "https://alliancemgt.org/Alliance%20Images/td2.jpg" },
  { label: "Ground Handling Lab", img: "https://alliancemgt.org/Alliance%20Images/td7.jpg" },
];

const placementStats = [
  { icon: Award, value: "100%", label: "Placement Assistance" },
  { icon: Users2, value: "150+", label: "Recruiters" },
  { icon: Briefcase, value: "₹10 LPA", label: "Highest Package" },
  { icon: Plane, value: "4 LPA", label: "Average Package" },
];

const testimonials = [
  {
    text: "The aviation program at Alliance College gave me the knowledge, confidence and practical exposure to start my career in the aviation industry.",
    name: "Neha Reddy",
    batch: "B.Sc Aviation Management, 2023",
    role: "Guest Service Executive, Air India",
    photo: "https://alliancemgt.org/Alliance%20Images/td8.jpg",
  },
  {
    text: "The cabin crew training and grooming sessions were extremely practical. I felt fully prepared for my airline interview and selection process.",
    name: "Sahithi Kumar",
    batch: "B.Sc Aviation Management, 2023",
    role: "Cabin Crew, IndiGo Airlines",
    photo: "https://alliancemgt.org/Alliance%20Images/td8.jpg",
  },
  {
    text: "From ground handling to airport operations, the course covered everything with real industry exposure. The internship helped me get placed quickly.",
    name: "Rohit Varma",
    batch: "B.Sc Aviation Management, 2022",
    role: "Ground Operations Executive, GMR Airports",
    photo: "https://alliancemgt.org/Alliance%20Images/td8.jpg",
  },
];

const faqs = [
  {
    q: "What is Bachelor of Aviation Management?",
    a: "It is a 3-year industry-integrated degree program covering Airport Operations, Cabin Services, Ground Handling, Logistics, Customer Experience and Hospitality, preparing students for careers across the aviation and airline industry.",
  },
  {
    q: "What are the career options?",
    a: "Graduates can pursue careers as Airport Ground Staff, Cabin Crew, Customer Service Executives, Ground Handling Officers, Cargo & Logistics Coordinators, and other airline/airport operations roles.",
  },
  {
    q: "Is internship included in the course?",
    a: "Yes, the program includes airport internships and industrial training as part of the curriculum to provide real-world aviation industry exposure.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, hostel facilities are available for both boys and girls on a request basis. Please contact the admissions office for details.",
  },
];

function SectionHeading({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <span className="h-px w-10 bg-[#F5A623] hidden sm:block" />
      <Plane className="w-4 h-4 text-[#F5A623] rotate-90" />
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2154] text-center">
        {children}
      </h2>
      <Plane className="w-4 h-4 text-[#F5A623] -rotate-90" />
      <span className="h-px w-10 bg-[#F5A623] hidden sm:block" />
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 390 }}>
      <img
        src="https://alliancemgt.org/Alliance%20Images/td6.jpg"
        alt="Aviation Management"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(11,33,84,0.97) 0%,rgba(11,33,84,0.92) 38%,rgba(11,33,84,0.55) 68%,rgba(11,33,84,0.18) 100%)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-full hidden lg:block"
        style={{ width: "40%" }}
      >
        <img
          src="https://alliancemgt.org/Alliance%20Images/td3.jpg"
          alt="Aviation Management Student"
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
              Home &rsaquo; Courses &rsaquo; Aviation Management
            </p>

            <h1
              className="font-extrabold text-white leading-tight mb-1"
              style={{ fontSize: "clamp(2rem,5.5vw,3.6rem)" }}
            >
              Bachelor of <span style={{ color: GOLD }}>Aviation Management</span>
            </h1>
            <p
              className="text-blue-100 mb-6"
              style={{ fontSize: "clamp(0.95rem,2.2vw,1.2rem)" }}
            >
              Build your career in the Aviation, Airport and Airline Industry.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="text-blue-300">
                    <Icon size={17} />
                  </div>
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
                  className="px-6 py-2.5 font-semibold rounded border-2 border-white text-white flex items-center gap-2 transition-all hover:bg-white hover:text-[#0B2154] active:scale-95"
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

export default function AviationManagementPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const visibleCount = 5;

  const scrollGallery = (dir) => {
    setGalleryIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return 0;
      if (next > gallery.length - 1) return gallery.length - 1;
      return next;
    });
  };

  return (
    <div className="font-sans text-[#1C2333] bg-white">
      <Hero />
      {/* ================= ABOUT ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2154] mb-5">
              About Bachelor of <br className="hidden sm:block" />
              Aviation Management
            </h2>
            <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed mb-4">
              The Bachelor of Aviation Management prepares students for
              careers in Airports, Airlines, Ground Handling, Cargo, Cabin
              Services, Customer Experience, Airport Hospitality and Aviation
              Operations.
            </p>
            <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed">
              The curriculum combines practical aviation training,
              professional grooming, airport internships and real-world
              industry exposure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aboutCards.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="border border-[#E3E7F0] rounded-lg p-5 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow"
              >
                <Icon className="w-7 h-7 text-[#0B2154]" />
                <span className="font-semibold text-[#0B2154] text-sm">
                  {title}
                </span>
                <span className="text-xs text-[#5C6478]">{subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW + HIGHLIGHTS ================= */}
      <section className="bg-[#F4F6FB] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1fr_2fr] gap-10">
          {/* Program Overview */}
          <div>
            <h3 className="text-xl font-bold text-[#0B2154] mb-5">
              Program Overview
            </h3>
            <div className="bg-white rounded-lg border border-[#E3E7F0] divide-y divide-[#E3E7F0]">
              {overview.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between gap-3 px-4 py-3 text-sm"
                >
                  <span className="text-[#0B2154] font-medium shrink-0">
                    {item.label}
                  </span>
                  <span className="text-[#5C6478] text-right">
                    : {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Program Highlights */}
          <div>
            <h3 className="text-xl font-bold text-[#0B2154] mb-5">
              Program Highlights
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="bg-white border border-[#E3E7F0] rounded-lg p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-7 h-7 text-[#0B2154]" />
                  <span className="text-xs sm:text-sm font-medium text-[#0B2154]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Curriculum />

      {/* ================= FACILITIES ================= */}
      <section className="bg-[#F4F6FB] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeading>Our Facilities & Training</SectionHeading>
          <div className="bg-white border border-[#E3E7F0] rounded-lg p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {facilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon className="w-7 h-7 text-[#0B2154]" />
                <span className="text-xs font-medium text-[#0B2154] leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B2154] mb-6">
            Gallery
          </h3>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
              {gallery.map((item, idx) => (
                <div
                  key={item.label}
                  className="snap-start shrink-0 w-[78%] sm:w-[45%] lg:w-[19%]"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-40 sm:h-44 object-cover rounded-md"
                  />
                  <p className="text-xs sm:text-sm text-[#0B2154] font-medium mt-2 text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollGallery(-1)}
              className="hidden sm:flex absolute -left-4 top-1/3 -translate-y-1/2 bg-white border border-[#E3E7F0] shadow rounded-full p-2 hover:bg-[#F4F6FB]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-[#0B2154]" />
            </button>
            <button
              onClick={() => scrollGallery(1)}
              className="hidden sm:flex absolute -right-4 top-1/3 -translate-y-1/2 bg-white border border-[#E3E7F0] shadow rounded-full p-2 hover:bg-[#F4F6FB]"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-[#0B2154]" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PLACEMENT + TESTIMONIAL + FAQ ================= */}
      <section className="bg-[#F4F6FB] pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-3 gap-6">
          {/* Placement Highlights */}
          <div className="bg-[#0B2154] rounded-lg p-6 sm:p-8 text-white">
            <h4 className="font-semibold text-base mb-6">
              Placement Highlights
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {placementStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <Icon className="w-6 h-6 text-[#F5A623]" />
                  <span className="text-xl font-bold">{value}</span>
                  <span className="text-xs text-blue-200/80 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#E3E7F0] flex flex-col">
            <h4 className="font-semibold text-base text-[#0B2154] mb-5">
              Student Testimonials
            </h4>
            <Quote className="w-6 h-6 text-[#F5A623] mb-3" />
            <p className="text-sm text-[#5C6478] leading-relaxed flex-1">
              "{testimonials[testimonialIdx].text}"
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={testimonials[testimonialIdx].photo}
                alt={testimonials[testimonialIdx].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#0B2154]">
                  {testimonials[testimonialIdx].name}
                </p>
                <p className="text-xs text-[#5C6478]">
                  {testimonials[testimonialIdx].batch}
                </p>
                <p className="text-xs text-[#5C6478]">
                  {testimonials[testimonialIdx].role}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, d) => (
                  <button
                    key={d}
                    onClick={() => setTestimonialIdx(d)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      d === testimonialIdx ? "bg-[#F5A623]" : "bg-[#D9DEE8]"
                    }`}
                    aria-label={`Testimonial ${d + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setTestimonialIdx(
                      (p) => (p - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="p-1.5 rounded-full border border-[#E3E7F0] hover:bg-[#F4F6FB]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#0B2154]" />
                </button>
                <button
                  onClick={() =>
                    setTestimonialIdx((p) => (p + 1) % testimonials.length)
                  }
                  className="p-1.5 rounded-full border border-[#E3E7F0] hover:bg-[#F4F6FB]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B2154]" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#E3E7F0]">
            <h4 className="font-semibold text-base text-[#0B2154] mb-4">
              Frequently Asked Questions
            </h4>
            <div className="divide-y divide-[#E3E7F0]">
              {faqs.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="py-3">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-3 text-left"
                    >
                      <span className="text-sm font-medium text-[#0B2154]">
                        {f.q}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#F5A623] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#F5A623] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-[#5C6478] mt-2 leading-relaxed">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}