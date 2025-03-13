
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-cyber-blue text-cyber-black hover:bg-cyber-blue/90 hover:shadow-neon-blue transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-cyber-blue bg-transparent text-cyber-blue hover:bg-cyber-blue/10 shadow-none hover:shadow-neon-blue",
        secondary: "bg-cyber-purple text-white hover:bg-cyber-purple/90 hover:shadow-neon-purple",
        ghost: "hover:bg-cyber-blue/10 text-cyber-blue hover:text-cyber-blue",
        link: "text-cyber-blue underline-offset-4 hover:underline",
        medieval: "bg-medieval-gold text-cyber-black border border-medieval-gold/50 hover:bg-medieval-gold/90 font-medieval uppercase tracking-wide",
        neon: "relative bg-transparent border border-cyber-blue text-cyber-blue hover:text-white before:absolute before:inset-0 before:bg-cyber-blue before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-md",
        icon: "h-10 w-10",
        xl: "h-14 rounded-md px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
