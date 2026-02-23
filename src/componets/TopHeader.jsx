import React from "react";
import { Eye, Type, Globe, MousePointer2, Contrast } from "lucide-react";

const TopHeader = () => {
  return (
    // Topmost bar usually uses a very dark theme (Black or Dark Slate) to separate from the main header
    <div className="w-full bg-[#025D7B] text-gray-200 text-[11px] md:text-[12px] font-medium border-b-2 border-[#0E6174]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-1.5 gap-2">
        
        {/* Left Side: Skip to Main Content */}
        <div className="flex-1 min-w-max">
          <a 
            href="#main-content"
            className="inline-flex items-center gap-1.5 hover:text-[#fde047] focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm px-1 py-0.5 transition-colors group"
            title="Skip to Main Content"
          >
            <MousePointer2 size={13} className="text-[#4793a5] group-hover:text-[#fde047]" />
            {/* Full text on larger screens, short text on tiny mobiles */}
            <span className="hidden sm:inline">Skip to Main Content</span>
            <span className="sm:hidden">Skip</span>
          </a>
        </div>

        {/* Right Side: Accessibility & Language */}
        <div className="flex items-center justify-end flex-wrap gap-2 sm:gap-4 md:gap-5">
          
          {/* Screen Reader & Contrast */}
          <div className="flex items-center gap-3">
            <a 
              href="#screen-reader" 
              className="flex items-center gap-1.5 hover:text-[#fde047] focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm px-1 py-0.5 transition-colors" 
              title="Screen Reader Access"
            >
              <Eye size={14} className="text-[#4793a5]" />
              {/* Hide text on tablets/mobiles, show only icon */}
              <span className="hidden lg:inline">Screen Reader Access</span>
            </a>
            
            <div className="w-[1px] h-3.5 bg-gray-600 hidden sm:block" aria-hidden="true"></div>

            {/* High Contrast Toggle (Standard Gov Feature) */}
            <button 
              className="flex items-center gap-1.5 hover:text-[#fde047] focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm px-1 py-0.5 transition-colors" 
              title="High Contrast View"
            >
              <Contrast size={14} className="text-[#4793a5]" />
              <span className="hidden lg:inline">High Contrast</span>
            </button>
          </div>

          <div className="w-[1px] h-3.5 bg-gray-600 hidden sm:block" aria-hidden="true"></div>

          {/* Text Size Adjuster (A- A A+) */}
          <div className="flex items-center gap-1.5" aria-label="Text Size Controls">
            <Type size={14} className="text-[#4793a5] hidden md:block" />
            <div className="flex items-center gap-[1px] bg-gray-800 rounded border border-gray-600 p-[1px]">
              <button 
                className="px-1.5 py-0.5 hover:bg-gray-700 hover:text-[#fde047] focus:outline-none focus:ring-1 focus:ring-[#fde047] rounded transition-all" 
                title="Decrease Font Size"
              >
                A-
              </button>
              <button 
                className="px-1.5 py-0.5 hover:bg-gray-700 hover:text-[#fde047] focus:outline-none focus:ring-1 focus:ring-[#fde047] rounded transition-all" 
                title="Reset Font Size"
              >
                A
              </button>
              <button 
                className="px-1.5 py-0.5 hover:bg-gray-700 hover:text-[#fde047] focus:outline-none focus:ring-1 focus:ring-[#fde047] rounded transition-all" 
                title="Increase Font Size"
              >
                A+
              </button>
            </div>
          </div>

          <div className="w-[1px] h-3.5 bg-gray-600" aria-hidden="true"></div>

          {/* Language Switcher */}
          <button 
            className="flex items-center gap-1.5 bg-[#0E6174] hover:bg-[#0a4654] px-2.5 py-0.5 rounded focus:outline-none focus:ring-2 focus:ring-[#fde047] transition-colors border border-[#16788f]"
            title="Switch to Hindi"
          >
            <Globe size={13} className="text-white" />
            <span className="font-semibold tracking-wide text-white">हिन्दी</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;