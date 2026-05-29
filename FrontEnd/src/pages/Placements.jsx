import {Users, Building2,TrendingUp, Award, CheckCircle2, ClipboardList, MessageSquare,UserCheck,Briefcase,ChevronRight,Star,Home,ArrowRight, UserCircle2, Camera,ChevronLeft} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const heroStats = [
  { icon: Users, value: "5000+", label: "Students Trained" },
  { icon: Building2, value: "100+", label: "Recruiters" },
  { icon: TrendingUp, value: "20 LPA", label: "Highest Package" },
  { icon: Award, value: "100%", label: "Placement Assistance" },
];

const highlights = [
  { icon: TrendingUp, value: "20 LPA", label: "Highest Package", desc: "Package offered to one of our student by top MNC.", color: "blue" },
  { icon: Users, value: "4.5 LPA", label: "Average Package", desc: "Competitive average package across disciplines.", color: "green" },
  { icon: Building2, value: "100+", label: "Top Recruiters", desc: "Leading companies recruiting our talented students.", color: "blue" },
  { icon: Award, value: "100%", label: "Placement Assistance", desc: "End-to-end training and placement support.", color: "orange" },
  { icon: UserCheck, value: "5000+", label: "Students Placed", desc: "Successfully placed students in reputed organizations.", color: "blue" },
];
const recruiters = [
  { name: "ACCOR", image: "https://alliancemgt.org/Alliance%20Images/accor.png" },
  { name: "Marriot", image: "https://alliancemgt.org/Alliance%20Images/mariot.png" },
  { name: "Grand Mercure", image: "https://alliancemgt.org/Alliance%20Images/mercure.png" },
  { name: "Novotel", image: "https://alliancemgt.org/Alliance%20Images/novo.png" },
  { name: "The Park Hotel", image: "https://alliancemgt.org/Alliance%20Images/park.png" },
  { name: "Peerless", image: "https://alliancemgt.org/Alliance%20Images/peerless.jpg",zoom: "scale-150" },
  { name: "Radission", image: "https://alliancemgt.org/Alliance%20Images/radi.png" },
  { name: "The fern", image: "https://alliancemgt.org/Alliance%20Images/pngegg.png" },

  { 
    name: "Deloitte",
    image: "https://alliancemgt.org/Alliance%20Images/delolite.jpg",
    zoom: "scale-150"
  },

  { 
    name: "Accenture",
    image: "https://alliancemgt.org/Alliance%20Images/accenture.jpg",
    zoom: "scale-125"
  },

  { 
    name: "Ey",
    image: "https://alliancemgt.org/Alliance%20Images/ey.jpg",
    zoom: "scale-150"
  },

  { 
    name: "HDFC",
    image: "https://alliancemgt.org/Alliance%20Images/hdfc.jpg",
    zoom: "scale-150"
  },

  { 
    name: "Amazon",
    image: "https://alliancemgt.org/Alliance%20Images/amazon.jpg",
    zoom: "scale-150"
  }
];

const processSteps = [
  { icon: ClipboardList, title: "Training", desc: "Industry-focused training and skill development" },
  { icon: CheckCircle2, title: "Assessment", desc: "Evaluations and mock tests to ensure readiness" },
  { icon: MessageSquare, title: "Pre-Placement Talk", desc: "Interaction with recruiters and opportunities" },
  { icon: UserCheck, title: "Interviews", desc: "Personal and technical interviews by companies" },
  { icon: Briefcase, title: "Placement Offer", desc: "Final job offers and career begins" },
];

