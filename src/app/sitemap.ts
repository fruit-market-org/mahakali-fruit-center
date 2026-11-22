import type { MetadataRoute } from "next";
import { NAV_LINKS, SEO } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return NAV_LINKS.map((link) => ({
    url: `${SEO.siteUrl}${link.href === "/" ? "" : link.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
