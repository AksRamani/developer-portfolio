'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, Terminal, Cpu } from 'lucide-react';
import SignalText from './SignalText';

interface TechItem {
  name: string;
  category: string;
  color: string;
  badge?: string;
  svg: React.ReactNode;
}

/* ────────────────────────────────────────────────────────────────────────────
   ROW 1: Frontend & Design Systems
   ──────────────────────────────────────────────────────────────────────────── */
const row1Technologies: TechItem[] = [
  {
    name: 'React.js',
    category: 'Frontend Core',
    color: '#61DAFB',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1.03-.95-1.51a25.1 25.1 0 0 0-3.34 0c-.33.48-.65.98-.95 1.51L8.56 12l.81 1.5c.3.53.62 1.03.95 1.51a25.1 25.1 0 0 0 3.34 0c.33-.48.65-.98.95-1.51m2.23-3.5l.29-.51a7.91 7.91 0 0 0-.29-.86c-.27.06-.57.11-.88.16l.3.51.58 1.2m-2.14-4-.26-.27c-.52.59-1.03 1.23-1.51 1.9.5.01 1 .05 1.49.11l-.23-.38c-.18-.31-.33-.62-.49-.93l.14-.07c-.43-.47-.88-.87-1.33-1.24.64-.44 1.27-.76 1.85-.95.3-.1.57-.14.79-.14.4 0 .63.15.79.5.25.55.2 1.41-.26 2.53-.06.15-.12.3-.2.45.56.12 1.05.28 1.5.46 1.84-4.76.87-7.36-.54-8.17-.63-.37-1.39-.37-2.25.08-.56.29-1.16.73-1.78 1.3.39.22.81.48 1.22.78M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.63 20c-.63.38-2.01-.2-3.6-1.7.52-.59 1.03-1.23 1.51-1.9.82-.05 1.63-.13 2.4-.36.51 2.14.32 3.61-.31 3.96m.71-5.74.29.51c.08-.28.16-.57.21-.86-.27-.06-.57-.11-.88-.16l.38.51m-1.49 3.38c.17-.31.33-.63.48-.95-.49.06-1 .1-1.49.11.48-.67.99-1.31 1.51-1.9 1.59 1.5 2.97 2.08 3.6 1.7.63-.35.82-1.82.31-3.96-.77.23-1.58.31-2.4.36a22.6 22.6 0 0 1-1.51 1.9c-.52.59-1.03 1.11-1.55 1.56.44.47.89.87 1.33 1.24-.64.44-1.27.76-1.85.95-.3.1-.57.14-.79.14-.4 0-.63-.15-.79-.5-.25-.55-.2-1.41.26-2.53a7.7 7.7 0 0 0 .2-.45c-.56-.12-1.05-.28-1.5-.46-1.84 4.76-.87 7.36.54 8.17.63.37 1.39.37 2.25-.08.56-.29 1.16-.73 1.78-1.3-.39-.22-.81-.48-1.22-.78" />
      </svg>
    ),
  },
  {
    name: 'Next.js 16',
    category: 'Full-Stack Framework',
    color: '#ffffff',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a4684.93 4684.93 0 0 0 4.735 7.17l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Type Safety',
    color: '#3178C6',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'ES6+ Architecture',
    color: '#F7DF1E',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.585-.585-.765-.63-.63-1.47-.945-2.835-.915l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.275-.81 3.51.6 4.44 1.394.93 3.435 1.14 3.705 2.01.27 1.08-.795 1.425-1.8 1.305-.75-.15-1.17-.51-1.62-1.17-.96.54-.96.54-1.8 1.02.21.48.45.69.78 1.11 1.56 1.56 5.46 1.47 6.165-.75.03-.075.225-.645.12-1.545l-.008-.03zM14.145 11.25H12.06v5.07c0 1.083.036 2.1-.044 2.41-.156.69-.714.93-1.186.78-.48-.15-.72-.465-.99-.855l-1.8 1.08c.3.63.78 1.17 1.38 1.5.9.48 2.1.6 3.36.15.81-.33 1.44-1.035 1.68-1.95.12-.48.165-.99.165-1.59V11.25z" />
      </svg>
    ),
  },
  {
    name: 'Redux Toolkit',
    category: 'State Architecture',
    color: '#764ABC',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M16.634 16.504c.87-.075 1.543-.818 1.5-1.705-.043-.884-.79-1.575-1.68-1.558h-.046c-.93.027-1.67.812-1.643 1.743.024.47.207.876.482 1.159-1.015 1.998-2.558 3.461-4.88 4.688-1.56.826-3.189 1.13-4.82.907-1.344-.178-2.391-.786-3.081-1.814-.992-1.496-1.088-3.111-.278-4.722.575-1.14 1.478-1.982 2.07-2.413a13.37 13.37 0 0 1-.352-1.655c-4.608 3.34-4.135 7.846-2.75 9.936 1.04 1.566 3.144 2.548 5.454 2.548.601 0 1.225-.066 1.847-.217 3.926-.892 6.896-3.533 8.177-6.897zm4.593-3.74c-2.413-2.83-5.966-4.387-10.014-4.387h-.524c-.289-.572-.874-.963-1.537-.963h-.046c-.93.027-1.67.812-1.643 1.743.024.92.793 1.65 1.727 1.627h.05c.695-.024 1.291-.47 1.536-1.066h.576c2.414 0 4.694.686 6.791 2.046 1.596 1.034 2.741 2.372 3.397 3.978.561 1.33.54 2.636-.056 3.741-.913 1.7-2.434 2.63-4.42 2.63-1.277 0-2.496-.384-3.143-.668-.354.314-.97.828-1.408 1.133 1.373.633 2.773.976 4.109.976 3.046 0 5.302-1.69 6.162-3.381 .903-1.835.862-4.994-1.517-7.409zm-13.864 3.563c.024.92.793 1.65 1.727 1.627h.05c.93-.027 1.67-.812 1.643-1.743-.024-.92-.793-1.65-1.727-1.627h-.05c-.064 0-.156.01-.222.027-.95-1.583-1.344-3.313-1.177-5.167.124-1.393.602-2.6 1.404-3.596.672-.821 1.965-1.218 2.802-1.26 2.414-.065 3.433 2.962 3.503 4.165.397.097 1.066.303 1.535.472-.207-4.3-3.14-6.523-5.184-6.523-1.894 0-3.637 1.377-4.335 3.412-1.006 2.775-.35 5.447 1.012 7.555-.166.24-.24.547-.23.862z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling Engine',
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Material UI',
    category: 'Design System',
    color: '#007FFF',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M0 2.475v10.39l3 1.74V7.67l6 3.48 6-3.48v3.456l-6 3.48v3.472l6 3.48L24 13.52V2.475L15 8.43 6 2.475 0 2.475zM24 2.475l-3 1.74v6.932l3-1.74V2.475z" />
      </svg>
    ),
  },
  {
    name: 'Ant Design',
    category: 'Enterprise UI',
    color: '#0170FE',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M22.845 7.964l-5.109 5.143a.566.566 0 0 1-.792 0l-5.142-5.109a.57.57 0 0 1 0-.792l5.142-5.142a.566.566 0 0 1 .792 0l5.142 5.109a.57.57 0 0 1-.033.791zm-9.734 9.702l-5.142 5.109a.566.566 0 0 1-.792 0L1.035 16.6a.57.57 0 0 1 0-.792l5.142-5.109a.566.566 0 0 1 .792 0l5.142 5.175a.539.539 0 0 1 0 .792zm-2.54-2.507l-2.636-2.636a.566.566 0 0 0-.792 0l-2.636 2.636a.566.566 0 0 0 0 .792l2.636 2.636a.566.566 0 0 0 .792 0l2.636-2.636a.566.566 0 0 0 0-.792zm13.132-4.69l-2.636-2.636a.566.566 0 0 0-.792 0l-2.636 2.636a.566.566 0 0 0 0 .792l2.636 2.636a.566.566 0 0 0 .792 0l2.636-2.636a.566.566 0 0 0 0-.792z" />
      </svg>
    ),
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   ROW 2: VIBE CODING & AI TOOLS / IDES (Highlighted AI Tier)
   ──────────────────────────────────────────────────────────────────────────── */
