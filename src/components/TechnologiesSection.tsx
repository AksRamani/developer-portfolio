'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import SignalText from './SignalText';

const expertiseItems = [
  {
    id: 0,
    tag: '01 / MODERN REACT & FRONTEND',
    headline: 'Build with perspective.',
    description:
      'Connecting client requirements with clean component architectures, responsive typography, and sub-millisecond interaction speeds. Crafting accessible, mobile-first web applications with modern React.',
    strengths: 'HTML5 · CSS3 · JavaScript (ES6+) · React.js · Next.js · Redux · Tailwind CSS · jQuery',
    linkText: 'Background & full capabilities ↗',
    linkHref: '#about',
    steps: ['01 Understand user requirements', '02 Architect reusable components', '03 Ship clean, tested software'],
  },
  {
    id: 1,
    tag: '02 / FULL-STACK & CMS SOLUTIONS',
    headline: 'Scale business operations.',
    description:
      'Developing end-to-end full-stack backends with Node.js and MongoDB, complemented by Shopify CMS and CRO (Conversion Rate Optimization) strategies to drive conversions and seamless store management.',
    strengths: 'Node.js · Express · MongoDB · Shopify CMS · Shopify CRO · REST APIs · Git',
    linkText: 'Explore featured work ↗',
    linkHref: '#projects',
    steps: ['01 Map API endpoints & models', '02 Optimize conversion funnels', '03 Ensure fast database queries'],
  },
  {
    id: 2,
    tag: '03 / UX ARCHITECTURE & SEO',
    headline: 'Harmonize visibility with craftsmanship.',
    description:
      'Auditing Core Web Vitals, structuring semantic metadata, and building accessible UI hierarchies that rank at the top of search engines while ensuring a silky-smooth user experience.',
    strengths: 'SEO Optimization · UX/UI Design · Lighthouse 100 · Semantic HTML · MUI · Ant Design',
    linkText: 'View project architectures ↗',
    linkHref: '#projects',
    steps: ['01 Audit Core Web Vitals', '02 Implement technical SEO schemas', '03 Refine micro-interactions'],
  },
];

export default function TechnologiesSection() {
  const [expandedId, setExpandedId] = useState<number>(0);

  const activeItem = expertiseItems.find((item) => item.id === expandedId) || expertiseItems[0];

  return (
    <section id="stack" className="relative z-10 w-full bg-[#030303] py-28 md:py-36 px-6 md:px-12 border-t border-[var(--line)]/40">
      {/* Chapter Topline */}
      <div className="flex items-center justify-between pb-14 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#ff8c59] inline-block" />
          <span className="text-[#ff8c59] font-medium tracking-[0.16em]">
            <SignalText text="03 / HOW I THINK & WORK" />
          </span>
        </div>
        <span className="hidden sm:inline-block tracking-[0.18em]">
          DEPTH MEETS PERSPECTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 pt-16">
        {/* Left Column: Intro & Interactive Thinking Path */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#f1eee8] leading-[1.08] tracking-[-0.035em]">
              How I work.
              <br />
              <em className="text-[#f1eee8] italic font-normal">From idea to impact.</em>
            </h2>
            <p className="mt-4 text-sm font-mono text-[var(--muted)]">
              Choose a discipline. Follow the thinking.
            </p>

            {/* Dynamic Thinking Path Steps */}
            <div className="mt-12 p-6 rounded-xl border border-[var(--line)]/50 bg-[#090807]/50 space-y-6">
              <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#ff8c59] block">
                {activeItem.tag}
              </span>
              <ol className="space-y-3 font-mono text-xs text-[var(--ink-muted)]">
                {activeItem.steps.map((st, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#ff8c59] font-semibold">{st.slice(0, 2)}</span>
                    <span>{st.slice(3)}</span>
                  </li>
                ))}
              </ol>
              <div className="pt-4 border-t border-[var(--line)]/30">
                <Link href="#contact" className="text-link text-xs">
                  <span>Start a collaboration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Accordion List with Glow Effect */}
        <div className="lg:col-span-7 border-t border-[var(--line)]/50">
          {expertiseItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                key={item.id}
                className={
                  isExpanded
                    ? 'border-b border-[var(--line)]/50 transition-all duration-300 bg-gradient-to-r from-[#986737]/22 via-[#986737]/[0.07] to-transparent shadow-[inset_0_1px_0_rgba(255,140,89,0.25)] relative before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,140,89,0.12),transparent_65%)]'
                    : 'border-b border-[var(--line)]/50 transition-all duration-300 bg-transparent hover:bg-white/[0.01]'
                }
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? -1 : item.id)}
                  className="w-full flex items-center justify-between text-left py-7 px-4 md:px-6 group cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-2">
                    <small className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#a8a8a8] block">
                      {item.tag}
                    </small>
                    <h3 className="font-serif text-3xl md:text-[34px] text-[#f1eee8] font-normal tracking-tight group-hover:text-[#E5CBB0] transition-colors">
                      {item.headline}
                    </h3>
                  </div>

                  <div className="text-[#b9b9b9] group-hover:text-[#E5CBB0] transition-colors ml-4 shrink-0">
                    {isExpanded ? (
                      <Minus className="w-5 h-5 text-[#f1eee8]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#888] group-hover:text-[#E5CBB0]" />
                    )}
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-4 md:px-6 pb-8 pt-1 space-y-5 animate-in fade-in duration-300">
                    <p className="text-[14px] md:text-[15px] text-[var(--muted)] leading-relaxed font-light max-w-2xl">
                      {item.description}
                    </p>

                    <div className="border-l-2 border-[#ff8c59] pl-4 py-0.5 mt-5">
                      <p className="text-[13px] md:text-[14px] font-sans text-[#f0dfc8] tracking-wide leading-relaxed">
                        {item.strengths}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={item.linkHref}
                        className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-sans text-[#d8b999] hover:text-[#E5CBB0] border-b border-[#8e714c]/40 hover:border-[#E5CBB0] pb-1 transition-all duration-200"
                      >
                        <span>{item.linkText}</span>
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
