'use client';

import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="themeButton"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
};
