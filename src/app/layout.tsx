import type { Metadata } from "next";
import { Source_Serif_4, Outfit } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
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
  metadataBase: new URL(SITE_URL),
  title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
  description:
    "Complete guide to electrical plug and socket types used in Rwanda. Rwanda uses Types C, E, and G at 230V/50Hz. Includes the Type J database error correction.",
  keywords: [
    "Rwanda plugs",
    "Rwanda electrical sockets",
    "Rwanda power adapter",
    "Rwanda power outlet",
    "Rwanda travel adapter",
    "Type C plug Rwanda",
    "Type E plug Rwanda",
    "Type G plug Rwanda",
    "Rwanda voltage 230V",
    "Rwanda electricity",
    "do I need adapter for Rwanda",
    "Rwanda plug type",
    "East African Community plug standard",
    "Kigali power socket",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
    description:
      "Rwanda uses plug types C, E, and G at 230V/50Hz. Everything you need to know about power adapters, sockets, and voltage in Rwanda.",
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G at 230V 50Hz",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
    description:
      "Rwanda uses plug types C, E, and G at 230V/50Hz. Everything you need to know about power adapters, sockets, and voltage in Rwanda.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "RW",
    "geo.placename": "Rwanda",
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
  url: SITE_URL,
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Choose a Travel Adapter for Rwanda",
  description:
    "Determine which travel adapter you need for Rwanda based on your home country's plug type.",
  step: [
    {
      "@type": "HowToStep",
      name: "Check your plug type",
      text: "Identify your device's plug type. European two-pin (Type C) plugs work directly in most Rwandan sockets without an adapter.",
    },
    {
      "@type": "HowToStep",
      name: "Check the building age",
      text: "Older Rwandan buildings use Type E (French) sockets. Newer buildings and hotels use Type G (British) sockets, the official EAC standard.",
    },
    {
      "@type": "HowToStep",
      name: "Get the right adapter",
      text: "Travellers from the UK, US, Australia, and other non-European countries need an adapter. A universal travel adapter is recommended for the best coverage across both older (Type E) and newer (Type G) buildings.",
    },
    {
      "@type": "HowToStep",
      name: "Check your device voltage",
      text: "Rwanda uses 230V at 50Hz. Most modern electronics (laptops, phones) support 100-240V and work without a converter. Check your device's label to confirm.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Complete reference for electrical plug and socket types used in Rwanda. Covers Types C, E, and G at 230V/50Hz, including the Type J database error correction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-RW"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
