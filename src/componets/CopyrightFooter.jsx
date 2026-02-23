import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const CopyrightFooter = () => {
  const today = new Date();
  
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Visitor count ko digits mein split kiya taaki classic counter look mil sake
  const visitorCount = "1746516".split("");

  return (
    // Top border mein Indian Flag ka Saffron touch ya standard accent color
    <div className="bg-[#1e293b] text-slate-300 text-sm border-t-4 border-[#e85b2c] shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

        {/* Left Section - Copyright & Update Info */}
        <div className="text-center md:text-left flex-1">
          <p className="font-semibold text-white mb-1">
            Copyright © NABI 2018 - {today.getFullYear()}
          </p>
          <p className="text-xs text-slate-400">
            Page last reviewed and updated on:{" "}
            <span className="text-white font-medium">{formattedDate}</span>
          </p>
        </div>

        {/* Center Section - Classic Visitor Counter */}
        <div className="flex flex-col items-center flex-1 border-y border-slate-600 py-4 md:py-0 md:border-y-0 md:border-x">
          <p className="text-[11px] text-slate-400 mb-2 uppercase tracking-widest font-semibold">
            Visitor Counter
          </p>
          <div className="flex gap-[2px]">
            {visitorCount.map((digit, index) => (
              <span
                key={index}
                className="bg-black text-green-400 font-mono text-base px-2 py-1 rounded-sm border border-slate-700 shadow-sm"
              >
                {digit}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section - Socials & Credits */}
        <div className="flex flex-col items-center md:items-end flex-1 text-xs md:text-sm">
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4 mb-3">
            <a 
              href="#" 
              className="text-slate-400 hover:text-[#fde047] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm" 
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-[#fde047] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm" 
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-[#fde047] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm" 
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-[#fde047] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fde047] rounded-sm" 
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-sm" 
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          <p className="mb-1">
            Content provided and maintained by{" "}
            <span className="font-semibold text-white">NABI</span>
          </p>
          <p className="text-slate-400">
            Designed and Developed by{" "}
            <a 
              href="#" 
              className="text-white font-medium hover:text-[#fde047] transition-colors focus:outline-none focus:underline"
            >
              Netbeans Systems
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CopyrightFooter;