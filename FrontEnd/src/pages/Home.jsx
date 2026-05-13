import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdSchool, MdPeople, MdTrendingUp, MdEmojiEvents, MdWork,
  MdMenuBook, MdHotel, MdDescription, MdMonitor, MdStar,
  MdCheckCircle, MdArrowForward, MdDownload, MdChevronLeft,
  MdChevronRight, MdExpandMore, MdHome, MdLocationOn,
  MdPhone, MdEmail, MdAccessTime, MdVisibility,
  MdMyLocation, MdMenu, MdClose
} from "react-icons/md";
import HeroSection from "./HeroSection";

const GraduationCap = ({ className }) => <MdSchool className={className} />;
const Users = ({ className }) => <MdPeople className={className} />;
const TrendingUp = ({ className }) => <MdTrendingUp className={className} />;
const Award = ({ className }) => <MdEmojiEvents className={className} />;
const Briefcase = ({ className }) => <MdWork className={className} />;
const BookOpen = ({ className }) => <MdMenuBook className={className} />;
const HotelIcon = ({ className }) => <MdHotel className={className} />;
const FileText = ({ className }) => <MdDescription className={className} />;
const Monitor = ({ className }) => <MdMonitor className={className} />;
const Star = ({ className }) => <MdStar className={className} />;
const CheckCircle = ({ className }) => <MdCheckCircle className={className} />;
const ArrowRight = ({ className }) => <MdArrowForward className={className} />;
const Download = ({ className }) => <MdDownload className={className} />;
const ChevronLeft = ({ className }) => <MdChevronLeft className={className} />;
const ChevronRight = ({ className }) => <MdChevronRight className={className} />;
const ChevronDown = ({ className }) => <MdExpandMore className={className} />;
const HomeIcon = ({ className }) => <MdHome className={className} />;
const ChevronRightIcon = ({ className }) => <MdChevronRight className={className} />;
const MapPinIcon = ({ className }) => <MdLocationOn className={className} />;
const PhoneIcon = ({ className }) => <MdPhone className={className} />;
const MailIcon = ({ className }) => <MdEmail className={className} />;
const ClockIcon = ({ className }) => <MdAccessTime className={className} />;
const EyeIcon = ({ className }) => <MdVisibility className={className} />;
const TargetIcon = ({ className }) => <MdMyLocation className={className} />;
const StarIcon = ({ className }) => <MdStar className={className} />;
const MenuIcon = ({ className }) => <MdMenu className={className} />;
const XIcon = ({ className }) => <MdClose className={className} />;
const IMAGES = {
  hero: "https://www.alliancemgt.org/img/slider/6.jpg",
  campus: "https://www.alliancemgt.org/img/Image01.jpg",
  foodLab: "https://alliancedegreecollege.com/assets/images/foodproductionlab.jpg",
  bakeryLab: "https://alliancedegreecollege.com/assets/images/g51.jpeg",
  frontOffice: "https://alliancedegreecollege.com/assets/images/facility3.jpg",
  housekeeping: "https://alliancedegreecollege.com/assets/images/facility4.jpg",
  classroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  restaurant: "https://alliancedegreecollege.com/assets/images/f&bservicelab.jpg",
  faculty1: "https://alliancedegreecollege.com/assets/images/faculty/f1.jpg",
  faculty2: "https://alliancedegreecollege.com/assets/images/faculty/f2.jpg",
  faculty3: "https://alliancedegreecollege.com/assets/images/faculty/f3.jpeg",
  faculty4: "https://alliancedegreecollege.com/assets/images/faculty/f4.jpg",
  testi1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  testi2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  testi3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  gallery1: "https://alliancedegreecollege.com/assets/images/gallery10.jpg",
  gallery2: "https://alliancedegreecollege.com/assets/images/g11.jpg",
  gallery3: "https://alliancedegreecollege.com/assets/images/g13.jpg",
  gallery4: "https://alliancedegreecollege.com/assets/images/g25.jpg",
  gallery5: "https://alliancedegreecollege.com/assets/images/g42.jpg",
  gallery6: "https://alliancedegreecollege.com/assets/images/g40.jpg",
  gallery7: "https://alliancedegreecollege.com/assets/images/g22.jpg",
  gallery8: "https://alliancedegreecollege.com/assets/images/g45.jpg"
};

