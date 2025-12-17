"use client";

import Card from "../ui/Card";
import { motion } from "framer-motion";
import { experiences } from "@/data/data";
import { formatDateRange } from "@/lib/utils";

/**
 * Experience section - Brittany Chiang style
 * Clean cards with hover effects
 */
export default function Experience() {

    return (
        <section id="experience" className="mb-32 scroll-mt-16">
            <h2 className="sticky top-0 z-10 mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Experience
            </h2>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <a
                            href={exp.company_url || undefined}
                            target={exp.company_url ? "_blank" : undefined}
                            rel={exp.company_url ? "noopener noreferrer" : undefined}
                            className="group block p-6 rounded-lg hover:bg-muted/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Date Range */}
                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                {formatDateRange(
                                    new Date(exp.start_date),
                                    exp.end_date ? new Date(exp.end_date) : null
                                )}
                            </div>

                            {/* Role & Company */}
                            <h3 className="text-foreground font-medium text-lg mb-1 group-hover:text-accent transition-colors">
                                {exp.role} · {exp.company}
                            </h3>

                            {/* Highlights */}
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
