import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

import { GradientButton } from "./ui/gradient-button";

const HeroSection = ({
  title = "Transform Your Business with AI",
  subtitle = "Leverage cutting-edge artificial intelligence solutions to drive innovation and growth",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/10 overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GradientButton
            onClick={onCtaClick}
            className="text-lg px-8 py-6 group"
          >
            {ctaText}
            <motion.div
              className="inline-block ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
