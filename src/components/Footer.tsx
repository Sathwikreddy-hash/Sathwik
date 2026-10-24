import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { accentConfig } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 text-zinc-500 dark:text-zinc-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {PORTFOLIO_DATA.profile.handle}
          </span>
          <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dotColor}`} />
          <span>© {new Date().getFullYear()}</span>
          <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
          <span>Crafted with minimalism</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            Contact
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors pl-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 stroke-[2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
