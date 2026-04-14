import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Electrical Plugs & Sockets in Rwanda: Types C, E, and G",
    short_name: "Rwanda Plugs & Sockets",
    description:
      "A guide to electrical plug and socket types used in Rwanda. Rwanda uses Types C, E, and G at 230V/50Hz. Includes the Type J database error correction.",
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
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
