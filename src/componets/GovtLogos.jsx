import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const GovtLogos = () => {
  const logos = [
    { img: "https://nabi.res.in/backend/web/img/slider/resize/banner-499-india-gov.png", name: "National Portal of India", link: "https://www.india.gov.in/" },
    { img: "https://nabi.res.in/backend/web/img/slider/resize/banner-475-briclogo1.jpeg", name: "BRIC - DBT Organization", link: "https://bric.gov.in/" },
    { img: "https://nabi.res.in/backend/web/img/slider/resize/banner-120-CIAB.png", name: "Department of Biotechnology", link: "https://dbtindia.gov.in/" },
    { img: "https://nabi.res.in/backend/web/img/slider/resize/banner-648-Biotechnology.png", name: "BIRAC", link: "https://birac.nic.in/" },
    { img: "https://nabi.res.in/backend/web/img/slider/resize/banner-82-BioE3.png", name: "BIRAC", link: "https://birac.nic.in/" },
  ];

  return (
    <div className="relative bg-white border-t border-b py-8 overflow-hidden">

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={6000} // 🔥 slower smooth motion
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // hover par pause
        }}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide key={index}>
            <a
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              title={logo.name}
              className="flex items-center justify-center group px-6"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-16 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default GovtLogos;