import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Section from "@/components/layout/Section";
import TechStack from "@/components/project/TechStack";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Define the Project interface based on your Supabase schema
interface Project {
    id: number;
    created_at: string; // Assuming a timestamp
    title: string;
    slug: string;
    short_description: string;
    overview: string;
    role: string;
    tech_stack: string[]; // Assuming this is stored as a JSONB array of strings
    architecture: string | null;
    how_to_use: string | null;
    live_url: string | null;
    github_url: string | null;
}

// Define the ProjectMedia interface
interface ProjectMedia {
    id: string;
    project_id: string;
    media_type: "image" | "video" | "youtube" | "loom";
    url: string;
    caption: string | null;
    display_order: number | null;
    created_at: string;
}

/**
 * Generate metadata for project detail pages (SEO)
 */
export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const { data: project } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single<Project>(); // Apply the Project type here

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

    // Fetch project data
    const { data: project, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single<Project>();

    if (error || !project) {
        notFound();
    }

    // Fetch project media
    const { data: media } = await supabase
        .from("project_media")
        .select("*")
        .eq("project_id", project.id)
        .order("display_order", { ascending: true })
        .returns<ProjectMedia[]>();

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
                            <Button
                                onClick={() => window.open(project.live_url!, "_blank")}
                            >
                                View Live Site
                            </Button>
                        )}
                        {project.github_url && (
                            <Button
                                variant="secondary"
                                onClick={() => window.open(project.github_url!, "_blank")}
                            >
                                View on GitHub
                            </Button>
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
