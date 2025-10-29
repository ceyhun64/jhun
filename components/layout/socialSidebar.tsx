"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SocialSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+905301303084";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

  const socialIcons = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/nowartplicell/",
      src: "/socialMedia/instagram.webp",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
      src: "/socialMedia/facebook.webp",
    },
    { name: "WhatsApp", link: whatsappLink, src: "/socialMedia/whatsapp.png" },
    {
      name: "Telefon",
      link: `tel:${whatsappNumber}`,
      src: "/socialMedia/phone.png",
    },
  ];

  return (
    <div className="fixed left-2 bottom-4 flex flex-col items-center z-50">
      {/* Sidebar ikonları */}
      <div
        className={`flex flex-col items-center gap-1 mb-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        {socialIcons.map((icon) => (
          <a
            key={icon.name}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full flex items-center justify-center hover:brightness-90 transition"
            aria-label={icon.name}
          >
            <img
              src={icon.src}
              alt={icon.name}
              className="w-12 h-12 rounded-full"
            />
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white p-3 rounded-full hover:brightness-90 transition"
        aria-label={isOpen ? "Kapat" : "Aç"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
