import type { MetadataRoute } from "next";

import { siteRoutes } from "@/config/site";
import { SITE_LAST_MODIFIED } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
