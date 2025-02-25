import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavigationProps {
  links?: Array<{ href: string; label: string }>;
}

const Navigation = ({
  links = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#demo", label: "Demo" },
    { href: "#contact", label: "Contact" },
  ],
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">AI Agency</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Button>
          ))}
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left justify-start text-base font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Button>
                ))}
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
