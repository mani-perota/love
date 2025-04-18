import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "default" | "ghost" | "outline"
    size?: "default" | "sm" | "lg" | "icon"
}

export function Button({ children, className, variant = "default", size = "default", ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-pink-600 transition",
                variant === "ghost" && "bg-transparent hover:bg-gray-100",
                size === "icon" && "p-2",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}