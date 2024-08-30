import { tutorialData } from '../../data/tutorialData';
import TutorialLayout from '../../src/app/components/TutorialLayout';

const FEVMHardhatTutorial = () => {
  const { title, steps } = tutorialData['fevm-hardhat'];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TutorialLayout title={title} steps={steps} />
    </div>
  );
};

export default FEVMHardhatTutorial;