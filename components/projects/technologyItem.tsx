"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import React from "react";

// 🔹 TypeScript tipi tanımla
export type Technology = {
  name: string;
  icon: React.ElementType;
  type: string;
  yoe: number;
  color?: string;
};

// 🔹 Bileşen tanımı
export const TechnologyItem = ({ tech }: { tech: Technology }) => {
  const TechIcon = tech.icon;

  return (
    <motion.div
      className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/10 shadow-lg transition-all duration-300 hover:bg-white/10"
      whileHover={{ x: 5, scale: 1.01 }}
    >
      <div className="flex items-center space-x-4">
        {/* İkon Bölümü */}
        <div className="p-2 rounded-full bg-white/10">
          {TechIcon ? (
            <TechIcon
              className="w-6 h-6"
              style={{ color: tech.color || "#fff" }}
            />
          ) : (
            <Code className="w-6 h-6 text-gray-400" />
          )}
        </div>

        {/* İsim ve Tip Bölümü */}
        <div>
          <p className="text-lg font-semibold text-white">{tech.name}</p>
          <p className="text-sm text-gray-400 uppercase">{tech.type}</p>
        </div>
      </div>

      {/* Deneyim Yılı */}
      <span className="px-3 py-1 bg-white/10 text-white text-sm font-bold rounded-full">
        {tech.yoe} YÖE
      </span>
    </motion.div>
  );
};
