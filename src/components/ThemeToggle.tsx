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
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 select-none">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleTheme();
        }}
        className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 ${
          isDark
            ? 'bg-zinc-800 border-zinc-700 text-sky-400'
            : 'bg-zinc-200 border-zinc-300 text-amber-500'
        }`}
        style={{ width: '54px', height: '28px' }}
      >
        {/* Track icons */}
        <span className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none select-none">
          <Sun
            className={`w-3.5 h-3.5 transition-opacity duration-150 ${
              isDark ? 'opacity-30 text-zinc-500' : 'opacity-100 text-amber-600'
            }`}
          />
          <Moon
            className={`w-3.5 h-3.5 transition-opacity duration-150 ${
              isDark ? 'opacity-100 text-sky-300' : 'opacity-30 text-zinc-400'
            }`}
          />
        </span>

        {/* Sliding thumb */}
        <span
          className={`pointer-events-none relative inline-flex h-5 w-5 rounded-full shadow-sm items-center justify-center transition-transform duration-200 ease-in-out ${
            isDark
              ? 'bg-zinc-950 text-sky-300'
              : 'bg-white text-amber-600'
          }`}
          style={{
            transform: isDark ? 'translateX(29px)' : 'translateX(3px)',
          }}
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