const testimonials = [
  {
    name: "CH. Venkata Sai Ramesh",
    course: "BHM",
    text: "Alliance helped me build strong hospitality skills and secure an international career opportunity.",
    company: "Marriott-Myrtle Beach ",
    location: "U.S.A",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/mariot.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture1.jpg",
    initials: "VR",
    bg: "#dbeafe",
    fg: "#1d4ed8",
  },

  {
    name: "Yerisi Srinivas",
    course: "BHM",
    text: "The placement training and practical exposure gave me confidence to work in top international hospitality brands.",
    company: "IKHTIAR GROUP",
    location: "Oman",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/Ikhtiar.jpg",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture2.jpg",
    initials: "YS",
    bg: "#fce7f3",
    fg: "#be185d",
  },

  {
    name: "Naveen Kunchapu",
    course: "BHM",
    text: "The training and placement support at Alliance helped me secure a great role in a luxury island resort.",
    company: "Hurawalhi Island Resort",
    location: "Maldives",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/hurawalhi.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture3.jpg",
    initials: "NK",
    bg: "#dcfce7",
    fg: "#15803d",
  },

  {
    name: "Mayank Prakash Anil Kumar",
    course: "BHM",
    text: "Faculty mentorship and industry-oriented learning prepared me for global hospitality opportunities.",
    company: "Coffee Address",
    location: "Saudi Arabia",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/coffeadd.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture4.jpg",
    initials: "MP",
    bg: "#fef9c3",
    fg: "#a16207",
  },

  {
    name: "Chandra Shekar",
    course: "BHM",
    text: "Alliance provided excellent career guidance and practical exposure that helped me work abroad successfully.",
    company: "Emirates Concord Hotels",
    location: "Abudhabi",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/EmiratesHotels.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture5.jpg",
    initials: "CS",
    bg: "#ede9fe",
    fg: "#6d28d9",
  },

  {
    name: "K. Bala Manikanta",
    course: "BHM",
    text: "The supportive environment and placement assistance helped me achieve my dream hospitality career.",
    company: "R Hotels",
    location: "Dubai",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/rhotel.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture6.jpg",
    initials: "BM",
    bg: "#cffafe",
    fg: "#0f766e",
  },

  {
    name: "Vijay Ramesh",
    course: "BHM",
    text: "The college gave me international exposure and confidence to grow in the hospitality industry overseas.",
    company: "Vinpearl Hotel",
    location: "Vietnam, China",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/vinpearl.jpg",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture8.jpg",
    initials: "VR",
    bg: "#e0f2fe",
    fg: "#0369a1",
  },

  {
    name: "P Sai Prakash",
    course: "BHM",
    text: "The practical learning sessions and placement support helped me secure a rewarding international position.",
    company: "Voco Hotels",
    location: "Riyadh",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/voco.jpg",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture9.jpg",
    initials: "SP",
    bg: "#fae8ff",
    fg: "#a21caf",
  },

  {
    name: "Anil Kumar Reddy",
    course: "BHM",
    text: "Alliance shaped my professional skills and helped me begin a successful hospitality career abroad.",
    company: "Jashn Restaurant",
    location: "Oman",
    companyLogo: "https://alliancemgt.org/Alliance%20Images/jasha.png",
    avatar: "https://alliancemgt.org/Alliance%20Images/Picture10.jpg",
    initials: "AR",
    bg: "#f1f5f9",
    fg: "#334155",
  },
];

