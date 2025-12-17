import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ilyagoykhfis.com";
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        // Add more pages here as your site grows
        // Example:
        // {
        //   url: `${baseUrl}/blog`,
        //   lastModified: currentDate,
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
    ];
}
