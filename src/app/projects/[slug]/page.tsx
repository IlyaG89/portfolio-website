import { notFound } from "next/navigation";
import { projects, projectMedia, Project, ProjectMedia } from "@/data/data";
import Section from "@/components/layout/Section";
import TechStack from "@/components/project/TechStack";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Generate metadata for project detail pages (SEO)
 */
export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.short_description,
        openGraph: {
            title: project.title,
            description: project.short_description,
            type: "article",
        },
    };
}

/**
 * Project detail page - Full case study layout
 * Displays overview, role, tech stack, architecture, and media
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    // Find project by slug
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find project media
    const media = projectMedia.filter(m => m.project_id === project.id);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section className="py-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {project.short_description}
                    </p>

                    {/* External Links */}
                    <div className="flex flex-wrap gap-4">
                        {project.live_url && (
                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            >
                                View Live Site
                            </a>
                        )}
                        {project.github_url && (
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            </Section>

            {/* Overview */}
            <Section className="py-12 bg-muted/30">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                        {project.overview}
                    </div>
                </div>
            </Section>

            {/* Role & Responsibilities */}
            <Section className="py-12">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-semibold mb-6">Role & Responsibilities</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                        {project.role}
                    </div>
                </div>
            </Section>

            {/* Technology Stack */}
            <Section className="py-12 bg-muted/30">
                <div className="max-w-4xl">
                    <TechStack technologies={project.tech_stack} />
                </div>
            </Section>

            {/* Architecture */}
            {project.architecture && (
                <Section className="py-12">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-semibold mb-6">
                            Architecture & Technical Decisions
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                            {project.architecture}
                        </div>
                    </div>
                </Section>
            )}

            {/* How to Use */}
            {project.how_to_use && (
                <Section className="py-12 bg-muted/30">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-semibold mb-6">How to Use</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                            {project.how_to_use}
                        </div>
                    </div>
                </Section>
            )}

            {/* Media Gallery */}
            {media && media.length > 0 && (
                <Section className="py-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {media.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg overflow-hidden border border-border"
                                >
                                    {item.media_type === "image" && (
                                        <img
                                            src={item.url}
                                            alt={item.caption || "Project screenshot"}
                                            className="w-full h-auto"
                                        />
                                    )}
                                    {item.media_type === "video" && (
                                        <video
                                            src={item.url}
                                            controls
                                            className="w-full h-auto"
                                        />
                                    )}
                                    {item.caption && (
                                        <p className="p-4 text-sm text-muted-foreground bg-muted">
                                            {item.caption}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
}
