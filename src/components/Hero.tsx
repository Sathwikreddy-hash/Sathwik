import React from 'react';
import { ArrowDown, ArrowUpRight, BadgeCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FadeInUp } from './FadeInUp';

export const Hero: React.FC = () => {
  const { profile, contact } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();

  return (
    <section className="pt-6 pb-12 sm:pb-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <FadeInUp>
        {/* X / LinkedIn Style Profile Header Card */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] shadow-2xs">
          {/* Panoramic Cover Banner (Virat Kohli 18 Header) */}
          <div className="relative h-40 sm:h-52 md:h-60 w-full overflow-hidden bg-zinc-900">
            <img
              src={profile.banner}
              alt="Profile Cover Banner - Virat 18"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            {/* Soft gradient scrim on bottom for clean avatar transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

            {/* Subtle top-right badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/50 backdrop-blur-md text-white/95 border border-white/15 shadow-xs">
                VK 18 · GOAT
              </span>
            </div>
          </div>

          {/* Profile Details Container with Overlapping Avatar */}
          <div className="px-4 sm:px-6 pb-6 pt-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 sm:-mt-16 md:-mt-18 mb-4">
              {/* Profile Avatar (Prominent & Face clearly visible like on X / LinkedIn) */}
              <div className="relative inline-block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-[#12141c] shadow-md bg-zinc-100 dark:bg-zinc-800 ring-1 ring-black/5">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 ease-out hover:scale-105"
                    loading="eager"
                  />
                </div>
                {/* Active indicator dot on avatar edge */}
                <span
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#12141c] shadow-xs"
                  title="Active"
                />
              </div>

              {/* Action Buttons on the Right (like X Follow / LinkedIn Connect) */}
              <div className="flex items-center gap-2.5 self-start sm:self-auto sm:mb-2">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-medium rounded-full shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:scale-95 ${accentConfig.buttonClass}`}
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-750 hover:text-zinc-950 dark:hover:text-white transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
                >
                  <span>Projects</span>
                  <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Profile Info & Bio Lockup */}
            <div className="max-w-2xl">
              {/* Name, Verified Badge, and Handle */}
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {profile.name}
                </h1>
                <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500/10 stroke-[2]" />
                <span className="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-500">
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

              {/* Metadata row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dotColor}`} />
                  <span>Building with AI</span>
                </div>
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline flex items-center gap-1"
                >
                  <span>{contact.twitterHandle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline flex items-center gap-1"
                >
                  <span>{contact.instagramHandle}</span>
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
