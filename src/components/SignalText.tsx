'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface SignalTextProps {
  text: string;
  className?: string;
}

const GLYPHS = ['0', '1', '/', '·', '—', ':', '#', '$', '%'];

export default function SignalText({ text, className = '' }: SignalTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isAnimatingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  const triggerScramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const startTime = performance.now();
    const duration = 550; // Exact duration from reference

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedLength = Math.floor(text.length * progress);

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealedLength) return char;
          const randomGlyph = GLYPHS[(index + Math.floor(currentTime / 50)) % GLYPHS.length];
          return randomGlyph;
        })
        .join('');

      setDisplayText(scrambled);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        isAnimatingRef.current = false;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  }, [text]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Trigger scramble on intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerScramble();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [triggerScramble]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={triggerScramble}
      className={`inline-grid relative cursor-default select-none ${className}`}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 font-mono tracking-wider transition-all duration-200"
      >
        {displayText}
      </span>
    </span>
  );
}
