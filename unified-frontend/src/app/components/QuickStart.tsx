import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Choose a Starter Kit",
    description: "Select a starter kit that best fits your project needs.",
    action: "Select Kit",
  },
  {
    title: "Clone the Repository",
    description: "Clone the selected starter kit repository to your local machine.",
    action: "View Instructions",
  },
  {
    title: "Install Dependencies",
    description: "Install the required dependencies for your chosen starter kit.",
    action: "View Instructions",
  },
  {
    title: "Configure the Environment",
    description: "Set up your development environment and configure any necessary settings.",
    action: "View Instructions",
  },
  {
    title: "Run the Project",
    description: "Start the development server and begin working on your project.",
    action: "View Instructions",
  },
];

const QuickStart: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle className="text-2xl">Quick Start Guide</CardTitle>
        <CardDescription className="text-gray-100">
          Follow these steps to get started with your first Filecoin starter kit
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <AnimatePresence>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className={`bg-gray-50 dark:bg-gray-700 transition-all duration-300 ${
                    index === currentStep ? 'border-2 border-blue-500 shadow-md' : 'opacity-70'
                  }`}
                >
                  <CardHeader className="flex flex-row items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                      index < currentStep ? 'bg-green-500' : (index === currentStep ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600')
                    }`}>
                      {index < currentStep ? (
                        <Check className="h-6 w-6 text-white" />
                      ) : (
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      )}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{step.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      size="lg" 
                      className={`${index === currentStep ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} text-white transition-all duration-300`}
                      onClick={handleNextStep}
                      disabled={index !== currentStep}
                      aria-label={`${step.action} for ${step.title}`}
                    >
                      {step.action}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-100 dark:bg-gray-700 p-6">
        <Button 
          onClick={() => setCurrentStep(0)} 
          variant="outline" 
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Reset Quick Start Guide"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset Guide
        </Button>
        <Button asChild className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300">
          <Link href="/tutorials">
            View Detailed Tutorials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuickStart;