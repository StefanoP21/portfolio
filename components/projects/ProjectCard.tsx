"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

type Projectsprops = (typeof projectsData)[number];

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
}: Projectsprops) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
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
      className="group bg-gray-100 max-w-[25rem] border border-black/5 overflow-hidden relative sm:max-w-[38rem] md:max-w-[43rem] lg:max-w-[50rem] sm:pr-8 sm:h-[28rem] md:h-[25rem] lg:h-[28rem] mb-5 sm:mb-10 last:mb-0 hover:bg-gray-200 transition dark:bg-gray-950/20 dark:hover:bg-gray-950/40 rounded-xl"
    >
      <div className="pt-4 pb-8 px-5 sm:pl-10 max-w-[100%] sm:max-w-[50%] sm:pr-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem] md:group-even:ml-[20rem] lg:group-even:ml-[24rem]">
        <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 text-justify dark:text-white/60 lg:text-lg lg:mt-4">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 mb-4 gap-2 sm:mt-auto sm:mb-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/90 lg:text-[0.9rem]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={demoUrl}
            target="_blank"
            className="bg-gray-900 text-white px-3 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-800 dark:hover:bg-gray-800"
          >
            <CgWebsite className="text-[1.2rem] opacity-70" /> Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="bg-white px-3 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-gray-600 dark:text-white/90"
          >
            <FaGithub className="text-[1.2rem] opacity-70" /> GitHub
          </a>
        </div>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-6 sm:top-9 -right-40 w-0 sm:w-[26.5rem] md:w-[28.5rem] lg:w-[32rem] rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1] 
        group-hover:-translate-x-2
        group-hover:translate-y-1
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-4
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
