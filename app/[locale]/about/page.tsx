import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import About from "@/components/contact/about";
import type PageProps from "next/app"; // Next.js tiplerini kontrol et

type Props = PageProps & {
  params: { locale: "tr" | "en" };
};

export default function AboutPage({ params }: Props) {
  const { locale } = params; // await kaldırıldı
  return (
    <div className="bg-black">
      <Navbar locale={locale} />
      <div className="py-15">
        <About locale={locale} />
      </div>
      <Footer locale={locale} />
    </div>
  );
}
