import type { Metadata } from "next";
import { Source_Serif_4, Outfit } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
  description:
    "Complete guide to electrical plug and socket types used in Rwanda. Rwanda uses Types C, E, and G at 230V/50Hz. Includes the Type J database error correction.",
  keywords: [
    "Rwanda plugs",
    "Rwanda electrical sockets",
    "Rwanda power adapter",
    "Type C plug",
    "Type E plug",
    "Type G plug",
    "Rwanda voltage",
    "Rwanda electricity",
  ],
  openGraph: {
    title: "Electrical Plugs & Sockets in Rwanda",
    description:
      "Rwanda uses plug types C, E, and G at 230V/50Hz. The definitive reference for travellers and electricians.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Plugs & Sockets in Rwanda",
    description: "Rwanda uses plug types C, E, and G at 230V/50Hz.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What plug types are used in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rwanda uses plug types C, E, and G. Type C (Europlug) is listed due to its compatibility with Type E sockets, and there are no dedicated Type C sockets. Type E (French) is the historical standard from Belgian colonial infrastructure. Type G (British) is the official East African Community standard, required in all new construction.",
      },
    },
    {
      "@type": "Question",
      name: "What voltage and frequency does Rwanda use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rwanda uses 230 V at 50 Hz, the same standard as most of Europe and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Why do some websites list Type J for Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some international databases, notably those derived from IEC data, incorrectly listed Rwanda as using plug types C and J. Type J is the Swiss plug, used exclusively in Switzerland and Liechtenstein. This was a data entry error that propagated across reference databases. It has since been corrected in authoritative sources.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a travel adapter for Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "European two-pin (Type C) plugs work directly in most Rwandan sockets. French (Type E) plugs work in Type E sockets found in older buildings. Travellers from the UK, US, Australia, and other regions will need an adapter. A universal travel adapter is recommended for the best coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What is the East African Community (EAC) plug standard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The EAC has adopted Type G (British BS 1363) as its official plug standard. Rwanda, along with Kenya, Tanzania, and Uganda, now requires Type G sockets in all new electrical installations.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
  description:
    "Complete reference for electrical plug and socket types used in Rwanda, including the Type J database error correction.",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  author: {
    "@type": "Organization",
    name: "Rwanda Plugs",
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
      className={`${sourceSerif.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
