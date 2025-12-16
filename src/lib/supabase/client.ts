import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

// Use placeholder values if environment variables are not set (for development)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Warn in development if using placeholder values
if (process.env.NODE_ENV === "development" &&
    (supabaseUrl === "https://placeholder.supabase.co" || supabaseAnonKey === "placeholder-anon-key")) {
    console.warn(
        "⚠️  Using placeholder Supabase credentials. Data fetching will not work.\n" +
        "To fix: Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local\n" +
        "See README.md for setup instructions."
    );
}

/**
 * Supabase client for browser-side operations
 * Used for fetching public data (projects, experience)
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
