'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SignalText from './SignalText';

const disciplines = [
  {
    id: 'build',
    label: 'Frontend',
    tag: '01 / MODERN REACT & FRONTEND',
    title: 'Build scalable, dynamic web applications.',
    story:
      'Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, Redux, and Tailwind CSS. Crafting reusable components, resilient data flows, and sub-millisecond responsive interfaces that delight users.',
    skills: 'React.js · Next.js · TypeScript · Redux · Tailwind CSS · ES6+ · jQuery',
  },
  {
    id: 'scale',
    label: 'Full-Stack',
    tag: '02 / FULL-STACK & CMS SOLUTIONS',
    title: 'Empower businesses with robust digital stores & APIs.',
    story:
      'Delivering end-to-end full-stack solutions with Node.js and MongoDB, alongside comprehensive Shopify CMS and CRO (Conversion Rate Optimization) strategies that convert visitors into customers.',
    skills: 'Node.js · Express · MongoDB · Shopify CMS · Shopify CRO · REST APIs · Git',
  },
  {
    id: 'craft',
    label: 'UX & SEO',
    tag: '03 / USER EXPERIENCE & SEO CRAFTSMANSHIP',
    title: 'Harmonize discoverability with intuitive UX.',
    story:
      'Blending the art of web design with technical SEO best practices and responsive typography to ensure websites not only look stunning but rank at the top of search engines.',
    skills: 'SEO Optimization · UX/UI Design · Core Web Vitals · Responsive Layouts · MUI',
  },
];

export default function AboutSection() {
  const [activeDisc, setActiveDisc] = useState(disciplines[0]);

  return (
    <section id="about" className="relative z-10 w-full bg-[#030303] py-28 md:py-36 px-6 md:px-12 border-t border-[var(--line)]/40">
      {/* Chapter Topline */}
      <div className="flex items-center justify-between pb-14 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block" />
          <span className="text-[var(--accent)] font-medium tracking-[0.16em]">
            <SignalText text="01 / THE PERSON BEHIND THE WORK" />
          </span>
        </div>
        <span className="hidden sm:inline-block tracking-[0.18em]">
          A CONNECTED PERSPECTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-16">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-light text-[#f1eee8] leading-[1.08] tracking-[-0.035em]">
            Technology is the starting point.
            <br />
            <em className="text-[#f1eee8] italic font-normal">People are the point.</em>
          </h2>

          <div className="space-y-6 text-[16px] md:text-[17px] text-[var(--ink-muted)] leading-[1.8] font-light max-w-2xl">
            <p className="text-[19px] md:text-[21px] text-[#f1eee8] font-normal leading-relaxed">
              I connect frontend engineering, product velocity, and interface craftsmanship into cohesive, high-performance web applications.
            </p>
            <p>
              Over the last 4+ years, I&apos;ve specialized in building dynamic and scalable web applications with a keen eye for SEO optimization, responsive layout precision, and UX design.
            </p>
            <p>
              From architecting interactive React web applications to implementing Shopify CMS and CRO strategies that drive conversions, I focus on fundamentals: clean code, semantic markup, and intuitive digital experiences.
            </p>
          </div>

          <div className="pt-2">
            <Link href="#projects" className="text-link text-[13px]">
              <span>Explore my featured projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Identity Notes */}
          <div className="pt-10 border-t border-[var(--line)]/40 flex flex-wrap items-center gap-6 md:gap-10 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#8e8a83] uppercase">
            <span>ENGINEERING MIND.</span>
            <span>FRONTEND INSTINCT.</span>
            <span>BUILDER&apos;S AMBITION.</span>
          </div>
        </div>

        {/* Right Column: Minimal Interactive Discipline Explorer */}
        <div className="lg:col-span-5 pt-4">
          <div className="rounded-2xl border border-[var(--line)]/60 bg-[#090807]/60 p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.2em] uppercase text-[#a09a91] pb-6 border-b border-[var(--line)]/40">
              <span className="text-[var(--accent)]">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
              <span>0{disciplines.indexOf(activeDisc) + 1} / 03</span>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-2 my-8" role="group" aria-label="Explore my disciplines">
              {disciplines.map((d) => {
                const isActive = activeDisc.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDisc(d)}
                    className={
                      isActive
                        ? 'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer bg-[var(--accent)] text-[#030303] font-semibold shadow-[0_0_15px_rgba(255,140,89,0.3)]'
                        : 'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer border border-[var(--line)]/60 text-[var(--muted)] hover:border-[#E5CBB0] hover:text-[#E5CBB0]'
                    }
                  >
                    <span>{d.label}</span>
                    <span className="text-[10px]">↗</span>
                  </button>
                );
              })}
            </div>

            {/* Story Box */}
            <div className="space-y-4 min-h-[140px]">
              <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-[var(--accent)]">
                {activeDisc.tag}
              </span>
              <h3 className="font-serif text-2xl text-[var(--ink)] font-normal">
                {activeDisc.title}
              </h3>
              <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed font-light">
                {activeDisc.story}
              </p>
            </div>

            {/* Core Capabilities Chips */}
            <div className="pt-6 mt-6 border-t border-[var(--line)]/40 text-[11px] font-mono text-[#a39e97]">
              <span className="text-[9px] tracking-widest uppercase block text-[var(--muted)] mb-1.5">
                Core Capabilities:
              </span>
              <p className="text-[#dedad4]">{activeDisc.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
