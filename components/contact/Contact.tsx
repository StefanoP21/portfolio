'use client';

import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { SectionHeading } from '../shared';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import { SubmitButton } from './SubmitButton';
import toast from 'react-hot-toast';

export const Contact = () => {
  const { ref } = useSectionInView('#contact');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

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
      <p className="text-gray-700 -mt-4 dark:text-white/90">
        Póngase en contacto conmigo a través del siguiente formulario o
        directamente a{' '}
        <a
          className="underline font-semibold hover:text-gray-950 duration-300 transition dark:hover:text-white"
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

          if (data) {
            setSenderEmail('');
            setMessage('');
          }

          toast.success('¡Mensaje enviado! Le responderé lo antes posible');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-gray-700 dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={500}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack dark:bg-gray-700 dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Escriba su mensaje aquí..."
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};
