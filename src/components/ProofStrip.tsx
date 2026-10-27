'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProofStrip() {
  return (
    <section
      aria-label="Career highlights"
      className="relative z-10 w-full border-y border-[var(--line)]/40 bg-[#050505] py-8 md:py-10 px-6 md:px-12 shadow-[0_-25px_60px_#030303]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        <div>
          <strong className="text-3xl md:text-4xl font-serif font-normal text-[#f1eee8] tracking-tight">
            4<span className="text-[var(--accent)] font-light">+</span>
          </strong>
          <p className="mt-1 text-xs font-mono text-[#8f8c85]">
            years building responsive web apps
          </p>
        </div>

        <div>
          <strong className="text-3xl md:text-4xl font-serif font-normal text-[#f1eee8] tracking-tight">
            20<span className="text-[var(--accent)] font-light">+</span>
          </strong>
          <p className="mt-1 text-xs font-mono text-[#8f8c85]">
            production web projects & tools
          </p>
        </div>

        <div>
          <strong className="text-3xl md:text-4xl font-serif font-normal text-[#f1eee8] tracking-tight">
            100<span className="text-[var(--accent)] font-light">%</span>
          </strong>
          <p className="mt-1 text-xs font-mono text-[#8f8c85]">
            client satisfaction & delivery rate
          </p>
        </div>

        <div>
          <strong className="text-3xl md:text-4xl font-serif font-normal text-[#f1eee8] tracking-tight">
            10<span className="text-[var(--accent)] font-light">+</span>
          </strong>
          <p className="mt-1 text-xs font-mono text-[#8f8c85]">
            modern frameworks & tools mastered
          </p>
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right pt-2 lg:pt-0">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] hover:text-[#E5CBB0] transition-colors"
          >
            <span>THE WORK.<br />REAL-WORLD WEB IMPACT.</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
