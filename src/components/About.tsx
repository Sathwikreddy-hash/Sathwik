import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
          About
        </h2>

        {/* Clean, authentic human narrative bio */}
        <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal [text-wrap:pretty]">
          {about.bioText}
        </p>
      </motion.div>
    </section>
  );
};
