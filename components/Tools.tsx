'use client';

import { useState } from 'react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionHeading } from './shared';
import { toolsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '@/helpers';

export const Tools = () => {
  const { ref } = useSectionInView('#tools');
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <section
      ref={ref}
      id="tools"
      className="scroll-mt-28 mb-24 max-w-[53rem] text-center sm:mb-32"
    >
      <SectionHeading heading="Recursos" />
      <ul className="flex flex-wrap justify-center gap-4 text-xl text-gray-800 dark:text-white">
        {toolsData.map(({ name, icon, color }, index) => (
          <motion.li
            key={index}
            className={`item flex items-center gap-1 border  border-black/[0.1] rounded-xl px-5 py-3 shadow-md transition-all duration-300 ease-in-out cursor-default dark:border-white/[0.2] ${
              hoverIndex === index ? 'border-custom-color' : ''
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={hoverIndex === index ? { borderColor: color } : {}}
            whileHover={{ scale: 1.07 }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <motion.span
              className="transition-all duration-300 ease-in-out"
              style={hoverIndex === index ? { color } : {}}
            >
              {icon}
            </motion.span>
            <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
