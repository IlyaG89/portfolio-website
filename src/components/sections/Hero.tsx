"use client";

import Section from "../layout/Section";
import Button from "../ui/Button";
import { motion } from "framer-motion";

/**
 * Hero section - First impression with name, role, and value proposition
 * Full viewport height with centered content
 */
export default function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-20">
            <motion.div
                className="text-center max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Greeting */}
                <motion.p
                    className="text-accent font-medium mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Hi, my name is
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Ilya Goykhfis
                </motion.h1>

                {/* Role */}
                <motion.h2
                    className="text-3xl md:text-5xl font-semibold text-muted-foreground mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Senior Full Stack Developer
                </motion.h2>

                {/* Value Proposition */}
                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Building scalable, user-centric applications that drive business value.
                    Specialized in architecting robust web solutions with modern technologies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Button
                        size="lg"
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Contact Me
                    </Button>
                </motion.div>
            </motion.div>
        </Section>
    );
}
