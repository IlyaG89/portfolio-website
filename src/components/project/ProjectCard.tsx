import { Project } from "@/lib/supabase/types";

interface ProjectCardProps {
    project: Project;
}

/**
 * Project card - Brittany Chiang style
 * Horizontal layout with image on left, content on right
 * Clicking opens the live URL in a new window
 */
export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a
            href={project.live_url || undefined}
            target={project.live_url ? "_blank" : undefined}
            rel={project.live_url ? "noopener noreferrer" : undefined}
            className="block"
        >
            <div className="group p-6 rounded-lg hover:bg-muted/30 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                    {/* Thumbnail */}
                    {project.thumbnail_url && (
                        <div className="w-full h-32 md:h-auto bg-muted rounded overflow-hidden">
                            <img
                                src={project.thumbnail_url}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className={!project.thumbnail_url ? "md:col-span-2" : ""}>
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
                            {project.tech_stack.slice(0, 6).map((tech) => (
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
