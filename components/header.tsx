import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle';

export default function Header({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white dark:bg-gray-800 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="AINomics Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AINomics
          </span>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </nav>
      </div>
    </header>
  );
}
