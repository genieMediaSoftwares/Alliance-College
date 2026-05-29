import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  FaLaptopCode,
  FaUsers,
  FaBriefcase, FaLock
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  Home,
  ChevronRight,
  User,
  Phone,
  BookOpen,
  MessageSquare,
  Send,
  Check, PhoneCall
} from "lucide-react";

function usePoppins() {
  useEffect(() => {
    if (document.getElementById("poppins-font")) return;
    const l = document.createElement("link");
    l.id = "poppins-font";
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(l);
  }, []);
}

const C = {
  primary: "#062B6B",
  dark: "#041F4D",
  bg: "#F8FAFC",
  border: "#E5E7EB",
  textDark: "#111827",
  textGray: "#6B7280",
  white: "#FFFFFF",
  green: "#16A34A",
  lightBlue: "#EFF6FF",
};

const courses = [
  "BHM (Hons) — Bachelor of Hotel Management (Honours)",
  "BBA (Hons)",
  "MBA",
  "Diploma in Hotel Management",
  "Intermediate Diploma in Hotel Management",
  "PGDHM — Post Graduate Diploma in Hotel Management",
  "BCA — Bachelor of Computer Applications",
  "B.Com — Bachelor of Commerce",
  "Diploma in Travel & Tourism Management",
];

function IconInput({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon
        size={15}
        color={C.textGray}
        strokeWidth={2}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
      />
      {children}
    </div>
  );
}

function SuccessScreen({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: `${C.green}18` }}
      >
        <Check size={36} color={C.green} strokeWidth={2.5} />
      </div>
      <h2
        className="font-extrabold text-2xl sm:text-3xl mb-3"
        style={{ color: C.textDark }}
      >
        Application Submitted!
      </h2>
      <p
        className="text-[14px] mb-2"
        style={{ color: C.textGray, maxWidth: 400 }}
      >
        Thank you for applying to Alliance College of Hotel Management.
      </p>
      <p
        className="text-[13px] mb-8"
        style={{ color: C.textGray, maxWidth: 400 }}
      >
        Our admissions team will contact you within 1–2 working days.
      </p>
      <button
        onClick={onReset}
        className="px-8 py-3 rounded-xl font-bold text-[14px] transition-all hover:opacity-90"
        style={{ backgroundColor: C.primary, color: C.white }}
      >
        Submit Another
      </button>
    </div>
  );
}


