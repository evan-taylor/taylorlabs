import { MetadataRoute } from "next";

/**
 * Generates robots.txt metadata allowing all user agents full access and specifying the sitemap URL.
 *
 * @returns An object defining robots.txt rules that permit all user agents to access all paths and reference the site's sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://taylorlabs.co/sitemap.xml",
  };
}
