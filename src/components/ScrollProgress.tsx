'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const ratio = Math.min(Math.max(scrollY / totalHeight, 0), 1);
        setProgress(ratio);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 w-full h-[2.5px] z-[100] pointer-events-none origin-left bg-[#ff8c59] will-change-transform shadow-none"
      style={{
        transform: `scaleX(${progress})`,
        transition: 'transform 60ms linear',
        boxShadow: 'none',
        filter: 'none',
      }}
    />
  );
}
