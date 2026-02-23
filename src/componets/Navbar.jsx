import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";

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
    { name: "Publications", subMenu: ["Research Publication", "Annual Reports"] },
    { name: "Services", subMenu: ["Instruments User Charges", "HPC User Charges"] },
    { name: "Facilities", subMenu: ["HPC Facility", "Library", "Databases"] },
    { name: "Contact Us" },
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
    <nav ref={navRef} className="bg-[#025D7B] shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 hover:bg-white/10 rounded-lg"
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
                  menu.subMenu &&
                  setOpenMenu(openMenu === index ? null : index)
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

              {/* Dropdown */}
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
        className={`md:hidden absolute w-full bg-white text-gray-800 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenu ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        <div className="py-4 space-y-1">
          {menuItems.map((menu, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === index ? null : index)
                }
                className={`w-full text-left px-6 py-3 font-bold flex justify-between items-center ${
                  openMenu === index
                    ? "bg-blue-50 text-[#025D7B]"
                    : "text-gray-700"
                }`}
              >
                {menu.name}
                {menu.subMenu && (
                  <ChevronDown
                    size={18}
                    className={openMenu === index ? "rotate-180" : ""}
                  />
                )}
              </button>

              {menu.subMenu && openMenu === index && (
                <div className="bg-gray-50/80 px-4">
                  {menu.subMenu.map((item, i) => (
                    <p
                      key={i}
                      className="px-8 py-3 text-sm text-gray-600 border-l-2 border-blue-200 hover:bg-white transition-colors"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;