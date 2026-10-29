'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import SignalText from './SignalText';

const experiences = [
  {
    period: 'Apr 2025 — Present',
    role: 'Frontend / Full-Stack Developer',
    company: 'Manek Tech, Ahmedabad, Gujarat',
    summary:
      'Gained hands-on experience in backend development using Node.js, Express.js, MongoDB, and Mongoose. Enhanced expertise in advanced React concepts to build scalable front-end systems with real-time tables, interactive charts, and Google Calendar-style booking functionalities. Styled with Material-UI (MUI), Ant Design, and Tailwind CSS.',
    tech: 'React.js · Node.js · Express.js · MongoDB · Mongoose · Redux · Material-UI · Ant Design · Tailwind CSS · Git · Jira',
  },
  {
    period: 'Mar 2023 — Dec 2024',
    role: 'Frontend Developer — Property Management Platform',
    company: 'Cipher Craft Pvt Ltd, Rajkot, Gujarat',
    summary:
      'Contributed to end-to-end modules of a property management application, including a comprehensive task management module (status changes, assignment, pinning, checklists, attachments) and chat module. Built an offline-first storage module with IndexedDB to store/retrieve data without API calls, and integrated WebSockets for real-time chat and call collaboration.',
    tech: 'ReactJS · WebSockets · IndexedDB · Redux · JavaScript · jQuery · Third-Party Integrations · GitLab',
  },
  {
    period: 'July 2022 — Feb 2023',
    role: 'eCommerce Frontend Developer — Headless Storefront',
    company: 'Hopiant Pvt Ltd, Junagadh, Gujarat',
    summary:
      'Developed an eCommerce platform focused on home and office organization products and services using Shopify Hydrogen and GraphQL. Integrated responsive product catalogs, dynamic blog, testimonial displays, and optimized pages (Home, About Us, Contact Us) for high performance and fast loading.',
    tech: 'Shopify Hydrogen · ReactJS · GraphQL · jQuery · HTML5 · CSS3 · GitHub',
  },
];

const education = [
  {
    period: '2020 — 2023',
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'Gujarat Technical University (GTU)',
    details: 'Graduated with strong technical foundation in algorithms, web development, database systems, and software engineering.',
  },
  {
    period: '2017 — 2020',
    degree: 'Diploma in Computer Engineering',
    institution: 'Gujarat Technical University (GTU)',
    details: 'Comprehensive study of computer hardware, software paradigms, network protocols, and programming languages.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 w-full bg-[#030303] py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 border-t border-[var(--line)]/40">
      {/* Chapter Topline */}
      <div className="flex items-center justify-between pb-10 sm:pb-14 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block" />
          <span className="text-[var(--accent)] font-medium tracking-[0.16em]">
            <SignalText text="04 / THE JOURNEY IN MOTION" />
          </span>
        </div>
        <span className="hidden sm:inline-block tracking-[0.18em]">
          PROVEN TRACK RECORD &amp; ACADEMIC CREDENTIALS
        </span>
      </div>

      <div className="pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14 md:pb-16 max-w-3xl">
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#f1eee8] leading-[1.12] sm:leading-[1.08] tracking-[-0.035em]">
          Started with code.
          <br />
          <em className="text-[#f1eee8] italic font-normal">Kept asking why.</em>
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[var(--muted)] leading-relaxed font-light">
          A timeline of professional engineering, commercial software delivery, and academic foundation.
        </p>
      </div>

      {/* Professional Experience Rows */}
      <div className="divide-y divide-[var(--line)]/40 border-y border-[var(--line)]/40">
        {experiences.map((exp, idx) => (
          <article key={idx} className="py-7 sm:py-9 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-start group">
            {/* Period */}
            <div className="md:col-span-3 font-mono text-[11px] sm:text-xs text-[var(--accent)] tracking-widest uppercase">
              {exp.period}
            </div>

            {/* Role & Company */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal group-hover:text-[#E5CBB0] transition-colors leading-snug">
                {exp.role}
              </h3>
              <p className="text-[11.5px] sm:text-xs font-mono text-[var(--muted)]">{exp.company}</p>
            </div>

            {/* Summary & Tech */}
            <div className="md:col-span-5 space-y-2.5 sm:space-y-3 pt-1 md:pt-0">
              <p className="text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] leading-relaxed font-light">
                {exp.summary}
              </p>
              <p className="text-[10.5px] sm:text-[11px] font-mono text-[#8a867f] uppercase tracking-wider">
                {exp.tech}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Academic Credentials Section */}
      <div className="pt-14 sm:pt-20">
        <div className="flex items-center gap-3 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] mb-6 sm:mb-10">
          <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[var(--accent)] font-medium">ACADEMIC CREDENTIALS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 md:p-8 rounded-2xl border border-[var(--line)]/50 bg-[#090807]/60 space-y-2.5 sm:space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                <span>{edu.period}</span>
                <span className="text-[#666]">GTU</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#f1eee8] font-normal leading-snug">
                {edu.degree}
              </h4>
              <p className="text-[11.5px] sm:text-xs font-mono text-[var(--muted)]">{edu.institution}</p>
              <p className="text-[13px] text-[var(--ink-muted)] font-light leading-relaxed pt-1.5 sm:pt-2">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
