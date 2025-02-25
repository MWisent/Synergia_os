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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[350px] h-[400px] bg-white"
    >
      <Card className="h-full border-2 hover:border-primary/50 transition-colors">
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
