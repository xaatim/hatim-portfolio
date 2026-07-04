import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xaatim.github.io/hatim-portfolio",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}