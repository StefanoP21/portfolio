import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
};
