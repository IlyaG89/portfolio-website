"use client";

import { Project } from "@/data/data";
import { useEffect, useState } from "react";

interface ProjectCardProps {
    project: Project;
}

/**
 * Project card - Brittany Chiang style
 * Horizontal layout with image on left, content on right
 * Clicking opens the live URL in a new window
 * Automatically fetches OG image from live_url if no thumbnail_url
 */
export default function ProjectCard({ project }: ProjectCardProps) {
    const [ogImage, setOgImage] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState(false);

    // Fetch OG image if we have a live_url but no thumbnail_url
    useEffect(() => {
        if (project.live_url && !project.thumbnail_url) {
            setImageLoading(true);
            fetch(`/api/og-image?url=${encodeURIComponent(project.live_url)}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.ogImage) {
                        setOgImage(data.ogImage);
                    }
                })
                .catch((error) => {
                    console.error("Failed to fetch OG image:", error);
                })
                .finally(() => {
                    setImageLoading(false);
                });
        }
    }, [project.live_url, project.thumbnail_url]);

    const imageUrl = project.thumbnail_url || ogImage;

    // Portfolio project needs wider container for OG image
    const isPortfolio = project.slug === 'portfolio-website';
    const imageHeight = isPortfolio ? 'h-40 md:h-[137px]' : 'h-32 md:h-[180px]';
    const objectFit = isPortfolio ? 'object-contain' : 'object-cover';

    return (
        <a
            href={project.live_url || undefined}
            target={project.live_url ? "_blank" : undefined}
            rel={project.live_url ? "noopener noreferrer" : undefined}
            className="block"
        >
            <div className="group p-6 rounded-lg hover:bg-muted/30 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-[260px_1fr] gap-6">
                    {/* Thumbnail */}
                    {(imageUrl || imageLoading) && (
                        <div className={`w-full ${imageHeight} rounded overflow-hidden border-2 border-muted ${isPortfolio ? 'bg-background' : ''}`}>
                            {imageLoading ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="animate-pulse text-muted-foreground text-xs">
                                        Loading...
                                    </div>
                                </div>
                            ) : imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={`${project.title} - Project Screenshot`}
                                    className={`w-full h-full ${objectFit} opacity-80 group-hover:opacity-100 transition-opacity`}
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            ) : null}
                        </div>
                    )}

                    {/* Content */}
                    <div className={!imageUrl && !imageLoading ? "md:col-span-2" : ""}>
                        {/* Title */}
                        <h3 className="text-foreground font-medium text-lg mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {project.short_description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack.slice(0, 12).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
