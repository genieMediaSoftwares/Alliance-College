
import { GraduationCap, Users, Award, CheckCircle, Home, ChevronRight } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "20+",   label: "Programs" },
  { icon: Users,         value: "4",     label: "Faculties" },
  { icon: Award,         value: "5000+", label: "Students Trained" },
  { icon: CheckCircle,   value: "100%",  label: "Placement Assistance" },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 260 }}>
      <img
        src="https://alliancemgt.org/Alliance%20Images/alliancebg.avif"
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(3, 29, 73, 0.93) 48%, rgba(6,43,107,0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
        <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
          <Home size={13} color="#9CA3AF" />
          <span className="text-gray-400 text-xs">Home</span>
          <ChevronRight size={13} color="#9CA3AF" />
          <span className="text-gray-300 text-xs">Courses</span>
        </nav>

        <div className="max-w-sm sm:max-w-md">
          <h1 className="font-extrabold text-white mb-3 leading-tight"
            style={{ fontSize: "clamp(2rem,5vw,2.75rem)" }}>
            Our Courses
          </h1>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Industry-focused programs designed to equip you with the skills and knowledge to excel
            in your career.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pb-6 border-t border-white/10 pt-6 max-w-3xl">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <s.icon size={18} color="white" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-white font-extrabold text-lg sm:text-xl leading-none">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs mt-0.5 max-w-5xl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
