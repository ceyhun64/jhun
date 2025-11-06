import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/clientLayoutWrapper";
import ScrollToTopButton from "@/components/layout/scroll";
import { Toaster } from "sonner";
import Head from "next/head";
import SocialSidebar from "@/components/layout/socialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Jhun Tech | Web Geliştirme & Dijital Çözümler – Modern, Hızlı ve Etkileyici Web Siteleri",
  description:
    "Jhun Tech – Kurumsal web siteleri, e-ticaret, portföy ve özel çözümler ile markanızı dijitalde ön plana çıkarın. Türkiye’nin yenilikçi web ajansı!",
  openGraph: {
    title: "Jhun Tech | Web Geliştirme Ajansı",
    description:
      "Kurumsal web siteleri, e-ticaret platformları ve özel dijital çözümlerle markanızı büyütün.",
    siteName: "Jhun Tech",
    images: ["/og-image.webp"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <Head>
        <link rel="preconnect" href="https://www.jhunTech.com" />
        <link rel="preload" as="style" href="/css/6ded801ecd631cf3.css" />
        <link rel="preload" as="style" href="/css/de70bee13400563f.css" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/media/ba015fad6dcf6784-s.woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayoutWrapper>
          <main>{children}</main>
        </ClientLayoutWrapper>

        {/* Sosyal medya sidebar */}
        <SocialSidebar />

        <ScrollToTopButton />

        <Toaster
          richColors
          position="bottom-right"
          toastOptions={{
            style: { zIndex: 9999 },
          }}
        />
      </body>
    </html>
  );
}
