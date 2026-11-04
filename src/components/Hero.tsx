import React from 'react';
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FadeInUp } from './FadeInUp';

export const Hero: React.FC = () => {
  const { profile, contact } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();

  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <FadeInUp>
        {/* Profile Header Card */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] shadow-2xs">
          {/* Panoramic Cover Banner (Virat Kohli "BELIEVE" Header) */}
          <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden bg-zinc-950">
            <img
              src={profile.banner}
              alt="Virat Kohli Believe Header Banner"
              className="w-full h-full object-cover object-[center_42%] transition-transform duration-700 ease-out hover:scale-[1.02]"
              loading="eager"
              decoding="async"
            />
            {/* Subtle bottom scrim to ensure clean avatar overlap without dimming the BELIEVE typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Top-right subtle badge */}
            <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 flex items-center gap-2">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-black/60 backdrop-blur-md text-white/95 border border-white/20 shadow-xs">
                VK 18 · BELIEVE
              </span>
            </div>
          </div>

          {/* Profile Details Container with Overlapping Avatar */}
          <div className="px-4 sm:px-6 pb-6 pt-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3.5 sm:gap-4 -mt-10 sm:-mt-14 md:-mt-16 mb-4">
              {/* Profile Avatar (Prominent & Face clearly visible) */}
              <div className="relative inline-block shrink-0">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 sm:border-4 border-white dark:border-[#12141c] shadow-md bg-zinc-100 dark:bg-zinc-800 ring-1 ring-black/5">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 ease-out hover:scale-105"
                    loading="eager"
                  />
                </div>
                {/* Active indicator dot on avatar edge */}
                <span
                  className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#12141c] shadow-xs"
                  title="Active"
                />
              </div>

              {/* Action Buttons: Responsive for all screen sizes */}
              <div className="flex items-center gap-2 sm:mb-2 shrink-0">
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-full shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:scale-95 ${accentConfig.buttonClass}`}
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-750 hover:text-zinc-950 dark:hover:text-white transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <span>Projects</span>
                  <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Profile Info & Bio Lockup */}
            <div className="max-w-2xl">
              {/* Name & Developer Handle (Misleading verification checkmark replaced with clean dot) */}
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {profile.name}
                </h1>
                <span
                  className={`w-2 h-2 rounded-full ${accentConfig.dotColor} shrink-0`}
                  title="Developer"
                />
                <span className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  {contact.twitterHandle}
                </span>
              </div>

              {/* Role Title */}
              <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <span>{profile.role}</span>
              </div>

              {/* Sub-headline / bio summary */}
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed [text-wrap:pretty]">
                {profile.subheadline}
              </p>

              {/* Metadata row: Clean labels without repeating @sath_vk18 twice */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dotColor}`} />
                  <span>Building with AI</span>
                </div>
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline inline-flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};
