/**
 * Static data for portfolio website
 * This file contains all projects and experience data
 */

export interface Project {
    id: string;
    slug: string;
    title: string;
    short_description: string;
    overview: string;
    role: string;
    tech_stack: string[];
    architecture: string | null;
    how_to_use: string | null;
    live_url: string | null;
    github_url: string | null;
    thumbnail_url: string | null;
    featured: boolean;
    display_order: number | null;
    created_at: string;
    updated_at: string;
}

export interface ProjectMedia {
    id: string;
    project_id: string;
    media_type: "image" | "video" | "youtube" | "loom";
    url: string;
    caption: string | null;
    display_order: number | null;
    created_at: string;
}

export interface Experience {
    id: string;
    company: string;
    company_url?: string | null;
    role: string;
    location?: string | null;
    start_date: string;
    end_date?: string | null;
    highlights: string[];
    display_order?: number | null;
    created_at: string;
    updated_at: string;
}

// Projects data
export const projects: Project[] = [
    {
        id: "1",
        slug: "careerax",
        title: "Careerax - AI-Powered Resume Builder",
        short_description: "A modern resume builder with AI-driven content optimization, helping users create professional resumes tailored to job descriptions.",
        overview: `Careerax is a comprehensive resume building platform that leverages AI to help job seekers create compelling, ATS-friendly resumes. The platform analyzes job descriptions and provides intelligent suggestions for resume content, ensuring optimal keyword matching and professional presentation.

Built with a focus on user experience and scalability, Careerax handles complex document generation, real-time editing, and secure user data management.`,
        role: `As the lead developer, I architected and built the entire platform from the ground up:
- Designed and implemented the full-stack architecture using Next.js and Supabase
- Developed AI integration for resume content optimization using Google Gemini
- Built a sophisticated PDF generation system with multiple professional templates
- Implemented secure authentication and user data management
- Created an intuitive drag-and-drop resume editor with real-time preview`,
        tech_stack: [
            "Next.js 14",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Google Gemini AI",
            "SEO Optimization",
            "Vercel"
        ],
        architecture: `Frontend Architecture:
- Next.js App Router for optimal performance and SEO
- Server and Client Components for efficient rendering
- Tailwind CSS for responsive, maintainable styling
- Custom PDF generation with template system

Backend Architecture:
- Supabase for authentication, database, and storage
- PostgreSQL with Row Level Security (RLS) for data protection
- API routes for AI integration and business logic
- Serverless functions for scalable processing

Key Technical Decisions:
- Chose Supabase for rapid development with enterprise-grade security
- Implemented AI suggestions as optional enhancements, not blockers
- Built modular template system for easy addition of new resume designs
- Used optimistic UI updates for responsive user experience`,
        how_to_use: `1. Sign up or log in to create your account
2. Fill in your professional information (experience, education, skills)
3. Use the AI analyzer to optimize content for specific job descriptions
4. Choose from multiple professional templates
5. Download your resume as a high-quality PDF
6. Create matching cover letters with AI assistance`,
        live_url: "https://careerax.com",
        github_url: null,
        thumbnail_url: null,
        featured: true,
        display_order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "2",
        slug: "portfolio-website",
        title: "Personal Portfolio Website",
        short_description: "A modern, responsive portfolio website showcasing my projects, professional experience, and contact information.",
        overview: `A professional portfolio website built with Next.js 14, featuring a clean, modern design with smooth animations and interactive elements. The site showcases my projects, work experience, technical skills, and provides multiple ways to get in touch.

The portfolio features a fully responsive design that works seamlessly across all devices, with an intuitive navigation system and easy access to contact information including email, phone, Telegram, and social media links.`,
        role: `As the sole developer, I designed and built the entire portfolio from scratch:
- Architected a modern, performant Next.js application with App Router
- Designed and implemented a responsive UI with Tailwind CSS and custom animations
- Created an intuitive navigation system with smooth scrolling and mobile menu
- Integrated multiple contact methods including email, phone, and Telegram
- Built a professional experience timeline and project showcase
- Optimized images and assets for fast loading times`,
        tech_stack: [
            "Next.js 14",
            "TypeScript",
            "React",
            "Tailwind CSS"
        ],
        architecture: `Frontend Architecture:
- Next.js App Router for optimal performance
- Server-side rendering for fast initial page loads
- Tailwind CSS for responsive, maintainable styling
- Custom animations and interactive effects

Key Features:
- Responsive design with mobile-first approach
- Smooth scrolling navigation
- Project showcase with detailed case studies
- Professional experience timeline
- Multiple contact methods (email, phone, Telegram, social media)
- Interactive sidebar with quick access to all sections

Technical Highlights:
- Static site generation for optimal performance
- Image optimization with Next.js Image component
- Custom favicon and app icons
- Accessible and semantic HTML structure`,
        how_to_use: `1. Visit the homepage to see an overview of my skills and experience
2. Navigate through sections using the sidebar or mobile menu
3. Explore featured projects with detailed case studies
4. View my professional experience timeline
5. Contact me via email, phone, Telegram, or social media links in the sidebar`,
        live_url: "https://ilyagoykhfis.dev",
        github_url: null,
        thumbnail_url: "/api/og-image",
        featured: true,
        display_order: 2,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
];

// Experience data
export const experiences: Experience[] = [
    {
        id: "1",
        company: "EasySend",
        company_url: "https://www.easysend.io",
        role: "Senior Full Stack Developer",
        location: "Remote",
        start_date: "2021-01-01",
        end_date: null,
        highlights: [
            "Engineered and maintained robust full-stack web applications, leveraging React and EmberJS for dynamic client-side interfaces and Python (Flask) for scalable back-end services",
            "Spearheaded the design and implementation of critical Salesforce CRM integrations, enhancing data synchronization and streamlining core business operations",
            "Contributed significantly to an integration team, delivering robust integrations with monday.com and Dynamics CRMs that optimized data flow and enhanced cross-platform functionality",
            "Engineered sophisticated UI features, including a complex drag-and-drop graph flow builder, which improved user productivity and supported advanced data visualization needs"
        ],
        display_order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "2",
        company: "Edgify",
        company_url: "https://edgify.ai",
        role: "Senior Full Stack Developer",
        location: "Tel Aviv",
        start_date: "2020-01-01",
        end_date: "2021-01-01",
        highlights: [
            "Led the architectural design and full-stack development of advanced web user interfaces, leveraging React, Redux, and TypeScript for high-traffic applications",
            "Pioneered the integration of modern front-end technologies, including React Hooks and SCSS, and engineered complex features across 3 critical UI projects, enhancing performance and scalability",
            "Architected and developed bespoke UI component libraries and internal tooling from the ground up, ensuring feature delivery and standardizing front-end development",
            "Engineered and optimized robust server-side APIs and microservices using Node.js (AdonisJS), facilitating seamless data interactions with PostgreSQL"
        ],
        display_order: 2,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "3",
        company: "AnyVision",
        company_url: "https://oosto.com",
        role: "Full Stack Developer",
        location: "Holon",
        start_date: "2018-01-01",
        end_date: "2020-01-01",
        highlights: [
            "Architected and developed end-to-end full-stack solutions, leveraging React.js (Redux, Hooks, TypeScript) for responsive client-side applications and Node.js (Express) for robust server-side APIs across 3 critical projects",
            "Led the entire feature lifecycle for high-impact features, encompassing design, development, testing, and successful deployment, ensuring alignment with project goals and stakeholder satisfaction",
            "Cultivated team expertise and fostered continuous improvement by designing and delivering technical lectures and advanced feature design principles and emerging web technologies to cross-functional development teams"
        ],
        display_order: 3,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "4",
        company: "Intel",
        company_url: "https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-israel.html",
        role: "Full Stack Developer",
        location: "Haifa",
        start_date: "2015-01-01",
        end_date: "2017-01-01",
        highlights: [
            "Engineered and optimized a comprehensive suite of responsive React components utilizing TypeScript, Redux, and SCSS, leading to a 20% improvement in load times and enhanced user engagement",
            "Architected and deployed scalable RESTful APIs and microservices using Node.js Express, managing complex data operations with MongoDB to support thousands of monthly users"
        ],
        display_order: 4,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
];

// Project media data (empty for now, can be populated later)
export const projectMedia: ProjectMedia[] = [];
