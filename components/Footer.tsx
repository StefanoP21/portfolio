export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Stefano Palomino. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este sitio:</span> Creado con
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion y React Email & Resend. El código fuente está disponible
        en{' '}
        <a
          className="underline font-medium hover:text-red-700 transition duration-300"
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
