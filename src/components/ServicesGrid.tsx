import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Brain,
  Code,
  Database,
  LineChart,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "AI Consulting",
    description:
      "Strategic guidance to integrate AI solutions into your business workflow",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    description:
      "Custom ML models trained on your data for precise predictions",
    icon: Sparkles,
  },
  {
    title: "Natural Language Processing",
    description: "Advanced text analysis and language understanding solutions",
    icon: MessageSquare,
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights",
    icon: LineChart,
  },
  {
    title: "AI Development",
    description: "End-to-end development of AI-powered applications",
    icon: Code,
  },
  {
    title: "Big Data Solutions",
    description: "Scalable infrastructure for processing massive datasets",
    icon: Database,
  },
];

const ServicesGrid = ({ services = defaultServices }: ServicesGridProps) => {
  return (
    <div className="w-full min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of AI solutions designed to
            transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
