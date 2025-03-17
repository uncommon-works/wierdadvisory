import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {

        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",

        blue:
          "bg-blue-950 text-blue-50 shadow hover:bg-blue/90",
        red:
          "bg-red-950 text-red-100 shadow hover:bg-red/90",
        green:
          "bg-green-900 text-green-50 foreground shadow hover:bg-green/90",
        yellow:
          "bg-yellow-700 text-yellow-50 shadow hover:bg-yellow-700/80",

        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
       
        outline:
          "border border-blue-100 bg-blue-50 shadow-sm hover:bg-blue-100 hover:text-accent-foreground",
        
        outlineBlue:
          "text-blue-950 border border-blue-100 bg-blue-50 shadow-sm hover:bg-blue-100",
        outlineRed:
          "text-red-950 border border-red-100 bg-red-50 shadow-sm hover:bg-red-100 hover:text-red-950",
        outlineGreen:
          "text-green-900 border border-green-100 bg-green-50 shadow-sm hover:bg-green-100",
        outlineYellow:
          "text-yellow-500 border border-yellow-500 bg-yellow-100 shadow-sm hover:bg-yellow-100",
        
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        
          ghost: "hover:bg-blue-50 hover:text-accent-foreground",
        
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-6 py-5 text-sm",
        sm: "h-8 rounded-radius px-3 text-xs",
        lg: "h-14 rounded-radius px-10 py-4",
        icon: "h-9 w-9",
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
