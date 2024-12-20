import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Gradient, Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import { ThemeSwitch } from "@/theme/ThemeSwitch";
import { ThemeContextProvider } from "@/context/ThemeContextProvider";
import { useTheme } from "@/hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stefano | Software Developer",
  description: "Desarrollador de software, apasionado por la tecnología.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-200 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <Gradient />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
