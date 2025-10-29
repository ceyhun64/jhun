"use client";

import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Github, Phone } from "lucide-react";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import Link from "next/link";
import { motion } from "framer-motion";

const SOCIAL_ICONS: Array<React.ComponentType<{ className?: string }>> = [
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Phone,
];

const particleCount = 25; // Patlayan noktalar sayısı
const waveCount = 3; // Neon dalga sayısı

const ModernFooter: React.FC = (): React.JSX.Element => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Client tarafı render edildiğinde true olacak
  }, []);

  return (
    <footer className="relative bg-black text-white overflow-hidden font-sans md:px-20">
      {/* Neon dalgalar ve particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Neon dalgalar */}
          {Array.from({ length: waveCount }).map((_, idx) => (
            <motion.div
              key={idx}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 8 + idx * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[200%] h-[2px] rounded-full opacity-30"
              style={{
                top: `${20 + idx * 20}%`,
                background:
                  "linear-gradient(90deg, rgba(0,255,255,0.4), rgba(255,0,255,0.4), rgba(0,255,255,0.4))",
                filter: "blur(4px)",
              }}
            />
          ))}

          {/* Parlayan noktalar / lightning */}
          {Array.from({ length: particleCount }).map((_, idx) => {
            // Rastgele değerler client-side oluşturuluyor
            const width = 2 + Math.random() * 3;
            const height = 2 + Math.random() * 3;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const xAnim = 5 - Math.random() * 10;
            const boxShadow = `0 0 ${3 + Math.random() * 5}px #0ff, 0 0 ${
              3 + Math.random() * 10
            }px #f0f`;
            const duration = 1 + Math.random() * 2;
            const delay = Math.random() * 3;

            return (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -15, 0],
                  x: [0, xAnim, 0],
                  opacity: [0.1, 0.8, 0.1],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay,
                }}
                className="absolute rounded-full"
                style={{
                  width,
                  height,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: "#0ff",
                  boxShadow,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative container mx-auto px-5 md:px-6 py-16 md:py-24 z-10">
        {/* Logo & Slogan */}
        <div className="text-center mb-10 mt-10">
          <GradientText
            className="text-3xl sm:text-4xl font-bold font-mono"
            text=".jhun{}"
            neon={true}
          />
          <p className="text-gray-400 mt-3 text-base sm:text-lg font-sans">
            Modern tasarım, şık ve etkileyici deneyim.
          </p>
        </div>

        {/* Linkler */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
          {[
            { title: "Şirket", links: ["Hakkımızda", "Kariyer", "Basın"] },
            {
              title: "Ürünler",
              links: ["Özellikler", "Fiyatlandırma", "Belgeler"],
            },
            { title: "Destek", links: ["İletişim", "SSS", "Yardım Merkezi"] },
            { title: "Yasal", links: ["Gizlilik", "Şartlar", "Çerezler"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      className="hover:text-amber-400 transition-colors"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sosyal Medya */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          {SOCIAL_ICONS.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-400/50 transition-all"
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white hover:text-black transition-colors" />
            </a>
          ))}
        </div>

        {/* Alt Copyright */}
        <div className="mt-12 border-t border-gray-700/50 pt-4 text-center text-sm sm:text-base text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} .jhun Tüm hakları saklıdır.</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-1 flex-nowrap">
            <span>developed by</span>
            <Link
              href="https://wa.me/905541496377"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientText
                gradient="linear-gradient(90deg, #f97316 0%, #facc15 50%, #f97316 100%)"
                className="text-white"
                text="Ceyhun Türkmen"
                neon={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
