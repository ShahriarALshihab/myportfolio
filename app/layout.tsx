import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahriar Al Shihab | Full Stack Developer",
  description:
    "Portfolio of Shahriar Al Shihab — Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web architectures.",
  keywords: [
    "Shahriar Al Shihab",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Portfolio",
    "Web Developer Dhaka Bangladesh",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Shahriar Al Shihab", url: "https://github.com/ShahriarALshihab" }],
  creator: "Shahriar Al Shihab",
  openGraph: {
    title: "Shahriar Al Shihab | Full Stack Developer",
    description:
      "Passionate full-stack developer crafting modern, scalable web experiences with React, Next.js, and Node.js. Explore projects, skills, and technical expertise.",
    url: "https://shahriar-portfolio.vercel.app",
    siteName: "Shahriar Al Shihab Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahriar Al Shihab | Full Stack Developer",
    description:
      "Passionate full-stack developer crafting modern, scalable web experiences with React, Next.js, and Node.js.",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#f0f4ff] dark:bg-[#0a0a0f] text-[#0d1117] dark:text-[#e6edf3] selection:bg-[#4f8ef7]/30 selection:text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
