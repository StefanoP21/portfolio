'use client';

import { useState } from 'react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SectionHeading } from './shared';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '@/helpers';

export const Skills = () => {
  const { ref } = useSectionInView('#skills');
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="scroll-mt-28 mb-24 max-w-[53rem] text-center sm:mb-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <SectionHeading heading="Habilidades" />
      <ul className="flex flex-wrap justify-center gap-4 text-xl text-gray-800 dark:text-white">
        {skillsData.map(({ name, icon, color }, index) => (
          <motion.li
            key={index}
            className={`item flex items-center gap-1 border border-black/[0.1] rounded-xl px-5 py-3 shadow-md transition-all duration-300 ease-in-out cursor-default dark:border-white/[0.2] ${
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
            {icon}
            <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
