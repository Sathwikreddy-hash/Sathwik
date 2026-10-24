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
  status: 'In Progress' | 'Completed' | 'Concept';
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
      id: 'proj-1',
      title: 'AI Workflow Assistant',
      description: 'An intelligent personal assistant interface designed to automate daily developer workflows and synthesize web data.',
      tags: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sathwik/ai-workflow-assistant',
      demoUrl: 'https://ai-assistant.demo.dev',
      status: 'In Progress',
      year: '2026',
    },
    {
      id: 'proj-2',
      title: 'QuickTask Minimalist CLI',
      description: 'A rapid, keystroke-driven terminal productivity tool for tracking milestones and daily engineering routines.',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      githubUrl: 'https://github.com/sathwik/quicktask-cli',
      status: 'Completed',
      year: '2025',
    },
    {
      id: 'proj-3',
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
