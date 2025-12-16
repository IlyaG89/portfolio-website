import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "accent";
}

/**
 * Small badge component for displaying tech stack and tags
 * Used throughout the site for technology labels
 */
export default function Badge({
    className,
    variant = "default",
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                "transition-colors duration-200",
                {
                    "bg-muted text-muted-foreground": variant === "default",
                    "bg-accent/10 text-accent": variant === "accent",
                },
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
