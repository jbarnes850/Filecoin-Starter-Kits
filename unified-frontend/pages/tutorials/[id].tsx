import { useRouter } from 'next/router';
import TutorialLayout from 'src/app/components/TutorialLayout';
import { tutorialData } from '@/data/tutorialData';
import { TutorialDataKey } from 'src/app/types/types';

const TutorialPage = () => {
  const router = useRouter();
  const { id } = router.query;

  function isTutorialDataKey(key: string): key is TutorialDataKey {
    return key in tutorialData;
  }

  if (typeof id !== 'string' || !isTutorialDataKey(id)) {
    return <div>Tutorial not found</div>;
  }

  const tutorial = tutorialData[id];

  return <TutorialLayout title={tutorial.title} steps={tutorial.steps} />;
};

export default TutorialPage;