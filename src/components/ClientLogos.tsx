import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const LOGO_DIR = "client logo"; // public/client logo
const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg|avif)$/i;
const MIN_SLOTS = 10; // fewer logos than this are repeated so the strip is always full

function getLogos() {
  const dir = path.join(process.cwd(), "public", LOGO_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort()
    .map((file) => ({
      src: `/${encodeURIComponent(LOGO_DIR)}/${encodeURIComponent(file)}`,
      alt: file.replace(IMAGE_EXT, "").replace(/[-_]+/g, " "),
    }));
}

export default function ClientLogos({ title = "Client" }: { title?: string }) {
  const files = getLogos();
  if (files.length === 0) return null;

  // Fill every slot: e.g. a single "client logo.jpeg" is shown in all 10 boxes.
  const logos = Array.from({ length: Math.max(MIN_SLOTS, files.length) }, (_, i) => files[i % files.length]);

  // The list is rendered twice so the loop is seamless.
  const loop = [...logos, ...logos];

  return (
    <section className="rounded-box bg-base-100 p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none [animation-direction:reverse]">
          {loop.map((logo, i) => (
            <li key={i} aria-hidden={i >= logos.length}>
              <div className="flex h-20 w-36 items-center justify-center p-2 overflow-hidden rounded-xl   bg-white  shadow-sm transition-transform duration-100 hover:scale-105 md:h-24 md:w-44">
                <Image
                  src={logo.src}
                  alt={i < logos.length ? logo.alt : ""}
                  width={176}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