const vibeCodingTechnologies: TechItem[] = [
  {
    name: 'Claude Code',
    category: 'Vibe Coding & Reasoning',
    color: '#D97757',
    badge: 'AI PAIR',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.827 3.52c-.378-.894-1.576-.894-1.954 0L6.72 15.688c-.376.892.277 1.872 1.242 1.872h1.493a1.35 1.35 0 0 0 1.242-.821l1.155-2.733h3.996l1.155 2.733c.277.654.915.821 1.242.821h1.493c.965 0 1.618-.98 1.242-1.872L13.827 3.52zm-.977 4.293l1.391 3.292h-2.782l1.391-3.292z" />
      </svg>
    ),
  },
  {
    name: 'Google Antigravity',
    category: 'Agentic Coding IDE',
    color: '#4285F4',
    badge: 'AI IDE',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
      </svg>
    ),
  },
  {
    name: 'OpenAI Codex',
    category: 'Code Intelligence Engine',
    color: '#10A37F',
    badge: 'AI ENGINE',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 13.067l-2.024-1.168a.08.08 0 0 1-.038-.057V6.26a4.499 4.499 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Trae AI',
    category: 'Adaptive AI Workspace',
    color: '#00F5D4',
    badge: 'AI IDE',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zm-7 5.1l6 3.4v7.5l-6-3.4V9.3zm8 10.9v-7.5l6-3.4v7.5l-6 3.4z" />
      </svg>
    ),
  },
  {
    name: 'Kiro AI',
    category: 'Autonomous Spec Engine',
    color: '#FF3366',
    badge: 'AI TOOL',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polygon points="12 2 19 6 19 18 12 22 5 18 5 6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    name: 'Vibe Coding Flow',
    category: 'Prompt-Driven Architecture',
    color: '#ff8c59',
    badge: 'METHOD',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   ROW 3: Backend, CMS & Production Infrastructure
   ──────────────────────────────────────────────────────────────────────────── */
const row3Technologies: TechItem[] = [
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    color: '#5FA04E',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242L11.997 1.6a.27.27 0 0 0-.27 0L2.933 6.68a.282.282 0 0 0-.141.24v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.653 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.307-1.33A1.85 1.85 0 0 1 1.213 17.1V6.949c0-.648.35-1.25.922-1.57l8.795-5.082a1.93 1.93 0 0 1 1.846 0l8.794 5.082c.572.32.922.922.922 1.57V17.1c0 .648-.35 1.25-.922 1.57l-8.795 5.082c-.28.163-.6.248-.922.248h-.055z" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    category: 'REST Framework',
    color: '#ffffff',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    color: '#47A248',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
      </svg>
    ),
  },
  {
    name: 'Shopify CMS',
    category: 'E-commerce Architecture',
    color: '#7AB55C',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-.891-.887-1.198-1.195l-.504.154.009.022v.005c-.158.488-.655 2.013-.874 2.684a3.04 3.04 0 0 0-.533-.131V4.753c0-.066 0-.135-.003-.204C14.521 2.01 13.314 1.5 12.355 1.5c-.092 0-.181.008-.271.017l-.084-.1C11.584.89 11.064.641 10.465.641c-2.12 0-3.14 2.652-3.457 4.001-.828.256-1.415.437-1.489.463-.465.146-.48.16-.54.598C4.932 6.077 3.562 16.908 3.562 16.908l11.775 2.071V23.979zM12.063 5.623l-.001.004-1.437.444c.278-1.07.8-2.193 1.813-2.587.193.457.326 1.094-.375 2.139zm-1.065-3.516c.126 0 .24.033.347.09-.955.45-1.976 1.584-2.407 3.84L7.1 6.564c.409-1.593 1.547-4.457 3.898-4.457zM12.48 3.62c.13.22.238.518.3.944-.496.153-.955.296-.955.296s.345-1.024.655-1.24z" />
      </svg>
    ),
  },
  {
    name: 'Git Versioning',
    category: 'VCS & Production Flow',
    color: '#F05032',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.643-.22 1.386-.076 1.9.44a2.678 2.678 0 0 1 0 3.79 2.68 2.68 0 0 1-3.79 0c-.552-.551-.7-1.364-.396-2.043L11.57 10l-.003 6.766c.175.088.34.2.484.344a2.681 2.681 0 0 1 0 3.79 2.68 2.68 0 0 1-3.79 0 2.68 2.68 0 0 1 0-3.79c.18-.18.385-.316.604-.415V9.749a2.645 2.645 0 0 1-.604-.415 2.68 2.68 0 0 1-.396-2.995l-2.72-2.72L.454 8.251c-.604.604-.604 1.584 0 2.19l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582-.004-2.188" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    category: 'System Integration',
    color: '#ff8c59',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M7.5 4A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 4h-9zM4.5 5.5A3 3 0 0 1 7.5 2.5h9A3 3 0 0 1 19.5 5.5v13a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-13zM9 8h6v1.5H9V8zm0 3h6v1.5H9V11zm0 3h4v1.5H9V14z" />
      </svg>
    ),
  },
  {
    name: 'HTML5 Semantic',
    category: 'Accessible Markup',
    color: '#E34F26',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.541-6.028H5.745l1.399 15.77 4.84 1.441.015-.004V13.203l-.047-.014-2.651-.709-.168-2.085h-2.6l.33 3.794 5.136 1.513V9.75H8.531z" />
      </svg>
    ),
  },
  {
    name: 'CSS3 Animation',
    category: 'Visual Polish',
    color: '#1572B6',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.93-9.665-.08-.174z" />
      </svg>
    ),
  },
];

