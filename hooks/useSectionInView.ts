import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from './useActiveSectionContext';

import type { SectionHash } from '@/lib/types';

export const useSectionInView = (sectionHash: SectionHash, threshold = 0.8) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionHash);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionHash]);

  return { ref };
};
