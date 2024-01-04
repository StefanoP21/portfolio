export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="mb-2 block text-xs">
        &copy; 2024 Stefano Palomino. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este sitio:</span> Creado con
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion y React Email & Resend. El código fuente está disponible
        en{' '}
        <a
          className="underline font-semibold hover:text-gray-950 duration-300 dark:hover:text-gray-200 transition"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};
