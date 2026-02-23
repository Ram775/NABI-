import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef();

  const menuItems = [
    { name: "Home" },
    {
      name: "About Us",
      subMenu: [
        "Governance",
        "Former Directors",
        "Vision And Mission",
        "NABI in the Media",
        "Latest News",
        "About NABI",
        "Who's Who",
      ],
    },
    {
      name: "People",
      subMenu: [
        "Scientist",
        "Project Scientist",
        "Post Doctoral Fellow",
        "INSPIRE Faculty Fellow",
        "Ramalingaswami Fellow",
        "Ramanujan Fellow",
        "MK Bhan Fellow",
        "Research Scholars",
        "Technical Staff",
        "Administration",
      ],
    },
    {
      name: "Division",
      subMenu: [
        "Agri-Biotechnology",
        "Food and Nutrition Biotechnology",
        "Human Resource Development",
        "Technology Transfer",
      ],
    },
    {
      name: "Publications",
      subMenu: ["Research Publication", "Annual Reports"],
    },
    {
      name: "Services",
      subMenu: ["Instruments User Charges", "HPC User Charges", "Micellaneous"],
    },
    {
      name: "Facilities",
      subMenu: [
        "High-Performance Computing (HPC) Facility",
        "Plant Tissue Culture Facility",
        "Instrument Facility",
        "Library Facility",
        "Databases",
        "Bioinformatics Softwares",
      ],
    },
    {
      name: "Contact Us",
      subMenu: [
        "Reception",
        "Executive Director",
        "ED's Secretariat",
        "Research Farm",
        "Library contact",
        "How To Reach Us",
        "Feedback",
        "Website Related",
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-[#025D7B] shadow-lg sticky top-0 z-50 w-full">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo - Now visible on both Mobile & Desktop */}
        <div className="md:hidden">
          <img
            src="/images/logo.jpg" // <-- apna logo path yaha lagao
            alt="logo"
            className="h-9 rounded w-auto"
          />
        </div>

        {/* Mobile Menu Button RIGHT */}
        <div className="md:hidden ml-auto text-white">
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setOpenMenu(null); // Reset open submenus when closing/opening drawer
            }}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => menu.subMenu && setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() =>
                  menu.subMenu && setOpenMenu(openMenu === index ? null : index)
                }
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                  openMenu === index
                    ? "bg-white text-[#025D7B] shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {menu.name}
                {menu.subMenu && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Desktop Dropdown */}
              {menu.subMenu && openMenu === index && (
                <div className="absolute top-[110%] left-0 w-64 bg-white text-gray-800 shadow-2xl rounded-xl py-3 border border-gray-100">
                  {menu.subMenu.map((item, i) => (
                    <p
                      key={i}
                      className="px-5 py-2.5 text-sm font-medium hover:bg-blue-50 hover:text-[#025D7B] cursor-pointer transition-colors flex items-center justify-between group/item"
                    >
                      {item}
                      <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                        →
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white text-gray-800 shadow-2xl transition-all duration-300 ease-in-out ${
          mobileMenu 
            ? "max-h-[calc(100vh-60px)] overflow-y-auto border-t opacity-100" 
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="py-4 space-y-1">
          {menuItems.map((menu, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
                className={`w-full text-left px-6 py-3 font-bold flex justify-between items-center transition-colors ${
                  openMenu === index
                    ? "bg-blue-50 text-[#025D7B]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {menu.name}
                {menu.subMenu && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Submenu with Smooth Accordion Animation */}
              <div
                className={`bg-gray-50/80 overflow-hidden transition-all duration-300 ease-in-out ${
                  openMenu === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-2">
                  {menu.subMenu?.map((item, i) => (
                    <p
                      key={i}
                      className="px-8 py-3 text-sm text-gray-600 border-l-2 border-blue-200 hover:bg-white hover:text-[#025D7B] cursor-pointer transition-colors"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;