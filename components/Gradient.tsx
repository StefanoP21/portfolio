"use client";

import { useTheme } from "@/hooks/useTheme";

export const Gradient = () => {
  const { theme } = useTheme();

  return (
    <div
      className="absolute top-0 left-0 h-[35rem] w-full z-[-10] rounded-full blur-[10rem]"
      style={{
        backgroundImage:
          theme === "light"
            ? "linear-gradient(to right, #4ade80, #a78bfa)"
            : "linear-gradient(to right, #22c55e, #8b5cf6)",
      }}
    ></div>
  );
};
