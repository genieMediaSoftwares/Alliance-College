import { MessageCircle, Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function CounselorCTA() {
  const navigate=useNavigate()
  return (
    <div className=" bg-[#F0F5FF] border border-[#D1E3FF] rounded-2xl px-6 py-6 sm:py-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
      <div className=" w-16 h-16 rounded-full bg-[#062B6B]/10 flex items-center justify-center flex-shrink-0">
        <BookOpen size={30} color="#062B6B" strokeWidth={1.7} />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-[#111827] text-lg sm:text-xl leading-tight">
          Not Sure Which Course is Right for You?
        </h3>
        <p className="text-[#6B7280] text-sm mt-1">
          Our academic counselors can help you choose the perfect program for your career goals.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
        <button className=" flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-[#062B6B] text-[#062B6B] hover:bg-[#062B6B] hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap " onClick={()=>{navigate("/contact")}}>
          <MessageCircle size={15} strokeWidth={2} />
          Talk to Counselor
        </button>
          <a href="/Brochure.pdf" download="Brochure.pdf">
        <button className=" flex items-center justify-center gap-2 w-full sm:w-auto bg-[#F4B400] hover:bg-[#e0a500] text-[#111827] font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap shadow-sm">
          <Download size={15} strokeWidth={2.2} />
          Download Brochure
        </button>
        </a>
      </div>
    </div>
  );
}