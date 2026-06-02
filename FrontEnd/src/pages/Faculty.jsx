import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

const FACULTY= [
  {
    id: 1,
    name: "Dr. Kolla Satish Kumar",
    designation: "Secretary & Correspondent",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/fac1.png",
  },
  {
    id: 2,
    name: "Mr. Kartikeswar Panda",
    designation: "Academic Director",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/fac22.png",
  },
  {
    id: 3,
    name: "B Srinivasa Rao",
    designation: "Principal",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/fac3..png",
  },
  {
    id: 4,
    name: "M Jaya Sree",
    designation: "Vice Principal (Business Management)",
    department: "Business Management",
    image: "https://alliancemgt.org/Alliance%20Images/fac4.png",
  },
  
  {
    id: 5,
    name: "A Srinivas Rao",
    designation: "Vice Principal (Hotel Management)",
    department: "Hotel Management",
    image: "https://alliancemgt.org/Alliance%20Images/Asrinivas.jpg",
  },
  {
    id: 6,
    name: "V S V Srinivas",
    designation: "Senior Administrative Manager & Associate Professor",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/Faculty%205.jpeg",
  },
  {
    id: 7,
    name: "Jagarapu K V Sivakumar",
    designation: "Administrative Officer & Accounts Manager",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/f7.jpg",
  },
  {
    id: 8,
    name: "Y Ravi Kumar",
    designation: "Assistant Manager Administration",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/f8.jpg",
  },
  {
    id: 9,
    name: "P Ram Charan",
    designation: "Head of Department - Food Production",
    department: "Food Production",
    image: "https://alliancemgt.org/Alliance%20Images/f9.jpeg",
  },
  {
    id: 10,
    name: "P.V. Rajesh",
    designation: "Head of Department - Food & Beverage Service",
    department: "Food & Beverage Service",
    image: "https://alliancemgt.org/Alliance%20Images/f10.jpg",
  },
  {
    id: 11,
    name: "MD.A.R. Mujahid",
    designation: "Food Production Faculty",
    department: "Food Production",
    image: "https://alliancemgt.org/Alliance%20Images/f11.jpeg",
  },
  {
    id: 12,
    name: "A Pawan Kumar",
    designation: "Food Production Faculty",
    department: "Food Production",
    image: "https://alliancemgt.org/Alliance%20Images/f12.jpg",
  },
  {
    id: 13,
    name: "Chef B. Manikanta Sriraj",
    designation: "Food Production Faculty",
    department: "Food Production",
    image: "https://alliancemgt.org/Alliance%20Images/f13.jpeg",
  },
  {
    id: 14,
    name: "Allamraju S Narayana Teja",
    designation: "Management Faculty",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f14.jpeg",
  },
  {
    id: 15,
    name: "T Narendra",
    designation: "Management Faculty & Training Placement Officer",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f15.jpg",
  },
  {
    id: 16,
    name: "Lanka Keerthi",
    designation: "Management Studies Faculty",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f16.jpeg",
  },
  {
    id: 17,
    name: "Matta Nagalakshmi",
    designation: "Management Studies Faculty",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f17.jpeg",
  },
  {
    id: 18,
    name: "Mary Theresa Mudalair",
    designation: "English Faculty",
    department: "Languages",
    image: "https://alliancemgt.org/Alliance%20Images/f18.jpeg",
  },
  {
    id: 19,
    name: "Dumpa Srivalli",
    designation: "English Faculty",
    department: "Languages",
    image: "https://alliancemgt.org/Alliance%20Images/f19.jpeg",
  },
  {
    id: 20,
    name: "Y. Uma Maheswari",
    designation: "Telugu Faculty",
    department: "Languages",
    image: "https://alliancemgt.org/Alliance%20Images/f20.jpg",
  },
  {
    id: 21,
    name: "T Rama Devi",
    designation: "Hindi Faculty",
    department: "Languages",
    image: "https://alliancemgt.org/Alliance%20Images/f21.jpeg",
  },
  {
    id: 22,
    name: "T Hari Babu",
    designation: "Sanskrit Faculty",
    department: "Languages",
    image: "https://alliancemgt.org/Alliance%20Images/f22.jpg",
  },
  {
    id: 23,
    name: "K Narasimha Murthy",
    designation: "Management Studies Faculty",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f23.jpeg",
  },
  {
    id: 24,
    name: "P Alekya",
    designation: "Management Studies Faculty",
    department: "Management Studies",
    image: "https://alliancemgt.org/Alliance%20Images/f24.jpg",
  },
  {
    id: 25,
    name: "Mukunda Kambapu",
    designation: "Admin Assistant (Office Administration)",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/f25.jfif",
  },
  {
    id: 26,
    name: "Galla Hari Kiran",
    designation: "Admin Assistant (Office Administration)",
    department: "Administration",
    image: "https://alliancemgt.org/Alliance%20Images/f26.jpeg",
  },
  {
    id: 27,
    name: "G Anand",
    designation: "Cashier",
    department: "Accounts",
    image: "https://alliancemgt.org/Alliance%20Images/f27.jpg",
  },
  {
    id: 28,
    name: "I Lakshman Rao",
    designation: "Cashier",
    department: "Accounts",
    image: "https://alliancemgt.org/Alliance%20Images/f28.jpeg",
  },
  {
    id: 29,
    name: "Yagati Nalini",
    designation: "Front Office Executive",
    department: "Front Office",
    image: "https://alliancemgt.org/Alliance%20Images/f29.jpeg",
  },
  {
    id: 30,
    name: "B Durga",
    designation: "Front Office Executive",
    department: "Front Office",
    image: "https://alliancemgt.org/Alliance%20Images/f30.jpeg",
  },
  {
    id: 31,
    name: "K. Mani Sai Pattabhi Ram",
    designation: "Lab Assistant - Hotel Management",
    department: "Hotel Management",
    image: "https://alliancemgt.org/Alliance%20Images/f31.jfif",
  },
  {
    id: 32,
    name: "J Jeevan",
    designation: "Lab Assistant - Hotel Management",
    department: "Hotel Management",
    image: "https://alliancemgt.org/Alliance%20Images/f32.jpg",
  },
  {
    id: 33,
    name: "Srikanth Chowdary",
    designation: "Lab Assistant - Hotel Management",
    department: "Hotel Management",
    image: "https://alliancemgt.org/Alliance%20Images/f33.jpg",
  },
];

