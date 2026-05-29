import { FileText, User, ShieldCheck, CreditCard, ClipboardList, AlertCircle, RefreshCw, Mail, GraduationCap, Users, TrendingUp, Trophy, Phone, ChevronRight, UserCircle2, } from "lucide-react";
const NAVY = "#0A1F44";
const GOLD = "#F5A623";
const stats = [
  { icon: GraduationCap, value: "5000+", label: "Students Trained" },
  { icon: Users, value: "100+", label: "Recruiters" },
  { icon: TrendingUp, value: "20 LPA", label: "Highest Package" },
  { icon: Trophy, value: "23+", label: "Years of Excellence" },
];
const terms = [
  { icon: FileText, title: "1. Acceptance of Terms", body: "By accessing and using the website of Alliance Degree College, you agree to comply with and be bound by these Terms and Conditions.", },
  { icon: User, title: "2. Use of Website", body: "You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of or restrict the use and enjoyment of this site by any third party.", },
  { icon: ShieldCheck, title: "3. Intellectual Property", body: "All content on this website, including text, graphics, logos, images, and design, is the property of Alliance Degree College and is protected by intellectual property laws.", },
  { icon: CreditCard, title: "4. Admissions and Fees", body: "All admissions are subject to eligibility criteria. Fees once paid are non-refundable except as per the college refund policy.", },
  { icon: ClipboardList, title: "5. Student Responsibilities", body: "Students are expected to maintain discipline, attend classes regularly, and adhere to the rules and regulations of the college.", },
  { icon: AlertCircle, title: "6. Limitation of Liability", body: "Alliance Degree College shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.", },
  { icon: RefreshCw, title: "7. Changes to Terms", body: "We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page with the updated effective date.", },
];
const galleryImages = [
  { src: "https://alliancemgt.org/Alliance%20Images/Alliance%20college%20(2).png", alt: "College Building", },
  { src: "https://alliancemgt.org/Alliance%20Images/Img30.jpeg", alt: "Campus Life", },
  { src: "https://alliancemgt.org/Alliance%20Images/Img35.jpeg", alt: "Students", },
  { src: "https://alliancemgt.org/Alliance%20Images/Img32.jpeg", alt: "Classroom", },
  { src: "https://alliancemgt.org/Alliance%20Images/Img27.jpeg", alt: "Library", },
  { src: "https://alliancemgt.org/Alliance%20Images/Img4.jpeg", alt: "Lab", },
];
export default function Terms() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative min-h-[320px] sm:min-h-[380px] flex items-end overflow-hidden">
        <img src="https://alliancemgt.org/Alliance%20Images/alliancebg.avif" alt="Alliance Degree College campus" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,31,68,0.93) 0%, rgba(10,31,68,0.78) 45%, rgba(10,31,68,0.25) 100%)", }} />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav className="flex items-center gap-1 mb-4 text-white/70 text-sm flex-wrap">
            <span>Home</span>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white font-medium">Terms and Conditions</span>
          </nav>
          <h1 className="font-extrabold text-white leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }} >
            Terms and Conditions
          </h1>
          <p className="text-white/85 max-w-md leading-relaxed text-sm sm:text-base">
            These terms and conditions outline the rules and regulations for
            the use of Alliance Degree College website and services.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
        <div className="rounded-xl shadow-xl border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-0 overflow-hidden bg-white">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className={`flex items-center gap-3 sm:gap-4 px-5 py-5 sm:py-6 ${i !== stats.length - 1 ? "border-r border-gray-100" : ""} ${i >= 2 ? "border-t border-gray-100 sm:border-t-0" : ""} `}>
              <Icon size={26} style={{ color: NAVY }} className="flex-shrink-0" />
              <div>
                <p className="font-bold leading-none mb-0.5" style={{ color: NAVY, fontSize: "clamp(1.1rem, 3vw, 1.45rem)" }}>
                  {value}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-4">
          {terms.map(({ icon: Icon, title, body }, i) => (
            <div key={i} className="flex items-start gap-4 sm:gap-6 bg-white border border-gray-100 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                <Icon size={22} style={{ color: "#1D4ED8" }} />
              </div>
              <div>
                <h3 className="font-bold mb-1.5 text-gray-900" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {body}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-4 sm:gap-6 rounded-xl p-5 sm:p-6" style={{ background: "#F0F4FF" }}>
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ background: "#1D4ED8" }}>
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold mb-1.5 text-gray-900" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                Contact Us
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at{" "}
                <a href="mailto:alliancesince2003@gmail.com" className="text-blue-600 underline underline-offset-2" >
                  alliancesince2003@gmail.com
                </a>{" "}
                or call us at{" "}
                <a href="tel:08912951555" className="text-gray-700 font-medium">
                  8885066502
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="font-bold text-gray-900 mb-2" style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)" }} >
          Our Campus Gallery
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Take a glimpse at life on the Alliance campus.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
              <img src={img.src} alt={img.alt} className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 pb-10 max-w-6xl mx-auto">
        <div className="rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10" style={{ background: NAVY }} >
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center" style={{ borderColor: GOLD }} >
              <UserCircle2 size={32} style={{ color: GOLD }} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1" style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>
                Questions About Our Terms?
              </h3>
              <p className="text-white/65 text-sm sm:text-base max-w-sm">
                We're here to help you understand our policies and ensure a
                smooth experience with Alliance Degree College.
              </p>
            </div>
          </div>

          <a href="tel:8885066502" className="flex-shrink-0 flex items-center gap-2 font-bold text-gray-900 rounded-lg px-7 py-3 sm:py-3.5 transition-opacity hover:opacity-90 whitespace-nowrap" style={{ background: GOLD, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", }} >
            <Phone size={16} />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}