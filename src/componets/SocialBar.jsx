import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const SocialBar = () => {
  const socials = [
      { id: 2, icon: <Twitter size={20} />, link: "https://twitter.com", color: "bg-[#1DA1F2]" },
    { id: 1, icon: <Facebook size={20} />, link: "https://facebook.com", color: "bg-[#1877F2]" },
    { id: 3, icon: <Instagram size={20} />, link: "https://instagram.com", color: "bg-[#E4405F]" },
    { id: 4, icon: <Linkedin size={20} />, link: "https://linkedin.com", color: "bg-[#0A66C2]" },
    
  ];

  return (
    /* Change 1: z-index ko z-50 se badha kar z-[9999] kiya taki ye Navbar ke upar rahe */
    <div className="fixed right-0 top-[73%] -translate-y-1/2 flex flex-col z-[9999]">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          /* Change 2: 'group' class add ki hai hover effect ko smooth banane ke liye */
          className={`${social.color} p-3 text-white transition-all duration-300 hover:-translate-x-2 flex items-center shadow-2xl first:rounded-tl-md last:rounded-bl-md`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;   