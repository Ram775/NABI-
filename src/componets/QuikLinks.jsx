import React from "react";
import {
  FileText,
  Handshake,
  Trophy,
  Briefcase,
  FileCheck,
  Image,
} from "lucide-react";

const QuickLinks = () => {
  const items = [
    { icon: <FileText size={40} />, label: "NABI INFORMATION" },
    { icon: <Handshake size={40} />, label: "COLLABORATIONS" },
    { icon: <Trophy size={40} />, label: "ACHIEVEMENTS" },
    { icon: <Briefcase size={40} />, label: "CAREER" },
    { icon: <FileCheck size={40} />, label: "TENDERS" },
    { icon: <Image size={40} />, label: "GALLERY" },
  ];

  return (
    <div className="bg-[#0E6174] py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white text-center cursor-pointer group transition duration-300"
          >
            <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition">
              {item.icon}
            </div>

            <p className="mt-3 text-sm font-semibold tracking-wide group-hover:text-gray-200">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default QuickLinks;