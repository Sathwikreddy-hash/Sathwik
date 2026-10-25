import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, LayoutGrid, List } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { accentConfig } = useTheme();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const projectsList = PORTFOLIO_DATA.projects;

  // Authentic developer tech badges
  const getTagColorClass = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('lovable')) {
      return 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60';
    }
    if (t.includes('react') || t.includes('vite')) {
      return 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60';
    }
    if (t.includes('type') || t.includes('ts')) {
      return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60';
    }
    if (t.includes('tail') || t.includes('css')) {
      return 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800/60';
    }
    if (t.includes('node') || t.includes('api')) {
      return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60';
    }
    if (t.includes('gemini') || t.includes('ai')) {
      return 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60';
    }
    if (t.includes('next')) {
      return 'text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700';
    }
    return 'text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-800';
  };

  const getStatusColor = (status: string) => {
    if (status === 'Live MVP' || status === 'Completed') {
      return {
        text: 'text-emerald-600 dark:text-emerald-400',
        dot: 'bg-emerald-500',
      };
    }
    return {
      text: 'text-amber-600 dark:text-amber-400',
      dot: 'bg-amber-500',
    };
  };

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-3xl">
        {/* Section Header with Controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Projects
            </h2>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              ({projectsList.length})
            </span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-1.5 rounded text-xs transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-2xs'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List View"
              className={`p-1.5 rounded text-xs transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-2xs'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* GRID VIEW */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectsList.map((project, idx) => {
              const statusColors = getStatusColor(project.status);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="group flex flex-col justify-between p-5 rounded-lg border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors duration-150"
                >
                  <div>
                    {/* Top status & year */}
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-400 dark:text-zinc-500">{project.year}</span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-sans font-medium ${statusColors.text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusColors.dot}`} />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-zinc-100 dark:border-zinc-800/60">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2 py-0.5 rounded border font-mono font-medium ${getTagColorClass(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-1 font-semibold ${accentConfig.primaryClass} hover:underline transition-colors`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* LIST VIEW */
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80 border-t border-b border-zinc-200 dark:border-zinc-800/80">
            {projectsList.map((project) => {
              const statusColors = getStatusColor(project.status);

              return (
                <div
                  key={project.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group hover:bg-zinc-100/40 dark:hover:bg-zinc-900/30 px-2 rounded transition-colors"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        ({project.year})
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-sans font-medium ml-1.5 ${statusColors.text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusColors.dot}`} />
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-1.5 py-0.5 rounded border font-mono ${getTagColorClass(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs shrink-0 self-start sm:self-auto font-medium">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                      >
                        Source
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${accentConfig.primaryClass} hover:underline`}
                      >
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
