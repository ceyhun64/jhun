"use client";
import Navbar from "@/components/layout/navbar";
import Heroes from "@/components/home/heroes";
import Banner from "@/components/home/banner";
import About from "@/components/home/about";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/home/contact";
import Gallery from "@/components/home/gallery";
import Scroll from "@/components/layout/scroll"; // buton componenti

export default function Home() {
  return (
    <div className="relative bg-black">
      {/* Navbar sabit, üstte */}
      <Navbar />

      {/* Navbar yüksekliği kadar boşluk */}
      <div className="pt-10">
        <Heroes />
        <Banner />
        <Gallery />
        <About />
        <ContactSection />
        <Footer />
      </div>

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
