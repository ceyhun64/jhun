"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";

interface Contact2Props {
  title?: string;
  description?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact2: React.FC<Contact2Props> = ({
  title = "İletişime Geçin",
  description = "Sorularınız, geri bildirimleriniz veya iş birliği fırsatlarınız için buradayız. Size nasıl yardımcı olabileceğimizi bize bildirin!",
  email = "email@example.com",
  web = { label: "jhun.com", url: "https://jhun.com" },
}): React.JSX.Element => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-32 text-white bg-linear-to-b from-slate-950 to-black overflow-hidden font-mono"
    >
      {/* ShootingStars, sadece bu section içinde */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1200}
          maxDelay={4200}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl px-4 sm:px-6">
        {/* Sol Metin ve İletişim */}
        <div className="flex flex-col gap-10 lg:max-w-sm w-full">
          <div className="text-center lg:text-left">
            <h1 className="mb-2 text-4xl sm:text-5xl lg:mb-1 lg:text-6xl font-semibold">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="w-full lg:w-fit mx-auto text-center lg:mx-0 lg:text-left">
            <h3 className="mb-6 text-2xl font-semibold">İletişim Bilgileri</h3>
            <ul className="ml-0 lg:ml-4 list-none lg:list-disc space-y-2 text-sm sm:text-base">
              <li>
                <span className="font-bold">Telefon: </span>+90 554 149 6377
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </li>
              <li>
                <span className="font-bold">Web: </span>
                <a
                  href={web.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Alanı */}
        <div className="w-full flex flex-col gap-6 rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12 bg-black/50 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 grid items-center gap-1.5">
              <Label htmlFor="firstname">Ad</Label>
              <Input
                type="text"
                id="firstname"
                placeholder="Adınızı girin"
                className="bg-white/5 border border-white/20 placeholder:text-white/40 focus:border-purple-500 focus:ring focus:ring-purple-500/30 transition-all rounded-lg"
              />
            </div>
            <div className="flex-1 grid items-center gap-1.5">
              <Label htmlFor="lastname">Soyad</Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Soyadınızı girin"
                className="bg-white/5 border border-white/20 placeholder:text-white/40 focus:border-purple-500 focus:ring focus:ring-purple-500/30 transition-all rounded-lg"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">E-posta</Label>
            <Input
              type="email"
              id="email"
              placeholder="E-posta adresinizi girin"
              className="bg-white/5 border border-white/20 placeholder:text-white/40 focus:border-purple-500 focus:ring focus:ring-purple-500/30 transition-all rounded-lg"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Konu</Label>
            <Input
              type="text"
              id="subject"
              placeholder="Mesaj konusu"
              className="bg-white/5 border border-white/20 placeholder:text-white/40 focus:border-purple-500 focus:ring focus:ring-purple-500/30 transition-all rounded-lg"
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              placeholder="Mesajınızı buraya yazın"
              id="message"
              className="bg-white/5 border border-white/20 placeholder:text-white/40 focus:border-purple-500 focus:ring focus:ring-purple-500/30 transition-all rounded-lg"
            />
          </div>

          <Button className="w-full justify-center mt-2 bg-amber-600 hover:bg-orange-500 text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition-all rounded-lg py-3">
            Mesaj Gönder
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