const heroStats = [
  { icon: GraduationCap, value: "5000+", label: "Students Trained" },
  { icon: Users, value: "100+", label: "Recruiters" },
  { icon: TrendingUp, value: "20 LPA", label: "Highest Package" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

const courseCards = [
  { icon: GraduationCap, title: "MBA", subtitle: "Master of Business Administration", duration: "2 Years", type: "Full Time", iconBg: "bg-blue-100", iconColor: "text-blue-600", path: "/courses/mba", },
  { icon: Users, title: "BBA", subtitle: "Bachelor of Business Administration", duration: "3 Years", type: "Full Time", iconBg: "bg-blue-100", iconColor: "text-blue-500", path: "/courses/bba", },
  { icon: HotelIcon, title: "Hotel Management", subtitle: "B.Sc in Hotel & Hospitality Management", duration: "3 Years", type: "Full Time", iconBg: "bg-blue-100", iconColor: "text-blue-600", path: "/courses/hotel-management", },
  { icon: FileText, title: "Diploma Courses", subtitle: "Multiple Diploma Programs", duration: "1-2 Years", type: "Full Time", iconBg: "bg-orange-100", iconColor: "text-orange-500", path: "/courses/diploma", },
];

const whyFeatures = [
  { icon: Users, label: "Industry Expert\nFaculty" },
  { icon: Star, label: "Practical\nTraining" },
  { icon: HotelIcon, label: "Internship in\n5-Star Hotels" },
  { icon: CheckCircle, label: "Soft Skills\nDevelopment" },
  { icon: Monitor, label: "Digital\nLearning" },
  { icon: Briefcase, label: "100% Placement\nSupport" },
];

const journeySteps = [
  { year: "1st Year", title: "Learn & Build Foundation", desc: "Theoretical knowledge with practical training", step: 1, icon: BookOpen },
  { year: "2nd Year", title: "Internship & Exposure", desc: "Hands-on experience in top hotels & companies", step: 2, icon: Users },
  { year: "3rd Year", title: "Placement & Career", desc: "100% placement assistance for bright future", step: 3, icon: GraduationCap },
];

const labs = [
  { id: 1, title: "Food Production Lab", desc: "Modern kitchen with advanced equipment", image: IMAGES.foodLab },
  { id: 2, title: "Bakery & Confectionery Lab", desc: "Learn baking & confectionery skills", image: IMAGES.bakeryLab },
  { id: 3, title: "Front Office Lab", desc: "Real-time front office training", image: IMAGES.frontOffice },
  { id: 4, title: "Housekeeping Lab", desc: "Practical housekeeping training", image: IMAGES.housekeeping },
  { id: 5, title: "Smart Classrooms", desc: "Digital classrooms with latest technology", image: IMAGES.classroom },
  { id: 6, title: "Restaurant Lab", desc: "Fine dining experience & training", image: IMAGES.restaurant },
];

const facultyMembers = [
  { name: "Dr. Kolla Satish Kumar", role: "Secretary & Correspondentr", qual: "", image: IMAGES.faculty1 },
  { name: "Mr. KARTIKESWAR PANDA", role: "Academic Director", qual: "", image: IMAGES.faculty2 },
  { name: "B SRINIVASA RAO", role: "Principal", qual: "", image: IMAGES.faculty3 },
  { name: "M Jaya Sree", role: "Vice Principal (Business Management)", qual: "", image: IMAGES.faculty4 },
];

const placerCompanies = [
  {
    label: "Accor",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/accor.png",
    style: "font-bold text-xl tracking-[3px] text-gray-800",
    serif: true,
  },
  {
    label: "The Park Hotel",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/park.png",
    style: "font-bold text-base tracking-widest text-[#c8a050]",
  },
  {
    label: "Grand Mercure",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/mercure.png",
    style: "font-bold text-base tracking-[2px] text-gray-800",
  },
  {
    label: "Radisson",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/radi.png",
    style: "font-bold text-sm italic text-[#cc0000]",
  },
  {
    label: "NOVOTEL",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/novo.png",
    style: "font-bold text-xs tracking-widest text-[#0055a5]",
  },
  {
    label: "Mariot",
    image:
      "https://alliancedegreecollege.com/assets/images/placement/mariot.png",
    style: "font-bold text-xs text-[#003580]",
  },
];

const testimonials = [
  { name: "Arjun Varma", role: "Front Office Executive, Taj Hotels", image: IMAGES.testi1, quote: "Alliance Degree College provided me with the right skills and confidence. Today, I'm working with Taj Hotels." },
  { name: "Priya Sharma", role: "Senior Chef, ITC Hotels", image: IMAGES.testi2, quote: "The culinary labs and industry exposure at Alliance gave me everything I needed to land my dream role." },
  { name: "Karthik Reddy", role: "Housekeeping Manager, Hyatt", image: IMAGES.testi3, quote: "Practical training and placement support at Alliance is unmatched. I got placed before even graduating!" },
];

const placementStats = [
  { label: "Highest Package", value: "20 LPA" },
  { label: "Average Package", value: "4.5 LPA" },
  { label: "Top Recruiters", value: "100+" },
  { label: "Placement Rate", value: "100%" },
];

const admissionCourses = [
  "Select Course", "MBA", "BBA", "B.Sc Hotel Management",
  "Diploma in Culinary Arts", "Diploma in Front Office", "Diploma in Housekeeping",
];

const vmv = [
  { icon: EyeIcon, title: "Vision", text: "To be a leading institution in hospitality & business education" },
  { icon: TargetIcon, title: "Mission", text: "To provide quality education with 100% placement assistance" },
  { icon: StarIcon, title: "Values", text: "Excellence, Integrity, Innovation & Commitment" },
];

const contactDetails = [
  { icon: MapPinIcon, label: "Address", value: "D.No. 1-51-20, New Resapuvanipalem,\nVisakhapatnam – 530013, A.P., India", link: "https://www.google.com/maps?q=Alliance+Degree+College+Visakhapatnam", type: "link", },
  { icon: PhoneIcon, label: "Phone", value: "0891-2951555, 94900 89077", link: "tel:08912951555", type: "phone", },
  { icon: MailIcon, label: "Email", value: "info@alliancedegreecollege.com", link: "mailto:info@alliancedegreecollege.com", type: "email", },
  { icon: ClockIcon, label: "Working Hours", value: "Mon - Sat: 9:00 AM – 6:00 PM", type: "text", },
];

const SectionHeader = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-10 sm:mb-12">
    <h2 className={`text-[1.85rem] sm:text-[2.25rem] font-extrabold leading-tight ${light ? "text-white" : "text-[#0D1F3C]"}`}>{title}</h2>
    <p className={`mt-2 text-sm sm:text-base ${light ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
  </div>
);

const TrustBadge = ({ icon: Icon, label, sub }) => (
  <div className="flex items-center gap-2">
    <Icon className="w-8 h-8 text-[#0D1F3C] flex-shrink-0" />
    <div>
      <p className="text-[11px] text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800 leading-tight">{sub}</p>
    </div>
  </div>
);

export default function Home() {
  const navigate = useNavigate();

  const [testiIdx, setTestiIdx] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  const prevTesti = () => setTestiIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const nextTesti = () => setTestiIdx(i => (i + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(nextTesti, 5000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", phone: "", course: "" }); }, 3000);
  };

  const testi = testimonials[testiIdx];

  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — POPULAR COURSES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="Our Popular Courses"
            subtitle="Choose from industry-focused programs designed for your success"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {courseCards.map((c, i) => (
              <div
                key={i}
                onClick={() => navigate(c.path)}
                className="h-full flex flex-col justify-between border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 group bg-white"
              >
                {/* Top */}
                <div className="flex flex-col gap-3">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${c.iconBg} rounded-full flex items-center justify-center`}>
                    <c.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${c.iconColor}`} />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-[#0D1F3C]">
                    {c.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-snug">
                    {c.subtitle}
                  </p>

                  <p className="text-gray-400 text-xs sm:text-sm">
                    {c.duration}
                    <span className="mx-1.5 text-gray-300">|</span>
                    {c.type}
                  </p>
                </div>

                {/* Bottom */}
                <button className="mt-3 flex items-center gap-1 text-[#1a6abf] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE ALLIANCE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D1F3C] py-6 sm:py-8">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Choose Alliance?" subtitle="Everything you need for a world-class career" light />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {whyFeatures.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-white text-xs sm:text-sm font-medium leading-snug whitespace-pre-line">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — YOUR JOURNEY TO SUCCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Your Journey to Success" subtitle="A 3-step process to achieve your dream career" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-4">
            <div className="hidden sm:block absolute top-10 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-[2px] bg-gray-200 z-0" />
            {journeySteps.map((j, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-sm">
                    <j.icon className="w-9 h-9 text-[#0D1F3C]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0D1F3C] text-white text-xs font-bold flex items-center justify-center shadow">
                    {j.step}
                  </div>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="sm:hidden mt-3 mb-1 text-gray-300">
                    <ChevronDown className="w-6 h-6 mx-auto" />
                  </div>
                )}
                <p className="mt-5 text-base font-bold text-[#0D1F3C]">{j.year}</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">{j.title}</p>
                <p className="text-xs text-gray-500 mt-1 max-w-[160px] leading-snug">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — WORLD-CLASS INFRASTRUCTURE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-[#F8FAFF]">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="World-Class Infrastructure"
            subtitle="State-of-the-art facilities for holistic learning"
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {labs.map((lab) => (
              <div
                key={lab.id}
                className="
        border border-gray-200 rounded-xl overflow-hidden bg-white 
        hover:shadow-lg transition-shadow duration-300 
        flex flex-col
        h-[230px] sm:h-auto
      "
              >

                {/* IMAGE */}
                <div className="
        h-[75%] sm:h-auto 
        sm:aspect-[4/3] 
        overflow-hidden
      ">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = IMAGES.frontOffice;
                    }}
                  />
                </div>

                {/* TEXT */}
                <div className="
        h-[25%] sm:h-auto 
        px-2 py-2 sm:p-4 
        flex flex-col justify-center
      ">
                  <h3 className="font-semibold text-[#0D1F3C] text-xs sm:text-base leading-tight">
                    {lab.title}
                  </h3>

                  <p className="
          text-gray-500 
          text-[10px] sm:text-sm 
          leading-tight 
          line-clamp-2 sm:line-clamp-3
        ">
                    {lab.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center">
            <button onClick={() => navigate("/campus")} className="bg-[#0D1F3C] hover:bg-[#1a3a6b] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-colors">
              Explore Campus
            </button>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — EXPERT FACULTY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="Meet Our Expert Faculty"
            subtitle="Learn from industry experts and experienced educators"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facultyMembers.map((f, i) => (
              <div
                key={i}
                className="
            bg-white border border-gray-200 rounded-xl overflow-hidden
            hover:shadow-lg transition-shadow duration-300
            flex flex-col
          "
              >

                {/* IMAGE */}
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="
      w-full h-full 
      object-cover 
      object-top
      hover:scale-105 transition-transform duration-500
    "
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = IMAGES.faculty1;
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 sm:p-4 flex flex-col gap-1">
                  <h3 className="font-bold text-[#0D1F3C] text-xs sm:text-base leading-tight">
                    {f.name}
                  </h3>

                  <p className="text-gray-600 text-[11px] sm:text-sm">
                    {f.role}
                  </p>

                  <p className="text-gray-400 text-[10px] sm:text-xs">
                    {f.qual}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* BUTTON */}
          {/* <div className="mt-8 flex justify-center">
            <button className="border-2 border-[#0D1F3C] text-[#0D1F3C] hover:bg-[#0D1F3C] hover:text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-all">
              View All Faculty
            </button>
          </div> */}

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — PLACEMENTS THAT SPEAK
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D1F3C] pt-8 pb-20 sm:pb-24">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-6">
            <h2 className="text-white text-xl sm:text-3xl font-extrabold">
              Placements That Speak
            </h2>
            <p className="text-white/70 text-xs sm:text-sm mt-1">
              Our students are placed in top companies across the globe
            </p>
          </div>

          {/* COMPANY LOGOS */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-6">
            {placerCompanies.map((c, i) => (
              <div
                key={i}
                className="bg-[#F7F7F7] rounded-xl w-[140px] sm:w-[150px] h-[82px] flex flex-col items-center justify-center shadow-sm"
              >
                {/* Company Logo */}
                <img
                  src={c.image}
                  alt={c.label}
                  className="h-7 sm:h-8 object-contain mb-1"
                />

                {/* Company Type */}
                <span className="text-[11px] sm:text-xs text-gray-500">
                  {c.sub}
                </span>
              </div>
            ))}
          </div>

          {/* TESTIMONIAL */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={prevTesti}
              className="w-9 h-9 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="bg-[#1a3258] rounded-2xl px-4 py-4 sm:px-6 sm:py-5 flex items-center gap-4 max-w-[600px] w-full">
              <img
                src={testi.image}
                alt={testi.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              />

              <div>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  {testi.quote}
                </p>
                <p className="text-[#F5A800] font-bold text-xs sm:text-sm mt-2">
                  – {testi.name}
                </p>
                <p className="text-gray-400 text-[10px] sm:text-xs">
                  {testi.role}
                </p>
              </div>
            </div>

            <button
              onClick={nextTesti}
              className="w-9 h-9 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestiIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === testiIdx ? "bg-[#F5A800] w-5" : "bg-white/30 w-2"
                  }`}
              />
            ))}
          </div>

        </div>
      </section>
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 relative -mt-12 sm:-mt-16 z-10">

        <div className="bg-[#F5A800] rounded-2xl grid grid-cols-2 sm:grid-cols-4 overflow-hidden shadow-xl">
          {placementStats.map((s, i) => (
            <div
              key={i}
              className="py-4 sm:py-5 flex flex-col items-center border-r border-[#e0a000]/40 last:border-r-0"
            >
              <span className="text-[#0D1F3C] text-xs sm:text-sm font-semibold opacity-80">
                {s.label}
              </span>

              <span className="text-[#0D1F3C] text-xl sm:text-3xl font-extrabold">
                {s.value}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — ADMISSION FORM
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Get Admission Details" subtitle="Fill the form and our expert will contact you" />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="Full Name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} required
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#0D1F3C] focus:ring-1 focus:ring-[#0D1F3C] transition bg-white" />
              <input type="tel" placeholder="Phone Number" value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })} required
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#0D1F3C] focus:ring-1 focus:ring-[#0D1F3C] transition bg-white" />
              <div className="relative flex-1">
                <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} required
                  className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#0D1F3C] focus:ring-1 focus:ring-[#0D1F3C] transition bg-white pr-10">
                  {admissionCourses.map(c => <option key={c} value={c === "Select Course" ? "" : c}>{c}</option>)}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <button type="submit" onClick={()=>{navigate("/applynow")}}
                className={`px-8 py-3 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${submitted ? "bg-green-500 text-white" : "bg-[#F5A800] hover:bg-[#e09800] text-white"}`}>
                {submitted ? "✓ Submitted!" : "Apply Now"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT — Hero Banner
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#0D1F3C] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.campus} alt="Campus" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F3C] via-[#0D1F3C]/90 to-[#1a3a6b]/70" />
        <div className="relative z-10 container-main mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About Alliance</h1>
          <nav className="flex items-center gap-1 text-gray-400 text-sm">
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Home</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
            <span className="text-gray-300">About Us</span>
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT — Split Layout
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-[42%] flex-shrink-0">
              <div className="w-full h-52 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-sm">
                <img src={IMAGES.campus} alt="Alliance Degree College Campus"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.onerror = null; e.target.src = IMAGES.campus; }} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1F3C] mb-4">15+ Years of Excellence</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Alliance Degree College is a premier institution dedicated to providing quality education in Hotel Management, Business Management and related fields.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our mission is to groom students into industry-ready professionals with strong theoretical knowledge and practical exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISION · MISSION · VALUES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-[#F8FAFF]">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {vmv.map((item, i) => (
              <div
                key={i}
                className="
            bg-white border border-gray-200 rounded-2xl 
            p-4 sm:p-6 
            flex flex-col sm:flex-row gap-3 sm:gap-4 
            items-start 
            hover:shadow-md transition-shadow duration-300
          "
              >
                {/* ICON */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF4DB] flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5A800]" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-bold text-[#0D1F3C] text-sm sm:text-base mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LIFE AT ALLIANCE — Photo Gallery
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-4 sm:py-8 bg-white">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1F3C] text-center mb-8">
            Life at Alliance
          </h2>

          {/* UNIFORM GALLERY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              IMAGES.gallery1,
              IMAGES.gallery2,
              IMAGES.gallery3,
              IMAGES.gallery4,
              IMAGES.gallery5,
              IMAGES.gallery6,
              IMAGES.gallery7,
              IMAGES.gallery8,
            ].map((src, i) => (
              <div key={i} className="w-full aspect-square rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = IMAGES.gallery1;
                  }}
                />
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center">
            <button onClick={() => navigate("/aboutus")} className="bg-[#0D1F3C] hover:bg-[#1a3a6b] text-white font-semibold px-10 py-3 rounded-lg text-sm transition-colors">
              View More
            </button>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GET IN TOUCH — Contact + Map
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-4 sm:py-8 bg-[#F8FAFF]">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1F3C] mb-2">Get In Touch</h2>
              <p className="text-gray-500 text-sm mb-8">We're here to help you. Reach out to us!</p>
              <div className="flex flex-col gap-6">
                {contactDetails.map((c, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF4DB] border border-[#F5A800]/30 flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-[#F5A800]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0D1F3C] text-sm mb-0.5">{c.label}</p>
                      {c.link ? (
                        <a
                          href={c.link}
                          target={c.type === "link" ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm leading-relaxed whitespace-pre-line hover:text-[#F5A800] transition-colors cursor-pointer"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[52%] flex-shrink-0">
              <div className="w-full h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <a
                  href="https://www.google.com/maps?q=Alliance+Degree+College+Visakhapatnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <iframe
                    title="Alliance Degree College Map"
                    src="https://www.google.com/maps?q=Alliance+Degree+College+Visakhapatnam&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}