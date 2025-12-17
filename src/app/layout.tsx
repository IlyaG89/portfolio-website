import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseSpotlight from "@/components/effects/MouseSpotlight";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ilyagoykhfis.dev"),
  title: {
    default: "Ilya Goykhfis - Senior Full Stack Developer",
    template: "%s | Ilya Goykhfis",
  },
  description:
    "Senior Full Stack Developer with 9+ years of experience building scalable web applications. Specialized in React, TypeScript, Node.js, and Python.",
  keywords: [
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Web Development",
    "Software Engineer",
    "Next.js",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Ilya Goykhfis" }],
  creator: "Ilya Goykhfis",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ilyagoykhfis.dev",
    title: "Ilya Goykhfis - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 9+ years of experience building scalable web applications.",
    siteName: "Ilya Goykhfis Portfolio",
    images: [
      {
        url: "https://ilyagoykhfis.dev/api/og-image",
        width: 1200,
        height: 630,
        alt: "Ilya Goykhfis - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilya Goykhfis - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 9+ years of experience building scalable web applications.",
    images: ["https://ilyagoykhfis.dev/api/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <StructuredData />
        <MouseSpotlight />
        <div className="min-h-screen">
          <Header />
          {/* Main content area with left margin for sidebar on desktop */}
          <main className="lg:ml-[560px] lg:py-24 pt-32 pb-20 px-6 lg:px-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
