import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {showLabel && (
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 select-none">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={toggleTheme}
        className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 ${
          isDark
            ? 'bg-zinc-800 border-zinc-700'
            : 'bg-zinc-200 border-zinc-300'
        }`}
      >
        {/* Track icons (background indications) */}
        <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none select-none">
          <Sun
            className={`w-3.5 h-3.5 transition-opacity duration-150 ${
              isDark ? 'opacity-30 text-zinc-500' : 'opacity-80 text-amber-500'
            }`}
          />
          <Moon
            className={`w-3.5 h-3.5 transition-opacity duration-150 ${
              isDark ? 'opacity-90 text-sky-300' : 'opacity-30 text-zinc-400'
            }`}
          />
        </span>

        {/* Sliding thumb pill */}
        <span
          className={`pointer-events-none relative inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
            isDark ? 'translate-x-7 bg-zinc-900 text-sky-300' : 'translate-x-1 bg-white text-amber-500'
          }`}
        >
          {isDark ? (
            <Moon className="w-3 h-3 stroke-[2.2]" />
          ) : (
            <Sun className="w-3 h-3 stroke-[2.2]" />
          )}
        </span>
      </button>
    </div>
  );
};
