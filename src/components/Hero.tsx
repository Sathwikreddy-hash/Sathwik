import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();

  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        {/* Understated status lead */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono mb-5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
          <span className={`w-2 h-2 rounded-full ${accentConfig.dotColor}`} />
          <span>{profile.role}</span>
          <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
          <span>Age {profile.age}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 [text-wrap:balance]">
          Hi, I&apos;m{' '}
          <span className={`${accentConfig.primaryClass} transition-colors duration-200`}>
            {profile.name}
          </span>
          .
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed [text-wrap:balance]">
          {profile.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded border transition-transform duration-150 active:scale-95 ${accentConfig.buttonClass}`}
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors duration-150"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
