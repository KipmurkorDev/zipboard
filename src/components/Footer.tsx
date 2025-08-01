import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} zipBoard. All rights reserved.
    </footer>
  );
};

export default Footer;
