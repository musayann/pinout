import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const svg = readFileSync(resolve(root, "public/favicon.svg"));

await sharp(svg).resize(96, 96).png().toFile(resolve(root, "public/favicon-96x96.png"));
console.log("Created public/favicon-96x96.png (96x96)");

await sharp(svg).resize(180, 180).png().toFile(resolve(root, "public/apple-touch-icon.png"));
console.log("Created public/apple-touch-icon.png (180x180)");
