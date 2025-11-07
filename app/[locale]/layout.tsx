import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientLayoutWrapper from "@/components/layout/clientLayoutWrapper";
import ScrollToTopButton from "@/components/layout/scroll";
import { Toaster } from "sonner";
import SocialSidebar from "@/components/layout/socialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Multi-locale destekli metadata
export const generateMetadata = ({
  params,
}: {
  params: { locale: string };
}) => {
  const locale = params.locale === "tr" ? "tr_TR" : "en_US";
  const htmlLang = params.locale || "tr";

  return {
    title:
      "Jhun Tech | Web Geliştirme & Dijital Çözümler – Modern, Hızlı ve Etkileyici Web Siteleri",
    description:
      "Jhun Tech – Kurumsal web siteleri, e-ticaret, portföy ve özel çözümler ile markanızı dijitalde ön plana çıkarın.",
    openGraph: {
      title: "Jhun Tech | Web Geliştirme Ajansı",
      description:
        "Kurumsal web siteleri, e-ticaret platformları ve özel dijital çözümlerle markanızı büyütün.",
      siteName: "Jhun Tech",
      images: ["/og-image.png"],
      locale,
      type: "website",
    },
    lang: htmlLang, // HTML lang buradan otomatik uygulanır
  };
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ClientLayoutWrapper>
        <main>{children}</main>
      </ClientLayoutWrapper>

      {/* Sosyal medya sidebar */}
      <SocialSidebar />

      <ScrollToTopButton />

      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{ style: { zIndex: 9999 } }}
      />
    </div>
  );
}
