import {
    FaUserGraduate,
    FaDownload,
    FaUniversity,
    FaChalkboardTeacher,
    FaHandshake,
    FaGraduationCap,
    FaUsers,
    FaChartLine,
    FaTrophy,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
    { icon: <FaGraduationCap className="text-yellow-400 text-xl sm:text-2xl md:text-3xl" />, value: "5000+", label: "Students Trained" },
    { icon: <FaUsers className="text-yellow-400 text-xl sm:text-2xl md:text-3xl" />, value: "100+", label: "Recruiters" },
    { icon: <FaChartLine className="text-yellow-400 text-xl sm:text-2xl md:text-3xl" />, value: "20 LPA", label: "Highest Package" },
    { icon: <FaTrophy className="text-yellow-400 text-xl sm:text-2xl md:text-3xl" />, value: "23+", label: "Years of Excellence" },
];

const badges = [
    { icon: <FaUniversity className="text-[#1a2e6e] text-base sm:text-lg md:text-xl" />, title: "Affiliated to", subtitle: "Andhra University" },
    { icon: <FaHandshake className="text-[#1a2e6e] text-base sm:text-lg md:text-xl" />, title: "100%", subtitle: "Placement Assistance" },
    { icon: <FaChalkboardTeacher className="text-[#1a2e6e] text-base sm:text-lg md:text-xl" />, title: "Industry", subtitle: "Expert Faculty" },
];

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <section className="relative w-full min-h-[220px] sm:min-h-[420px] md:min-h-[400px] bg-gradient-to-r from-white via-blue-50 to-blue-100 overflow-visible font-sans pb-24 sm:pb-28 md:pb-28">

            {/* Background Layer */}
            <div className="absolute inset-0">

                {/* Desktop: image on right 58% | Mobile: image full width */}
                <div
                    className="absolute top-0 right-0 w-full md:w-[58%] h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://alliancemgt.org/Alliance%20Images/herosec.png')",
                    }}
                />

                {/* Desktop: original gradient | Mobile: heavier overlay so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/90 via-[65%] to-[#f8fbff]/50 md:via-[#f8fbff]/85 md:via-35% md:to-transparent" />

                <div className="absolute left-[42%] top-0 h-full w-[18%] bg-white/40 blur-3xl" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="max-w-xl mx-auto md:mx-0">
                    <p className="text-gray-700 text-base sm:text-lg font-medium mb-1 text-center md:text-left">
                        Build Your Career in
                    </p>
                    <h1 className="text-[#1a2e6e] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 sm:mb-4 text-center md:text-left">
                        Hotel Management <br />
                         <div className="ml-[30px] sm:ml-[120px] md:ml-[170px]">
        &amp;
    </div>
                        Business Management
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-7 max-w-sm mx-auto md:mx-0 text-center md:text-left">
                        Industry-ready programs with practical training,<br className="hidden sm:block" />
                        internships &amp; 100% placement assistance.
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
                        <button
                            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#1a2e6e] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm shadow-md transition-colors duration-200"
                            onClick={() => { navigate("/applynow"); }}
                        >
                            <FaUserGraduate className="text-sm sm:text-base" />
                            Apply Now
                        </button>
                        
                        <a    href="/Brochure.pdf"
                            download="Brochure.pdf"
                            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1a2e6e] font-semibold border border-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm shadow-sm transition-colors duration-200 no-underline"
                        >
                            <FaDownload className="text-sm sm:text-base" />
                            Download Brochure
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
                        {badges.map((b, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="text-[#1a2e6e]">{b.icon}</div>
                                <div>
                                    <p className="text-[10px] sm:text-xs font-bold text-[#1a2e6e] leading-tight">{b.title}</p>
                                    <p className="text-[9px] sm:text-xs text-gray-500 leading-tight">{b.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="absolute bottom-[-40px] md:bottom-[-60px] left-0 right-0 flex justify-center md:justify-end pb-4 sm:pb-6 z-20 px-3 md:px-10">
                <div className="
                    bg-[#1a2e6e] rounded-lg sm:rounded-xl px-3 py-2
                    grid grid-cols-4 gap-2 sm:gap-3
                    w-full sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-3xl
                    shadow-xl
                ">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="text-yellow-400 text-lg sm:text-xl">
                                {s.icon}
                            </div>
                            <p className="text-white font-bold text-sm sm:text-base mt-0.5">
                                {s.value}
                            </p>
                            <p className="text-blue-200 text-[9px] sm:text-[10px] leading-tight">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}