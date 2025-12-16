import { NextRequest, NextResponse } from "next/server";

/**
 * API route to fetch Open Graph image from a URL
 * Used to get project thumbnails from their live URLs
 */
export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "URL parameter required" }, { status: 400 });
    }

    try {
        // Fetch the HTML from the target URL
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch URL" },
                { status: response.status }
            );
        }

        const html = await response.text();

        // Try to extract OG image (og:image)
        let ogImage = null;
        const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
        if (ogImageMatch) {
            ogImage = ogImageMatch[1];
        }

        // Fallback: try Twitter image (twitter:image)
        if (!ogImage) {
            const twitterImageMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
            if (twitterImageMatch) {
                ogImage = twitterImageMatch[1];
            }
        }

        // Handle relative URLs
        if (ogImage && !ogImage.startsWith("http")) {
            const baseUrl = new URL(url);
            ogImage = new URL(ogImage, baseUrl.origin).toString();
        }

        return NextResponse.json({ ogImage });
    } catch (error) {
        console.error("Error fetching OG image:", error);
        return NextResponse.json(
            { error: "Failed to fetch OG image" },
            { status: 500 }
        );
    }
}
