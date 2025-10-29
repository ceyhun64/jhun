"use client";

import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import {
  Facebook,
  X,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";

interface IconItem {
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color?: string;
}

const icons: IconItem[] = [
  { Icon: Facebook, color: "#4267B2" },
  { Icon: X, color: "#1DA1F2" },
  { Icon: Instagram, color: "#E1306C" },
  { Icon: Linkedin, color: "#0077B5" },
  { Icon: Github, color: "#181717" },
  { Icon: Youtube, color: "#FF0000" },
];

const MarqueeExample: React.FC = (): React.JSX.Element => (
  <div className="flex w-full items-center justify-center bg-linear-to-b from-black to-blue-900 cursor-pointer py-20">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent className="py-5">
        {icons.map(({ Icon, color }, index) => (
          <MarqueeItem
            key={index}
            className="h-24 w-24 flex items-center justify-center rounded-full bg-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <Icon
              className="h-12 w-12"
              style={{ color: color || "#000" }} // marka rengi
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default MarqueeExample;
