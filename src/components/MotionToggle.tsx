'use client';

import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

export default function MotionToggle() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem('motion');
      if (stored === 'off') {
        setMotionEnabled(false);
        document.documentElement.dataset.motion = 'off';
      } else {
        document.documentElement.dataset.motion = 'on';
      }
    } catch {}

    const handleExternalChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      if (typeof customEvent.detail === 'boolean') {
        setMotionEnabled(customEvent.detail);
      }
    };

    window.addEventListener('motion-change', handleExternalChange);
    return () => window.removeEventListener('motion-change', handleExternalChange);
  }, []);

  const toggleMotion = () => {
    const next = !motionEnabled;
    setMotionEnabled(next);

    try {
      sessionStorage.setItem('motion', next ? 'on' : 'off');
    } catch {}
    document.documentElement.dataset.motion = next ? 'on' : 'off';

    // Dispatch asynchronously outside React render loop
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('motion-change', { detail: next }));
    }, 0);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleMotion}
      id="motion-toggle-button"
      className="motion-toggle-floating fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase text-[#f1eee8] cursor-pointer select-none transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        backgroundColor: motionEnabled ? '#151311' : '#1c1917',
        border: motionEnabled ? '1px solid rgba(255, 140, 89, 0.45)' : '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.95), 0 0 15px rgba(0, 0, 0, 0.7)',
      }}
      aria-label={motionEnabled ? 'Motion on — click to disable' : 'Motion off — click to enable'}
      aria-pressed={motionEnabled}
    >
      {motionEnabled ? (
        <span className="flex items-center gap-[3px]" aria-hidden="true">
          <span className="w-[2.5px] h-[10px] bg-[#ff8c59] inline-block rounded-xs" />
          <span className="w-[2.5px] h-[10px] bg-[#ff8c59] inline-block rounded-xs" />
        </span>
      ) : (
        <Play className="w-2.5 h-2.5 fill-[#ff8c59] text-[#ff8c59]" aria-hidden="true" />
      )}
      <span className="font-medium text-[#dedad4]">
        MOTION <strong className={motionEnabled ? 'text-[#ff8c59]' : 'text-[#888]'}>{motionEnabled ? 'ON' : 'OFF'}</strong>
      </span>
    </button>
  );
}
