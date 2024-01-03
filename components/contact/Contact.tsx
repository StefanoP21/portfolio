'use client';

import { sendEmail } from '@/actions/sendEmail';
import { SectionHeading } from '../shared';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import { SubmitButton } from './SubmitButton';
import toast from 'react-hot-toast';

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
        Póngase en contacto conmigo a través del siguiente formulario o
        directamente a{' '}
        <a
          className="underline font-medium hover:text-blue-700 transition duration-300"
          href="mailto:stefanop21@outlook.es"
        >
          stefanop21@outlook.es
        </a>
      </p>

      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('¡Mensaje enviado! Le responderé lo antes posible');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack"
          name="message"
          placeholder="Escriba su mensaje aquí..."
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};
