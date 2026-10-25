import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FadeInUp } from './FadeInUp';

export const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();

  return (
    <section className="pt-12 pb-14 sm:pt-20 sm:pb-18 border-b border-zinc-200 dark:border-zinc-800/80">
      <FadeInUp>
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-10">
          {/* Left Column: Intro copy */}
          <div className="flex-1 max-w-xl">
            {/* Role Lead Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dotColor}`} />
              <span>{profile.role}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 [text-wrap:balance] leading-[1.15]">
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
                className={`inline-flex items-center gap-2 px-4.5 py-2 text-sm font-medium rounded-md border transition-all duration-150 hover:-translate-y-0.5 active:scale-95 shadow-2xs ${accentConfig.buttonClass}`}
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4.5 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Right Column: Sathwik's Profile Photo */}
          <div className="shrink-0 self-start sm:self-center">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-zinc-200/90 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-300 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 group-hover:shadow-md">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};
