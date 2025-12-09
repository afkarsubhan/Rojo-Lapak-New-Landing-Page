import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rojo Lapak – Platform Berlangganan Bersama Legal & Bergaransi",
  description: "Platform berlangganan bersama legal & bergaransi. Nikmati layanan premium seperti Netflix, Spotify, Youtube dengan harga hemat.",
  keywords: "rojo lapak, berlangganan, berlangganan bareng, satu akun, paket group, paket family, patungan, netflix murah, spotify murah, youtube premium murah, disney hotstar murah, canva pro murah, microsoft 365 murah, sharing account, akun premium legal, garansi full",
  openGraph: {
    title: "Rojo Lapak – Platform Berlangganan Bersama Legal & Bergaransi",
    description: "Nikmati layanan premium dengan harga hemat, aman, dan legal.",
    url: "https://rojolapak.com",
    siteName: "Rojo Lapak",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rojo Lapak",
  "url": "https://rojolapak.com",
  "logo": "https://rojolapak.com/logo.png",
  "description": "Platform berlangganan bersama legal & bergaransi.",
  "sameAs": [
    "https://www.instagram.com/rojolapak",
    "https://www.facebook.com/rojolapak"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6282143370661",
    "contactType": "customer service"
  }
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatingWhatsApp />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFZ48HH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
