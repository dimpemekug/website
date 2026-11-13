import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForProject } from "@/utils/generateOgImages";

export async function getStaticPaths() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.map(project => ({ params: { project: project.id }, props: { project } }));
}

export const GET: APIRoute = async ({ props }) => {
  const buffer = await generateOgImageForProject((props as { project: CollectionEntry<"projects"> }).project);
  return new Response(new Uint8Array(buffer), { headers: { "Content-Type": "image/png" } });
};
