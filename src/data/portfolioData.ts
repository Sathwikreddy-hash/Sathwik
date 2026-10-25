/**
 * Sathwik's Portfolio Configuration & Data
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  status: 'Live MVP' | 'Developing' | 'Completed';
  year: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sathwik',
    handle: 'sathwik',
    role: 'Developer & Aspiring Entrepreneur',
    headline: "Hi, I'm Sathwik.",
    subheadline: "Building with AI, exploring systems, and turning ambitious ideas into software that solves real problems.",
    statusText: "Available for projects & collaborations",
  },

  about: {
    bioText: "I'm Sathwik, a 15-year-old developer and aspiring entrepreneur. I love building things with AI and exploring how software can solve real problems. Outside of coding, I'm a massive fan of Virat Kohli and RCB (always inspired by that 'never give up' mindset—because we win eventually 😄).",
  },

  projects: [
    {
      id: 'voltbay',
      title: 'VoltBay',
      description: 'An EV charging platform MVP designed to help electric vehicle owners easily locate, access, and manage charging stations.',
      tags: ['React', 'Tailwind CSS', 'TypeScript', 'Lovable'],
      demoUrl: 'https://voltbay.lovable.app',
      status: 'Live MVP',
      year: '2025',
    },
    {
      id: 'ai-flashcard-generator',
      title: 'AI Flashcard Generator',
      description: 'An AI-powered study assistant that generates interactive 3D flashcards from any YouTube video transcript or custom text prompt.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Google Gemini API'],
      demoUrl: 'https://ai-flashcards-vert.vercel.app/',
      status: 'Developing',
      year: '2025',
    },
    {
      id: 'rcb-analytics',
      title: 'RCB Fan Hub & Stat Visualizer',
      description: 'An interactive analytics web dashboard showcasing match momentum, Kohli batting streaks, and team telemetry.',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'REST APIs'],
      demoUrl: 'https://rcb-hub.demo.dev',
      status: 'Completed',
      year: '2025',
    },
  ] as Project[],

  contact: {
    email: 'sathwik@example.com',
    twitter: 'https://x.com/sathwik',
    twitterHandle: '@sathwik',
    instagram: 'https://instagram.com/sath_vk18',
    instagramHandle: '@sath_vk18',
    availableFor: 'Open to discussions about AI, web development, hackathons, and innovative startup ideas.',
  },
};
