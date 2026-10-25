import React, { useState } from 'react';
import { Mail, Twitter, Instagram, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FadeInUp } from './FadeInUp';

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
    <section id="contact" className="py-14 sm:py-18 border-b border-zinc-200 dark:border-zinc-800/80">
      <FadeInUp className="max-w-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            03
          </span>
          <span className="text-xs text-zinc-300 dark:text-zinc-700">/</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Connect
          </h2>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {contact.availableFor} Reach out for collaborations, hackathons, or just to chat about software and tech.
        </p>

        {/* Contact Links Grid (Instagram, Twitter, Email - Discord & GitHub removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {/* Email slot */}
          <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                <Mail className="w-4 h-4" />
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div>
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Instagram slot (newly added with id sath_vk18) */}
          <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] flex flex-col justify-between hover:border-pink-300 dark:hover:border-pink-800/60 transition-colors shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400">
                <Instagram className="w-4 h-4" />
              </div>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Open Instagram profile"
                aria-label="Open Instagram profile"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div>
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                Instagram
              </span>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                {contact.instagramHandle}
              </a>
            </div>
          </div>

          {/* Twitter / X slot */}
          <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-800/60 transition-colors shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                <Twitter className="w-4 h-4" />
              </div>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Open X profile"
                aria-label="Open X profile"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div>
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                X / Twitter
              </span>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                {contact.twitterHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="p-5 sm:p-6 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12141c] shadow-2xs">
          <div className="flex items-center gap-2 mb-1">
            <Send className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Send a Quick Note
            </h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
            Draft a message to send directly to my inbox.
          </p>

          <form onSubmit={handleSendEmail} className="space-y-3.5">
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
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
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
                  className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
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
                placeholder="Say hello, share feedback, or ask a question..."
                className="w-full text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-zinc-400">
                {draftSent ? 'Opening mail app...' : 'Direct mailto integration'}
              </span>
              <button
                type="submit"
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-opacity hover:opacity-90 active:scale-95 ${accentConfig.buttonClass}`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </FadeInUp>
    </section>
  );
};