const DEPARTMENTS = [
  "All Departments",
  "Administration",
  "Business Management",
  "Hotel Management",
  "Front Office",
  "Food & Beverage",
  "Food Production",
  "Housekeeping",
  "Training & Placement",
];

const PER_PAGE = 10;

function Avatar({ name, image }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a2e5a] to-[#2d4a8a] text-white text-4xl font-bold tracking-wide">
      {initials}
    </div>
  );
}

function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <Avatar name={faculty.name} image={faculty.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <div className="p-3 sm:p-5">
        <h3 className="text-[#1a2e5a] font-semibold text-[13px] sm:text-[16px] leading-snug mb-1 sm:mb-1.5">
          {faculty.name}
        </h3>
        <p className="text-gray-500 text-[11px] sm:text-[14px] leading-snug">
          {faculty.designation}
        </p>
      </div>
    </div>
  );
}

function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);

  const showEllipsis = total > 4;
  const visiblePages = showEllipsis
    ? pages.slice(0, Math.min(3, total))
    : pages;

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 rounded text-sm font-medium transition-colors duration-150 ${
            current === p
              ? "bg-[#1a2e5a] text-white"
              : "text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          {p}
        </button>
      ))}

      {showEllipsis && total > 3 && (
        <span className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
          ...
        </span>
      )}

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="px-3 h-9 rounded text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors duration-150"
      >
        Next <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function Faculty() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return FACULTY.filter((f) => {
      const matchSearch =
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.designation.toLowerCase().includes(search.toLowerCase());
      const matchDept =
        department === "All Departments" || f.department === department;
      return matchSearch && matchDept;
    });
  }, [search, department]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (val) => {
    setSearch(val);
    setPage(1);
  };

  const handleDept = (dept) => {
    setDepartment(dept);
    setDropdownOpen(false);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-['Poppins',sans-serif]">
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 lg:px-16 py-8 sm:py-10">
     <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-[#1a2e5a] text-2xl sm:text-3xl font-bold mb-1.5">
              Our Faculty
            </h1>
            <p className="text-gray-500 text-sm sm:text-[15px] max-w-md leading-relaxed">
              Meet our experienced and dedicated faculty members who guide our
              students towards a successful career in hospitality.
            </p>
          </div>

          <nav className="flex items-center gap-1.5 text-sm text-gray-400 shrink-0">
            <Home size={14} className="text-gray-400" />
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-[#1a2e5a] font-medium">Our Faculty</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-10">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <p className="text-gray-500 text-sm">
            Showing{" "}
            <span className="text-[#1a2e5a] font-medium">
              {filtered.length}
            </span>{" "}
            faculty member{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-56">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Faculty..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a2e5a] focus:ring-1 focus:ring-[#1a2e5a] transition"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 hover:border-gray-300 focus:outline-none focus:border-[#1a2e5a] transition w-full sm:w-auto justify-between"
              >
                <span className="truncate max-w-[160px]">{department}</span>
                <ChevronDown
                  size={15}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1 overflow-hidden">
                  {DEPARTMENTS.map((d) => (
                    <button
                      key={d}
                      onClick={() => handleDept(d)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        department === d
                          ? "bg-[#1a2e5a] text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
            {paginated.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="text-gray-500 text-sm">
              No faculty members found for your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setDepartment("All Departments");
              }}
              className="mt-3 text-[#1a2e5a] text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

     <Pagination
  current={page}
  total={totalPages}
  onChange={(newPage) => {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
/>
      </div>

      {dropdownOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
}