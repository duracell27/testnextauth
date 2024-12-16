// components/ThemeWrapper.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Завантажуємо тему з localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  // Оновлюємо тему
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded border border-gray-300 dark:border-gray-600"
      >
        {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
      </button>
      {children}
    </div>
  );
}
