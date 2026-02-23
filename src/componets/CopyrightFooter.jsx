import React, { useEffect, useRef, useState } from "react";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const CopyrightFooter = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const targetCount = 1746516;

  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef();

  // Scroll detect (jab footer screen me aaye)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = targetCount / (duration / 16);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        setCount(targetCount);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counterInterval);
  }, [startAnimation]);

  const visitorDigits = count.toString().padStart(7, "0").split("");

  return (
    <div className="bg-[#1e293b] text-slate-300 text-sm shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

        {/* Left */}
        <div className="text-center md:text-left flex-1">
          <p className="font-semibold text-white mb-1">
            Copyright © NABI 2018 - {today.getFullYear()}
          </p>
          <p className="text-xs text-slate-400">
            Page last reviewed and updated on:{" "}
            <span className="text-white font-medium">{formattedDate}</span>
          </p>
        </div>

        {/* Counter */}
        <div
          ref={counterRef}
          className="flex flex-col items-center flex-1 border-y border-slate-600 py-4 md:py-0 md:border-y-0 md:border-x"
        >
          <p className="text-[11px] text-slate-400 mb-2 uppercase tracking-widest font-semibold">
            Visitor Counter
          </p>

          <div className="flex gap-[2px]">
            {visitorDigits.map((digit, index) => (
              <span
                key={index}
                className="bg-black text-green-400 font-mono text-base px-2 py-1 rounded-sm border border-slate-700 shadow-sm"
              >
                {digit}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end flex-1 text-xs md:text-sm">

          <div className="flex items-center gap-4 mb-3">
            <Facebook size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
            <Youtube size={20} />
          </div>

          <p className="mb-1">
            Content provided and maintained by{" "}
            <span className="font-semibold text-white">NABI</span>
          </p>
          <p className="text-slate-400">
            Designed and Developed by{" "}
            <a href="https://netstreamsystems.com/"  target="__blank" className="text-yellow-400 underline cursor-pointer font-medium">Netbeans Systems</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;