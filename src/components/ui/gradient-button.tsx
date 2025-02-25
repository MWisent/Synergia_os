import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg group",
          "bg-gradient-to-br from-primary to-primary/60",
          "text-white shadow-lg transition-all duration-300",
          "hover:shadow-xl",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
