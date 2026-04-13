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
    src: "/images/plugs/type-c.jpg",
    alt: "Type C Europlug — two round pins, ungrounded",
    width: 1024,
    height: 576,
  },
  E: {
    src: "/images/plugs/type-e.jpg",
    alt: "Type E French plug and socket — two round pins with ground pin on socket",
    width: 2182,
    height: 1115,
  },
  G: {
    src: "/images/plugs/type-g.png",
    alt: "Type G British plug and socket — three rectangular pins with fuse",
    width: 817,
    height: 600,
  },
  J: {
    src: "/images/plugs/type-j.jpg",
    alt: "Type J Swiss plug and socket — three round pins in offset triangular pattern",
    width: 1893,
    height: 893,
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
