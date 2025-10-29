"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Figma,
  Code,
  Bot,
  Zap,
  Package,
  Layers,
  ArrowLeft,
} from "lucide-react";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import { useParams } from "next/navigation";
import projects from "@/seed/projects.json";
import { ImageZoom, ImageZoomProps } from "../ui/shadcn-io/image-zoom";
import { cn } from "@/lib/utils";
import { FlickeringGrid } from "../ui/shadcn-io/flickering-grid";
import { SparklesCore } from "../ui/shadcn-io/sparkles";

import { TechnologyItem, Technology } from "./technologyItem";

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Proje bulunamadı
      </div>
    );
  }

  const {
    title,
    summary,
    description,
    technologies,
    image,
    images,
    demoUrl,
    githubUrl,
  } = project;

  const mockTechnologies: Technology[] = [
    {
      name: "Figma",
      icon: Figma,
      type: "DESIGN TOOL",
      yoe: 2,
      color: "#f24e1e",
    },
    {
      name: "React",
      icon: Code,
      type: "JAVASCRIPT LIBRARY",
      yoe: 4,
      color: "#61dafb",
    },
    {
      name: "Next.js",
      icon: Zap,
      type: "FULL STACK FRAMEWORK",
      yoe: 3,
      color: "#000000",
    },
    {
      name: "Tailwind CSS",
      icon: Layers,
      type: "CSS FRAMEWORK",
      yoe: 3,
      color: "#06b6d4",
    },
    {
      name: "Vite",
      icon: Package,
      type: "BUILD TOOL",
      yoe: 3,
      color: "#646cff",
    },
    {
      name: "TypeScript",
      icon: Code,
      type: "JAVASCRIPT SUPERSET",
      yoe: 3,
      color: "#3178c6",
    },
    {
      name: "Node.js",
      icon: Code,
      type: "RUNTIME ENVIRONMENT",
      yoe: 4,
      color: "#3c873a",
    },
    {
      name: "Express",
      icon: Code,
      type: "BACKEND FRAMEWORK",
      yoe: 3,
      color: "#000000",
    },
    {
      name: "Prisma",
      icon: Code,
      type: "ORM TOOL",
      yoe: 2,
      color: "#0c344b",
    },
  ];

  // --- Carousel için state ve ref ---
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 300; // Her tıklamada kayacak mesafe
    const newScrollPosition =
      direction === "left"
        ? Math.max(scrollPosition - scrollAmount, 0)
        : scrollPosition + scrollAmount;

    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-800 to-black text-white py-10 px-6 md:px-20 overflow-hidden relative font-mono">
      {/* Arkaplan animasyonu */}
      <SparklesCore
        id="tsparticlesfullpage1"
        background="transparent"
        minSize={1}
        maxSize={2}
        particleDensity={50}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
        speed={1}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-8xl mx-auto mt-20 p-6 md:p-12 rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col lg:flex-row items-start lg:items-center gap-12 relative overflow-hidden"
      >
        {/* Sol: Görsel + küçük görseller */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.div
            className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <ImageZoom
              backdropClassName={cn(
                '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/60'
              )}
            >
              <Image
                src={image}
                alt={title}
                width={1000}
                height={600}
                className="object-cover object-center w-full h-auto rounded-xl"
              />
            </ImageZoom>
          </motion.div>

          {/* Küçük Görseller (Artık büyük görselin altında) */}
          {images.length > 0 && (
            <div className="relative">
              {/* Sol Ok */}
              <button
                onClick={() => scroll("left")}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Görseller Carousel */}
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-hidden scroll-smooth"
              >
                {images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-60 h-42 shrink-0 rounded-lg shadow-lg overflow-hidden border border-white/10"
                  >
                    <Image
                      src={img}
                      alt={`Screenshot ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Sağ Ok */}
              <button
                onClick={() => scroll("right")}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
          {/* Butonlar */}
          <div className="flex flex-wrap gap-4 mt-6">
            {demoUrl && (
              <Button
                onClick={() => window.open(demoUrl, "_blank")}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-[0_0_12px_rgba(249,115,22,0.4)] transition-all"
              >
                Siteye Git <ArrowRight className="w-4 h-4" />
              </Button>
            )}
            {githubUrl && (
              <Button
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                GitHub <Github className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Sağ: Bilgi Alanı */}
        <div className="relative flex-1 flex flex-col justify-center gap-6 p-4 md:p-0">
          {/* Glow arka plan */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 opacity-25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-amber-300 via-orange-500 to-yellow-400 opacity-20 rounded-full blur-2xl"></div>
          </div>

          {/* Başlık */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-100 drop-shadow-[0_0_12px_rgba(255,180,0,0.7)] hover:drop-shadow-[0_0_20px_rgba(255,200,0,0.9)] transition-shadow duration-300">
            <GradientText
              gradient="linear-gradient(90deg, #f59e0b 0%, #fbbf24 40%, #fef3c7 60%, #fbbf24 80%, #f59e0b 100%)"
              text={title}
              className="inline font-mono"
            />
          </h1>

          {/* Neon alt çizgi */}
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mt-2"></div>

          {/* Özet */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-sans">
            {summary}
          </p>

          {/* Açıklama */}
          <p className="text-gray-300 leading-relaxed text-base md:text-md font-mono whitespace-pre-line">
            {description}
          </p>
        </div>
      </motion.div>

      {/* --- Yeni Eklenen Araçlar ve Teknoloji Yığını Bölümü --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="max-w-8xl mx-auto mt-20 p-6 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xs shadow-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-4">
            <h2 className="text-5xl font-extrabold text-white font-mono">
              Kullanılan Teknolojiler
            </h2>
            <pre className="bg-gray-900 text-white p-4 rounded-2xl font-mono overflow-x-auto whitespace-pre-wrap">
              <code>
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n  "}
                Bu proje, modern web teknolojilerinin sunduğu en iyi araçlar
                kullanılarak geliştirildi. Her teknoloji,{" "}
                <span className="text-yellow-300 font-bold">
                  performans
                </span>,{" "}
                <span className="text-green-400 font-bold">güvenlik</span> ve
                kullanıcı deneyimini maksimize edecek şekilde dikkatlice
                seçildi.
                {"\n  "}
                Geliştirme sürecinde özellikle bileşen tabanlı yapı, yeniden
                kullanılabilir kod mimarisi ve optimize edilmiş render
                performansı hedeflendi.
                {"\n"}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n\n"}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n  "}
                Kullanıcı arayüzü, sade ama etkileyici bir görsel deneyim sunmak
                amacıyla tasarlandı. Tasarım sistemi;{" "}
                <span className="text-yellow-300 font-bold">
                  tutarlılık
                </span>,{" "}
                <span className="text-green-400 font-bold">okunabilirlik</span>{" "}
                ve erişilebilirlik prensipleri üzerine kuruldu. Stil katmanında
                güçlü bir yapı sağlamak için modern CSS framework’leri ve
                yardımcı araçlar tercih edildi.
                {"\n"}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n\n"}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n  "}
                Frontend tarafında{" "}
                <span className="text-yellow-300 font-bold">React</span> ve{" "}
                <span className="text-green-400 font-bold">Next.js</span> gibi
                güçlü teknolojiler, hızlı yüklenme süreleri ve SEO uyumluluğu
                açısından büyük avantaj sağladı. Ek olarak, Tailwind CSS
                sayesinde tasarım süreçleri hızlanırken, geliştirme süreci daha
                esnek hale getirildi.
                {"\n"}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n\n"}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n  "}
                Sonuç olarak bu teknoloji yığını, projenin sadece bugünkü
                ihtiyaçlarını değil,{" "}
                <span className="text-amber-600 font-bold">
                  gelecekteki
                </span>{" "}
                ölçeklenebilirlik hedeflerini de destekleyen modern,
                sürdürülebilir bir altyapı oluşturdu.
                <span className="ml-1 animate-blink">▌</span>
                {"\n"}
                <span className="text-blue-400">&lt;/p&gt;</span>
              </code>
            </pre>
            <style jsx>{`
              .animate-blink {
                display: inline-block;
                width: 1ch;
                animation: blink 2s infinite; /* 1s sürede açılıp kapanacak */
              }

              @keyframes blink {
                0%,
                50%,
                100% {
                  opacity: 1;
                }
                25%,
                75% {
                  opacity: 0;
                }
              }
            `}</style>

            <div className="flex space-x-6 mt-8">
              <a
                href={githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:rotate-0 transition-transform duration-300" />
                <span className="font-medium">Open Github</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:rotate-0 transition-transform duration-300" />
                <span className="font-medium">Get in touch</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 mt-10">
            {mockTechnologies.map((tech) => (
              <TechnologyItem key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </motion.div>
      {/* --- CTA (Call To Action) Bölümü --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-32 mb-20 text-center relative z-10"
      >
        <div className="relative inline-block px-10 py-8 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 shadow-[0_0_40px_rgba(255,200,0,0.4)] hover:shadow-[0_0_60px_rgba(255,220,100,0.7)] transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white">
            Bu tarz bir site istiyor musun?
          </h2>
          <p className="text-gray-200 text-lg mt-3 font-sans">
            Sadece birkaç adımda kendi markanı dijitalde öne çıkarabilirsin.
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300 rounded-full text-black font-semibold text-lg shadow-[0_0_15px_rgba(255,200,0,0.6)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,220,0,0.8)] transition-all duration-300"
          >
            Evet, iletişime geçelim <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hafif arka plan glow efekti */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[400px] h-[400px] bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 opacity-20 blur-3xl rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
