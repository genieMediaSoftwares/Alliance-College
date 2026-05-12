// // src/components/courses/CourseGrid.jsx
// import {
//   GraduationCap, Users, ChefHat, ScrollText,
//   Laptop, Building2, UtensilsCrossed, Plane,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import CourseCard from "./CourseCard";

// export const courses = [
//   {
//     title: "MBA",
//     subtitle: "Master of Business Administration",
//     description:
//       "Build leadership skills and business acumen for a successful career in management.",
//     duration: "2 Years",
//     mode: "Full Time",
//     icon: GraduationCap,
//     color: "blue",
//     category: "Management",
//   },
//   {
//     title: "BBA",
//     subtitle: "Bachelor of Business Administration",
//     description:
//       "Gain foundational knowledge in business and management principles.",
//     duration: "3 Years",
//     mode: "Full Time",
//     icon: Users,
//     color: "green",
//     category: "Management",
//   },
//   {
//     title: "Hotel Management",
//     subtitle: "B.Sc in Hotel & Hospitality Management",
//     description:
//       "Learn the art of hospitality and management in the global tourism industry.",
//     duration: "3 Years",
//     mode: "Full Time",
//     icon: ChefHat,
//     color: "orange",
//     category: "Hospitality",
//   },
//   {
//     title: "Diploma Courses",
//     subtitle: "Multiple Diploma Programs",
//     description:
//       "Short-term diploma programs designed to enhance your skills and employability.",
//     duration: "1 - 2 Years",
//     mode: "Full Time",
//     icon: ScrollText,
//     color: "yellow",
//     category: "Business",
//   },
//   {
//     title: "BCA",
//     subtitle: "Bachelor of Computer Applications",
//     description:
//       "Develop software skills and technical knowledge for a dynamic IT career.",
//     duration: "3 Years",
//     mode: "Full Time",
//     icon: Laptop,
//     color: "purple",
//     category: "Computer Applications",
//   },
//   {
//     title: "B.Com",
//     subtitle: "Bachelor of Commerce",
//     description:
//       "Build a strong foundation in commerce, finance, and accounting principles.",
//     duration: "3 Years",
//     mode: "Full Time",
//     icon: Building2,
//     color: "cyan",
//     category: "Business",
//   },
//   {
//     title: "BHM",
//     subtitle: "Bachelor of Hotel Management",
//     description:
//       "Comprehensive program covering hospitality, management, and customer service.",
//     duration: "4 Years",
//     mode: "Full Time",
//     icon: UtensilsCrossed,
//     color: "pink",
//     category: "Hotel Management",
//   },
//   {
//     title: "Diploma in Travel & Tourism",
//     subtitle: "Diploma Program",
//     description:
//       "Explore the world of travel and tourism with our industry-oriented diploma program.",
//     duration: "1 Year",
//     mode: "Full Time",
//     icon: Plane,
//     color: "indigo",
//     category: "Arts & Science",
//   },
// ];

// export default function CourseGrid({ activeTab }) {
//   const filtered =
//     activeTab === "All Programs"
//       ? courses
//       : courses.filter((c) => c.category === activeTab);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//       {filtered.map((course, i) => (
//         <CourseCard key={i} {...course} />
//       ))}
//     </div>
//   );
// }




// src/components/courses/CourseGrid.jsx
import { useNavigate } from "react-router-dom";
import {
  GraduationCap, Users, ChefHat, ScrollText,
  Laptop, Building2, UtensilsCrossed, Plane,
} from "lucide-react";
import CourseCard from "./CourseCard";

export const courses = [
  {
    title: "MBA",
    subtitle: "Master of Business Administration",
    description: "Build leadership skills and business acumen for a successful career in management.",
    duration: "2 Years",
    mode: "Full Time",
    icon: GraduationCap,
    color: "blue",
    category: "Management",
    path: "/courses/mba",
  },
  {
    title: "BBA",
    subtitle: "Bachelor of Business Administration",
    description: "Gain foundational knowledge in business and management principles.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Users,
    color: "green",
    category: "Management",
    path: "/courses/bba",
  },
  {
    title: "Hotel Management",
    subtitle: "B.Sc in Hotel & Hospitality Management",
    description: "Learn the art of hospitality and management in the global tourism industry.",
    duration: "3 Years",
    mode: "Full Time",
    icon: ChefHat,
    color: "orange",
    category: "Hospitality",
    path: "/courses/hotel-management",
  },
  {
    title: "Diploma Courses",
    subtitle: "Multiple Diploma Programs",
    description: "Short-term diploma programs designed to enhance your skills and employability.",
    duration: "1 - 2 Years",
    mode: "Full Time",
    icon: ScrollText,
    color: "yellow",
    category: "Business",
    path: "/courses/diploma",
  },
  {
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    description: "Develop software skills and technical knowledge for a dynamic IT career.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Laptop,
    color: "purple",
    category: "Computer Applications",
    path: "/courses/diploma",
  },
  {
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    description: "Build a strong foundation in commerce, finance, and accounting principles.",
    duration: "3 Years",
    mode: "Full Time",
    icon: Building2,
    color: "cyan",
    category: "Business",
    path:"/courses/diploma",
  },
  {
    title: "BHM",
    subtitle: "Bachelor of Hotel Management",
    description: "Comprehensive program covering hospitality, management, and customer service.",
    duration: "4 Years",
    mode: "Full Time",
    icon: UtensilsCrossed,
    color: "pink",
    category: "Hotel Management",
    path: "/courses/diploma",
  },
  {
    title: "Diploma in Travel & Tourism",
    subtitle: "Diploma Program",
    description: "Explore the world of travel and tourism with our industry-oriented diploma program.",
    duration: "1 Year",
    mode: "Full Time",
    icon: Plane,
    color: "indigo",
    category: "Arts & Science",
    path: "/courses/diploma",
  },
];

export default function CourseGrid({ activeTab }) {
  const navigate = useNavigate();

  const filtered =
    activeTab === "All Programs"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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