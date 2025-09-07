import type { MetadataRoute } from "next";

/**
 * Generates a sitemap entry for the website with the current timestamp.
 *
 * @returns An array containing a single sitemap entry for 'https://taylorlabs.co' with weekly change frequency and highest priority.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://taylorlabs.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
