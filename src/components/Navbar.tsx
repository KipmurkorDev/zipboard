import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <img src="/logo.svg" alt="zipBoard logo" className="h-6 w-6" />
          FAQ
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