const galleryRow1 = [
  { src: "https://alliancemgt.org/Alliance%20Images/Picture1.jpg", name: "CH. Venkata sai ramesh", company: "Taj Hotels", batch: "U.S.A" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture2.jpg", name: "YERISI .SRINIVAS", company: "IKHTIAR GROUP", batch: "OMAN" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture3.jpg", name: "Naveen Kunchapu", company: "Hurawalhi Island resort", batch: "Maldives" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture4.jpg", name: "Mayank Prakash Anil Kumar", company: "Coffee address", batch: "Saudi arabia" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture5.jpg", name: "Chandra Shekar", company: "Emirates concord hotels", batch: "Abudhabi" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture6.jpg", name: "K. Bala Manikanta", company: "R Hotels", batch: "Dubai" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture7.jpg", name: "J Shiva kumar", company: "Dept-facility", batch: "Malta" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture8.jpg", name: "Vijay Ramesh", company: "Vinpearl hotel", batch: "Vietnam,China" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture9.jpg", name: "P sai prakash", company: "Voco hotels", batch: "Riyadh" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture10.jpg", name: "Anil Kumar Reddy", company: "Jashn Restaurant", batch: "Oman" },
   
 
];

const galleryRow2 = [
  { src: "https://alliancemgt.org/Alliance%20Images/Picture11.jpg", name: "Mirza Amir Baig", company: "Carnival Cruise", batch: "USA" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture12.jpg", name: "Sk. Irfan", company: "Dunkin Doughnuts", batch: "Saudi" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture13.jpg", name: "Harish Prasad", company: "Taj krishna", batch: "Hyderabad" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture14.jpg", name: "Arun Kagathkar", company: "The Cheesecake factory", batch: "Doha" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture15.jpg", name: "Vijayaputra nani", company: "IBM", batch: "Maryland, U.S.A" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture16.jpg", name: "M. Harish", company: "Restaurant G.M", batch: "California, U.S.A" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture17.jpg", name: "K. Sai Kumar", company: "Dunkin Doughnuts", batch: "Saudi" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture18.jpg", name: "E. Mahesh", company: "ITC Kohinoor", batch: "Dept-F&B" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture19.jpg", name: "Manohar reddy", company: "ITC Kohinoor", batch: "Hyderabad" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture20.jpg", name: "Yesu Raju", company: "Country  club", batch: "Dubai" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture21.jpg", name: "Sudheer Patnayak", company: "Hyatt", batch: "Pune" },
  { src: "https://alliancemgt.org/Alliance%20Images/Picture22.jpg", name: "Y. Ashok", company: "Sun Siam Olhuveli", batch: "Maldives" },
];


const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", icon: "text-blue-500" },
  green: { bg: "bg-green-50", text: "text-green-600", icon: "text-green-500" },
  orange: { bg: "bg-orange-50", text: "text-orange-500", icon: "text-orange-400" },
};


function StatBadge({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 px-6 py-5 flex-1 min-w-[140px]">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <p className="text-xl font-bold text-gray-900 leading-tight">{value}</p>
        <p className="text-sm text-gray-500 leading-tight">{label}</p>
      </div>
    </div>
  );
}

