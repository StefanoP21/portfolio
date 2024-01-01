'use client';

import Image from 'next/image';
import portrait from '@/public/photo-sq.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PiPaperPlaneRightBold, PiDownloadBold } from 'react-icons/pi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSectionInView } from '@/hooks/useSectionInView';

export const Intro = () => {
  const { ref } = useSectionInView('#home');

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-[50rem] text-center sm:mb-0 scroll-mt-32"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <Image
              src={portrait}
              alt="Retrato de Stefano"
              width={150}
              height={150}
              quality={95}
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-28 rounded-full object-cover border-[0.2rem] bg-white border-white shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.3,
              duration: 0.3,
            }}
          >
            👨‍💻
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola 👋,</span> soy{' '}
        <span className="font-bold">Stefano.</span> Soy un{' '}
        <span className="font-bold">desarrollador de software</span>{' '}
        especializado en el <span className="font-bold">front-end</span>. Me
        apasiona contruir{' '}
        <span className="italic">sitios & aplicaciones web</span>. Mi
        especialidad es <span className="underline">React</span>.
      </motion.p>

      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="italic">
          ⚡ Fun fact - "This is a feature, not a bug"
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
        >
          Contácteme aquí
          <PiPaperPlaneRightBold className="text-[1.1rem] opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Stefano-ES.pdf"
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition border border-black/10"
        >
          Descargar CV{' '}
          <PiDownloadBold className="text-[1.2rem] opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/aldair-palomino/"
            target="_blank"
            className="bg-white p-4 text-[1.2rem] text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/StefanoP21"
            target="_blank"
            className="bg-white p-4 text-[1.2rem] text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
