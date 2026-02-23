import React from "react";
import { User, MessageSquare, Phone, ArrowRight, Calendar, Bell, Newspaper, Briefcase } from "lucide-react";

const SectionOne = () => {
  return (
    <div className="bg-[#f1f5f9] py-12 md:py-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">

        {/* 1. EVENTS CARD */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-[#025D7B] transition-all duration-300 flex flex-col overflow-hidden h-full group">
          {/* Header */}
          <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-center gap-2.5">
            <Calendar size={22} className="text-[#0E6174]" />
            <h2 className="text-[17px] font-bold text-[#111827] tracking-wide uppercase">
              Events
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 flex flex-col justify-center items-center text-center bg-gray-50/30">
             <div className="bg-white p-4 rounded-full shadow-sm border border-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Bell size={28} className="text-gray-300" />
             </div>
            <p className="text-gray-500 font-medium">No upcoming events currently</p>
            <p className="text-xs text-gray-400 mt-1">Please check back later</p>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex justify-end mt-auto">
            <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#0E6174] hover:text-[#e8582c] transition-colors focus:outline-none focus:underline">
              View All Events <ArrowRight size={15} />
            </button>
          </div>
        </div>


        {/* 2. LATEST NEWS CARD */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-[#025D7B] transition-all duration-300 flex flex-col overflow-hidden h-full">
          {/* Header */}
          <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-center gap-2.5">
            <Newspaper size={22} className="text-[#0E6174]" />
            <h2 className="text-[17px] font-bold text-[#111827] tracking-wide uppercase">
              Latest News
            </h2>
          </div>

          {/* Body - Scrollable if content overflows */}
          <div className="p-0 flex-1 overflow-y-auto max-h-[280px]">
            <ul className="divide-y divide-gray-100">
              {[
                { date: "22 Jan 2026", text: "NABI congratulates Dr. Tushar Matta on receiving the prestigious award." },
                { date: "19 Jan 2026", text: "Biomanufacturing Workshop 3.0 – January 28-30, 2026" },
                { date: "13 Jan 2026", text: "Mr. Arka Bhattacharya awarded ASM Postdoctoral Travel Award." }
              ].map((news, idx) => (
                <li key={idx} className="p-5 hover:bg-blue-50/50 transition-colors cursor-pointer group/item">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#8B0000] rounded-full"></span>
                    <p className="text-[11px] font-bold text-[#8B0000] uppercase tracking-widest">{news.date}</p>
                  </div>
                  <p className="text-gray-700 text-[14px] leading-relaxed group-hover/item:text-[#0E6174] font-medium transition-colors">
                    {news.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex justify-end mt-auto">
            <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#0E6174] hover:text-[#e85b2c] transition-colors focus:outline-none focus:underline">
              Read All News <ArrowRight size={15} />
            </button>
          </div>
        </div>


        {/* 3. EXECUTIVE DIRECTOR CARD */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl border-t-4 border-[#025D7B] transition-all duration-300 flex flex-col overflow-hidden h-full md:col-span-2 lg:col-span-1">
          {/* Header */}
          <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-center gap-2.5">
            <Briefcase size={22} className="text-[#0E6174]" />
            <h2 className="text-[17px] font-bold text-[#111827] tracking-wide uppercase">
              Executive Director
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 flex flex-col justify-center">
            <div className="flex gap-5 items-center sm:items-start">
              
              {/* Profile Image with Govt style border */}
              <div className="relative shrink-0">
                <img
                  src="https://nabi.res.in/backend/web/img/profile/profile-181-12ednabi.jpg"
                  alt="Prof. Ashwani Pareek - Executive Director"
                  className="w-24 h-28 sm:w-28 sm:h-32 object-cover rounded shadow-md border-2 border-gray-200 p-1"
                />
              </div>

              {/* Action Links */}
              <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
                {[
                  { icon: <User size={15}/>, label: "View Profile", href: "#profile" },
                  { icon: <MessageSquare size={15}/>, label: "Director's Message", href: "#message" },
                  { icon: <Phone size={15}/>, label: "Contact Office", href: "#contact" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className="flex items-center gap-3 text-[13px] font-semibold text-gray-700 hover:text-[#0E6174] transition-colors group/link p-1.5 -ml-1.5 rounded-md hover:bg-gray-50"
                  >
                    <span className="p-1.5 bg-gray-100 text-gray-500 rounded group-hover/link:bg-[#0E6174] group-hover/link:text-white transition-all shadow-sm">
                        {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Nameplate Design */}
          <div className="px-6 py-4 bg-gradient-to-r from-[#014b63] to-[#087ca3] mt-auto">
            <p className="text-white font-bold text-[15px] tracking-wide drop-shadow-sm">
              Prof. Ashwani Pareek
            </p>
            <p className="text-[#fde047] text-[12px] font-medium mt-0.5 tracking-wider uppercase">
              Executive Director, NABI
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionOne;