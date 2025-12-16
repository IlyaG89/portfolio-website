"use client";

import ProjectCard from "../project/ProjectCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Project } from "@/lib/supabase/types";

/**
 * Projects section - Brittany Chiang style
 * Grid of project cards with hover effects
 */
export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const { data, error } = await supabase
                    .from("projects")
                    .select("*")
                    .eq("featured", true)
                    .order("display_order", { ascending: true });

                if (error) throw error;
                setProjects(data || []);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="mb-24 scroll-mt-16 pt-8 border-t border-muted/30">
                <h2 className="sticky top-0 z-10 mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="h-96 bg-muted/30 animate-pulse rounded-lg"
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="mb-24 scroll-mt-16 pt-8 border-t border-muted/30">
            <h2 className="sticky top-0 z-10 mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Projects
            </h2>

            <div className="space-y-12">
                {projects.map((project, index) => (
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

            {projects.length === 0 && !loading && (
                <p className="text-center text-muted-foreground">
                    No projects to display yet. Check back soon!
                </p>
            )}
        </section>
    );
}
