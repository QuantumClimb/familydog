import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 max-w-full overflow-hidden font-button",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium",
        hero: "bg-gradient-neon text-neon-foreground hover:shadow-glow transform hover:scale-105 font-semibold",
        primary: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-soft hover:shadow-medium",
        neon: "bg-neon text-neon-foreground hover:bg-neon-glow shadow-soft hover:shadow-glow transform hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium",
        outlineNeon: "border-2 border-neon bg-transparent text-neon hover:bg-neon hover:text-neon-foreground shadow-soft hover:shadow-glow",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-soft hover:shadow-medium transform hover:scale-105",
      },
      size: {
        default: "h-12 px-4 sm:px-6 py-3",
        sm: "h-9 rounded-md px-3 sm:px-4 text-sm",
        lg: "h-12 sm:h-14 rounded-lg px-4 sm:px-6 lg:px-8 text-base sm:text-lg font-semibold",
        xl: "h-14 sm:h-16 rounded-xl px-4 sm:px-6 lg:px-10 text-lg sm:text-xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
