import React from 'react';

export interface StarterKit {
  id: string;
  name: string;
  repo: string;
  description: string;
  components: string[];
  workflowSteps: string[];
  valueProposition: string;
  keyCodeSnippet: {
    code: string;
    language: string;
    explanation: string;
  };
  interactiveDemo: React.ReactNode;
}

export interface TutorialStep {
  title: string;
  description: string;
  code: string;
}

export interface TutorialData {
  title: string;
  steps: TutorialStep[];
}

export type TutorialDataKey = 'fevm-hardhat' | 'fevm-foundry' | 'fvm-deal-making' | 'raas' | 'state-storage';

export type TutorialDataMap = {
  [K in TutorialDataKey]: TutorialData;
};