"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Bot, ArrowLeft } from "lucide-react";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import { useParams } from "next/navigation";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../ui/shadcn-io/sparkles";
import { TechnologyItem, Technology } from "./technologyItem";

import Link from "next/link";

type Props = {
  locale: "tr" | "en";
  dict: any;
};

// API'dan gelecek proje yapısını tanımlayalım (Prisma modeline uygun olmalı)
interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  subImage1?: string;
  subImage2?: string;
  subImage3?: string;
  subImage4?: string;
  subImage5?: string;
  demoUrl?: string | null;
  githubUrl?: string | null;
  // Technology: TechnologyItem'ın beklediği tip olmalı
  technologies: Technology[];
}

export default function ProjectDetailClient({ dict, locale }: Props) {
  const params = useParams();
  const id = params.id;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>(project?.image || "");
  const [smallImages, setSmallImages] = useState<string[]>([]);

  // Project değiştiğinde mainImage’i resetle

  useEffect(() => {
    if (project) {
      setMainImage(project.image);
      setSmallImages(
        [
          project.subImage1,
          project.subImage2,
          project.subImage3,
          project.subImage4,
          project.subImage5,
        ]
          .filter((img): img is string => Boolean(img))
          // Büyük görseli çıkarıyoruz, böylece mainImage zaten büyük olduğu için tekrar gözükmez
          .filter((img) => img !== project.image)
      );
    }
  }, [project]);

  const handleThumbnailClick = (img: string) => {
    // Küçük görsel tıklanınca büyük görsel ile yer değiştir
    setSmallImages((prev) => prev.map((i) => (i === img ? mainImage : i)));
    setMainImage(img);
  };

  // DÜZELTME 1: Bütün Hook'ları koşulsuz olarak fonksiyonun başına taşıdık.
  // Bu, React'in Hook sıralama kuralına uyar ve hatayı çözer.
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // --- Veri Çekme İşlemi (useEffect) ---
  useEffect(() => {
    // Geçersiz ID kontrolü
    if (id === null) {
      setLoading(false);
      setError("Geçersiz proje ID'si.");
      return;
    }

    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      try {
        // Belirtilen API rotasını kullanıyoruz
        const response = await fetch(`/api/projects/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Proje bulunamadı.");
          }
          throw new Error("Veri çekme sırasında bir hata oluştu.");
        }

        const data = await response.json();
        console.log(data);
        setProject(data.project); // API'dan gelen JSON yapısına göre (data: { project: Project })
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Bilinmeyen bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]); // ID değiştiğinde tekrar çalıştır
  // Proje bulunamazsa gösterilecek placeholder (Proje bulunamadı)
  const NotFoundPlaceholder = () => (
    <div className="min-h-screen flex items-center justify-center text-white text-3xl font-bold bg-black/80">
      {dict.notFound}
      <Bot className="animate-pulse ml-2" />
    </div>
  );

  // Yüklenme durumunda gösterilecek placeholder
  const LoadingPlaceholder = () => (
    <div className="min-h-screen flex items-center justify-center text-white text-3xl font-bold bg-black">
      {dict.loading} <Bot className="animate-pulse ml-2" />
    </div>
  );

  // DÜZELTME 2: Koşullu Çıkışlar (loading, error) tüm Hook'lardan SONRA gelmelidir.
  if (loading) {
    return <LoadingPlaceholder />;
  }

  if (error || !project) {
    return <NotFoundPlaceholder />;
  }

  // --- Carousel kaydırma işlevi (Hook değil, kalabilir) ---
  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 300; // Her tıklamada kayacak mesafe
    const currentScrollLeft = carouselRef.current.scrollLeft;

    let newScrollPosition;
    if (direction === "left") {
      newScrollPosition = Math.max(currentScrollLeft - scrollAmount, 0);
    } else {
      newScrollPosition = currentScrollLeft + scrollAmount;
    }

    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };

  // API'dan gelen projenin alanları
  const {
    title,
    summary,
    description,
    technologies,
    image,
    subImage1,
    subImage2,
    subImage3,
    subImage4,
    subImage5,
    demoUrl,
    githubUrl,
  } = project;

  // Eğer `images` boş gelirse, bu durum için boş dizi ataması yapalım (API'da null/undefined gelirse)
  // API'dan gelen subImage alanlarını diziye dönüştürelim
  const projectImages = [
    project.subImage1,
    project.subImage2,
    project.subImage3,
    project.subImage4,
    project.subImage5,
  ].filter((img): img is string => Boolean(img)); // boş olanları çıkar

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-800 to-black text-white py-10 px-6 md:px-20 overflow-hidden relative font-mono">
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

      {/* Görseller ve detay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-8xl mx-auto mt-20 p-6 md:p-12 rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col lg:flex-row items-start lg:items-center gap-12 relative overflow-hidden"
      >
        {/* Sol: Büyük görsel + küçük görseller */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.div
            className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            {mainImage && (
              <ImageZoom
                backdropClassName={cn(
                  '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/60'
                )}
              >
                <Image
                  src={mainImage}
                  alt={title}
                  width={1000}
                  height={600}
                  className="object-cover object-center w-full h-auto rounded-xl"
                />
              </ImageZoom>
            )}
          </motion.div>

          {smallImages.length > 0 && (
            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scroll-smooth py-2 scrollbar-none"
              >
                {smallImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-60 h-36 shrink-0 rounded-lg shadow-lg overflow-hidden border border-white/10 cursor-pointer"
                    onClick={() => handleThumbnailClick(img)}
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
                {dict.demoButton} <ArrowRight className="w-4 h-4" />
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

        {/* Sağ: Başlık + açıklama */}
        <div className="relative flex-1 flex flex-col justify-center gap-6 p-4 md:p-0">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-100 drop-shadow-[0_0_12px_rgba(255,180,0,0.7)] hover:drop-shadow-[0_0_20px_rgba(255,200,0,0.9)] transition-shadow duration-300">
            <GradientText
              gradient="linear-gradient(90deg, #f59e0b 0%, #fbbf24 40%, #fef3c7 60%, #fbbf24 80%, #f59e0b 100%)"
              text={title}
              className="inline font-mono"
            />
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mt-2"></div>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-sans">
            {summary}
          </p>
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
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-extrabold text-white font-mono">
              {dict.technologiesTitle}
            </h2>
            <pre className="bg-gray-900 text-white p-4 rounded-2xl font-mono overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed mt-6">
              <code>
                {/* 1. Paragraf */}
                <span className="text-blue-400">&lt;div class=</span>
                <span className="text-yellow-400">"project-info"</span>
                <span className="text-blue-400">&gt;</span>
                {"\n  "}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n    "}
                {dict.technologiesIntro.p1}
                {"\n  "}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n"}
                {/* 2. Paragraf */}
                {"\n  "}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n    "}
                {dict.technologiesIntro.p2}
                {"\n  "}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n"}
                {/* 3. Paragraf */}
                {"\n  "}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n    "}
                {dict.technologiesIntro.p3}
                {"\n  "}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n"}
                {/* 4. Paragraf (yanıp sönen imleç ile) */}
                {"\n  "}
                <span className="text-blue-400">&lt;p&gt;</span>
                {"\n    "}
                {dict.technologiesIntro.p4}
                <span className="ml-1 animate-blink text-green-400">_</span>
                {"\n  "}
                <span className="text-blue-400">&lt;/p&gt;</span>
                {"\n"}
                <span className="text-blue-400">&lt;/div&gt;</span>
              </code>
            </pre>
            <style jsx>{`
              .animate-blink {
                display: inline-block;
                width: 1ch;
                animation: blink 2s infinite;
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
                <span className="font-medium">{dict.links.openGithub}</span>
              </a>
              <Link
                href={`/${locale}/contact`}
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:rotate-0 transition-transform duration-300" />
                <span className="font-medium">{dict.links.getInTouch}</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4 mt-10">
            {/* API'dan gelen technologies kullanılıyor */}
            {technologies.map((tech, idx) => (
              <TechnologyItem
                key={tech._id ? tech._id.toString() : idx} // fallback olarak index kullan
                tech={tech}
              />
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
            {dict.cta.title}
          </h2>
          <p className="text-gray-200 text-lg mt-3 font-sans">
            {dict.cta.subtitle}{" "}
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300 rounded-full text-black font-semibold text-lg shadow-[0_0_15px_rgba(255,200,0,0.6)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,220,0,0.8)] transition-all duration-300"
          >
            {dict.cta.button} <ArrowRight className="w-5 h-5" />
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
