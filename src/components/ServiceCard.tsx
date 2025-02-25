import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
}

const ServiceCard = ({
  title = "AI Service",
  description = "Leverage the power of artificial intelligence to transform your business with our cutting-edge solutions.",
  icon: Icon = MonitorSmartphone,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[350px] h-[400px]"
    >
      <Card className="h-full border hover:border-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
