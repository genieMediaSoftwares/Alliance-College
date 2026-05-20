import { useEffect, useState } from "react";
import HeroBanner   from "../components/courses/HeroBanner";
import ProgramTabs  from "../components/courses/ProgramsTab";
import CourseGrid   from "../components/courses/CourseGrid";
import CounselorCTA from "../components/courses/CounselorCTA";

function usePoppins() {
  useEffect(() => {
    if (document.getElementById("poppins-font")) return;
    const link   = document.createElement("link");
    link.id      = "poppins-font";
    link.rel     = "stylesheet";
    link.href    =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
}

export default function CoursesPage() {
  usePoppins();
  const [activeTab, setActiveTab] = useState("All Programs");

  return (
    <div
      className="bg-[#F8FAFC] min-h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
   
      <HeroBanner />

      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8">
            <h2
              className="font-bold text-[#111827]"
              style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)" }}
            >
              Explore Our Programs
            </h2>
          </div>

          <div className="mb-7">
            <ProgramTabs active={activeTab} onChange={setActiveTab} />
          </div>

          <CourseGrid activeTab={activeTab} />

          <div className="mt-10">
            <CounselorCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