function TechCard({ tech, isSpecial }: { tech: TechItem; isSpecial?: boolean }) {
  return (
    <div
      className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-300 shrink-0 cursor-default ${
        isSpecial
          ? 'border-[#ff8c59]/35 bg-[#120f0d]/90 hover:border-[#ff8c59] hover:bg-[#1a1512] shadow-[0_4px_20px_rgba(255,140,89,0.08),inset_0_1px_0_rgba(255,140,89,0.18)]'
          : 'border-white/[0.08] bg-[#0c0b0a]/70 hover:border-[#ff8c59]/50 hover:bg-[#151311] hover:shadow-[0_8px_30px_rgba(255,140,89,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]'
      }`}
    >
      {/* Icon frame with brand tint */}
      <div
        className={`w-9 h-9 p-2 rounded-lg border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
          isSpecial
            ? 'bg-[#ff8c59]/10 border-[#ff8c59]/30'
            : 'bg-white/[0.03] border-white/[0.06]'
        }`}
        style={{ color: tech.color }}
      >
        {tech.svg}
      </div>

      {/* Label and category */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-sans font-medium text-[#f1eee8] tracking-tight group-hover:text-[#ff8c59] transition-colors whitespace-nowrap">
            {tech.name}
          </span>
          {tech.badge && (
            <span className="px-1.5 py-0.2 rounded text-[7.5px] font-mono uppercase tracking-wider bg-[#ff8c59]/15 text-[#ff8c59] border border-[#ff8c59]/35 whitespace-nowrap">
              {tech.badge}
            </span>
          )}
        </div>
        <span className="text-[8.5px] font-mono uppercase tracking-[0.12em] text-[#888] whitespace-nowrap">
          {tech.category}
        </span>
      </div>

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:bg-[#ff8c59] group-hover:scale-125 ml-1 ${
          isSpecial ? 'bg-[#ff8c59]/60' : 'bg-white/20'
        }`}
        aria-hidden="true"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
  speed = 36,
  motionEnabled,
  isSpecialRow,
}: {
  items: TechItem[];
  direction?: 'left' | 'right';
  speed?: number;
  motionEnabled: boolean;
  isSpecialRow?: boolean;
}) {
  const animClass = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';

  return (
    <div className="marquee-row relative overflow-hidden flex w-full">
      {/* Edge gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-36 z-20 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-36 z-20 bg-gradient-to-l from-[#030303] via-[#030303]/90 to-transparent" />

      {/* Track container */}
      <div
        className="marquee-track flex shrink-0 items-center gap-4 py-2"
        style={{
          animationPlayState: motionEnabled ? 'running' : 'paused',
        }}
      >
        {/* First group */}
        <div
          className={`marquee-group flex items-center gap-4 shrink-0 ${animClass}`}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: motionEnabled ? 'running' : 'paused',
          }}
        >
          {items.map((tech, i) => (
            <TechCard
              key={`grp1-${tech.name}-${i}`}
              tech={tech}
              isSpecial={isSpecialRow}
            />
          ))}
        </div>

        {/* Second group (duplicate for seamless loop) */}
        <div
          aria-hidden="true"
          className={`marquee-group flex items-center gap-4 shrink-0 ${animClass}`}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: motionEnabled ? 'running' : 'paused',
          }}
        >
          {items.map((tech, i) => (
            <TechCard
              key={`grp2-${tech.name}-${i}`}
              tech={tech}
              isSpecial={isSpecialRow}
            />
          ))}
        </div>

        {/* Third group (for ultra-wide 4K viewports) */}
        <div
          aria-hidden="true"
          className={`marquee-group flex items-center gap-4 shrink-0 ${animClass}`}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: motionEnabled ? 'running' : 'paused',
          }}
        >
          {items.map((tech, i) => (
            <TechCard
              key={`grp3-${tech.name}-${i}`}
              tech={tech}
              isSpecial={isSpecialRow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('motion');
      if (stored === 'off') {
        setMotionEnabled(false);
      } else {
        const docMotion = document.documentElement.dataset.motion;
        if (docMotion === 'off') setMotionEnabled(false);
      }
    } catch {}

    const handleMotion = (e: Event) => {
      const ce = e as CustomEvent<boolean>;
      if (typeof ce.detail === 'boolean') {
        setMotionEnabled(ce.detail);
      }
    };

    const observer = new MutationObserver(() => {
      const isOff = document.documentElement.dataset.motion === 'off';
      setMotionEnabled(!isOff);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-motion'],
    });

    window.addEventListener('motion-change', handleMotion);
    return () => {
      window.removeEventListener('motion-change', handleMotion);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="stack"
      className="tech-marquee-section relative z-10 w-full bg-[#030303] py-20 md:py-28 overflow-hidden border-t border-[var(--line)]/40"
      aria-label="Technologies and Technical Arsenal"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ff8c59_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Topline Header */}
      <div className="relative px-6 md:px-12 max-w-7xl mx-auto mb-10 md:mb-14">
        <div className="flex items-center justify-between pb-8 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#ff8c59] inline-block rounded-xs" />
            <span className="text-[#ff8c59] font-medium tracking-[0.16em]">
              <SignalText text="03 / TECHNICAL ARSENAL & VIBE CODING" />
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                motionEnabled ? 'bg-[#ff8c59] animate-pulse' : 'bg-[#555]'
              }`}
              aria-hidden="true"
            />
            <span className="font-mono text-[9px] text-[#dedad4] tracking-[0.18em]">
              {motionEnabled ? 'ACTIVE MOTION' : 'STATIC PAUSED'}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#f1eee8] leading-[1.1] tracking-[-0.03em]">
              Architected with{' '}
              <em className="text-[#f1eee8] italic font-normal">modern tools.</em>
            </h2>
            <p className="mt-3 text-sm md:text-[15px] font-sans text-[var(--muted)] max-w-xl leading-relaxed">
              Full-stack frameworks and UI systems elevated by modern vibe coding
              workflows &mdash; accelerating architecture from idea to deployment.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#888] tracking-[0.15em] shrink-0 uppercase">
            <span>HOVER TO PAUSE &middot; INTERACTIVE</span>
          </div>
        </div>

        {/* Vibe Coding Methodology Callout Banner */}
        <div className="mt-8 p-5 md:p-6 rounded-2xl border border-[#ff8c59]/25 bg-gradient-to-r from-[#17120d] via-[#100e0c] to-[#090807] shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,140,89,0.2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff8c59]/15 border border-[#ff8c59]/40 flex items-center justify-center shrink-0 text-[#ff8c59] mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ff8c59] font-semibold">
                  VIBE CODING & AGENTIC WORKFLOW
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#ff8c59]" />
                <span className="hidden sm:inline-block text-[9px] font-mono text-[#a39b93] tracking-widest uppercase">
                  SPEED OF THOUGHT
                </span>
              </div>
              <p className="mt-1.5 text-[13px] md:text-[14px] text-[#dedad4] font-sans leading-relaxed max-w-2xl">
                Engineering software with rapid iteration and creative flow &mdash; augmenting modern full-stack development using 
                <strong className="text-[#f1eee8] font-medium"> Claude</strong>, 
                <strong className="text-[#f1eee8] font-medium"> Google Antigravity</strong>, 
                <strong className="text-[#f1eee8] font-medium"> OpenAI Codex</strong>, 
                <strong className="text-[#f1eee8] font-medium"> Trae</strong>, and 
                <strong className="text-[#f1eee8] font-medium"> Kiro AI</strong> tools &amp; IDEs.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-[9px] font-mono text-[#ff8c59] uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-[#ff8c59]/30 bg-[#ff8c59]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59] animate-ping" />
            <span>AI-AUGMENTED DEV</span>
          </div>
        </div>
      </div>

      {/* Row 1: Frontend & Design Systems (Forward Marquee) */}
      <div className="mb-4 w-full">
        <MarqueeRow
          items={row1Technologies}
          direction="left"
          speed={34}
          motionEnabled={motionEnabled}
        />
      </div>

      {/* Row 2: VIBE CODING & AI TOOLS (Featured Counter-Scroll) */}
      <div className="mb-4 w-full">
        <MarqueeRow
          items={vibeCodingTechnologies}
          direction="right"
          speed={30}
          motionEnabled={motionEnabled}
          isSpecialRow={true}
        />
      </div>

      {/* Row 3: Backend, CMS & Infrastructure (Forward Marquee) */}
      <div className="w-full">
        <MarqueeRow
          items={row3Technologies}
          direction="left"
          speed={38}
          motionEnabled={motionEnabled}
        />
      </div>
    </section>
  );
}
