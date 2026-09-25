import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF6D4D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
  description:
    "Official platform for Winter Coding Contest 6.0 (WCC 6.0) presented by ACM VNRVJIET. Code, compile, and compete at the national level across two rigorous algorithmic rounds with ₹50,000+ in honors. Round 1 is 100% Free.",
  keywords: [
    "Winter Coding Contest",
    "WCC 6.0",
    "ACM VNRVJIET",
    "VNRVJIET",
    "Competitive Programming",
    "Hackathon",
    "Data Structures",
    "Algorithms",
    "HackerRank",
    "Unstop",
    "Hyderabad Coding Contest",
  ],
  authors: [{ name: "ACM VNRVJIET Student Chapter", url: "https://vnrvjiet.acm.org" }],
  creator: "ACM VNRVJIET",
  publisher: "ACM VNRVJIET",
  metadataBase: new URL("https://vnrvjiet.acm.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winter Coding Contest 6.0 — Flagship Art-Directed Platform",
    description:
      "Join 6,000+ national coders in Winter Coding Contest 6.0. Round 1 Online Qualifier is 100% Free on HackerRank. Grand Finale at VNRVJIET campus.",
    url: "https://vnrvjiet.acm.org/wcc",
    siteName: "ACM VNRVJIET WCC 6.0",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJIua8QDrhg963yM3OiDM5tyOeqB9z4L-wOstlhEV4ixo2B322df2zW7I22eWATxFQSjstaStivP6n7GrQZgzjOZPMJWUVsBUTHFHzwDBzewW0iVBeQuepHmSJQbRhxjUALVTq8gznmPusloSGNAeJJTJvzHS9Av-pyjDSyKQgiT4cWQA4iUy-C5UwIEMsDE82X2sikdtoUOGEg6W9UXvZy_9cReKM1LkkJwsDzuo2q8qKMJNQbXK1k6LqHzpsAoTusE",
        width: 1080,
        height: 1350,
        alt: "Winter Coding Contest 6.0 Official Poster",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
    description:
      "National algorithmic arena by ACM VNRVJIET. ₹50,000+ honors, Round 1 100% free entry. Register on Unstop.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJIua8QDrhg963yM3OiDM5tyOeqB9z4L-wOstlhEV4ixo2B322df2zW7I22eWATxFQSjstaStivP6n7GrQZgzjOZPMJWUVsBUTHFHzwDBzewW0iVBeQuepHmSJQbRhxjUALVTq8gznmPusloSGNAeJJTJvzHS9Av-pyjDSyKQgiT4cWQA4iUy-C5UwIEMsDE82X2sikdtoUOGEg6W9UXvZy_9cReKM1LkkJwsDzuo2q8qKMJNQbXK1k6LqHzpsAoTusE",
    ],
  },
  icons: {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsFV5jmI4DYgste6wBbS0ajAbzE2NNqLdaeL0_LGkPW3YTuYbgfjMRYtFgmv-aXbseIseeb-apNmLmN6qMlh_EKi7V4UqoGxjJCggaRADc1hYGgXTr4JRuIXgM2AY3KIo3qxE7JHRccq3MMxAhFQ7UN4FSR7AExqDdIb8d89oqTBs9Z1honiDHe-pu1vrPmece8UltBLlCoLPbyekVN-nhekSkKNaozcwZJxB0du2Q5U7QowEExa0t5txinv3B0T8JWA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth antialiased selection:bg-[#FF6D4D] selection:text-white`}
      style={{
        ["--pointer-x" as string]: "0",
        ["--pointer-y" as string]: "0",
      }}
    >
      <body className="min-h-screen bg-[#FFFDFC] text-[#0F172A] font-sans overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
