import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import DemoSection from "./DemoSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="services">
          <ServicesGrid />
        </section>

        <section id="demo">
          <DemoSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <footer className="bg-primary/5 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} AI Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
