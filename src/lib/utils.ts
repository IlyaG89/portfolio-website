import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format a date range for display
 * @param startDate - Start date
 * @param endDate - End date (null for current)
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: Date, endDate: Date | null): string {
    const start = new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(startDate);

    if (!endDate) {
        return `${start} - Present`;
    }

    const end = new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(endDate);

    return `${start} - ${end}`;
}
