import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Twitter, MessageSquare, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;
  const { accentConfig } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [draftSent, setDraftSent] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setDraftSent(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800/80">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
          Connect
        </h2>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {contact.availableFor} Reach out for collaborations, hackathons, or just to chat about software and tech.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {/* Email slot */}
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#12141c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <button
              onClick={copyEmailToClipboard}
              className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* GitHub slot */}
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#12141c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  GitHub
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  github.com/sathwik
                </span>
              </div>
            </div>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Open GitHub profile"
              aria-label="Open GitHub profile"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Twitter / X slot */}
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#12141c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-500 dark:text-sky-400">
                <Twitter className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  X / Twitter
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  @sathwik
                </span>
              </div>
            </div>
            <a
              href={contact.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Open X profile"
              aria-label="Open X profile"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Discord slot */}
          <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#12141c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  Discord
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  @sathwik
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#12141c]">
          <div className="flex items-center gap-2 mb-1">
            <Send className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Send a Quick Note
            </h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
            Draft a message to send directly to my inbox.
          </p>

          <form onSubmit={handleSendEmail} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full text-xs p-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full text-xs p-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say hello, share project feedback, or ask a question..."
                className="w-full text-xs p-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-zinc-400">
                {draftSent ? 'Opening mail app...' : 'Direct mailto draft'}
              </span>
              <button
                type="submit"
                className={`px-4 py-1.5 text-xs font-medium rounded transition-opacity hover:opacity-90 active:scale-95 ${accentConfig.buttonClass}`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
