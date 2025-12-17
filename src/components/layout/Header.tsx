"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Fixed sidebar navigation inspired by Brittany Chiang's design
 * Left-aligned with name, nav links, and social icons
 */
export default function Header() {
    const [activeSection, setActiveSection] = useState("about");
    const isInitialNavigationRef = useRef(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/IlyaG89",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ilya-goykhfis",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/972548043353",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
        },
        {
            name: "Phone",
            href: "tel:+972548043353",
            phone: "+972-54-804-3353",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            ),
        },
        {
            name: "Telegram",
            href: "https://t.me/IlyaG89",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://instagram.com/ilya_goykhfis",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: "Email",
            href: "mailto:ilyagoykhfis@gmail.com",
            email: "ilyagoykhfis@gmail.com",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
    ];

    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleEmailClick = (e: React.MouseEvent, email?: string) => {
        if (email) {
            e.preventDefault();
            navigator.clipboard.writeText(email);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    // Handle initial hash on page load
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            setActiveSection(hash);
            isInitialNavigationRef.current = true;

            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }

                // Clear the initial navigation flag after scroll
                setTimeout(() => {
                    isInitialNavigationRef.current = false;
                }, 1000);
            }, 100);
        }
    }, []);

    // Track scroll position and update active section + URL hash
    useEffect(() => {
        const sections = navLinks.map((link) => link.href.slice(1));

        // Track intersection ratios for all sections
        const intersectionRatios = new Map<string, number>();

        const observer = new IntersectionObserver(
            (entries) => {
                // Skip updates during initial navigation
                if (isInitialNavigationRef.current) {
                    return;
                }

                // Update intersection ratios
                entries.forEach((entry) => {
                    intersectionRatios.set(entry.target.id, entry.intersectionRatio);
                });

                // Find the section with the highest intersection ratio
                let maxRatio = 0;
                let mostVisibleSection = "";

                intersectionRatios.forEach((ratio, sectionId) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        mostVisibleSection = sectionId;
                    }
                });

                // Update active section if we found one
                if (mostVisibleSection && maxRatio > 0) {
                    setActiveSection(mostVisibleSection);
                    window.history.replaceState(null, "", `#${mostVisibleSection}`);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            }
        );

        // Observe all sections
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [navLinks]);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[560px] flex-col justify-between p-24">
                <div>
                    {/* Profile Photo */}
                    <div className="mb-10">
                        <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl">
                            <Image
                                src="/profile.png"
                                alt="Ilya Goykhfis - Senior Full Stack Developer"
                                fill
                                sizes="224px"
                                className="object-cover scale-110"
                                style={{ objectPosition: 'center 40%' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <Link href="/" className="block mb-4">
                        <h1 className="text-5xl font-bold text-foreground mb-3">
                            Ilya Goykhfis
                        </h1>
                        <h2 className="text-xl font-medium text-foreground">
                            Senior Full Stack Developer
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-xs">
                            Building scalable, user-centric applications that drive business value
                        </p>
                    </Link>

                    {/* Navigation */}
                    <nav className="mt-16">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            "group flex items-center py-3 text-sm font-medium uppercase tracking-widest",
                                            activeSection === link.href.slice(1)
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                        onClick={() => setActiveSection(link.href.slice(1))}
                                    >
                                        <span
                                            className={cn(
                                                "mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground",
                                                activeSection === link.href.slice(1)
                                                    ? "w-16 bg-foreground"
                                                    : "w-8 bg-muted-foreground"
                                            )}
                                        />
                                        <span className="group-hover:text-foreground transition-colors">
                                            {link.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Social Links */}
                <div className="flex gap-5">
                    {socialLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <a
                                href={link.href}
                                target={link.name !== "Email" ? "_blank" : undefined}
                                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                                onClick={(e) => handleEmailClick(e, link.email)}
                                className="text-muted-foreground hover:text-accent transition-colors"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                            {link.email && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-muted text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {copiedEmail ? "Copied!" : link.email}
                                </div>
                            )}
                            {link.phone && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-muted text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {link.phone}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="px-6 py-4 flex items-center justify-between gap-4">
                    {/* Name and Title */}
                    <Link href="/" className="block flex-1">
                        <h1 className="text-2xl font-bold text-foreground">Ilya Goykhfis</h1>
                        <p className="text-sm text-muted-foreground">Senior Full Stack Developer</p>
                    </Link>

                    {/* Profile Photo - Mobile */}
                    <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg">
                            <Image
                                src="/profile.png"
                                alt="Ilya Goykhfis - Senior Full Stack Developer"
                                fill
                                sizes="64px"
                                className="object-cover scale-110"
                                style={{ objectPosition: 'center 40%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Nav */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
                <ul className="flex justify-around py-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={cn(
                                    "text-xs font-medium uppercase tracking-wider",
                                    activeSection === link.href.slice(1)
                                        ? "text-accent"
                                        : "text-muted-foreground"
                                )}
                                onClick={() => setActiveSection(link.href.slice(1))}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
