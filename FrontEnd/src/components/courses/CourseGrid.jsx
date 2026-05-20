import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Users,
  ChefHat,
  ScrollText,
  Laptop,
  Building2,
  UtensilsCrossed,
  Plane,
  BookOpen,
} from "lucide-react";
import CourseCard from "./CourseCard";

export const courses = [
  {
    title: "BHM (Hons)",
    subtitle: "Bachelor of Hotel Management (Honours)",
    description:
      "A 4-year honours degree covering front office, F&B, housekeeping, and hospitality management — built for five-star careers.",
    duration: "4 Years",
    mode: "Full Time",
    icon: UtensilsCrossed,
    color: "pink",
    category: "Hotel Management",
    path: "/courses/bhm",
  },
  {
    title: "BBA (Hons)",
    subtitle: "Bachelor of Business Administration (Honours)",
    description:
      "A 3-year programme covering marketing, finance, HR, and business strategy — ideal for future entrepreneurs and corporate leaders.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Users,
    color: "green",
    category: "Business & Management",
    path: "/courses/bba",
  },
  {
    title: "MBA / PGDM",
    subtitle: "Master of Business Administration / PG Diploma in Management",
    description:
      "A 2-year postgraduate programme developing strategic leadership, business acumen, and executive skills for top corporate roles.",
    duration: "2 Years",
    mode: "Full Time",
    icon: GraduationCap,
    color: "blue",
    category: "Business & Management",
    path: "/courses/mba",
  },
  {
    title: "Diploma in HM",
    subtitle: "Diploma in Hotel Management",
    description:
      "A 1-year job-ready diploma covering core hotel operations, guest services, food production, and front office fundamentals.",
    duration: "1 Year",
    mode: "Full Time",
    icon: ScrollText,
    color: "yellow",
    category: "Hotel Management",
    path: "/courses/diploma-hm",
  },
  {
    title: "Intermediate in HM",
    subtitle: "Intermediate Diploma in Hotel Management",
    description:
      "A 2-year programme advancing skills in F&B service, accommodation operations, event management, and hospitality supervision.",
    duration: "2 Years",
    mode: "Full Time",
    icon: BookOpen,
    color: "teal",
    category: "Hotel Management",
    path: "/courses/intermediate-hm",
  },
  {
    title: "PGDHM",
    subtitle: "Post Graduate Diploma in Hotel Management",
    description:
      "A 2-year postgraduate diploma for graduates, focused on luxury hotel management, revenue strategy, and advanced hospitality leadership.",
    duration: "2 Year",
    mode: "Full Time",
    icon: ChefHat,
    color: "orange",
    category: "Hospitality",
    path: "/courses/pgdhm",
  },
  {
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    description:
      "A 3-year degree in programming, web development, database management, and cloud computing — a launchpad for IT careers.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Laptop,
    color: "purple",
    category: "Computer Applications",
    path: "/courses/bca",
  },
  {
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    description:
      "A 3-year commerce degree covering accounting, taxation, business law, and finance — ideal for CA pathways and corporate finance roles.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Building2,
    color: "cyan",
    category: "Commerce",
    path: "/courses/bcom",
  },
  {
    title: "Diploma — Travel & Tourism",
    subtitle: "Diploma in Travel & Tourism Management",
    description:
      "A 1-year diploma covering airline ticketing (GDS/Amadeus), tour operations, visa assistance, and destination management.",
    duration: "1 Year",
    mode: "Full Time",
    icon: Plane,
    color: "indigo",
    category: "Travel & Tourism",
    path: "/courses/travel-tourism",
  },
];

export const courseCategories = [
  "All Programs",
  ...Array.from(new Set(courses.map((c) => c.category))),
];

export default function CourseGrid({ activeTab }) {
  const navigate = useNavigate();

  const filtered =
    activeTab === "All Programs"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
      {filtered.map((course, i) => (
        <div
          key={i}
          onClick={() => navigate(course.path)}
          className="cursor-pointer"
        >
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
}