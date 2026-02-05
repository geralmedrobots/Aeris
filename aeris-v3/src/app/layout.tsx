import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./header.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import { getLocale } from "@/components/useLocale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aeris — Sportswear Store (Demo)",
    template: "%s · Aeris",
  },
  description:
    "Demo sportswear e-commerce built with Next.js. Inspired by modern athletic retail patterns (original design; no affiliation).",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale === "en" ? "en" : "pt-PT"}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function handleScroll() {
                  const header = document.querySelector('.siteHeader');
                  if (header) {
                    if (window.scrollY > 50) {
                      header.classList.add('scrolled');
                    } else {
                      header.classList.remove('scrolled');
                    }
                  }
                }
                
                if (typeof window !== 'undefined') {
                  window.addEventListener('scroll', handleScroll);
                  handleScroll();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
