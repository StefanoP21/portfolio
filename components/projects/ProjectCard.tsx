'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type Projectsprops = (typeof projectsData)[number];

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: Projectsprops) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden relative sm:pr-8 sm:h-[25rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition"
    >
      <div className="pt-4 pb-8 px-5 sm:pl-10 max-w-[50%] sm:pr-2 sm:pt-10 flex flex-col h-full group-even:ml-[20rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-6 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1] 
        group-hover:-translate-x-3
        group-hover:translate-y-1
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-1
        group-even:group-hover:rotate-2 

        group-even:-right-[initial] 
        group-even:-left-40
        
        sm:group-hover:scale-[1.1]
        sm:group-hover:translate-y-3
        sm:group-even:group-hover:translate-y-3"
      />
    </motion.section>
  );
};
