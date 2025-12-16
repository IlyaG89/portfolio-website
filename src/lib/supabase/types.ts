/**
 * Database types for Supabase tables
 * These types should be generated from your Supabase schema
 * For now, they are manually defined based on the implementation plan
 */

export interface Database {
    public: {
        Tables: {
            projects: {
                Row: Project;
                Insert: Omit<Project, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<Project, "id" | "created_at" | "updated_at">>;
            };
            project_media: {
                Row: ProjectMedia;
                Insert: Omit<ProjectMedia, "id" | "created_at">;
                Update: Partial<Omit<ProjectMedia, "id" | "created_at">>;
            };
            experience: {
                Row: Experience;
                Insert: Omit<Experience, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<Experience, "id" | "created_at" | "updated_at">>;
            };
            contact_submissions: {
                Row: ContactSubmission;
                Insert: Omit<ContactSubmission, "id" | "created_at">;
                Update: Partial<Omit<ContactSubmission, "id" | "created_at">>;
            };
        };
    };
}

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

/**
 * Experience table - Professional work history
 */
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

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
}
