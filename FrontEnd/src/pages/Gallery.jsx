import { useState } from "react";
import {
  GraduationCap,
  Users,
  TrendingUp,
  Trophy,
  ChevronRight,
  Phone,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

const NAVY = "#0A1F44";
const GOLD = "#F5A623";


/* ── Gallery Categories & Images ────────────────────────── */
const categories = ["All", "Campus", "Events", "Placements", "Sports", "Labs"];

const images = [
  // Campus
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    alt: "Main College Building",
    category: "Campus",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    alt: "College Entrance",
    category: "Campus",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
    alt: "Campus Lawn",
    category: "Campus",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    alt: "College Corridor",
    category: "Campus",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80",
    alt: "Campus Garden",
    category: "Campus",
    span: "",
  },
  // Events
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Annual Day Celebration",
    category: "Events",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Cultural Fest",
    category: "Events",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    alt: "Graduation Ceremony",
    category: "Events",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    alt: "Seminar",
    category: "Events",
    span: "",
  },
  // Placements
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    alt: "Campus Placement Drive",
    category: "Placements",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
    alt: "HR Interview",
    category: "Placements",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    alt: "Award Ceremony",
    category: "Placements",
    span: "",
  },
  // Sports
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    alt: "Basketball Court",
    category: "Sports",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    alt: "Athletics Track",
    category: "Sports",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    alt: "Volleyball Match",
    category: "Sports",
    span: "col-span-2",
  },
  // Labs
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Computer Lab",
    category: "Labs",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    alt: "Science Lab",
    category: "Labs",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    alt: "Library",
    category: "Labs",
    span: "col-span-2",
  },
];

/* ════════════════════════════════════════════════════════════
   LIGHTBOX
════════════════════════════════════════════════════════════ */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
      >
        <X size={30} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Image */}
      <div
        className="max-w-4xl w-full mx-12 sm:mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />
        <div className="mt-3 flex items-center justify-between">
          <p className="text-white font-medium text-sm sm:text-base">{img.alt}</p>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: GOLD, color: NAVY }}
          >
            {img.category}
          </span>
        </div>
        <p className="text-white/40 text-xs mt-1">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
      >
        <ChevronRightIcon size={26} />
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % filtered.length);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] sm:min-h-[380px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80"
          alt="Alliance Degree College campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,31,68,0.93) 0%, rgba(10,31,68,0.78) 45%, rgba(10,31,68,0.25) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 mb-4 text-white/70 text-sm flex-wrap">
            <span>Home</span>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white font-medium">Gallery</span>
          </nav>

          <h1
            className="font-extrabold text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Our Gallery
          </h1>
          <p className="text-white/85 max-w-md leading-relaxed text-sm sm:text-base">
            Explore life at Alliance Degree College — from vibrant campus events
            and sporting moments to placement drives and state-of-the-art
            facilities.
          </p>
        </div>
      </section>



      {/* ── Gallery Section ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: GOLD }}
            />
            <span
              className="font-semibold tracking-wide uppercase text-xs"
              style={{ color: GOLD }}
            >
              Memories &amp; Milestones
            </span>
          </div>
          <h2
            className="font-extrabold mb-1"
            style={{ color: NAVY, fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
          >
            Campus Life in Pictures
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg">
            A visual journey through academics, events, sports, and everything
            that makes Alliance a place to grow.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
              className="px-4 py-2 rounded-full font-semibold border transition-all duration-200 text-sm"
              style={
                activeCategory === cat
                  ? { background: NAVY, color: "#fff", borderColor: NAVY }
                  : { background: "transparent", color: "#6B7280", borderColor: "#E5E7EB" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px]">
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className={`overflow-hidden rounded-2xl group cursor-pointer relative ${img.span}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ImageIcon
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full"
                  style={{ background: "rgba(245,165,35,0.85)" }}>
                  {img.alt}
                </span>
              </div>
              {/* Category badge */}
              <span
                className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: NAVY, color: "#fff", opacity: 0.85 }}
              >
                {img.category}
              </span>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-3">
            <ImageIcon size={40} />
            <p className="font-medium">No images in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── Bottom CTA Banner ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 max-w-6xl mx-auto">
        <div
          className="rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10"
          style={{ background: NAVY }}
        >
          <div className="flex items-center gap-5">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: GOLD }}
            >
              <ImageIcon size={28} style={{ color: GOLD }} />
            </div>
            <div>
              <h3
                className="font-bold text-white mb-1"
                style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}
              >
                Be Part of Our Story
              </h3>
              <p className="text-white/65 text-sm sm:text-base max-w-sm">
                Join Alliance Degree College and create memories that last a
                lifetime. Admissions open for 2024–25.
              </p>
            </div>
          </div>

          <a
            href="tel:08912951555"
            className="flex-shrink-0 flex items-center gap-2 font-bold text-gray-900 rounded-lg px-7 py-3 sm:py-3.5 transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: GOLD, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
          >
            <Phone size={16} />
            Apply Now
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="mt-2 py-5 px-4 sm:px-6 lg:px-8" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Alliance Degree College. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-xs sm:text-sm flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}