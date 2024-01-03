'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateInput, getErrorMessage, validateEmail } from '@/helpers';
import { ContactFormEmail } from '@/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateEmail(senderEmail)) {
    return {
      error: 'Formato de correo inválido',
    };
  }

  if (!validateInput(senderEmail, 500)) {
    return {
      error: 'Correo inválido',
    };
  }

  if (!validateInput(message, 5000)) {
    return {
      error: 'Mensaje inválido',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'aldair142015@gmail.com',
      subject: 'Contact from portfolio form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
