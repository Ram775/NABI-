import React from "react";
import { FileText } from "lucide-react"; // Assuming you are using lucide-react

const FooterTopLinks = () => {
  const links = [
    "RTI",
    "Grievance Redressal",
    "Website Policies",
    "Institutional Repository",
    "Sitemap",
    "Help",
    "BRIC e-Office",
    "NABI Email",
    "Intranet",
  ];

  return (
    // Base container with a slightly darker border at the bottom for separation
    <div className="bg-[#0E6174] text-gray-100 py-3.5 font-sans border-b border-[#0a4654]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-5">
        
        {/* Navigation Links Section - Converted to semantic <ul> list */}
        <nav aria-label="Footer Quick Links" className="w-full lg:w-auto">
          <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 sm:gap-x-4 gap-y-2.5 text-[13px] md:text-sm">
            {links.map((link, index) => (
              <li key={index} className="flex items-center">
                <a
                  href="#"
                  className="hover:text-[#fde047] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm px-1 hover:underline underline-offset-4 decoration-2 decoration-[#fde047]/50"
                >
                  {link}
                </a>
                
                {/* Divider - Improved spacing and hidden on very small mobile screens for cleaner wrapping */}
                {index !== links.length - 1 && (
                  <span 
                    className="text-[#4793a5] ml-3 sm:ml-4 select-none text-xs hidden sm:inline-block" 
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Enhanced GST Section - Added an icon and subtle hover effects */}
        <div 
          className="flex items-center gap-2.5 bg-[#0b4d5c] hover:bg-[#093e4a] transition-colors px-3.5 py-1.5 rounded-md text-xs md:text-sm border border-[#16788f] shadow-inner whitespace-nowrap group cursor-default"
          title="Goods and Services Tax Identification Number"
        >
          <FileText size={15} className="text-[#a5d0db] group-hover:text-[#fde047] transition-colors duration-300" />
          
          <div className="flex items-center">
            <span className="text-[#a5d0db] mr-2 font-medium tracking-wide uppercase text-[11px] md:text-xs">
              GSTIN
            </span>
            <span className="font-mono font-bold text-white tracking-widest group-hover:text-[#fde047] transition-colors duration-300">
              03AABAN0279L1ZM
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterTopLinks;