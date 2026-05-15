import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const SocialMedia = () => {
  const [open, setOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello Alliance College,

I would like to know more details about the courses.

Interested Courses:
• BHM
• BBA
• MBA
• PGDBM

Please share admission details.`
  );

  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      link: `https://wa.me/919848127344?text=${whatsappMessage}`,
      bg: "bg-[#25D366]",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/alliancecollegevizag/",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      id: 3,
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@alliancecollegevizag639",
      bg: "bg-[#FF0000]",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/alliance-college-vizag-a451a821a/",
      bg: "bg-[#0A66C2]",
    },
  ];

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex flex-col items-center gap-1.5">
      
      {/* Social Icons */}
      <div
        className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${item.bg}
              text-white
              w-8
              h-8
              sm:w-9
              sm:h-9
              rounded-full
              flex
              items-center
              justify-center
              shadow-md
              text-[14px]
              sm:text-[16px]
              hover:scale-110
              transition-all
              duration-300
            `}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          bg-[#25D366]
          text-white
          w-10
          h-10
          sm:w-11
          sm:h-11
          rounded-full
          flex
          items-center
          justify-center
          shadow-lg
          text-[18px]
          sm:text-[20px]
          hover:scale-110
          transition-all
          duration-300
        "
      >
        {open ? <FaTimes /> : <FaWhatsapp />}
      </button>
    </div>
  );
};

export default SocialMedia;