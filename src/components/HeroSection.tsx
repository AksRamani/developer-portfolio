'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalText from './SignalText';
import dynamic from 'next/dynamic';

const HeroParticleScene = dynamic(() => import('./HeroParticleScene'), { ssr: false });

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  const [motionEnabled, setMotionEnabled] = useState(true);

  // Initialize and sync motion preference
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('motion');
      if (stored === 'off') {
        setMotionEnabled(false);
        document.documentElement.dataset.motion = 'off';
      } else {
        document.documentElement.dataset.motion = 'on';
      }
    } catch {}

    const handleMotion = (e: Event) => {
      const ce = e as CustomEvent<boolean>;
      if (typeof ce.detail === 'boolean') {
        setTimeout(() => setMotionEnabled(ce.detail), 0);
      }
    };
    window.addEventListener('motion-change', handleMotion);
    return () => window.removeEventListener('motion-change', handleMotion);
  }, []);

  const toggleMotion = () => {
    setMotionEnabled((prev) => {
      const next = !prev;
      try {
        sessionStorage.setItem('motion', next ? 'on' : 'off');
      } catch {}
      document.documentElement.dataset.motion = next ? 'on' : 'off';
      return next;
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Headline masked reveal with blur-to-focus
      gsap.fromTo(
        '.hero .reveal-line',
        {
          yPercent: 105,
          filter: 'blur(5px)',
          opacity: 0,
        },
        {
          yPercent: 0,
          filter: 'blur(0px)',
          opacity: 1,
          duration: 1.25,
          stagger: 0.12,
          ease: 'power4.out',
          clearProps: 'transform,filter',
        }
      );

      // 2. Description paragraph focus entrance
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          {
            y: 8,
            filter: 'blur(3px)',
            opacity: 0,
          },
          {
            y: 0,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 0.75,
            delay: 0.15,
            ease: 'power2.out',
            clearProps: 'transform,filter,opacity',
          }
        );
      }

      // 3. Hero content scroll parallax fade
      if (contentRef.current && heroRef.current) {
        gsap.to(contentRef.current, {
          y: -65,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: '25% top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      return () => {};
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="hero select-none">
      {/* Full Viewport Width Interactive 3D Particle Scene */}
      <HeroParticleScene motionEnabled={motionEnabled} />

      {/* Background Architectural Grid Lines */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Hero Topline metadata */}
      <div className="hero-topline">
        <span>
          <i className="live-dot" aria-hidden="true" />
          <span>ENGINEER. WEB DEVELOPER. BUILDER.</span>
        </span>
        <span>BASED IN INDIA · THINKING BEYOND</span>
      </div>

      {/* Portrait Backdrop matching exact Sarthak layout */}
      <div
        id="hero-portrait-anchor"
        ref={portraitRef}
        className="artifact-fallback pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/aakash-bw-v2.jpg"
          alt="Aakash Ramani Portrait"
          fill
          priority
          sizes="(max-width: 700px) 90vw, 650px"
          className="object-contain"
        />
      </div>

      {/* Left Floating Side Note */}
      <div className="hero-side-note" aria-label="Profile coordinate note">
        <span>01 / PRESENCE</span>
        <span>
          WEB DEVELOPMENT
          <br />
          REACT & FULL-STACK
          <br />
          HUMAN CONNECTION
        </span>
      </div>

      {/* Hero Center Main Content */}
      <div ref={contentRef} className="hero-content">
        {/* Kicker Tag with Signal Scramble */}
        <span className="hero-kicker">
          <SignalText text="WELCOME TO MY WORLD · WEB DEVELOPER" />
        </span>

        {/* Hero Headline with Masked Reveal */}
        <h1 className="display-glitch">
          <span className="line-mask pr-8 -mr-8">
            <span ref={headlineRef} className="reveal-line pr-6">
              Aakash <em className="inline-block pr-4">Ramani</em>
            </span>
          </span>
        </h1>

        {/* Subtitle Description with Actions nested inside as per Sarthak markup */}
        <div className="hero-description">
          <p ref={descRef}>
            I build products, teach developers,
            <br className="desktop-break" /> and help education businesses grow.
          </p>

          <div className="hero-actions">
            <Link href="#work" className="pill-link">
              <span>
                <SignalText text="Explore my work" />
              </span>
              <ArrowDown className="w-3.5 h-3.5" />
            </Link>

            <Link href="#contact" className="text-link">
              <span>
                <SignalText text="Start a conversation" />
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Information Bar */}
      <div className="hero-bottom">
        <Link href="#about">
          <span className="scroll-line" />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </Link>
        <span>CRAFTING CODE &amp; EXPERIENCES FOR 4+ YEARS</span>
        <span className="hero-edition">AN ONGOING EXPLORATION ↗</span>
      </div>

      </section>
  );
}
