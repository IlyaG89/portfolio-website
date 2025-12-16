import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

/**
 * Reusable button component with multiple variants
 * Supports primary, secondary, and ghost styles
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:pointer-events-none",

                    // Variant styles
                    {
                        "bg-accent text-accent-foreground hover:opacity-90": variant === "primary",
                        "bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
                        "hover:bg-muted": variant === "ghost",
                    },

                    // Size styles
                    {
                        "px-3 py-1.5 text-sm": size === "sm",
                        "px-6 py-3 text-base": size === "md",
                        "px-8 py-4 text-lg": size === "lg",
                    },

                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
