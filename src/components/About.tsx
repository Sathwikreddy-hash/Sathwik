import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FadeInUp } from './FadeInUp';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();

  return (
    <section id="about" className="py-14 sm:py-18 border-b border-zinc-200 dark:border-zinc-800/80">
      <FadeInUp className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            01
          </span>
          <span className="text-xs text-zinc-300 dark:text-zinc-700">/</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            About
          </h2>
        </div>

        {/* Clean, authentic narrative with 15-year-old developer identity */}
        <div className="relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-800">
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal [text-wrap:pretty]">
            {about.bioText}
          </p>
        </div>
      </FadeInUp>
    </section>
  );
};
