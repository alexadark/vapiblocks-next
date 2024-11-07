'use client';

import '@/app/globals.css';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check if there's a stored preference, otherwise default to dark mode
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === null ? true : storedDarkMode === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="pt-24">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
