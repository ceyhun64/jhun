"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import { RollingText } from "../ui/shadcn-io/rolling-text";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/shadcn-io/3d-card";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: "item-8",
    title: "Build Modern UIs",
    summary:
      "Create stunning user interfaces with our comprehensive design system.",
    url: "localhost:3000",
    image: "/gallery/8.png",
  },
  {
    id: "item-7",
    title: "AI-Driven Dashboard",
    summary:
      "Smart analytics powered by machine learning and real-time insights.",
    url: "localhost:3000",
    image: "/gallery/7.png",
  },
  {
    id: "item-1",
    title: "Quantum UI System",
    summary: "Next-gen UI framework merging quantum design and minimalism.",
    url: "localhost:3000",
    image: "/gallery/1.png",
  },
    {
    id: "item-2",
    title: "Quantum UI System",
    summary: "Next-gen UI framework merging quantum design and minimalism.",
    url: "localhost:3000",
    image: "/gallery/2.png",
  },
  {
    id: "item-3",
    title: "Machine Learning Automation",
    summary:
      "End-to-end ML pipelines with automated model training and deployment.",
    url: "localhost:3000",
    image: "/gallery/3.png",
  },
    {
    id: "item-4",
    title: "Predictive Analytics Suite",
    summary:
      "Data-driven insights for performance optimization and forecasting.",
    url: "localhost:3000",
    image: "/gallery/4.png",
  },
  {
    id: "item-5",
    title: "Neural Network Architecture",
    summary: "Optimized network visualization tools for AI research teams.",
    url: "#",
    image: "/gallery/5.png",
  },
  {
    id: "item-6",
    title: "Neural Network Architecture",
    summary: "Optimized network visualization tools for AI research teams.",
    url: "#",
    image: "/gallery/6.png",
  },


];

const Gallery3D: React.FC = () => {
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 md:px-16 bg-linear-to-t from-black to-slate-950 relative font-sans overflow-hidden">
      {/* Neon glow arka plan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#3b82f6]/20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Başlık */}
      <div className="container mx-auto mb-1 md:mb-10  text-center md:text-left">
        <RollingText
          className="inline-block relative w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white bg-clip-text mb-1"
          text="Geleceği Tasarlıyoruz"
        />
        <p className="text-gray-400 max-w-2xl text-sm md:text-md lg:text-lg mt-2">
          En yeni teknolojilerle geliştirilmiş modern projelerimizi keşfedin.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-x-hidden mt-10 font-mono">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: false,
            align: "start",
            skipSnaps: false,
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="flex">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="w-full md:max-w-[400px] cursor-pointer"
              >
                <CardContainer className="inter-var" containerClassName="py-6">
                  <CardBody className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 border border-zinc-800/70 rounded-2xl p-4 group/card hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:z-10">
                    {/* Resim */}
                    <CardItem translateZ="140" className="w-full">
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 0 group-hover/card:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-orange-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </CardItem>

                    {/* Başlık */}
                    <CardItem
                      translateZ="120"
                      className="mt-5 text-lg sm:text-xl font-semibold text-white group-hover/card:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </CardItem>

                    {/* Açıklama */}
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-sm text-gray-400 mt-2 line-clamp-3"
                    >
                      {item.summary}
                    </CardItem>

                    {/* Alt kısım */}
                    <div className="mt-5 flex justify-between items-center">
                      <CardItem
                        translateZ={60}
                        as="span"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-semibold group-hover/card:translate-x-1 transition-transform"
                      >
                        <Eye className="w-4 h-4" /> İncele
                      </CardItem>

                      <CardItem translateZ={40} as="div">
                        <Button
                          onClick={() => window.open(item.url, "_blank")}
                          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-[0_0_12px_rgba(249,115,22,0.4)] transition-all"
                        >
                          Siteye Git <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardItem>
                    </div>

                    {/* Glow Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 opacity-0 group-hover/card:opacity-100 blur-[25px] transition-opacity duration-700"></div>
                  </CardBody>
                </CardContainer>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* 🔹 Mobil oklar */}
      <div className="flex md:hidden mt-6 justify-between items-center w-full px-4 gap-3">
        <div className="flex gap-2">
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="bg-zinc-800 hover:bg-zinc-700"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="bg-zinc-800 hover:bg-zinc-700"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </div>

        <Link href="/projects">
          <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 ">
            Projeleri İncele
          </Button>
        </Link>
      </div>

      {/* 🔸 Masaüstü oklar */}
      <div className="hidden md:flex flex-row gap-4 mt-10 justify-between items-center">
        <div className="flex gap-3">
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="bg-zinc-800 hover:bg-zinc-700"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="bg-zinc-800 hover:bg-zinc-700"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </div>

        <Link href="/projects">
          <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700">
            Projeleri İncele <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery3D;
