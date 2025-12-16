import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    maxWidth?: "default" | "wide" | "full";
}

/**
 * Reusable section wrapper component
 * Provides consistent spacing and max-width across all sections
 */
export default function Section({
    className,
    maxWidth = "default",
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "w-full py-24 px-6",
                {
                    "max-w-[1200px] mx-auto": maxWidth === "default",
                    "max-w-[1400px] mx-auto": maxWidth === "wide",
                    "": maxWidth === "full",
                },
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
