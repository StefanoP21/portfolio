'use client';

import { SectionHeading } from './shared';
import { useSectionInView } from '@/hooks/useSectionInView';

export const Experience = () => {
  const { ref } = useSectionInView('#experience');

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-24 sm:mb-32">
      <SectionHeading heading="Experiencia" />
    </section>
  );
};
