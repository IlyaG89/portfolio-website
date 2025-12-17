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
            // Fetch the profile image
            const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
            const profileImageUrl = `${baseUrl}/profile.png`;

            let profileImageSrc = profileImageUrl;
            try {
                const imageResponse = await fetch(profileImageUrl);
                const arrayBuffer = await imageResponse.arrayBuffer();
                const base64 = Buffer.from(arrayBuffer).toString('base64');
                profileImageSrc = `data:image/png;base64,${base64}`;
            } catch (error) {
                console.error("Error fetching profile image:", error);
                // Fallback to direct URL if fetch fails
            }

            return new ImageResponse(
                (
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#0f172a",
                            backgroundImage:
                                "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
                            backgroundSize: "100px 100px",
                            padding: "80px",
                        }}
                    >
                        {/* Profile Photo */}
                        <div
                            style={{
                                display: "flex",
                                width: "400px",
                                height: "400px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "8px solid #3b82f6",
                                boxShadow: "0 0 60px rgba(59, 130, 246, 0.5)",
                            }}
                        >
                            <img
                                src={profileImageSrc}
                                alt="Ilya Goykhfis"
                                width="400"
                                height="400"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center 40%",
                                }}
                            />
                        </div>

                        {/* Text Content */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                flex: 1,
                                paddingLeft: "60px",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "68px",
                                    fontWeight: "bold",
                                    color: "#f8fafc",
                                    margin: 0,
                                    marginBottom: "16px",
                                }}
                            >
                                Ilya Goykhfis
                            </h1>
                            <p
                                style={{
                                    fontSize: "36px",
                                    color: "#3b82f6",
                                    margin: 0,
                                    marginBottom: "24px",
                                }}
                            >
                                Senior Full Stack Developer
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "8px",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "24px",
                                        color: "#94a3b8",
                                        margin: 0,
                                    }}
                                >
                                    9+ years building scalable web applications
                                </p>
                                <p
                                    style={{
                                        fontSize: "24px",
                                        color: "#94a3b8",
                                        margin: 0,
                                    }}
                                >
                                    with React, TypeScript, Node.js & Python
                                </p>
                                <p
                                    style={{
                                        fontSize: "24px",
                                        color: "#94a3b8",
                                        margin: 0,
                                    }}
                                >
                                    Expert in AI integration & modern dev tools
                                </p>
                            </div>
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
