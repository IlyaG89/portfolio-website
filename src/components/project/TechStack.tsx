import Badge from "../ui/Badge";

interface TechStackProps {
    technologies: string[];
}

/**
 * Display technology stack as a grid of badges
 * Used in project detail pages
 */
export default function TechStack({ technologies }: TechStackProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <Badge key={tech} variant="accent" className="text-base px-4 py-2">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
