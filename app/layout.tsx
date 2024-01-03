import './globals.css';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components';
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContextProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stefano | Software Developer',
  description: 'Desarrollador de software, apasionado por la tecnología.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-32`}
      >
        <div
          className="absolute top-0 left-0 h-[35rem] w-full z-[-10] rounded-full blur-[10rem]"
          style={{
            backgroundImage: 'linear-gradient(to right, #4ade80, #a78bfa)',
          }}
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
