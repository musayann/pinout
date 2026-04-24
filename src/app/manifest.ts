import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "What Plugs & Sockets Does Rwanda Actually Use? — Types C, E & G",
    short_name: "Rwanda Plugs & Sockets Guide",
    description:
      "Rwanda uses plug types C, E, and G at 230V/50Hz. A complete guide to electrical sockets, the Type J database error, and what changed.",
    start_url: "/",
    display: "browser",
    background_color: "#FAF9F6",
    theme_color: "#0B4F3E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
