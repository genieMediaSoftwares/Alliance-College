import {
  Users,
  Building2,
  TrendingUp,
  Award,
  CheckCircle2,
  ClipboardList,
  MessageSquare,
  UserCheck,
  Briefcase,
  ChevronRight,
  Star,
  Home,
  ArrowRight,UserCircle2 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// ─── DATA ────────────────────────────────────────────────────────────────────

const heroStats = [
  { icon: Users, value: "5000+", label: "Students Trained" },
  { icon: Building2, value: "100+", label: "Recruiters" },
  { icon: TrendingUp, value: "20 LPA", label: "Highest Package" },
  { icon: Award, value: "100%", label: "Placement Assistance" },
];

const highlights = [
  { icon: TrendingUp, value: "20 LPA",  label: "Highest Package",      desc: "Package offered to one of our student by top MNC.",              color: "blue"   },
  { icon: Users,      value: "4.5 LPA", label: "Average Package",      desc: "Competitive average package across disciplines.",                color: "green"  },
  { icon: Building2,  value: "100+",    label: "Top Recruiters",       desc: "Leading companies recruiting our talented students.",            color: "blue"   },
  { icon: Award,      value: "100%",    label: "Placement Assistance", desc: "End-to-end training and placement support.",                    color: "orange" },
  { icon: UserCheck,  value: "5000+",   label: "Students Placed",      desc: "Successfully placed students in reputed organizations.",        color: "blue"   },
];

const recruiters = [
  { name: "ACCOR",          image: "https://alliancedegreecollege.com/assets/images/placement/accor.png" },
  { name: "Marriot",       image: "https://alliancedegreecollege.com/assets/images/placement/mariot.png" },
  { name: "Grand Mercure",         image: "https://alliancedegreecollege.com/assets/images/placement/mercure.png" },
  { name: "Novotel",           image: "https://alliancedegreecollege.com/assets/images/placement/novo.png" },
  { name: "The Park Hotel", image: "https://alliancedegreecollege.com/assets/images/placement/park.png" },
  { name: "Peerless",     image: "https://alliancedegreecollege.com/assets/images/placement/peerless.png" },
  { name: "Radission",        image: "https://alliancedegreecollege.com/assets/images/placement/radi.png" },
  { name: "The fern",      image: "https://alliancedegreecollege.com/assets/images/placement/pngegg.png" },
];

const processSteps = [
  { icon: ClipboardList, title: "Training",           desc: "Industry-focused training and skill development" },
  { icon: CheckCircle2,  title: "Assessment",         desc: "Evaluations and mock tests to ensure readiness" },
  { icon: MessageSquare, title: "Pre-Placement Talk", desc: "Interaction with recruiters and opportunities" },
  { icon: UserCheck,     title: "Interviews",         desc: "Personal and technical interviews by companies" },
  { icon: Briefcase,     title: "Placement Offer",    desc: "Final job offers and career begins" },
];

const testimonials = [
  {
    name: "Rohit Sharma", course: "BBA",
    text: "The training and placement support at Alance helped me secure a great job in top MNC.",
    company: "Infosys",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    initials: "RS", bg: "#dbeafe", fg: "#1d4ed8",
  },
  {
    name: "Priya Nair", course: "MBA",
    text: "Excellent faculty guidance and placement assistance made my journey smooth and successful.",
    company: "Deloitte",
    companyLogo: "https://i.pinimg.com/1200x/cb/0b/18/cb0b187a237a76822baeb726b41082fc.jpg",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: "PN", bg: "#fce7f3", fg: "#be185d",
  },
  {
    name: "Amit Verma", course: "B.Com",
    text: "I got placed with a great package thanks to the continuous support and mock interview sessions.",
    company: "Wipro",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    initials: "AV", bg: "#dcfce7", fg: "#15803d",
  },
  {
    name: "Sneha Reddy", course: "BHM",
    text: "The placement cell is highly supportive and connects students with the best opportunities.",
    company: "TAJ Hotels", companyLogo: null, companyColor: "#b45309",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    initials: "SR", bg: "#fef9c3", fg: "#a16207",
  },
];

// ─── COLOR HELPERS ────────────────────────────────────────────────────────────

const colorMap = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",  icon: "text-blue-500"   },
  green:  { bg: "bg-green-50",  text: "text-green-600", icon: "text-green-500"  },
  orange: { bg: "bg-orange-50", text: "text-orange-500",icon: "text-orange-400" },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function StatBadge({ icon: Icon, value, label }) {
  const navigate=useNavigate()
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

function RecruiterLogo({ name, image }) {
  return (
    <div className="flex items-center justify-center h-14 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 px-4 cursor-default">
      <img
        src={image} alt={name}
        className="max-h-7 max-w-full object-contain" loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      <span className="text-xs font-bold text-gray-600" style={{ display: "none" }}>{name}</span>
    </div>
  );
}

// ── Process step — gradient icon + ArrowRight connector ────────────────────
function ProcessStep({ icon: Icon, title, desc, isLast }) {
  return (
    <div className="flex items-start flex-1 min-w-0">
      {/* Bubble + label */}
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

      {/* Arrow connector */}
      {!isLast && (
        <div className="flex items-center justify-center shrink-0 pt-4">
          <ArrowRight className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}

// ── Testimonial card — real profile photo + quote marks ────────────────────
function TestimonialCard({ name, course, text, company, companyLogo, companyColor, initials, bg, fg, avatar }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-4">

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          {/* Real photo */}
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ outline: `3px solid ${bg}` }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              document.getElementById(`init-${name}`)?.style?.setProperty("display","flex");
            }}
          />
          {/* Initials fallback */}
          <div
            id={`init-${name}`}
            className="w-12 h-12 rounded-full items-center justify-center text-sm font-bold"
            style={{ background: bg, color: fg, display: "none" }}
          >
            {initials}
          </div>
          {/* Online dot */}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-400" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm leading-tight">{name}</p>
          <p className="text-xs text-gray-500">{course}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1 relative pl-4">
        <span
          className="absolute left-0 top-[-4px] text-3xl font-serif leading-none text-blue-200 select-none"
          aria-hidden="true"
        >"</span>
        {text}
      </p>

      {/* Placed at */}
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

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Placements() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 260 }}>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=75"
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

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 z-20 relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-wrap divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden">
          {heroStats.map((s) => <StatBadge key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── PLACEMENT HIGHLIGHTS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Placement Highlights</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Our consistent efforts reflect in the success of our students</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {highlights.map((h) => <HighlightCard key={h.label} {...h} />)}
        </div>
      </section>

      {/* ── RECRUITERS + PROCESS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Recruiters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Our Top Recruiters</h3>
            <p className="text-sm text-gray-500 mb-6">We are proud to be associated with leading companies worldwide.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {recruiters.map((r) => <RecruiterLogo key={r.name} {...r} />)}
            </div>
            <button
              className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, #1b3a6b, #2563eb)" }}
            >
              View All Recruiters
            </button>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Placement Process</h3>
            <p className="text-sm text-gray-500 mb-8">A proven process to help you achieve your dream career</p>

            {/* Desktop — horizontal with ArrowRight between each step */}
            <div className="hidden md:flex items-start">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.title} {...step} isLast={i === processSteps.length - 1} />
              ))}
            </div>

            {/* Mobile — vertical with downward arrow */}
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

      {/* ── STUDENT SUCCESS STORIES ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Student Success Stories</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Hear from our students who achieved their career goals with us</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

            {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="rounded-2xl px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-0 justify-between"
          style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1b3a6b 100%)" }}
        >
          {/* Icon + text */}
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
                Join Alliance Degree College and take the first Step towards a successful future.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <button
            className="shrink-0 px-7 py-3 rounded-xl text-sm font-bold text-gray-900 shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200 whitespace-nowrap"  onClick={()=>{navigate("/applynow")}}
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}