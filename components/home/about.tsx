"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import { FireworksBackground } from "@/components/ui/shadcn-io/fireworks-background";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { PixelImage } from "@/components/ui/shadcn-io/pixel-image";
import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";
import Link from "next/link";

interface Company {
  src: string;
  alt: string;
}

interface Achievement {
  label: string;
  value: string;
}

export default function About() {
  const defaultCompanies: Company[] = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Arc",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      alt: "Descript",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      alt: "Mercury",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Ramp",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      alt: "Retool",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      alt: "Watershed",
    },
  ];

  const defaultAchievements: Achievement[] = [
    { label: "Desteklenen Şirket", value: "300+" },
    { label: "Tamamlanan Proje", value: "800+" },
    { label: "Mutlu Müşteri", value: "99%" },
    { label: "Kazanılan Ödül", value: "10+" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-16 px-4 md:px-10 bg-linear-to-t from-slate-950 to-black font-sans"
    >
      <div className="container mx-auto">
        {/* Başlık ve açıklama */}
        <div className="mb-2 md:mb-4 grid gap-5 text-center md:grid-cols-2 md:text-left px-12">
          <TypingText
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold tracking-tight text-white"
            text="Biz Kimiz"
            cursorClassName="h-8 sm:h-9"
          />
          <p className="leading-7 text-sm sm:text-base md:text-lg not-first:mt-4 text-white">
            .jhun, işletmelerin dijital çağda büyümesini ve başarılı olmasını
            sağlayacak yenilikçi çözümler geliştirmeye adanmış tutkulu bir
            ekiptir.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {/* Sol Görsel Alanı */}
          <div className="lg:col-span-2">
            <div className="relative flex-1 rounded-xl overflow-hidden sm:p-8">
              <SparklesCore
                id="tsparticlesfullpage0"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="absolute inset-0 w-full h-full"
                particleColor="#FFFFFF"
                speed={1}
              />
              <div className="relative z-10 flex flex-col justify-between h-full overflow-auto p-4 space-y-4">
                {/* Üst Tek Blok */}
                <pre className="bg-gray-900 text-white p-4 rounded-2xl font-mono overflow-x-auto whitespace-pre-wrap">
                  <code>
                    <span className="text-blue-400">&lt;p&gt;</span>
                    {"\n  "}
                    <span className="text-yellow-300 font-bold">
                      Dijital
                    </span>{" "}
                    dünyada yaratıcılık ve teknoloji birleşiyor.{" "}
                    <span className="text-green-400 font-bold">.jhun</span>{" "}
                    olarak, web yazılımını sadece bir araç değil, bir sanat
                    formu olarak görüyoruz. İşletmelerin dijital dönüşümünü
                    hızlandırmak, kullanıcı deneyimini güçlendirmek ve
                    markaların online dünyada öne çıkmasını sağlamak bizim
                    işimiz.
                    {"\n"}
                    <span className="text-blue-400">&lt;/p&gt;</span>
                    {"\n\n"}
                    <span className="text-blue-400">&lt;p&gt;</span>
                    {"\n  "}
                    <span className="text-yellow-300 font-bold">
                      Misyonumuz
                    </span>{" "}
                    Yenilikçi ve etkili web çözümleri sunmak, modern
                    teknolojilerle hızlı, güvenli ve ölçeklenebilir altyapılar
                    oluşturmak, kullanıcı odaklı arayüz ve deneyim tasarlamak,
                    markaların dijital potansiyelini en üst düzeye çıkarmak.
                    {"\n"}
                    <span className="text-blue-400">&lt;/p&gt;</span>
                  </code>
                </pre>

                {/* Alt 2 Kolonlu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col justify-center p-4 rounded-2xl shadow bg-gray-900">
                    <pre className="bg-gray-900 text-white p-4 rounded-2xl font-mono overflow-x-auto whitespace-pre-wrap">
                      <code>
                        <span className="text-blue-400">&lt;p&gt;</span>
                        {"\n  "}
                        <span className="text-yellow-300 font-bold">
                          Vizyonumuz
                        </span>{" "}
                        .jhun olarak, geleceğin web deneyimlerini tasarlamak ve
                        sürekli değişen teknoloji dünyasında markaları öncü
                        konumda tutmak istiyoruz.
                        {"\n  "}
                        <span className="text-yellow-300 font-bold">
                          Dijitalde fark
                        </span>{" "}
                        yaratmak, sadece bugünün değil, yarının trendlerini de
                        yakalamak bizim hedefimiz. Her proje ile kullanıcı
                        odaklı, yenilikçi ve estetik çözümler sunmayı
                        amaçlıyoruz. Biz, yalnızca işlevsel web siteleri ve
                        uygulamalar geliştirmekle kalmıyor; markaların dijital
                        stratejilerini güçlendirecek, etkileşim ve dönüşümü
                        artıracak deneyimler yaratıyoruz.
                        {"\n  "}
                        Teknolojiyi stratejik bir avantaja dönüştürmek, veri
                        güvenliğini en üst düzeyde sağlamak ve performanslı
                        altyapılar oluşturmak vizyonumuzun temel taşlarıdır.
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
                  </div>

                  <div className="w-full sm:w-auto h-96 sm:h-72 md:h-full rounded-2xl overflow-hidden">
                    <PixelImage src="/logo/logo1.png" grid="4x6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ İçerik */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden p-5 sm:p-8">
              <SparklesCore
                id="tsparticlesfullpage1"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="absolute inset-0 w-full h-full"
                particleColor="#FFFFFF"
                speed={1}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <Link href="/">
                  <GradientText
                    className="text-2xl font-bold font-mono"
                    text=".jhun{}"
                  />
                </Link>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                  jhun.dev’de{" "}
                  <span className="text-yellow-300 font-bold">
                    yüzlerce proje
                  </span>
                </h4>
                <p className="leading-7 text-sm sm:text-base text-white">
                  İşletmelere{" "}
                  <span className="text-yellow-300 font-bold">modern</span>,
                  kullanıcı dostu ve etkili web çözümleri sunuyoruz. Tasarımdan{" "}
                  <span className="text-yellow-300 font-bold">
                    SEO optimizasyonu
                  </span>
                  na, blog yönetiminden e-ticaret entegrasyonuna kadar tüm
                  süreçlerde işletmelerin dijital büyümesini destekliyoruz.
                </p>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight mt-6 text-white">
                  <span className="text-yellow-300 font-bold">Logomuz</span>{" "}
                  nereden geliyor?
                </h4>
                <p className="mt-2 text-sm sm:text-base text-white">
                  <span className="text-yellow-300 font-bold">.jhun</span> ismi,
                  kurucumuz{" "}
                  <span className="text-yellow-300 font-bold">
                    Ceyhun Turkmen
                  </span>
                  'in isminden okunuyor ve JSON formatına gönderme yapıyor:
                  Nokta objeleri, süslü parantez veri bloklarını simgeliyor.
                  Böylece isim ve logo, markamızın modern, minimal ve teknoloji
                  odaklı kimliğini hem görsel hem kavramsal olarak yansıtıyor.
                </p>
                <p className="mt-2 text-sm sm:text-base text-white">
                  Lacivert renk, web tasarımında gece ve gökyüzünün sonsuzluğunu
                  simgeler.{" "}
                  <span className="text-[#153ca9] font-bold">
                    .jhun logosundaki lacivert
                  </span>
                  , evrendeki yıldızların ilham verici düzenini ve markamızın
                  sınırsız yaratıcılığını temsil eder; profesyonel ve güvenilir
                  kimliğimize ithaf edilmiştir.
                </p>
                <blockquote className="mt-4 border-l-2 pl-4 italic text-sm sm:text-base text-white">
                  "Minimalist tasarım ve{" "}
                  <span className="text-green-500 font-bold">
                    kod dünyasının sembolleri
                  </span>
                  , markamızın yenilikçi ve çözüm odaklı yaklaşımını
                  ziyaretçilere doğrudan anlatıyor."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Şirket logoları */}
        <div className="py-16 md:py-32">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Türkiye genelinde müşterilerimizin tercihi
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {defaultCompanies.map((company, idx) => (
              <div
                className="flex flex-col items-center gap-3"
                key={company.src + idx}
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 sm:h-8 md:h-10 w-auto filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Başarılarımız */}
        <div className="relative overflow-hidden p-8 md:p-16 dark:bg-black">
          <SparklesCore
            id="tsparticlescolorful"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 w-full h-full"
            particleColor="#FFFFFF"
            speed={0.5}
          />
          <FireworksBackground
            className="absolute inset-0 w-full h-full"
            population={1}
          />
          <div className="flex flex-col gap-4 text-center md:text-left relative z-10 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold">
              Başarılarımız Sayılarla
            </h2>
            <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
              İşletmelere iş akışlarını geliştiren, verimliliği artıran ve
              büyümeyi teşvik eden etkili araçlar sağlıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-between gap-6 md:gap-10 text-center">
              {defaultAchievements.map((item, idx) => (
                <div
                  className="flex flex-col gap-2 md:gap-4"
                  key={item.label + idx}
                >
                  <p className="text-sm sm:text-base">{item.label}</p>
                  <span className="text-2xl sm:text-4xl md:text-5xl font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
