"use client";

import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-300 my-20 h-20 w-1 rounded-full hidden sm:block dark:bg-opacity-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
};
