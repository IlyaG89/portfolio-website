import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseSpotlight from "@/components/effects/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Ilya Goykhfis" }],
  creator: "Ilya Goykhfis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ilyagoykhfis.com",
    title: "Ilya Goykhfis - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 9+ years of experience building scalable web applications.",
    siteName: "Ilya Goykhfis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilya Goykhfis - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 9+ years of experience building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
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
        <MouseSpotlight />
        <div className="min-h-screen">
          <Header />
          {/* Main content area with left margin for sidebar on desktop */}
          <main className="lg:ml-[560px] lg:py-24 py-20 px-6 lg:px-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
