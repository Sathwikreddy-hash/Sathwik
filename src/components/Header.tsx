import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useTheme, ACCENTS, AccentColor } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAccentPicker, setShowAccentPicker] = useState(false);
  const { accent, setAccent, accentConfig } = useTheme();

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setShowAccentPicker(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const accentList: AccentColor[] = ['blue', 'emerald', 'amber', 'violet'];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-[#0c0e14]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between gap-6">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors whitespace-nowrap shrink-0"
        >
          <span>sathwik</span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${accentConfig.dotColor} transition-colors duration-200 group-hover:scale-125`}
          />
        </a>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 text-sm ${
                  isActive
                    ? `${accentConfig.primaryClass} border-current font-semibold`
                    : 'border-transparent hover:text-zinc-950 dark:hover:text-zinc-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Controls (Accent Selector, Theme Toggle Switch, & Mobile Menu Trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Accent Color Palette Selector (Desktop) */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setShowAccentPicker(!showAccentPicker)}
              aria-label="Customize accent color"
              title="Change portfolio accent color"
              className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors flex items-center gap-1.5 text-xs"
            >
              <span className={`w-3 h-3 rounded-full ${accentConfig.dotColor} ring-1 ring-black/10`} />
              <span className="text-[11px] font-mono capitalize hidden lg:inline">{accentConfig.name}</span>
            </button>

            {showAccentPicker && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowAccentPicker(false)}
                />
                <div className="absolute right-0 mt-2 z-50 w-36 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg animate-in fade-in zoom-in-95 duration-150">
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400 dark:text-zinc-500 px-2 py-1">
                    Accent Color
                  </span>
                  <div className="space-y-1">
                    {accentList.map((acc) => (
                      <button
                        key={acc}
                        onClick={() => {
                          setAccent(acc);
                          setShowAccentPicker(false);
                        }}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded transition-colors text-left ${
                          accent === acc
                            ? 'bg-zinc-100 dark:bg-zinc-800 font-medium text-zinc-900 dark:text-zinc-100'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${ACCENTS[acc].dotColor}`} />
                        <span>{ACCENTS[acc].name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Dedicated Light/Dark Toggle Switch */}
          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[1.75]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-15 bottom-0 z-50 bg-zinc-950/50 backdrop-blur-xs flex flex-col justify-start">
          <div
            className="w-full bg-zinc-50 dark:bg-[#0c0e14] border-b border-zinc-200 dark:border-zinc-800 p-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono mb-2">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-md text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Controls Section */}
            <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Theme Appearance
                </span>
                <ThemeToggle showLabel={false} />
              </div>

              {/* Accent Color Chooser in Mobile Drawer */}
              <div className="pt-2">
                <span className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">
                  Accent Color
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {accentList.map((acc) => (
                    <button
                      key={acc}
                      onClick={() => setAccent(acc)}
                      className={`flex flex-col items-center gap-1.5 p-2 rounded border text-xs transition-colors ${
                        accent === acc
                          ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium'
                          : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${ACCENTS[acc].dotColor}`} />
                      <span className="text-[11px]">{ACCENTS[acc].name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dimmed backdrop area to tap to close */}
          <div
            className="flex-1 w-full"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
};