export default function ApplyNow() {
  usePoppins();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    student_name: "",
    student_mobile: "",
    parent_mobile: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await emailjs.send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       formData,
  //       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //     );

  //     toast.success(
  //       "Application submitted successfully! We'll be in touch soon.",
  //       {
  //         position: "top-right",
  //         autoClose: 4500,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         style: { fontFamily: "'Poppins',sans-serif", fontSize: 13 },
  //       }
  //     );

  //     setFormData({
  //       student_name: "",
  //       student_mobile: "",
  //       parent_mobile: "",
  //       course: "",
  //       message: "",
  //     });

  //     setSubmitted(true);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(
  //       "Failed to submit. Please try again or call us directly.",
  //       {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         style: { fontFamily: "'Poppins',sans-serif", fontSize: 13 },
  //       }
  //     );
  //   }

  //   setLoading(false);
  // };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   setLoading(true);

//   try {

//     const response = await fetch(
//       "https://alliancemgt.org/api/send-application.php",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     const data = await response.json();

//     if (data.success) {

//       toast.success(
//         "Application submitted successfully!"
//       );

//       setFormData({
//         student_name: "",
//         student_mobile: "",
//         parent_mobile: "",
//         course: "",
//         message: "",
//       });

//       setSubmitted(true);

//     } else {
//       toast.error("Submission failed");
//     }

//   } catch (error) {

//     console.log(error);

//     toast.error("Server error");
//   }

//   setLoading(false);
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {

    const response = await fetch(
      "https://alliancemgt.org/api/send-application.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {

      toast.success(
        "Application submitted successfully!"
      );

      setFormData({
        student_name: "",
        student_mobile: "",
        parent_mobile: "",
        course: "",
        message: "",
      });

      setSubmitted(true);

    } else {

      toast.error("Submission failed");
    }

  } catch (error) {

    console.log(error);

    toast.error("Server error");

  } finally {

    setLoading(false);
  }
};
  const handleReset = () => {
    setFormData({
      student_name: "",
      student_mobile: "",
      parent_mobile: "",
      course: "",
      message: "",
    });
    setSubmitted(false);
  };

  const inputCls =
    "w-full border border-gray-200 rounded-xl py-[11px] text-[13px] outline-none " +
    "transition-all placeholder-gray-400 focus:border-[#062B6B] " +
    "focus:ring-2 focus:ring-[#062B6B]/10 bg-white";

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Poppins',sans-serif", backgroundColor: C.bg }}
    >
      <ToastContainer />

      <section className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <img
          src="https://alliancemgt.org/Alliance%20Images/alliancebg.avif"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,rgba(2,29,75,0.93) 45%,rgba(6,43,107,0.5) 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pb-14">
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1"
            >
              <Home size={13} color="#9CA3AF" />
              <span className="text-gray-400 text-xs">Home</span>
            </button>
            <ChevronRight size={13} color="#9CA3AF" />
            <span className="text-gray-300 text-xs">Apply Now</span>
          </nav>

          <h1
            className="font-extrabold text-white mb-3 leading-tight"
            style={{ fontSize: "clamp(2rem,5vw,2.75rem)" }}
          >
            Apply Now
          </h1>
          <p
            className="text-gray-300 leading-relaxed"
            style={{ fontSize: "clamp(0.85rem,2vw,1rem)", maxWidth: 420 }}
          >
            Fill in your details below and our admissions team will reach out
            within 1–2 working days.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div
          className="rounded-2xl border shadow-sm overflow-hidden"
          style={{ backgroundColor: C.white, borderColor: C.border }}
        >
          {submitted ? (
            <SuccessScreen onReset={handleReset} />
          ) : (
            <>
              <div
                className="flex items-center gap-4 px-6 sm:px-8 py-5 border-b"
                style={{ borderColor: C.border }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: C.lightBlue }}
                >
                  <BookOpen size={22} color={C.primary} strokeWidth={1.8} />
                </div>
                <div>
                  <h2
                    className="font-bold text-[16px] sm:text-[18px]"
                    style={{ color: C.textDark }}
                  >
                    Admission Enquiry
                  </h2>
                  <p
                    className="text-[12px] sm:text-[13px] mt-0.5"
                    style={{ color: C.textGray }}
                  >
                    Alliance College of Hotel Management, Visakhapatnam
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="px-6 sm:px-8 py-7 flex flex-col gap-5"
              >
                <div>
                  <label
                    className="block text-[13px] font-semibold mb-2"
                    style={{ color: C.textDark }}
                  >
                    Student Name{" "}
                    <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <IconInput icon={User}>
                    <input
                      type="text"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      placeholder="Enter student full name"
                      required
                      className={`${inputCls} pl-9 pr-4`}
                    />
                  </IconInput>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-[13px] font-semibold mb-2"
                      style={{ color: C.textDark }}
                    >
                      Student Mobile No.{" "}
                      <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <IconInput icon={Phone}>
                      <input
                        type="tel"
                        name="student_mobile"
                        value={formData.student_mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        maxLength={10}
                        className={`${inputCls} pl-9 pr-4`}
                      />
                    </IconInput>
                  </div>

                  <div>
                    <label
                      className="block text-[13px] font-semibold mb-2"
                      style={{ color: C.textDark }}
                    >
                      Parent Mobile No.{" "}
                      <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <IconInput icon={Phone}>
                      <input
                        type="tel"
                        name="parent_mobile"
                        value={formData.parent_mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        maxLength={10}
                        className={`${inputCls} pl-9 pr-4`}
                      />
                    </IconInput>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[13px] font-semibold mb-2"
                    style={{ color: C.textDark }}
                  >
                    Course Interested In{" "}
                    <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <div className="relative">
                    <BookOpen
                      size={15}
                      color={C.textGray}
                      strokeWidth={2}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className={`${inputCls} pl-9 pr-9 appearance-none cursor-pointer`}
                      style={{
                        color: formData.course ? C.textDark : "#9CA3AF",
                      }}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option
                          key={course}
                          value={course}
                          style={{ color: C.textDark }}
                        >
                          {course}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.textGray}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[13px] font-semibold mb-2"
                    style={{ color: C.textDark }}
                  >
                    Message{" "}
                    <span style={{ color: C.textGray, fontWeight: 400 }}>
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={15}
                      color={C.textGray}
                      strokeWidth={2}
                      className="absolute left-3 top-3.5 pointer-events-none"
                    />
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any questions or specific requirements?"
                      className={`${inputCls} pl-9 pr-4 resize-none`}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FaLock size={10} color="#062B6B" className="mt-[2px]" />

                  <p
                    className="text-[11px] leading-relaxed m-0"
                    style={{ color: C.textGray }}
                  >
                    Your information is safe with us and will only be used for
                    admission enquiry purposes.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5
                             rounded-xl font-bold text-[14px] transition-all
                             hover:opacity-90 active:scale-[0.98]
                             disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  style={{ backgroundColor: C.primary, color: C.white }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>

              <div
                className="px-6 sm:px-8 py-4 border-t flex flex-col sm:flex-row
                           items-center justify-between gap-3"
                style={{ backgroundColor: "#F8FAFC", borderColor: C.border }}
              >
                <p className="text-[12px]" style={{ color: C.textGray }}>
                  Need help?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="font-semibold underline underline-offset-2"
                    style={{ color: C.primary }}
                  >
                    Talk to a counselor
                  </button>
                </p>
                <p className="text-[12px] flex items-center gap-2" style={{ color: C.textGray }}>
                  <PhoneCall size={14} color="#062B6B" />

                  <a
                    href="tel:9848127344"
                    className="font-semibold"
                    style={{ color: C.primary }}
                  >
                    9848127344
                  </a>
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            {
              icon: <FaLaptopCode size={22} color="#062B6B" />,
              label: "Industry-Focused Curriculum",
            },

            {
              icon: <FaUsers size={22} color="#062B6B" />,
              label: "Experienced Faculty",
            },

            {
              icon: <FaBriefcase size={22} color="#062B6B" />,
              label: "100% Placement Assistance",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center rounded-xl border py-3 px-2"
              style={{
                backgroundColor: C.white,
                borderColor: C.border,
              }}
            >
              <div className="mb-2">
                {icon}
              </div>

              <p
                className="text-[10px] sm:text-[11px] font-semibold leading-snug"
                style={{ color: C.textDark }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}