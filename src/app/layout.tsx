import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mudanzasguevara.com"),
  title: "Mudanzas Guevara | Mudanzas y Logística en Guayaquil, Quito y todo el Ecuador",
  description:
    "Mudanzas Guevara: Tu mejor opción para mudarte sin preocupaciones. Logística, Transporte y Mudanza en Guayaquil, Quito y cobertura a todo el Ecuador. ¡Cotización gratis!",
  keywords: [
    "mudanzas Guayaquil",
    "mudanzas Quito",
    "mudanzas Ecuador",
    "transporte mudanza",
    "logística Ecuador",
    "mudanzas Guevara",
    "cotización gratis mudanzas",
    "mudanza residencial",
    "mudanza empresarial",
  ],
  authors: [{ name: "Jimbra", url: "https://jimbra.net" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mudanzas Guevara | Mudanzas y Logística en Ecuador",
    description:
      "Tu mejor opción para mudarte sin preocupaciones. Logística, Transporte y Mudanza en Guayaquil, Quito y todo el Ecuador.",
    url: "https://mudanzasguevara.com",
    siteName: "Mudanzas Guevara",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/hero-moving.png",
        width: 1344,
        height: 768,
        alt: "Mudanzas Guevara - Servicio profesional de mudanzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Guevara | Mudanzas y Logística en Ecuador",
    description:
      "Tu mejor opción para mudarte sin preocupaciones. Cotización gratis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
