const tabs = [
  "All Programs",
  "Business & Management",
  "Commerce",
  "Hospitality",
  "Computer Applications",
  "Hotel Management",
  "Travel & Tourism",
];

export default function ProgramTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide ">
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold
              transition-all duration-200 flex-shrink-0
              ${isActive
                ? "bg-[#062B6B] text-white shadow-sm"
                : "text-[#6B7280] hover:text-[#062B6B] hover:bg-gray-100"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
