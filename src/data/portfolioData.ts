/**
 * Sathwik's Portfolio Configuration & Data
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sathwik',
    handle: 'sathwik',
    age: 15,
    role: 'Developer & Aspiring Entrepreneur',
    headline: "Hi, I'm Sathwik.",
    subheadline: "Building with AI, exploring systems, and turning ideas into software that solves real problems.",
    statusText: "Exploring AI development & web engineering",
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
      id: 'quicktask-cli',
      title: 'QuickTask Minimalist CLI',
      description: 'A rapid, keystroke-driven terminal productivity tool for tracking milestones and daily engineering routines.',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      githubUrl: 'https://github.com/sathwik/quicktask-cli',
      status: 'Completed',
      year: '2025',
    },
    {
      id: 'rcb-analytics',
      title: 'RCB Fan Hub & Stat Visualizer',
      description: 'An interactive analytics web dashboard showcasing match momentum, Kohli batting streaks, and team telemetry.',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'REST APIs'],
      githubUrl: 'https://github.com/sathwik/rcb-analytics',
      demoUrl: 'https://rcb-hub.demo.dev',
      status: 'Completed',
      year: '2025',
    },
  ] as Project[],

  contact: {
    email: 'sathwik@example.com',
    github: 'https://github.com/sathwik',
    twitter: 'https://x.com/sathwik',
    discord: 'sathwik#0000',
    availableFor: 'Open to discussions about AI, web development, hackathons, and innovative startup ideas.',
  },
};
