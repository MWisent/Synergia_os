import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Loader2, Sparkles, MessageSquare, Image } from "lucide-react";

interface DemoSectionProps {
  isLoading?: boolean;
  demoText?: string;
}

const DemoSection = ({
  isLoading = false,
  demoText = "Experience the power of AI in real-time",
}: DemoSectionProps) => {
  const [activeDemo, setActiveDemo] = useState("chat");
  const [processing, setProcessing] = useState(false);

  const handleDemoAction = () => {
    setProcessing(true);
    setTimeout(() => setProcessing(false), 2000);
  };

  return (
    <section className="w-full min-h-[600px] py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Interactive AI Demo</h2>
          <p className="text-lg text-muted-foreground">{demoText}</p>
        </motion.div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Try Our AI Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chat" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="chat">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat AI
                </TabsTrigger>
                <TabsTrigger value="generate">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Text Generation
                </TabsTrigger>
                <TabsTrigger value="image">
                  <Image className="mr-2 h-4 w-4" />
                  Image AI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="space-y-4">
                <div className="bg-muted p-4 rounded-lg min-h-[200px]">
                  <p className="text-muted-foreground">
                    AI Assistant: How can I help you today?
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleDemoAction}
                    disabled={processing}
                    className="w-full"
                  >
                    {processing && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Message
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="generate" className="space-y-4">
                <div className="bg-muted p-4 rounded-lg min-h-[200px]">
                  <p className="text-muted-foreground">
                    Enter a prompt to generate creative text
                  </p>
                </div>
                <Button
                  onClick={handleDemoAction}
                  disabled={processing}
                  className="w-full"
                >
                  {processing && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Generate Text
                </Button>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <div className="bg-muted p-4 rounded-lg min-h-[200px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Enter a prompt to generate an image
                  </p>
                </div>
                <Button
                  onClick={handleDemoAction}
                  disabled={processing}
                  className="w-full"
                >
                  {processing && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Generate Image
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
