import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";

/**
 * API route to:
 * 1. Generate default Open Graph image for the portfolio (no URL param)
 * 2. Fetch Open Graph image from external URLs (with URL param)
 */
export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");

    // If no URL parameter, generate default OG image for the portfolio
    if (!url) {
        try {
            return new ImageResponse(
                (
                    <div
                        style= {{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0f172a",
                backgroundImage:
                    "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
                backgroundSize: "100px 100px",
            }}
                    >
            <div
                            style={
            {
                display: "flex",
                    flexDirection: "column",
                        alignItems: "center",
                            justifyContent: "center",
                                padding: "80px",
                            }
        }
                        >
            <h1
                                style={
            {
                fontSize: "72px",
                    fontWeight: "bold",
                        color: "#f8fafc",
                            marginBottom: "20px",
                                textAlign: "center",
                                }
        }
                            >
            Ilya Goykhfis
                </h1>
                < p
        style = {{
            fontSize: "36px",
                color: "#94a3b8",
                    marginBottom: "40px",
                        textAlign: "center",
                                }
    }
                            >
        Senior Full Stack Developer
            </p>
            < p
    style = {{
        fontSize: "24px",
            color: "#64748b",
                textAlign: "center",
                    maxWidth: "800px",
                                }
}
                            >
    9 + years building scalable web applications with React, TypeScript, Node.js & Python
    </p>
    </div>
    </div>
),
{
    width: 1200,
    height: 630,
}
            );
        } catch (error) {
    console.error("Error generating OG image:", error);
    return NextResponse.json(
        { error: "Failed to generate OG image" },
        { status: 500 }
    );
}
    }

// Fetch OG image from external URL
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

export const runtime = "edge";
