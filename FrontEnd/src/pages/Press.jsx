import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Home } from "lucide-react";

// ── FILL IN YOUR IMAGE URLs HERE ──────────────────────────────────────────────
const IMAGES = [
    { id: 1, src: "https://alliancemgt.org/Alliance%20Images/gn49.jfif", alt: "press1" },
    { id: 2, src: "https://alliancemgt.org/Alliance%20Images/gn51.jfif", alt: "press2" },
    { id: 3, src: "https://alliancemgt.org/Alliance%20Images/gn50.jfif", alt: "press3" },
    { id: 4, src: "https://alliancemgt.org/Alliance%20Images/gn51.jfif", alt: "press4" },
  
    
];
// ─────────────────────────────────────────────────────────────────────────────

function ImageCard({ image, index, onClick }) {
    const [loaded, setLoaded] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            style={{
                background: "#1a2a5e",
                /* Taller aspect ratio: 3/2 mobile, closer to 4/3 on larger screens */
                aspectRatio: "3/2",
                boxShadow: hovered
                    ? "0 20px 40px rgba(0,0,0,0.35)"
                    : "0 4px 16px rgba(0,0,0,0.18)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                transform: hovered ? "translateY(-4px) scale(1.02)" : "none",
            }}
            onClick={() => onClick(index)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Placeholder skeleton */}
            {!loaded && (
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg,#1a2a5e 0%,#0d1b4b 100%)" }}
                >
                    <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-dashed flex items-center justify-center"
                        style={{ borderColor: "#F5A623", opacity: 0.5 }}
                    >
                        <ZoomIn size={16} color="#F5A623" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium tracking-wide" style={{ color: "#F5A623", opacity: 0.6 }}>
                        Image {index + 1}
                    </span>
                </div>
            )}

            {image.src && (
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 0.4s ease",
                    }}
                    onLoad={() => setLoaded(true)}
                />
            )}

            {/* Hover overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    background: "rgba(13,27,75,0.55)",
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            >
                <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center"
                    style={{ background: "#F5A623" }}
                >
                    <ZoomIn size={18} color="#0d1b4b" />
                </div>
            </div>
        </div>
    );
}

function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
    const image = images[activeIndex];

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose, onPrev, onNext]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={onClose}
        >
            {/* Close */}
            <div className="flex justify-end p-3 sm:p-4" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F5A623")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                >
                    <X size={18} color="white" />
                </button>
            </div>

            {/* Main image + arrows */}
            <div
                className="flex-1 flex items-center justify-center px-2 sm:px-4 gap-2 sm:gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Prev */}
                <button
                    onClick={onPrev}
                    className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F5A623")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                >
                    <ChevronLeft size={20} color="white" />
                </button>

                {/* Image */}
                <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center"
                    style={{
                        width: "min(720px, 85vw)",
                        height: "min(480px, 55vh)",
                        background: "#1a2a5e",
                        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                    }}
                >
                    {!image.src ? (
                        <div className="flex flex-col items-center gap-3">
                            <ZoomIn size={32} color="#F5A623" opacity={0.5} />
                            <span style={{ color: "#F5A623", opacity: 0.6, fontSize: 13, textAlign: "center", padding: "0 16px" }}>
                                {image.alt}
                            </span>
                        </div>
                    ) : (
                        <img src={image.src} alt={image.alt} className="w-full h-full object-contain" />
                    )}
                </div>

                {/* Next */}
                <button
                    onClick={onNext}
                    className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F5A623")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                >
                    <ChevronRight size={20} color="white" />
                </button>
            </div>

            {/* Caption */}
            <div
                className="text-center py-2 text-xs sm:text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onClick={(e) => e.stopPropagation()}
            >
                {image.alt} &nbsp;·&nbsp; {activeIndex + 1} / {images.length}
            </div>

            {/* Thumbnail strip */}
            <div
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
                onClick={(e) => e.stopPropagation()}
            >
                {images.map((img, i) => (
                    <button
                        key={img.id}
                        className="flex-shrink-0 rounded-lg overflow-hidden"
                        style={{
                            width: 56,
                            height: 42,
                            border: i === activeIndex ? "2.5px solid #F5A623" : "2.5px solid transparent",
                            background: "#1a2a5e",
                            opacity: i === activeIndex ? 1 : 0.55,
                            transform: i === activeIndex ? "scale(1.08)" : "none",
                            transition: "all 0.2s ease",
                        }}
                        onClick={() => {
                            const diff = i - activeIndex;
                            if (diff > 0) for (let x = 0; x < diff; x++) onNext();
                            else for (let x = 0; x < Math.abs(diff); x++) onPrev();
                        }}
                    >
                        {img.src ? (
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span style={{ color: "#F5A623", fontSize: 10, opacity: 0.7 }}>{i + 1}</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function Press() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = useCallback((index) => setLightboxIndex(index), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const prevImage = useCallback(() =>
        setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length), []);
    const nextImage = useCallback(() =>
        setLightboxIndex((i) => (i + 1) % IMAGES.length), []);

    return (
        <>
            {/* ── HERO HEADER ─────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
                <img
                    src="https://alliancemgt.org/Alliance%20Images/alliancebg.avif"
                    alt="Campus"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to right,rgba(13,27,61,.93) 45%,rgba(13,27,61,.55) 100%)" }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
                        <Home size={13} color="#9CA3AF" />
                        <span style={{ color: "#9CA3AF", fontSize: 12 }}>Home</span>
                        <ChevronRight size={13} color="#9CA3AF" />
                        <span style={{ color: "#D1D5DB", fontSize: 12 }}>Press Release</span>
                    </nav>
                    <h1
                        className="font-extrabold mb-3"
                        style={{ color: "#FFFFFF", fontSize: "clamp(1.9rem,5vw,2.75rem)", lineHeight: 1.15 }}
                    >
                        Press Release
                    </h1>
                    <p className="text-blue-200 text-lg font-semibold mb-3">
                        News, Achievements & Media Highlights
                    </p>
                    <p className="text-blue-300 text-sm sm:text-base leading-relaxed max-w-md">
                        Stay updated with the latest events, achievements, industry collaborations,
                        and success stories from Alliance College of Hotel Management.
                    </p>
                </div>
            </section>

            {/* ── GALLERY GRID ────────────────────────────────────────────────────── */}
            <section style={{ background: "#f4f6fb", minHeight: "60vh", padding: "40px 0 64px" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
                    {/* 2 cols on mobile, 3 on md, 4 on lg */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                        {IMAGES.map((image, index) => (
                            <ImageCard
                                key={image.id}
                                image={image}
                                index={index}
                                onClick={openLightbox}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LIGHTBOX ────────────────────────────────────────────────────────── */}
            {lightboxIndex !== null && (
                <Lightbox
                    images={IMAGES}
                    activeIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </>
    );
}