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
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  metadataBase: new URL(SITE_URL),
  title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
  appleWebApp: {
    title: SITE_NAME,
  },
  description:
    "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
  keywords: [
    "Rwanda plugs",
    "Rwanda electrical sockets",
    "Rwanda power adapter",
    "Rwanda power outlet",
    "Rwanda travel adapter",
    "Type C plug Rwanda",
    "Type E plug Rwanda",
    "Type F plug Rwanda",
    "Type G plug Rwanda",
    "Rwanda voltage 230V",
    "Rwanda electricity",
    "do I need adapter for Rwanda",
    "Rwanda plug type",
    "East African Community plug standard",
    "Kigali power socket",
    "power adapter for Kigali",
    "Kigali plug",
    "Kigali socket type",

    "Rwanda plugs and sockets",
    "Rwanda outlet type",
    "what plug is used in Rwanda",
    "Rwanda electrical plug type",
    "Rwanda plug and voltage",
    "Rwanda mains voltage",
    "Rwanda voltage and frequency",
    "Rwanda 230V 50Hz",
    "travel adapter needed for Rwanda",
    "Rwanda power plug types",
    "Rwanda socket types C E G",

    "US to Rwanda plug adapter",
    "UK plug in Rwanda",
    "Europe plug in Rwanda",
    "can I use Type G in Rwanda",
    "can I use Type E in Rwanda",
    "can I use Europlug in Rwanda",

    "Kigali outlet type",
    "Kigali electricity voltage",
    "Kigali hotel plug type",

    "Rwanda type J plug",
    "Rwanda C and J plug",
    "is Type J used in Rwanda",
    "Rwanda plug type correction"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
    description:
      "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
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
      "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
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
  "@id": `${SITE_URL}/#faq`,
  url: SITE_URL,
  name: "Frequently Asked Questions About Electrical Plugs in Rwanda",
  mainEntity: [
    {
      "@type": "Question",
      name: "What plug types are used in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rwanda uses plug types C, E, and G. Type C (Europlug) fits directly into Type E sockets and is used for low-power devices like chargers and laptops. Dedicated Type C sockets are very rare. Type E (French/Belgian) was the former standard and remains the most common grounded socket in older buildings. Type G (British) is Rwanda's official standard, adopted as part of East African Community harmonisation, and required in all new construction.",
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
        text: "Some international databases, notably those derived from IEC data, incorrectly listed Rwanda as using plug types C and J. Type J is the Swiss plug, used primarily in Switzerland and Liechtenstein. This was a data entry error that propagated across reference databases. It has since been corrected in IEC and other sources.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a travel adapter for Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "European two-pin (Type C) plugs work directly in Type E sockets, which are common in older buildings. US, Australian, and other non-European travellers will need an adapter. A universal travel adapter is recommended for the best coverage.",
      },
    },
    {
      "@type": "Question",
      name: "I'm from the UK — do I need an adapter for Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Type G (British) is Rwanda's official standard, so many newer buildings, hotels, and commercial properties will have Type G sockets. However, older buildings may only have Type E (French/Belgian) sockets, which are not compatible with Type G plugs. It's always a good idea to carry an adapter just in case your accommodation doesn't have Type G sockets.",
      },
    },
    {
      "@type": "Question",
      name: "What is the East African Community (EAC) plug standard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rwanda has adopted Type G (British BS 1363) as its official plug standard, as part of East African Community harmonisation. Along with Kenya, Tanzania, and Uganda, Rwanda now requires Type G sockets in all new electrical installations.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/#article`,
  headline: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
  description:
    "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  datePublished: "2026-04-13",
  dateModified: "2026-04-14",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon-96x96.png`,
      width: 96,
      height: 96,
    },
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/#howto`,
  name: "How to Choose a Travel Adapter for Rwanda",
  description:
    "Determine which travel adapter you need for Rwanda based on your home country's plug type.",
  step: [
    {
      "@type": "HowToStep",
      name: "Check your plug type",
      text: "Identify your device's plug type. European two-pin (Type C) plugs work directly in Type E sockets found in older buildings, without an adapter.",
    },
    {
      "@type": "HowToStep",
      name: "Check the building age",
      text: "Older Rwandan buildings use Type E (French/Belgian) sockets. Newer buildings and hotels use Type G (British) sockets, Rwanda's official standard adopted as part of EAC harmonisation.",
    },
    {
      "@type": "HowToStep",
      name: "Get the right adapter",
      text: "US, Australian, and other non-European travellers will need an adapter. UK travellers may find Type G sockets in newer buildings, but should carry an adapter for older buildings with Type E sockets. A universal travel adapter is recommended for the best coverage.",
    },
    {
      "@type": "HowToStep",
      name: "Check your device voltage",
      text: "Rwanda uses 230V at 50Hz. Most modern electronics (laptops, phones) support 100-240V and work without a converter. Check your device's label to confirm.",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Reference guide to plug types C, E, and G used in Rwanda at 230V/50Hz.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon-96x96.png`,
    width: 96,
    height: 96,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
