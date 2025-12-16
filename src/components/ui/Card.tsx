import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> { }

/**
 * Reusable card component with border and subtle shadow
 * Supports dark mode automatically through CSS variables
 */
export default function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-lg border border-border bg-background p-6",
                "shadow-sm hover:shadow-md transition-shadow duration-200",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
