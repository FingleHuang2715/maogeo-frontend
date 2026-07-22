import { MetadataRoute } from "next";
import { getPosts } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://maogeo.top";

  const staticRoutes = [
    "",
    "/waimaojianzhan",
    "/web-design-seo",
    "/geo-seo-youhua",
    "/server-recommendation",
    "/host-recommendation",
    "/geo-tools",
    "/audit-tool",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    const { posts } = await getPosts({ perPage: 100 });
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticRoutes;
  }
}
