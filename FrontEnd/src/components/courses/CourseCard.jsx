// src/components/courses/CourseCard.jsx
import { ArrowRight, Clock, Monitor } from "lucide-react";

const colorStyles = {
  blue:   "bg-blue-100 text-blue-700",
  green:  "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
  cyan:   "bg-cyan-100 text-cyan-700",
  pink:   "bg-pink-100 text-pink-700",
  indigo: "bg-indigo-100 text-indigo-700",
};

const titleColorStyles = {
  blue:   "text-blue-700",
  green:  "text-green-700",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  purple: "text-purple-700",
  cyan:   "text-cyan-700",
  pink:   "text-pink-600",
  indigo: "text-indigo-700",
};

const linkColorStyles = {
  blue:   "text-blue-700 hover:text-blue-800",
  green:  "text-green-700 hover:text-green-800",
  orange: "text-orange-600 hover:text-orange-700",
  yellow: "text-yellow-600 hover:text-yellow-700",
  purple: "text-purple-700 hover:text-purple-800",
  cyan:   "text-cyan-700 hover:text-cyan-800",
  pink:   "text-pink-600 hover:text-pink-700",
  indigo: "text-indigo-700 hover:text-indigo-800",
};

export default function CourseCard({ title, subtitle, description, duration, mode, icon: Icon, color }) {
  const iconCls  = colorStyles[color]  || colorStyles.blue;
  const titleCls = titleColorStyles[color] || "text-[#062B6B]";
  const linkCls  = linkColorStyles[color]  || "text-[#062B6B]";

  return (
    <div className="
      bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6
      flex flex-col gap-3
      hover:shadow-lg hover:-translate-y-0.5
      transition-all duration-300 group cursor-pointer
    ">
      {/* Icon + titles row */}
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconCls}`}>
          <Icon size={22} strokeWidth={1.9} />
        </div>
        <div className="min-w-0">
          <h3 className={`font-bold text-base leading-tight ${titleCls}`}>{title}</h3>
          <p className="text-[#6B7280] text-[11px] mt-0.5 leading-snug">{subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{description}</p>

      {/* Duration | Mode */}
      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
        <Clock size={12} strokeWidth={2} />
        <span>Duration: {duration}</span>
        <span className="text-gray-300">|</span>
        <Monitor size={12} strokeWidth={2} />
        <span>{mode}</span>
      </div>

      {/* View Details */}
      <button className={`
        flex items-center gap-1.5 text-sm font-semibold mt-1
        transition-all duration-200 group-hover:gap-2.5
        ${linkCls}
      `}>
        View Details
        <ArrowRight size={14} strokeWidth={2.2} />
      </button>
    </div>
  );
}
