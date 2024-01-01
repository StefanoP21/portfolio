'use client';

import { SectionHeading } from './shared';
import { useSectionInView } from '@/hooks/useSectionInView';

export const Contact = () => {
  const { ref } = useSectionInView('#contact');

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 mb-24 sm:mb-32">
      <SectionHeading heading="Contacto" />
    </section>
  );
};
