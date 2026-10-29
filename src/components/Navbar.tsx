'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Stack', href: '#stack', id: 'stack' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  // Scroll direction detection (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      // Always show near top
      if (currentScrollY < 320) {
        setActiveSection('');
        setVisible(true);
      } else if (currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN -> Hide
        setVisible(false);
        setMobileOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP -> Show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer to automatically update active nav item on scroll
  useEffect(() => {
    const sectionIds = ['projects', 'about', 'experience', 'stack', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'projects' || id === 'about' || id === 'experience' || id === 'stack') {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <header
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 pointer-events-none transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"}`}
    >
      <div className="max-w-[1120px] mx-auto pointer-events-auto">
        {/* Floating Capsule Bar */}
        <div
          className={`flex items-center justify-between h-[60px] sm:h-[68px] px-4 sm:px-6 md:px-8 rounded-[18px] sm:rounded-[22px] border transition-all duration-300 ${
            scrolled
              ? 'bg-[#121110]/95 backdrop-blur-2xl border-[#e7e1d5]/25 shadow-[0_16px_45px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)]'
              : 'bg-[#141312]/85 backdrop-blur-xl border-[#e7e1d5]/15 shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]'
          }`}
        >
          {/* Left: Brand Wordmark in Serif Font */}
          <Link
            href="#top"
            onClick={() => setActiveSection('projects')}
            className="group flex items-center gap-1.5 font-serif text-[20px] sm:text-[23px] md:text-[26px] tracking-tight text-[#f1eee8] hover:text-[#E5CBB0] transition-colors select-none"
          >
            <span>Aakash</span> <span className="italic font-normal">Ramani</span>
          </Link>

          {/* Right Group: Menu Links + Gradient Let's Talk Button aligned to the right side */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-1.5 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative text-[13px] font-sans px-3.5 py-1.5 rounded-[10px] transition-all duration-200 flex flex-col items-center justify-center ${
                      isActive
                        ? 'bg-[#23211f] text-[#f1eee8] font-medium pb-2.5'
                        : 'text-[#c9c2b8] hover:text-[#E5CBB0] hover:bg-[#b99b73]/10 pb-1.5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[3px] w-[3px] h-[3px] rounded-full bg-[#ff8c59]"
                        style={{ boxShadow: 'none', filter: 'none' }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Gradient Let's Talk Button */}
            <Link
              href="#contact"
              className="nav-contact group flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 hover:border-[#E5CBB0] bg-gradient-to-b from-[#2a2723] to-[#151412] hover:bg-[#E5CBB0] hover:from-[#E5CBB0] hover:to-[#E5CBB0] text-[13px] font-sans font-medium transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.4)]"
            >
              <span className="nav-contact-text">Let&apos;s talk</span>
              <ArrowUpRight className="nav-contact-icon w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#f1eee8] p-2 focus:outline-none cursor-pointer touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2.5 rounded-2xl bg-[#11100f]/95 backdrop-blur-2xl border border-[#e7e1d5]/20 p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileOpen(false);
                  }}
                  className={`font-serif text-xl sm:text-2xl py-2 border-b border-[var(--line)]/40 flex items-center justify-between ${
                    isActive ? 'text-[#ff8c59]' : 'text-[#f1eee8] hover:text-[#E5CBB0]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {item.label}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#ff8c59] inline-block" />
                    )}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)]" />
                </Link>
              );
            })}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="nav-contact-mobile mt-2 flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8c59] to-[#ff7536] text-[#030303] text-sm font-medium touch-manipulation cursor-pointer"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
