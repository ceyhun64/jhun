"use client";

import { motion } from "framer-motion";
import { Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/shadcn-io/3d-card";
import { FlickeringGrid } from "../ui/shadcn-io/flickering-grid";
import { GradientText } from "../ui/shadcn-io/gradient-text";
import { TextReveal } from "../ui/shadcn-io/text-reveal";
import Link from "next/link";

interface GalleryItem {
  id: number;
  title: string;
  summary: string;
  url: string;
  image: string;
  description: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Build Modern UIs",
    summary:
      "Create stunning user interfaces with our comprehensive design system.",
    url: "localhost:3000",
    image: "/gallery/8.png",
    description:
      "A modern UI framework to build fast, responsive, and beautiful interfaces for web applications.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    images: ["/gallery/8.png", "/gallery/8-2.png"],
    demoUrl: "https://demo1.localhost:3000",
    githubUrl: "https://github.com/user/build-modern-uis",
  },
  {
    id: 2,
    title: "AI-Driven Dashboard",
    summary:
      "Smart analytics powered by machine learning and real-time insights.",
    url: "localhost:3000",
    image: "/gallery/7.png",
    description:
      "A dashboard that visualizes AI-driven insights with predictive analytics and dynamic charts.",
    technologies: ["React", "Chart.js", "Python", "TensorFlow", "Node.js"],
    images: ["/gallery/7.png", "/gallery/7-2.png"],
    demoUrl: "https://demo2.localhost:3000",
    githubUrl: "https://github.com/user/ai-dashboard",
  },
  {
    id: 3,
    title: "Quantum UI System",
    summary: "Next-gen UI framework merging quantum design and minimalism.",
    url: "localhost:3000",
    image: "/gallery/1.png",
    description:
      "A quantum-inspired UI framework focusing on minimalistic design and high performance.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    images: ["/gallery/1.png", "/gallery/1-2.png"],
  },
  {
    id: 4,
    title: "Quantum UI System",
    summary: "Next-gen UI framework merging quantum design and minimalism.",
    url: "localhost:3000",
    image: "/gallery/2.png",
    description:
      "Enhanced version of Quantum UI System with more interactive components and animations.",
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    images: ["/gallery/2.png", "/gallery/2-2.png"],
  },
  {
    id: 5,
    title: "Machine Learning Automation",
    summary:
      "End-to-end ML pipelines with automated model training and deployment.",
    url: "localhost:3000",
    image: "/gallery/3.png",
    description:
      "Automates the machine learning workflow from data preprocessing to model deployment.",
    technologies: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Docker",
      "Kubernetes",
    ],
    images: ["/gallery/3.png", "/gallery/3-2.png"],
    demoUrl: "https://demo5.localhost:3000",
  },
  {
    id: 6,
    title: "Predictive Analytics Suite",
    summary:
      "Data-driven insights for performance optimization and forecasting.",
    url: "localhost:3000",
    image: "/gallery/4.png",
    description:
      "A suite that predicts trends, generates reports, and optimizes business performance.",
    technologies: ["Python", "Pandas", "Plotly", "React", "Next.js"],
    images: ["/gallery/4.png", "/gallery/4-2.png"],
  },
  {
    id: 7,
    title: "Neural Network Architecture",
    summary: "Optimized network visualization tools for AI research teams.",
    url: "#",
    image: "/gallery/5.png",
    description:
      "Visualizes complex neural network architectures interactively for research and presentations.",
    technologies: ["Python", "PyTorch", "D3.js", "React"],
    images: ["/gallery/5.png", "/gallery/5-2.png"],
    githubUrl: "https://github.com/user/neural-network-arch",
  },
  {
    id: 8,
    title: "Neural Network Architecture",
    summary: "Optimized network visualization tools for AI research teams.",
    url: "#",
    image: "/gallery/6.png",
    description:
      "Extended version with 3D visualization and real-time data simulation.",
    technologies: ["Python", "PyTorch", "Three.js", "React"],
    images: ["/gallery/6.png", "/gallery/6-2.png"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-slate-800 to-black text-white py-20 px-10 relative overflow-hidden">
      {/* Neon blur arka plan efektleri */}{" "}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={50}
        gridGap={5}
        color="#000000"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
      <div className="relative w-full h-50 flex flex-col justify-center items-center text-center overflow-hidden z-10">
        {/* Grid sadece bu başlık alanının arkasında */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-extrabold mb-6 z-10 font-mono"
        >
          <TextReveal
            text="GELECEĞİ KODLUYORUZ"
            revealText="KODUN SANATSAL HALİ"
            className="h-20"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 w-full max-w-2xl mx-auto mb-6 text-lg md:text-md z-10"
        >
          En yeni teknolojilerle geliştirilmiş, yüksek performanslı ve{" "}
          <GradientText
            gradient="linear-gradient(90deg, #7c2d12 0%, #f97316 40%, #fff7ed 60%, #f97316 80%, #7c2d12 100%)"
            text="modern"
            className="inline"
          />{" "}
          projelerimiz.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10 font-mono">
        {/* 3D Kartlar */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  relative z-10 justify-items-center">
          {items.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardContainer className="inter-var" containerClassName="py-6">
                <CardBody className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 border border-zinc-800/70 rounded-2xl p-4 group/card hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:z-10">
                  {/* Resim */}
                  <CardItem translateZ="160" className="w-full">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover/card:scale-110 group-hover/card:brightness-110"
                      />
                      {/* Neon overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-orange-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </CardItem>

                  {/* Başlık */}
                  <CardItem
                    translateZ="130"
                    className="mt-5 text-lg sm:text-xl font-semibold text-white group-hover/card:text-blue-400 transition-colors"
                  >
                    {proj.title}
                  </CardItem>

                  {/* Açıklama */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm text-gray-400 mt-2 line-clamp-3"
                  >
                    {proj.summary}
                  </CardItem>

                  {/* Alt Kısım */}
                  <div className="mt-5 flex justify-between items-center">
                    <CardItem
                      translateZ={70}
                      as="span"
                      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-semibold group-hover/card:translate-x-1 transition-transform cursor-pointer"
                    >
                      <Link
                        href={`/projects/${proj.id}`}
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-semibold group-hover/card:translate-x-1 transition-transform cursor-pointer"
                      >
                        <Eye className="w-4 h-4" /> İncele
                      </Link>
                    </CardItem>

                    <CardItem translateZ={50} as="div">
                      <Button
                        onClick={() => window.open(proj.url, "_blank")}
                        className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-[0_0_12px_rgba(249,115,22,0.4)] transition-all"
                      >
                        Siteye Git <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardItem>
                  </div>

                  {/* Glow Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 opacity-0 group-hover/card:opacity-100 blur-[25px] transition-opacity duration-700"></div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
