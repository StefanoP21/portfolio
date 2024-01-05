'use client';

import { useFormStatus } from 'react-dom';
import { IoSend } from 'react-icons/io5';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-fit w-fit px-4 py-2 mt-2 bg-gray-900 text-white rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100 dark:bg-gray-700 dark:hover:bg-gray-800 dark:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
        <>
          Enviando{' '}
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
        </>
      ) : (
        <>
          Enviar{' '}
          <IoSend className="opacity-70 group-hover:translate-x-1 transition" />
        </>
      )}
    </button>
  );
};
