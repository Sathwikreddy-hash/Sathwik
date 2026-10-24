import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
export type AccentColor = 'blue' | 'emerald' | 'amber' | 'violet';

export interface AccentConfig {
  name: string;
  id: AccentColor;
  primaryClass: string;
  badgeBg: string;
  badgeText: string;
  borderClass: string;
  hoverBorder: string;
  dotColor: string;
  ringClass: string;
  buttonClass: string;
}

export const ACCENTS: Record<AccentColor, AccentConfig> = {
  blue: {
    name: 'Cobalt',
    id: 'blue',
    primaryClass: 'text-sky-600 dark:text-sky-400',
    badgeBg: 'bg-sky-50 dark:bg-sky-950/60',
    badgeText: 'text-sky-700 dark:text-sky-300',
    borderClass: 'border-sky-300 dark:border-sky-800',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-600',
    dotColor: 'bg-sky-500',
    ringClass: 'ring-sky-500/20',
    buttonClass: 'bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-500 dark:hover:bg-sky-600',
  },
  emerald: {
    name: 'Emerald',
    id: 'emerald',
    primaryClass: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    borderClass: 'border-emerald-300 dark:border-emerald-800',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-600',
    dotColor: 'bg-emerald-500',
    ringClass: 'ring-emerald-500/20',
    buttonClass: 'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600',
  },
  amber: {
    name: 'Amber',
    id: 'amber',
    primaryClass: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60',
    badgeText: 'text-amber-700 dark:text-amber-300',
    borderClass: 'border-amber-300 dark:border-amber-800',
    hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-600',
    dotColor: 'bg-amber-500',
    ringClass: 'ring-amber-500/20',
    buttonClass: 'bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600',
  },
  violet: {
    name: 'Violet',
    id: 'violet',
    primaryClass: 'text-violet-600 dark:text-violet-400',
    badgeBg: 'bg-violet-50 dark:bg-violet-950/60',
    badgeText: 'text-violet-700 dark:text-violet-300',
    borderClass: 'border-violet-300 dark:border-violet-800',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-600',
    dotColor: 'bg-violet-500',
    ringClass: 'ring-violet-500/20',
    buttonClass: 'bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  accentConfig: AccentConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  accent: 'blue',
  setAccent: () => {},
  accentConfig: ACCENTS.blue,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    if (typeof window !== 'undefined') {
      const storedAccent = localStorage.getItem('portfolio-accent') as AccentColor | null;
      if (storedAccent && ACCENTS[storedAccent]) return storedAccent;
    }
    return 'blue';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
    localStorage.setItem('portfolio-accent', newAccent);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accent,
        setAccent,
        accentConfig: ACCENTS[accent],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
