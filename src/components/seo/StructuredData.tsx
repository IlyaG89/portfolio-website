import Script from "next/script";

/**
 * Structured Data (JSON-LD) component for SEO
 * Provides rich search results with Person and WebSite schemas
 */
export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ilya Goykhfis",
        jobTitle: "Senior Full Stack Developer",
        description:
            "Senior Full Stack Developer with 9+ years of experience building scalable web applications. Specialized in React, TypeScript, Node.js, and Python.",
        url: "https://ilyagoykhfis.com",
        image: "https://ilyagoykhfis.com/profile.png",
        sameAs: [
            "https://www.linkedin.com/in/ilya-goykhfis",
            "https://github.com/IlyaG89",
        ],
        knowsAbout: [
            "Full Stack Development",
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "Next.js",
            "Web Development",
            "Software Engineering",
        ],
        alumniOf: {
            "@type": "Organization",
            name: "Your University", // Update with your actual education
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ilya Goykhfis Portfolio",
        description:
            "Professional portfolio of Ilya Goykhfis, Senior Full Stack Developer",
        url: "https://ilyagoykhfis.com",
        author: {
            "@type": "Person",
            name: "Ilya Goykhfis",
        },
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ilya Goykhfis - Full Stack Development Services",
        description:
            "Professional full stack development services specializing in React, TypeScript, Node.js, and Python",
        provider: {
            "@type": "Person",
            name: "Ilya Goykhfis",
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
    };

    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="professional-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceSchema),
                }}
            />
        </>
    );
}
