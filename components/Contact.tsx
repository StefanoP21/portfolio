'use client';

import { SectionHeading } from './shared';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import { IoSend } from 'react-icons/io5';

export const Contact = () => {
  const { ref } = useSectionInView('#contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-24 sm:mb-32 w-[min(100%,40rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading="Contacto" />
      <p className="text-gray-700 -mt-4">
        Póngase en contacto conmigo directamente en{' '}
        <a
          className="underline font-medium hover:text-blue-700 transition duration-300"
          href="mailto:stefanop21@outlook.es"
        >
          stefanop21@outlook.es
        </a>{' '}
        o utilice el siguiente formulario.
      </p>

      <form className="flex flex-col mt-10">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={100}
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack"
          placeholder="Escriba su mensaje aquí..."
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[7rem] mt-2 bg-gray-900 text-white rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
        >
          Enviar{' '}
          <IoSend className="opacity-70 group-hover:translate-x-1 transition" />
        </button>
      </form>
    </motion.section>
  );
};
