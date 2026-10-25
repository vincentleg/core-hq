import type { MetadataRoute } from "next";
import { pageMeta } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return ["", ...Object.keys(pageMeta)].map((slug) => ({
    url: `${origin}/${slug}`,
    changeFrequency: "monthly",
    priority: slug ? 0.6 : 1,
  }));
}
