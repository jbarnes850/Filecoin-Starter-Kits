import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import Link from 'next/link';
import { TutorialStep as ImportedTutorialStep } from '../types/types';

interface TutorialStep extends ImportedTutorialStep {
  title: string;
  description: string;
  code: string;
}

interface TutorialLayoutProps {
  title: string;
  steps: TutorialStep[];
}

const TutorialLayout: React.FC<TutorialLayoutProps> = ({ title, steps }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">{title}</h1>
      {steps.map((step, index) => (
        <Card key={index} className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">{`Step ${index + 1}: ${step.title}`}</CardTitle>
            <CardDescription className="text-base md:text-lg">{step.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm md:text-base">
              <code>{step.code}</code>
            </pre>
          </CardContent>
        </Card>
      ))}
      <Button asChild className="mt-8 w-full sm:w-auto">
        <Link href="/">Back to Starter Kits</Link>
      </Button>
    </div>
  );
};

export default TutorialLayout;