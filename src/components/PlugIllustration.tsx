import Image from "next/image";

interface PlugIllustrationProps {
  type: "C" | "E" | "G" | "J";
  className?: string;
}

const plugImages: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  C: {
    src: "/images/plugs/type-c-ai.webp",
    alt: "Type C Europlug with matching two-pin Type C socket",
    width: 1672,
    height: 941,
  },
  E: {
    src: "/images/plugs/type-e-ai.webp",
    alt: "Type E French/Belgian plug with matching socket and socket-side grounding pin",
    width: 1672,
    height: 941,
  },
  G: {
    src: "/images/plugs/type-g-ai.webp",
    alt: "Type G British fused plug with matching three-slot socket",
    width: 1672,
    height: 941,
  },
  J: {
    src: "/images/plugs/type-j-ai.webp",
    alt: "Type J Swiss plug with matching three-hole socket",
    width: 1672,
    height: 941,
  },
};

export default function PlugIllustration({
  type,
  className = "",
}: PlugIllustrationProps) {
  const image = plugImages[type];

  return (
    <div className={`flex items-center justify-center overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="rounded-lg object-contain w-full h-full"
      />
    </div>
  );
}
