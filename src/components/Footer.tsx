'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/AksRamani' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aakash-ramani-541321235/' },
  { label: 'Portfolio V2', href: 'https://portfolio-v2-aksramanis-projects.vercel.app/' },
];

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="relative z-10 w-full bg-[#030303] pt-24 pb-12 px-6 md:px-12 overflow-hidden border-t border-[var(--line)]/40">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Topline */}
        <div className="flex items-center justify-between pb-16 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block" />
            <span className="text-[var(--accent)] font-medium tracking-[0.16em]">
              05 / THE NEXT CHAPTER
            </span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.18em]">
            LET&apos;S MAKE IT MATTER
          </span>
        </div>

        {/* Contact Hero Content */}
        <div className="pt-20 pb-28 max-w-5xl">
          {/* Availability Indicator */}
          <div className="flex items-center gap-2.5 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-[#b2b2b2] mb-8">
            <span className="live-dot" />
            <span>OPEN TO NEW OPPORTUNITIES & MEANINGFUL CONVERSATIONS</span>
          </div>

          {/* Huge Display Heading */}
          <h2 className="font-serif font-light text-[clamp(54px,8.5vw,135px)] leading-[0.96] tracking-[-0.035em] text-[#f1eee8]">
            Something great
            <br />
            starts with <em className="italic text-[#f1eee8] font-normal">a hello.</em>
          </h2>

          {/* Contact Details Bar */}
          <div className="mt-12 flex flex-wrap items-center gap-8 md:gap-14">
            <a
              href="mailto:aakash.ramani021@gmail.com"
              className="group inline-flex items-center gap-3 pb-3 border-b border-[#cdcdcd] text-xl md:text-2xl font-sans text-[#f1eee8] hover:text-[#E5CBB0] hover:border-[#E5CBB0] transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-[var(--accent)]" />
              <span>aakash.ramani021@gmail.com</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="tel:9725808487"
              className="group inline-flex items-center gap-3 pb-3 border-b border-[#cdcdcd] text-xl md:text-2xl font-sans text-[#f1eee8] hover:text-[#E5CBB0] hover:border-[#E5CBB0] transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-[var(--accent)]" />
              <span>+91 9725808487</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Subtitle description */}
          <div className="mt-8 text-[13px] md:text-[14px] text-[var(--muted)] leading-relaxed font-light">
            <p>React.js, Next.js, full-stack applications, Shopify Hydrogen, and modern frontend engineering.</p>
            <p>If you have an opportunity or a project to discuss, I&apos;d love to connect.</p>
          </div>
        </div>

        {/* Brand & Socials Bar */}
        <div className="pt-10 pb-10 border-t border-[var(--line)]/40 flex flex-wrap items-center justify-between gap-8">
          {/* Wordmark with orange dot */}
          <a
            href="#top"
            className="font-serif text-2xl md:text-[28px] tracking-tight text-[#f1eee8] hover:opacity-80 transition-opacity"
          >
            Aakash Ramani<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Social Links & Back To Top */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <div className="flex flex-wrap items-center gap-6 md:gap-8 font-sans text-[12px] md:text-[13px] text-[#afafaf]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E5CBB0] transition-colors"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#777]" />
                </a>
              ))}
            </div>

            {/* Circular Back To Top Button */}
            <a
              href="#top"
              aria-label="Back to top of page"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#E5CBB0] hover:text-[#E5CBB0] text-[#f1eee8] flex items-center justify-center transition-all duration-200 group"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div className="pt-6 border-t border-[var(--line)]/30 flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-[#7a7873]">
          <span>© {year} AAKASH RAMANI</span>
          <span className="hidden md:inline-block">FRONTEND DEVELOPER · REACT & FULL-STACK</span>
          <span>AHMEDABAD / RAJKOT, GUJARAT, INDIA</span>
        </div>
      </div>
    </footer>
  );
}
