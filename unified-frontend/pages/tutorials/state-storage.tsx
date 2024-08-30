import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { tutorialData } from '@/data/tutorialData';
import TutorialLayout from 'src/app/components/TutorialLayout';

const StateStorageTutorial = () => {
  const { title, steps } = tutorialData['state-storage'];

  return (
    <>
      <TutorialLayout title={title} steps={steps} />
      <div className="container mx-auto p-4">
        <Button asChild className="mt-6">
          <Link href="/">Back to Starter Kits</Link>
        </Button>
      </div>
    </>
  );
};

export default StateStorageTutorial;