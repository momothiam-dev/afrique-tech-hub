'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.css';

const STORAGE_KEY = 'afh-theme';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Sync icon with the theme actually applied by the head script.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const current = document.documentElement.getAttribute('data-theme');
      setIsDark(current !== 'light');
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (err) {
      // localStorage may be unavailable (private mode, etc.) — ignore.
    }
  };

  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
