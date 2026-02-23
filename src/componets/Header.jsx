import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      {/* TopHeader bhi mobile me hide kar diya */}
      <div className="hidden md:block">
        <TopHeader />
      </div>

      {/* Main Header - Mobile me hidden */}
      <header className="hidden md:block w-full bg-[#fcfdfe] border-b border-gray-100">
        
        <div className="bg-gradient-to-r from-[#014b63] via-[#025D7B] to-[#087ca3] shadow-inner py-3 md:py-5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left Section: Logo + Title */}
            <div className="flex flex-col lg:flex-row items-center gap-6 text-center md:text-left">
              
              {/* Logo Container */}
              <div className="bg-white p-2">
                <div className="h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center">
                  <img
                    className="max-h-full max-w-full object-contain"
                    src="/images/logos.png"
                    alt="Institute Logo"
                  />
                </div>
              </div>

              {/* Divider (Desktop only) */}
              <div className="hidden lg:block w-[1px] h-16 bg-white/20"></div>

              {/* Title Area */}
              <div className="text-white space-y-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  BRIC-National Agri-Food &{" "}
                  <span className="text-blue-200">
                    Biomanufacturing Institute
                  </span>
                </h1>

                <div className="flex flex-col gap-0.5">
                  <p className="text-sm md:text-base font-medium text-blue-100 tracking-wide uppercase">
                    (Formerly NABI & CIAB)
                  </p>
                  <p className="text-xs md:text-sm text-white/70 font-light italic">
                    An Autonomous Institute of the Department of Biotechnology,
                    Govt. of India
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 p-2.5 sm:p-3 shrink-0 mt-2 md:mt-0">
              <img
                src="/images/dst_logo.png"
                alt="Department of Biotechnology Logo"
                className="h-12 sm:h-14 md:h-16 object-contain brightness-0 invert"
              />

              <div className="hidden xl:block text-[11px] text-white/80 leading-tight uppercase font-bold w-24 border-l border-white/20 pl-3">
                Department of Biotechnology
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Navbar - Mobile & Desktop dono me visible */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
    </>
  );
};

export default Header;