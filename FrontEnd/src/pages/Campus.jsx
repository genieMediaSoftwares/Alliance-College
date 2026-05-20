import {
  Trees,
  Building2,
  Users,
  ShieldCheck,
  Wifi,
  Monitor,
  BookOpen,
  Computer,
  Home,
  Trophy,
  UtensilsCrossed,
  Mic2,
  HeartPulse,
  ChevronRight,
  ChevronLeft,
  Images,
  UserCircle2,
  MapPin,
  BriefcaseBusiness
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const heroStats = [
  { icon: MapPin, value: "City Center", label: "Prime Urban Location" },
  { icon: Building2, value: "Modern", label: "Infrastructure" },
  { icon: Users, value: "Advanced", label: "Facilities" },
  { icon: ShieldCheck, value: "Safe & Secure", label: "Environment" },
  { icon: Wifi, value: "Wi-Fi", label: "Enabled Campus" },
];

const facilities = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Modern classrooms with latest technology and AV systems.",
    img: "https://alliancemgt.org/Alliance%20Images/Img82.jpeg",
  },
  {
    icon: BookOpen,
    title: "Library",
    desc: "Well-stocked library with a vast collection of books and digital resources.",
    img: "https://alliancemgt.org/Alliance%20Images/lib.jpg",
  },
  {
    icon: Computer,
    title: "Computer Labs",
    desc: "Advanced computer labs with high-speed internet and latest software.",
    img: "https://alliancemgt.org/Alliance%20Images/comp%20lab.jpg",
  },
  {
    icon: Home,
    title: "Hostels",
    desc: "Comfortable and secure hostel facilities for boys and girls.",
    img: "https://alliancemgt.org/Alliance%20Images/hostel.jpg",
  },

  {
    icon: UtensilsCrossed,
    title: "Canteen & Cafeteria",
    desc: "Hygienic and spacious cafeteria serving nutritious and delicious food.",
    img: "https://alliancemgt.org/Alliance%20Images/canteen.jpg",
  },
{
  icon: BriefcaseBusiness,
  title: "Board Room",
  desc: "Modern board room equipped for meetings, presentations, discussions, and corporate training sessions.",
  img: "https://alliancemgt.org/Alliance%20Images/Img84.jpeg",
},
  {
  icon: MapPin,
  title: "City Center",
  desc: "Located in the heart of the city with easy access to transport and amenities.",
  img: "https://alliancemgt.org/Alliance%20Images/citycentre.jpg",
},
];

const galleryImages = [
  { src: "https://alliancemgt.org/Alliance%20Images/Img48.jpeg", alt: "Campus Building" },
  { src: "https://alliancemgt.org/Alliance%20Images/Img87.jpeg", alt: "Students Studying" },
  { src: "https://alliancemgt.org/Alliance%20Images/Img8.jpeg", alt: "Library" },
  { src: "https://alliancemgt.org/Alliance%20Images/g22.jpg", alt: "Sports Court" },
  { src: "https://alliancemgt.org/Alliance%20Images/Img49.jpeg", alt: "Group Study" },
  { src: "https://alliancemgt.org/Alliance%20Images/Img82.jpeg", alt: "Convocation" },
];


export default function Campus() {
  const galleryRef = useRef(null);

  const scrollGallery = (dir) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };
  const navigate = useNavigate()
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .facility-img { transition: transform 0.4s ease; }
        .facility-card:hover .facility-img { transform: scale(1.05); }
        .gallery-img { transition: transform 0.4s ease, opacity 0.3s ease; }
        .gallery-item:hover .gallery-img { transform: scale(1.06); opacity: 0.88; }
      `}</style>

   
      <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
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
            <span style={{ color: "#D1D5DB", fontSize: 12 }}>Our Campus</span>
          </nav>
          <h1 className="font-extrabold mb-3"
            style={{ color: "#FFFFFF", fontSize: "clamp(1.9rem,5vw,2.75rem)", lineHeight: 1.15 }}>
            Our Campus
          </h1>
          <p className="text-blue-200 text-lg font-semibold mb-3">
            A place to learn, grow and succeed
          </p>
          <p className="text-blue-300 text-sm sm:text-base leading-relaxed max-w-md">
            Our state-of-the-art campus is designed to provide a conducive environment
            for learning, innovation and overall development.
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 z-20 relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-wrap">
          {heroStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-5 py-5 flex-1 min-w-[140px]
                  ${i !== 0 ? "sm:border-l border-gray-100" : ""}
                  ${i !== 0 ? "border-t sm:border-t-0 border-gray-100" : ""}
                `}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Campus Facilities
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            World-class facilities to support academic excellence and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="facility-card bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="facility-img w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <h3 className="text-sm font-bold text-gray-900">{f.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Campus Gallery
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            A glimpse of life at Alliance College of Hotel Management
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scrollGallery(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
               w-9 h-9 items-center justify-center rounded-full bg-white border border-gray-200 
               shadow-md hover:bg-gray-50 active:scale-95 transition-all
               opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={18} color="#374151" />
          </button>

          <div
            ref={galleryRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide 
               px-1 sm:px-2"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item flex-shrink-0 snap-start rounded-xl overflow-hidden 
                   cursor-pointer shadow-sm hover:shadow-md transition-all duration-300
                   w-44 h-36
                   sm:w-60 sm:h-48
                   lg:w-72 lg:h-56"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollGallery(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
               w-9 h-9 items-center justify-center rounded-full bg-white border border-gray-200 
               shadow-md hover:bg-gray-50 active:scale-95 transition-all
               opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={18} color="#374151" />
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white shadow-md hover:opacity-90 active:scale-95 transition-all duration-200" onClick={() => { navigate("/gallery") }}
            style={{ background: "linear-gradient(135deg, #0f1f3d, #1b3a6b)" }}
          >
            <Images className="w-4 h-4" />
            View Full Gallery
          </button>
        </div>
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
                Experience Our Campus
              </h3>
              <p className="text-blue-300 text-sm mt-0.5">
                Visit our campus and explore the environment that inspires success.
              </p>
            </div>
          </div>

          <button
            className="shrink-0 px-7 py-3 rounded-xl text-sm font-bold text-gray-900 shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200 whitespace-nowrap" onClick={() => { navigate("/contact") }}
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            Book a Visit
          </button>
        </div>
      </section>
    </div>
  );
}