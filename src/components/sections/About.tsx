"use client";

import { motion } from "framer-motion";

/**
 * About section - Brittany Chiang style
 * Clean, minimal with focus on content
 */
export default function About() {
    return (
        <section id="about" className="mb-24 scroll-mt-24 lg:scroll-mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="sticky top-0 z-10 mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                    About
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        As a full-stack developer with over{" "}
                        <span className="text-foreground font-medium">nine years of experience</span>, I specialize in
                        architecting and building robust, end-to-end web solutions. My career has
                        progressed through increasingly senior roles, allowing me to master a broad
                        range of technologies across the{" "}
                        <span className="text-foreground font-medium">JavaScript/TypeScript</span> and{" "}
                        <span className="text-foreground font-medium">Python</span> ecosystems.
                    </p>

                    <p>
                        I&apos;m passionately committed to transforming complex problems into{" "}
                        <span className="text-foreground font-medium">scalable, efficient, and user-centric applications</span>{" "}
                        that drive tangible business value. My approach combines strong product thinking
                        with technical excellence, ensuring that every solution I build not only works
                        well but solves real problems effectively.
                    </p>

                    <p>
                        My expertise spans modern frontend frameworks (React, TypeScript), backend
                        systems (Node.js, Python/Flask), databases (PostgreSQL, MongoDB), and cloud
                        platforms. I thrive on learning new technologies and applying them to build
                        products that make a difference.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
