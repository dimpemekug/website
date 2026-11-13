import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";
import tagOgImage from "./og-templates/tag";
import projectOgImage from "./og-templates/project";
import sharp from "sharp";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog"> | CollectionEntry<"blogEn">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForTag(tagName: string) {
  const svg = await tagOgImage(tagName);
  return svgBufferToPngBuffer(svg);
}


const SCREENSHOT_DEVICES = ["mac", "iphone", "android", "ipad", "android-tablet"];

async function pngDataUri(file: string, maxSide: number) {
  const { data, info } = await sharp(file)
    .resize({ width: maxSide, height: maxSide, fit: "inside", withoutEnlargement: true })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { src: `data:image/png;base64,${data.toString("base64")}`, width: info.width, height: info.height };
}

/** First screenshot of the app, preferring a Mac window, then a phone. */
export function firstScreenshotFile(projectId: string) {
  for (const device of SCREENSHOT_DEVICES) {
    const dir = join("src/assets/projects", projectId, device);
    if (!existsSync(dir)) continue;
    const file = readdirSync(dir).filter(f => /\.(webp|png|jpe?g)$/.test(f)).sort()[0];
    if (file) return join(dir, file);
  }
  return undefined;
}

export async function generateOgImageForProject(
  project: CollectionEntry<"projects"> | CollectionEntry<"projectsEn">
) {
  const iconFile = join("src/assets/projects", project.id, "icon.webp");
  const shotFile = firstScreenshotFile(project.id);
  const platforms = ["iOS", "macOS", "Android", "WordPress"].filter(os => project.data.tags.includes(os));
  const svg = await projectOgImage({
    title: project.data.title,
    description: project.data.description,
    platforms,
    icon: existsSync(iconFile) ? (await pngDataUri(iconFile, 256)).src : undefined,
    screenshot: shotFile ? await pngDataUri(shotFile, 900) : undefined,
  });
  return svgBufferToPngBuffer(svg);
}
