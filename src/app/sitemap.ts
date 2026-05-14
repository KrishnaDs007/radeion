import type { MetadataRoute } from "next";

const siteUrl = "https://www.radeion.ai";

const routes = ["", "/products", "/solutions", "/resources", "/company", "/demo", "/security", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/demo" ? 0.9 : 0.8,
  }));
}
