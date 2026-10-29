'use client';

import React, { useState } from 'react';
import SignalText from './SignalText';
import { Send, CheckCircle2 } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-5 sm:px-8 md:px-12 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] tracking-[0.2em] font-mono uppercase text-[var(--muted)] mb-8">
        <span className="text-[var(--accent)] font-medium">06 /</span>
        <span>START A CONVERSATION</span>
        <div className="h-[1px] flex-1 bg-[var(--line)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Context and Direct Links */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--ink)] leading-tight tracking-tight">
              Have an ambitious vision or challenging{' '}
              <em className="text-[var(--accent)] italic">technical problem</em>?
            </h2>

            <p className="mt-4 sm:mt-6 text-[14.5px] sm:text-[15px] md:text-[16px] text-[var(--ink-muted)] leading-relaxed font-light">
              I am always eager to discuss distributed system design, high-performance web products,
              advisory roles, or selected engineering contracts.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="live-dot" />
                <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[var(--ink)] uppercase">
                  CURRENT AVAILABILITY: OPEN FOR NEW OPPORTUNITIES
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[11px] sm:text-xs font-mono text-[var(--muted)] space-y-2.5">
                <p className="break-all sm:break-normal">
                  <strong className="text-[var(--ink)]">DIRECT EMAIL:</strong>{' '}
                  <a href="mailto:aakash.ramani021@gmail.com" className="text-[var(--accent)] hover:underline">
                    aakash.ramani021@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-[var(--ink)]">PHONE:</strong>{' '}
                  <a href="tel:+919725808487" className="text-[var(--accent)] hover:underline">
                    +91 9725808487
                  </a>
                </p>
                <p>
                  <strong className="text-[var(--ink)]">TIMEZONE:</strong> Ahmedabad / Rajkot, Gujarat (IST UTC+5:30)
                </p>
                <p>
                  <strong className="text-[var(--ink)]">RESPONSE TIME:</strong> Usually within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 pt-6 border-t border-[var(--line)]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-ramani-541321235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] flex items-center gap-2 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] flex items-center gap-2 transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>X / Twitter</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-7 md:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-serif text-[var(--ink)] font-normal mb-1.5">
              Send a Transmission
            </h3>
            <p className="text-[11px] sm:text-xs font-mono text-[var(--muted)] mb-6 sm:mb-8">
              Fill out the details below to initiate contact.
            </p>

            {status === 'success' ? (
              <div className="p-6 sm:p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-serif text-[var(--ink)]">Message Transmitted Successfully</h4>
                <p className="text-xs font-mono text-emerald-300">
                  Thank you for reaching out. I will review your inquiry and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2 font-medium"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#11100f] border border-[var(--surface-border)] focus:border-[var(--accent)] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-[15px] sm:text-sm text-[var(--ink)] placeholder:text-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#11100f] border border-[var(--surface-border)] focus:border-[var(--accent)] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-[15px] sm:text-sm text-[var(--ink)] placeholder:text-[#555] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2 font-medium"
                  >
                    Project Type or Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Architecture Consultation / Senior Engineering Role"
                    className="w-full bg-[#11100f] border border-[var(--surface-border)] focus:border-[var(--accent)] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-[15px] sm:text-sm text-[var(--ink)] placeholder:text-[#555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2 font-medium"
                  >
                    Message / Project Scope *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, architecture requirements, or objectives..."
                    className="w-full bg-[#11100f] border border-[var(--surface-border)] focus:border-[var(--accent)] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-[15px] sm:text-sm text-[var(--ink)] placeholder:text-[#555] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="pill-link w-full justify-center py-3.5 sm:py-4 text-xs font-semibold cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Encrypting &amp; Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
