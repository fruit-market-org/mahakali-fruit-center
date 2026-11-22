import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { COMPANY, CONTACT, SEO } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  applicationName: COMPANY.name,
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    title: SEO.defaultTitle,
    description: SEO.description,
    url: SEO.siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1C7C4A",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: COMPANY.name,
  alternateName: COMPANY.nameLocal,
  description: SEO.description,
  foundingDate: "1990-01-01",
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  url: SEO.siteUrl,
  image: `${SEO.siteUrl}/images/shopfront.webp`,
  ...(COMPANY.address ? { address: COMPANY.address } : {}),
  ...(COMPANY.hours ? { openingHours: COMPANY.hours } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-leaf focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
