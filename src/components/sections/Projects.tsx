"use client";

import ProjectCard from "../project/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/data";

/**
 * Projects section - Brittany Chiang style
 * Grid of project cards with hover effects
 */
export default function Projects() {
    // Filter for featured projects only
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="mb-24 scroll-mt-16 pt-8 border-t border-muted/30">
            <h2 className="sticky top-0 z-10 mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Projects
            </h2>

            <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {featuredProjects.length === 0 && (
                <p className="text-center text-muted-foreground">
                    No projects to display yet. Check back soon!
                </p>
            )}
        </section>
    );
}
