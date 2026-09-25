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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": "https://vnrvjiet.acm.org/#event",
      name: "Winter Coding Contest 6.0 (WCC 6.0)",
      alternateName: "WCC 6.0",
      description:
        "Official platform for Winter Coding Contest 6.0 presented by ACM VNRVJIET. Code, compile, and compete at the national level across two rigorous algorithmic rounds with ₹50,000+ in honors. Round 1 is 100% Free on HackerRank.",
      startDate: "2026-10-09T09:00:00+05:30",
      endDate: "2026-10-11T18:00:00+05:30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      image: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJIua8QDrhg963yM3OiDM5tyOeqB9z4L-wOstlhEV4ixo2B322df2zW7I22eWATxFQSjstaStivP6n7GrQZgzjOZPMJWUVsBUTHFHzwDBzewW0iVBeQuepHmSJQbRhxjUALVTq8gznmPusloSGNAeJJTJvzHS9Av-pyjDSyKQgiT4cWQA4iUy-C5UwIEMsDE82X2sikdtoUOGEg6W9UXvZy_9cReKM1LkkJwsDzuo2q8qKMJNQbXK1k6LqHzpsAoTusE",
      ],
      location: [
        {
          "@type": "VirtualLocation",
          url: "https://www.hackerrank.com",
          name: "HackerRank Virtual Arena (Round 1)",
        },
        {
          "@type": "Place",
          name: "VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vignana Jyothi Nagar, Pragathi Nagar, Nizampet",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500090",
            addressCountry: "IN",
          },
        },
      ],
      organizer: {
        "@type": "Organization",
        name: "ACM VNRVJIET Student Chapter",
        url: "https://vnrvjiet.acm.org",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsFV5jmI4DYgste6wBbS0ajAbzE2NNqLdaeL0_LGkPW3YTuYbgfjMRYtFgmv-aXbseIseeb-apNmLmN6qMlh_EKi7V4UqoGxjJCggaRADc1hYGgXTr4JRuIXgM2AY3KIo3qxE7JHRccq3MMxAhFQ7UN4FSR7AExqDdIb8d89oqTBs9Z1honiDHe-pu1vrPmece8UltBLlCoLPbyekVN-nhekSkKNaozcwZJxB0du2Q5U7QowEExa0t5txinv3B0T8JWA",
        sameAs: [
          "https://www.linkedin.com/company/acmvnrvjiet",
          "https://www.instagram.com/acmvnrvjiet",
          "https://github.com/acmtechteam2k25",
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://unstop.com",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        validFrom: "2026-08-01T00:00:00+05:30",
        description: "Round 1 is 100% Free of cost for all verified students nationwide.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Round 1 really 100% free of charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Registration and participation in Round 1 (Online Qualifier) is completely free of cost for all student participants across India. There are no hidden charges or fees.",
          },
        },
        {
          "@type": "Question",
          name: "What is the permissible team composition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Teams can consist of either a single individual (Solo) or a pair of two coders (Duo). Both team members must be enrolled students in an accredited degree program (B.Tech, BE, BCA, MCA, M.Tech, etc.).",
          },
        },
        {
          "@type": "Question",
          name: "Which programming languages are supported on HackerRank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard modern languages supported by HackerRank are permitted, including C++ (GCC 17/20), Java (Java 17/21), Python (Python 3.x), and C. Standard Template Library (STL) and equivalent standard data structure libraries are fully permitted.",
          },
        },
        {
          "@type": "Question",
          name: "Where and when will Round 2 be held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Round 2 will be held physically on Sunday, October 11, 2026, at the state-of-the-art Computer Science & IT Laboratories at the VNRVJIET campus in Bachupally, Hyderabad. Complete reporting guidelines and campus transit instructions will be shared with the 150+ shortlisted qualifiers.",
          },
        },
      ],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDFC] text-[#0F172A] font-sans overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