function HighlightCard({ icon: Icon, value, label, desc, color }) {
  const c = colorMap[color] || colorMap.blue;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col gap-3">
      <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${c.icon}`} />
      </div>
      <div>
        <p className={`text-2xl font-extrabold ${c.text} leading-tight`}>{value}</p>
        <p className="text-sm font-semibold text-gray-800 mt-0.5">{label}</p>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

// function RecruiterLogo({ name, image }) {
//   return (
//     <div className="flex items-center justify-center h-14 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 px-4 cursor-default">
//       <img
//         src={image} alt={name}
//         className="max-h-7 max-w-full object-contain" loading="lazy"
//         onError={(e) => {
//           e.currentTarget.style.display = "none";
//           e.currentTarget.nextSibling.style.display = "block";
//         }}
//       />
//       <span className="text-xs font-bold text-gray-600" style={{ display: "none" }}>{name}</span>
//     </div>
//   );
// }
function RecruiterLogo({ name, image, zoom = "" }) {
  return (
    <div className="flex items-center justify-center h-14 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 px-2 overflow-hidden cursor-default">

      <img
        src={image}
        alt={name}
        className={`h-10 w-full object-contain transition-transform duration-300 ${zoom}`}
        loading="lazy"
      />

    </div>
  );
}
function ProcessStep({ icon: Icon, title, desc, isLast }) {
  return (
    <div className="flex items-start flex-1 min-w-0">
      <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md shrink-0"
          style={{ background: "linear-gradient(135deg,#1b3a6b,#2563eb)", border: "2.5px solid #bfdbfe" }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <p className="text-xs font-bold text-gray-800 leading-tight">{title}</p>
        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{desc}</p>
      </div>
      {!isLast && (
        <div className="flex items-center justify-center shrink-0 pt-4">
          <ArrowRight className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}

function TestimonialCard({ name, course, text, company, companyLogo, companyColor, initials, bg, fg, avatar }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <img
            src={avatar} alt={name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ outline: `3px solid ${bg}` }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              document.getElementById(`init-${name}`)?.style?.setProperty("display", "flex");
            }}
          />
          <div
            id={`init-${name}`}
            className="w-12 h-12 rounded-full items-center justify-center text-sm font-bold"
            style={{ background: bg, color: fg, display: "none" }}
          >
            {initials}
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-400" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm leading-tight">{name}</p>
          <p className="text-xs text-gray-500">{course}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 relative pl-4">
        <span className="absolute left-0 top-[-4px] text-3xl font-serif leading-none text-blue-200 select-none" aria-hidden="true">"</span>
        {text}
      </p>
      <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
        <span className="text-xs text-gray-400">Placed at</span>
        {companyLogo ? (
          <img src={companyLogo} alt={company} className="h-4 max-w-[80px] object-contain" loading="lazy" />
        ) : (
          <span className="text-sm font-bold" style={{ color: companyColor }}>{company}</span>
        )}
      </div>
    </div>
  );
}

function GalleryCard({ src, name, company, batch }) {
  return (
    <div
      className="
        relative shrink-0 rounded-2xl overflow-hidden group cursor-pointer
        w-[150px] h-[190px]
        sm:w-[180px] sm:h-[220px]
        md:w-[200px] md:h-[240px]
      "
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,22,50,0.92) 0%, rgba(10,22,50,0.3) 55%, transparent 100%)",
        }}
      />

      <div
        className="
          absolute top-2 right-2
          text-[10px] sm:text-xs
          font-bold px-2 py-0.5 rounded-full
        "
        style={{
          background: "rgba(245,158,11,0.9)",
          color: "#1a1a1a",
        }}
      >
        {batch}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
        <p className="text-white text-xs sm:text-sm font-bold truncate">
          {name}
        </p>

        <p className="text-amber-300 text-[11px] sm:text-xs mt-0.5 truncate">
          {company}
        </p>
      </div>
    </div>
  );
}

function InfiniteScrollRow({ items, direction = "left", speed = 1 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame;
    let position = 0;

    const cardWidth =
      window.innerWidth < 640
        ? 166
        : window.innerWidth < 768
          ? 196
          : 216; 
    const totalWidth = items.length * cardWidth;

    const animate = () => {
      if (direction === "left") {
        position -= speed;
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
      } else {
        position += speed;
        if (position >= 0) {
          position = -totalWidth;
        }
      }

      track.style.transform = `translateX(${position}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    if (direction === "right") {
      position = -totalWidth;
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [items, direction, speed]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="
    hidden sm:block
    absolute left-0 top-0 bottom-0
    z-10 pointer-events-none
  "
        style={{
          width: 80,
          background: "linear-gradient(to right, #f3f4f6, transparent)",
        }}
      />

      <div
        className="
    hidden sm:block
    absolute right-0 top-0 bottom-0
    z-10 pointer-events-none
  "
        style={{
          width: 80,
          background: "linear-gradient(to left, #f3f4f6, transparent)",
        }}
      />

      <div
        ref={trackRef}
        className="flex gap-4"
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((item, i) => (
          <GalleryCard key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}
function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const cardsPerView =
    window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 640
      ? 2
      : 1;

  const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="
          absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 rounded-full bg-white border shadow-lg
          flex items-center justify-center
          hover:bg-blue-50 transition
        "
      >
        <ChevronLeft className="w-5 h-5 text-blue-700" />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 rounded-full bg-white border shadow-lg
          flex items-center justify-center
          hover:bg-blue-50 transition
        "
      >
        <ChevronRight className="w-5 h-5 text-blue-700" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => {
            const start = slideIndex * cardsPerView;
            const visibleCards = testimonials.slice(
              start,
              start + cardsPerView
            );

            return (
              <div
                key={slideIndex}
                className="min-w-full px-2 sm:px-4"
              >
                <div
                  className="
                    grid gap-5
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                  "
                >
                  {visibleCards.map((t) => (
                    <TestimonialCard key={t.name} {...t} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all duration-300 rounded-full
              ${index === i
                ? "w-8 h-2.5 bg-blue-700"
                : "w-2.5 h-2.5 bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
function PlacedStudentsGallery() {
  return (
    <section className="pb-10 sm:pb-16 overflow-hidden">      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border"
              style={{ borderColor: "#bfdbfe", background: "#eff6ff" }}>
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Placement Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Placed Students</h2>
            <p className="text-gray-500 mt-1.5 text-sm sm:text-base max-w-lg">
              Celebrating the achievements of our talented alumni who are now thriving in top organizations across India.
            </p>
          </div>

          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl shrink-0"
            style={{ background: "linear-gradient(135deg, #0f1f3d, #1b3a6b)" }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-60" />
            </div>
            <div>
              <p className="text-white text-lg font-extrabold leading-none">5000+</p>
              <p className="text-blue-300 text-xs mt-0.5">Students Placed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <InfiniteScrollRow items={galleryRow1} direction="left" speed={0.4} />
      </div>

      <div>
        <InfiniteScrollRow items={galleryRow2} direction="right" speed={0.4} />
      </div>

      
    </section>
  );
}


export default function Placements() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}</style>

      <section className="relative overflow-hidden" style={{ minHeight: 260 }}>
        <img
          src="https://alliancemgt.org/Alliance%20Images/alliancebg.avif"
          alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right,rgba(13,27,61,.93) 45%,rgba(13,27,61,.55) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
            <Home size={13} color="#9CA3AF" />
            <span style={{ color: "#9CA3AF", fontSize: 12 }}>Home</span>
            <ChevronRight size={13} color="#9CA3AF" />
            <span style={{ color: "#D1D5DB", fontSize: 12 }}>Placements</span>
          </nav>
          <h1 className="font-extrabold mb-3"
            style={{ color: "#FFFFFF", fontSize: "clamp(1.9rem,5vw,2.75rem)", lineHeight: 1.15 }}>
            Placements
          </h1>
          <p className="text-blue-200 text-lg font-medium mb-3">Your Success, Our Commitment</p>
          <p className="text-blue-300 text-sm sm:text-base max-w-xl leading-relaxed">
            We are dedicated to shaping your career with industry collaborations, training, and 100% placement assistance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 z-20 relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-wrap divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden">
          {heroStats.map((s) => <StatBadge key={s.label} {...s} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Placement Highlights</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Our consistent efforts reflect in the success of our students</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {highlights.map((h) => <HighlightCard key={h.label} {...h} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Our Top Recruiters</h3>
            <p className="text-sm text-gray-500 mb-6">We are proud to be associated with leading companies worldwide.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {recruiters.map((r) => <RecruiterLogo key={r.name} {...r} />)}
            </div>
          
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Placement Process</h3>
            <p className="text-sm text-gray-500 mb-8">A proven process to help you achieve your dream career</p>

            <div className="hidden md:flex items-start">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.title} {...step} isLast={i === processSteps.length - 1} />
              ))}
            </div>

            <div className="flex flex-col md:hidden">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === processSteps.length - 1;
                return (
                  <div key={step.title}>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg,#1b3a6b,#2563eb)", border: "2px solid #bfdbfe" }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="pb-1 pt-1">
                        <p className="text-sm font-bold text-gray-800">{step.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {!isLast && (
                      <div className="flex items-center ml-4 py-1">
                        <div className="flex flex-col items-center w-2.5 gap-0.5">
                          <div className="w-px h-3 bg-blue-200" />
                          <ArrowRight className="w-3 h-3 text-blue-400 rotate-90" strokeWidth={2.5} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <PlacedStudentsGallery />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Student Success Stories</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Hear from our students who achieved their career goals with us</p>
        </div>
      <TestimonialsCarousel />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="rounded-2xl px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-0 justify-between"
          style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1b3a6b 100%)" }}
        >
          <div className="flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-full border-2 flex items-center justify-center shrink-0"
              style={{ borderColor: "#f59e0b", background: "rgba(245,158,11,0.15)" }}
            >
              <UserCircle2 className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                Ready to Start Your Career Journey?
              </h3>
              <p className="text-blue-300 text-sm mt-0.5">
                Join Alliance College of Hotel Management and take the first Step towards a successful future.
              </p>
            </div>
          </div>

          <button
            className="shrink-0 px-7 py-3 rounded-xl text-sm font-bold text-gray-900 shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
            onClick={() => { navigate("/applynow"); }}
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}