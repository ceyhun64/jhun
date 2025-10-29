"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
        duration: 0.8,
      }}
      className="fixed w-full z-999 flex items-center justify-between px-4 sm:px-8 py-4 bg-black/70 backdrop-blur-md text-white shadow-lg"
    >
      {/* Logo */}
      <Link href="/">
        <GradientText className="text-2xl font-bold font-mono" text=".jhun{}" />
      </Link>

      {/* Desktop Menü */}
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            <NavigationMenuItem>
              <Link href="/projects">
                <Button
                  variant="ghost"
                  className=" transition-all hover:bg-amber-600 hover:text-white"
                >
                  Projelerimiz
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className=" transition-all hover:bg-amber-600 hover:text-white"
                >
                  Biz Kimiz
                </Button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className=" transition-all hover:bg-amber-600 hover:text-white"
                >
                  İletişime Geçin
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* İkonlar ve Hamburger */}
      <div className="flex items-center gap-4">
        {/* Icon Grubu */}
        <div className="flex items-center gap-3">
          <Link href="https://github.com/ceyhun64">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-400 transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/ceyhun-türkmen-14882a26a">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-400 transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menü Butonu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menü */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" absolute top-full left-0 w-full bg-black/70 flex flex-row justify-center items-center py-4 gap-4 md:hidden"
        >
          {["Projelerimiz", "Biz Kimiz", "İletişime Geçin"].map((text, i) => (
            <Link
              key={i}
              href={`#${text.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMobileOpen(false)}
            >
              <Button
                variant="ghost"
                className="px-6 py-2 text-white rounded-md font-semibold shadow-lg bg-linear-to-r from-blue-500 via-blue-700 to-blue-900  hover:scale-105 hover:brightness-110 transition-all"
              >
                {text}
              </Button>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
