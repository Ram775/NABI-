import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight, Megaphone } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ImgSlider = () => {
  const slides = [
    {
      url: "https://nabi.res.in/backend/web/img/slider/resize/banner-170-IMG_7677.JPG",
      title: "Advancing Agri-Food Biotechnology",
      desc: "Innovating for a healthier and sustainable future."
    },
    {
      url: "https://nabi.res.in/backend/web/img/slider/resize/banner-292-IMG_0315.JPG",
      title: "State-of-the-art Research Facilities",
      desc: "Empowering scientists with world-class infrastructure."
    }
  ];

  const spotlightItems = [
    "HPC User Charges Updated",
    "Instruments (User Charges List) 2026",
    "New Research Updates: Genome Editing",
    "PhD Admission Open 2026",
    "Upcoming Biomanufacturing Workshop",
  ];

  return (
    <div className="relative w-full group overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .swiper-pagination-bullet-active {
            background: #8B0000 !important;
            width: 24px !important;
            border-radius: 4px !important;
          }
        `}
      </style>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-[350px] md:h-[550px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />
            
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Slide Content */}
            <div className="absolute top-1/2 left-8 md:left-20 -translate-y-1/2 z-20 max-w-xl text-white space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight animate-in slide-in-from-left duration-700">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-200 animate-in slide-in-from-left duration-1000">
                {slide.desc}
              </p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Spotlight Bar (Modern Glassmorphism) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-7xl">
        <div className="bg-white/90 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded flex items-center overflow-hidden border border-white/20">
          
          {/* Label with Icon */}
          <div className="bg-white/40 text-black px-5 md:px-8 py-4 font-bold flex items-center gap-2 shrink-0">
            <Megaphone size={18} className="animate-bounce" />
            <span className="hidden md:inline tracking-widest text-sm uppercase">Spotlight</span>
          </div>

          {/* Scrolling News */}
          <div className="relative flex-grow overflow-hidden">
            <div className="animate-marquee py-4">
              {[...spotlightItems, ...spotlightItems].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mx-6 group/item cursor-pointer">
                   <div className="w-1.5 h-1.5 bg-[#025D7B] rounded-full" />
                   <span className="text-sm font-semibold text-gray-700 group-hover/item:text-[#025D7B] transition-colors whitespace-nowrap italic">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* Fade effect for marquee edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/90 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/90 to-transparent z-10" />
          </div>

          {/* View All Button */}
          <button className="hidden sm:flex px-8 py-4 text-sm font-bold text-[#025D7B] hover:bg-blue-50 transition-colors border-l border-gray-100 items-center gap-2">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;