'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Layers, Sparkles, Building2, Terminal, Users, Cpu, ShieldCheck } from 'lucide-react';
import SignalText from './SignalText';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// 1. Category-Wise Enterprise, Client & SaaS Platforms (No thumbnails/links required, in-depth architectural descriptions)
interface EnterpriseProject {
  id: string;
  number: string;
  category: string;
  type: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string;
  role: string;
}

const enterpriseProjects: EnterpriseProject[] = [
  {
    id: 'humanprompt',
    number: '01',
    category: 'AI & GENERATIVE MEDIA',
    type: 'SaaS (Software as a Service)',
    badge: 'AI SAAS PLATFORM',
    title: 'Generative AI Media Platform',
    subtitle: 'Multi-model text-to-image & video generation with credit billing & role management.',
    description:
      'An AI-powered creative synthesis platform enabling users to generate high-resolution images and videos through natural language prompts. Engineered with real-time model switching across specialized AI engines, adjustable aspect ratios, and custom visual styles. Built an end-to-end session management engine for reviewing past generations, downloading outputs, and maintaining asset history. Features a robust credit-based token ledger with tiered subscription plans, top-up checkout flows, and payment tracking, alongside an administrative control module governing granular role-based permissions, user quotas, and system usage observability.',
    highlights: [
      'Multi-Model Image & Video Gen',
      'Dynamic Aspect Ratios & Styles',
      'Credit-Based Token Billing System',
      'Admin RBAC & Session Management',
    ],
    tech: 'Next.js 14/15 · React.js · Node.js · Express · MongoDB · Tailwind CSS · Generative AI APIs · Stripe',
    role: 'Full-Stack / Frontend Engineering · Aakash Ramani',
  },
  {
    id: 'luna',
    number: '02',
    category: 'ENTERPRISE ERP & MONOREPO',
    type: 'ERP (Enterprise Resource Planning)',
    badge: 'NX MONOREPO ERP',
    title: 'Enterprise Monorepo Microfrontend ERP',
    subtitle: 'Nx monorepo orchestrating twin Admin & Partner portals with offline PWA & 8 locales.',
    description:
      'Enterprise Resource Planning microfrontend architecture built inside an Nx monorepo housing two high-performance React SPAs (Executive Admin Portal and Partner Portal). Engineered with Vite 5, TypeScript 5.4, Ant Design 5, and Tailwind CSS 3 for rapid build cycles and shared component modularity. Employs Zustand for atomic client state, React Query (v3) for resilient server caching, and react-router-dom v6 for dynamic routing. Fully localized into 8 languages via i18next, integrated with Google OAuth authentication, offline PWA caching via Workbox, Sentry telemetry, and Dockerized production deployments orchestrated via GitLab CI/CD behind Nginx.',
    highlights: [
      'Nx Monorepo (Admin & Partner SPAs)',
      '8 Languages i18next Localization',
      'Workbox PWA Offline Persistence',
      'Zustand + React Query + Docker/CI',
    ],
    tech: 'React 18 · TypeScript 5.4 · Nx Monorepo · Vite 5 · Ant Design 5 · Zustand · React Query · Tailwind CSS · Docker · GitLab CI',
    role: 'Frontend Microfrontend Architecture · Aakash Ramani',
  },
  {
    id: 'tcx',
    number: '03',
    category: 'B2B CONSULTING & FRANCHISE MARKETPLACE',
    type: 'SaaS (Software as a Service)',
    badge: 'B2B CONSULTING SAAS',
    title: 'B2B Franchise Advisory Marketplace',
    subtitle: 'Connecting franchisors with certified consultants for business expansion & advisory.',
    description:
      'A web-based B2B platform that bridges franchisors with experienced business consultants to catalyze franchise expansion. Enables franchisors to register comprehensive brand dossiers, including annual revenue, corporate addresses, operational categories, regional footprints, and legal documents. Consultants maintain verified profiles highlighting industry credentials and past advisory achievements. Features an integrated calendar and meeting scheduling module to book and conduct consulting sessions directly on-platform, backed by an authentic rating and review system ensuring transparent consultant performance scoring.',
    highlights: [
      'Franchisor Business & Legal Dossiers',
      'Consultant Profile & Category Directory',
      'Real-Time Calendar Scheduling Engine',
      'Consultant Rating & Review System',
    ],
    tech: 'React.js · NestJS · Node.js · MongoDB · Express · TypeScript · Scheduling Module · REST APIs',
    role: 'Full-Stack Engineering · Aakash Ramani',
  },
  {
    id: 'bookify',
    number: '04',
    category: 'SMART WORKPLACE & SPACE RESERVATION',
    type: 'SaaS (Software as a Service)',
    badge: 'SMART OFFICE SAAS',
    title: 'Smart Workplace & Space Reservation SaaS',
    subtitle: 'Interactive SVG floor plans, RFID desk/room booking, IoT occupancy & transit data.',
    description:
      'A white-label workplace management SaaS platform developed with React.js, Node.js, MongoDB, and Material UI, featuring hierarchical role-based control for Super Admins, Receptionists, and End Users. Designed interactive SVG-driven architectural floor plans enabling live visual reservations for hot-desks, collaborative meeting rooms, and parking spots with RFID-authenticated access. Integrated IoT occupancy sensors for live presence detection, a public transit API pulling live train schedules for commuters, and an automated eLogs incident dispatch dashboard alongside guest parking workflows and workplace newsfeeds.',
    highlights: [
      'Interactive SVG Architectural Floor Plans',
      'RFID Desk, Room & Parking Access',
      'IoT Occupancy Sensors & Live Train API',
      'Automated eLogs Alerts & Newsfeed',
    ],
    tech: 'React.js · Node.js · MongoDB · Material UI (MUI) · SVG Engine · IoT Sensor Integration · Transit API',
    role: 'Frontend & SaaS Engineering · Aakash Ramani',
  },
  {
    id: 'waterlogging',
    number: '05',
    category: 'CIVIC IOT & ENVIRONMENTAL MONITORING',
    type: 'SaaS (Software as a Service)',
    badge: 'CIVIC TELEMETRY',
    title: 'Urban Waterlogging & IoT Telemetry System',
    subtitle: 'Real-time municipal flood telemetry, IoT sensor tracking, maintenance & alert analytics.',
    description:
      'A municipal IoT monitoring platform engineered to oversee live water levels and rainfall patterns across urban centers. Provides city administrators with an administrative portal to manage multi-tiered geographic jurisdictions (States, Cities, Zones, Wards) and field-installed IoT devices with hardware IDs and location coordinates. Streams live telemetry from environmental sensors into interactive time-series charts and graphs, manages device servicing lifecycles (tracking units under maintenance or repair), and generates exportable analytical reports for flood mitigation and emergency planning.',
    highlights: [
      'Multi-Tier Spatial Hierarchy (State/City/Zone/Ward)',
      'Live IoT Sensor Water Level Telemetry',
      'Interactive Analytical Charts & Dashboards',
      'Hardware Maintenance Lifecycle Tracker',
    ],
    tech: 'React.js · IoT Telemetry Ingestion · Data Visualization Charts · REST APIs · Report Export Engine',
    role: 'Frontend Engineering · Aakash Ramani',
  },
  {
    id: 'cipher-property',
    number: '06',
    category: 'ENTERPRISE REAL-TIME COLLABORATION',
    type: 'SaaS (Software as a Service)',
    badge: 'OFFLINE-FIRST SAAS',
    title: 'Real-Time Property & Task Orchestration Platform',
    subtitle: 'Offline-first IndexedDB architecture with real-time WebSocket chat & task management.',
    description:
      'A comprehensive property and facility management platform engineered for real estate and facility operations. Features a modular task management suite supporting priority tagging, dynamic status transitions, task assignments, checklists, comments, and attachments. Built a local data storage engine utilizing browser IndexedDB to persist and retrieve operational data in real-time without continuous server roundtrips, synchronized via WebSockets for instantaneous multi-user collaboration, live team chat, and audio calling.',
    highlights: [
      'Offline-First IndexedDB Local Storage',
      'WebSocket Real-Time Multi-User Sync',
      'Comprehensive Task & Checklist Engine',
      'Embedded Team Chat & Calling Modules',
    ],
    tech: 'React.js · IndexedDB · WebSockets · Redux · Advanced JavaScript · GitLab',
    role: 'Frontend Engineering · Real Estate Collaboration Platform',
  },
  {
    id: 'hopiant-store',
    number: '07',
    category: 'HEADLESS COMMERCE & PERFORMANCE',
    type: 'E-Commerce Platform',
    badge: 'HEADLESS HYDROGEN',
    title: 'Headless E-Commerce Storefront Platform',
    subtitle: 'Shopify Hydrogen SSR storefront for organization products with GraphQL API.',
    description:
      'Engineered a headless eCommerce storefront for home and office organization products utilizing Shopify Hydrogen and React. Built high-speed server-rendered product catalogs, collection filtering, customer testimonial showcases, and dedicated landing pages (Home, About, Contact). Leveraged the Shopify GraphQL Storefront API to ensure sub-second page loads, fluid routing, and optimal Conversion Rate Optimization (CRO).',
    highlights: [
      'Shopify Hydrogen Server-Side Rendering',
      'GraphQL Storefront API Integration',
      'High-Speed Conversion-Optimized Pages',
      'Custom Catalog & Testimonial Architecture',
    ],
    tech: 'Shopify Hydrogen · React.js · GraphQL · Tailwind CSS · GitHub',
    role: 'Frontend Engineering · Headless E-Commerce',
  },
  {
    id: 'hostel-booking',
    number: '08',
    category: 'HOSPITALITY & ACCOMMODATION',
    type: 'SaaS / Marketplace Platform',
    badge: 'GEO & RESERVATION SAAS',
    title: 'Hostel Booking & Accommodation Discovery Platform',
    subtitle: 'Location-based geospatial search, interactive map exploration & Razorpay payment flows.',
    description:
      'Engineered the complete frontend architecture for a modern hostel and student living reservation platform utilizing Next.js and Tailwind CSS. Implemented location-based geospatial search with synchronized dual-view browsing (interactive map markers and synchronized listing cards). Built intuitive room selection, real-time availability checks, and booking management flows. Developed custom-crafted, lightweight image carousels and full-screen lightbox image viewers with touch/drag support for smooth room tours without bulky dependencies. Seamlessly integrated Razorpay payment gateway SDK for instant, secure checkout transactions and payment confirmations across responsive mobile and desktop viewports.',
    highlights: [
      'Location Search & Interactive Map Sync',
      'Room Selection & Reservation Management',
      'Custom Lightweight Slider & Lightbox Viewer',
      'Razorpay Payment Gateway Integration',
    ],
    tech: 'Next.js · React.js · Tailwind CSS · Geospatial Maps API · Razorpay SDK · Custom UI Sliders · Responsive UX',
    role: 'Frontend Engineering · Aakash Ramani',
  },
];

// 2. Personal Learning & Internship Projects (With screenshots, live links, and code repositories)
interface PersonalProject {
  number: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  tech: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const personalProjects: PersonalProject[] = [
  {
    number: '01',
    category: 'DOCUMENT INTELLIGENCE & PRODUCTIVITY',
    badge: 'ADVANCED CANVAS MODULE',
    title: 'SnapAnnotate PDF',
    subtitle: 'Interactive PDF annotation engine with vector coordinate precision.',
    description:
      'Interactive PDF annotation module engineered with HTML5 Canvas and React. Supports drag-and-drop rectangles and text labels, full state history (undo, redo, delete), and serialized normalized coordinate export for backend document rendering.',
    metrics: 'Drag-and-Drop Annotations · Full Undo/Redo · Precise Coordinate Mapping',
    tech: 'React.js · Canvas API · JavaScript · HTML5 · CSS3',
    image: '/images/snapannotate-pdf.png',
    liveUrl: 'https://portfolio-v2-aksramanis-projects.vercel.app/',
    githubUrl: 'https://github.com/AksRamani',
  },
  {
    number: '02',
    category: 'REAL-TIME WEATHER FORECASTING',
    badge: 'LIVE WEB APPLICATION',
    title: 'Sky-Cast Weather Intelligence',
    subtitle: 'Global meteorological insights with instant atmospheric forecasts.',
    description:
      'Intuitive weather web application allowing users to search any city globally or detect current device geolocation to retrieve real-time atmospheric metrics, humidity levels, wind conditions, and multi-day meteorological forecasts.',
    metrics: 'Global City Search · Geolocation Detection · OpenWeather REST API',
    tech: 'React.js · REST APIs · Tailwind CSS · Responsive Design',
    image: '/images/skycast.png',
    liveUrl: 'https://sky-cast-alpha.vercel.app/',
    githubUrl: 'https://github.com/AksRamani',
  },
  {
    number: '03',
    category: 'CLIENT-SIDE UTILITIES',
    badge: 'UTILITY APPLICATION',
    title: 'Dynamic QR Code Generator',
    subtitle: 'Customizable URL encoding with real-time vector color control.',
    description:
      'Client-side QR code generator enabling users to convert any URL or text into high-resolution QR codes, customize color palettes with live preview, and download instantly as high-resolution PNG.',
    metrics: 'Custom Color Themes · Instant PNG Download · qrcode.react integration',
    tech: 'React.js · qrcode.react · HTML5 · CSS3 · JavaScript',
    image: '/images/qr-generator.png',
    liveUrl: 'https://qr-generator-aksramanis-projects.vercel.app',
    githubUrl: 'https://github.com/AksRamani',
  },
  {
    number: '04',
    category: 'INTERACTIVE CATALOGS & GAMING',
    badge: 'CATALOG EXPLORER',
    title: 'Game Store Explorer',
    subtitle: 'Rich catalog discovery exploring gaming categories and media.',
    description:
      'A responsive gaming storefront experience featuring category-wise filtering, game details inspection, responsive rating systems, and interactive list and grid views to enhance user browsing experience.',
    metrics: 'Category-wise Filtering · List & Grid Views · Redux Global State',
    tech: 'React.js · Redux · Tailwind CSS · Component Architecture',
    image: '/images/gamestore.png',
    liveUrl: 'https://portfolio-v2-aksramanis-projects.vercel.app/',
    githubUrl: 'https://github.com/AksRamani',
  },
];

type ActiveTab = 'all' | 'enterprise' | 'personal';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');

  return (
    <section id="projects" className="relative z-10 w-full bg-[#030303] py-28 md:py-36 px-6 md:px-12 border-t border-[var(--line)]/40">
      {/* Chapter Topline */}
      <div className="flex items-center justify-between pb-14 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d9d9d] border-b border-[var(--line)]/30">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block" />
          <span className="text-[var(--accent)] font-medium tracking-[0.16em]">
            <SignalText text="02 / SELECTED WORK" />
          </span>
        </div>
        <span className="hidden sm:inline-block tracking-[0.18em]">
          ENGINEERED ARCHITECTURES &amp; LIVE PRODUCTS
        </span>
      </div>

      {/* Selected Heading */}
      <div className="pt-16 pb-12 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-light text-[#f1eee8] leading-[1.08] tracking-[-0.035em]">
          Ideas are a start.
          <br />
          <em className="text-[#f1eee8] italic font-normal">This is the work.</em>
        </h2>
        <p className="mt-6 text-[16px] md:text-[18px] text-[var(--muted)] leading-relaxed font-light">
          A comprehensive portfolio divided into enterprise-grade SaaS and ERP platforms engineered for production, alongside personal learning and internship implementations.
        </p>
      </div>

      {/* Filter Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pb-8 md:pb-12 border-b border-[var(--line)]/40 relative z-20">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer min-h-[42px] touch-manipulation select-none ${
            activeTab === 'all'
              ? 'bg-[var(--accent)] text-[#030303] font-semibold shadow-[0_0_15px_rgba(255,140,89,0.3)]'
              : 'border border-[var(--line)]/60 text-[var(--muted)] hover:border-[#E5CBB0] hover:text-[#E5CBB0] active:scale-95'
          }`}
          aria-pressed={activeTab === 'all'}
        >
          <Layers className="w-3.5 h-3.5 shrink-0 pointer-events-none" />
          <span className="pointer-events-none hidden sm:inline">All Projects ({enterpriseProjects.length + personalProjects.length})</span>
          <span className="pointer-events-none sm:hidden">All ({enterpriseProjects.length + personalProjects.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('enterprise')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer min-h-[42px] touch-manipulation select-none ${
            activeTab === 'enterprise'
              ? 'bg-[var(--accent)] text-[#030303] font-semibold shadow-[0_0_15px_rgba(255,140,89,0.3)]'
              : 'border border-[var(--line)]/60 text-[var(--muted)] hover:border-[#E5CBB0] hover:text-[#E5CBB0] active:scale-95'
          }`}
          aria-pressed={activeTab === 'enterprise'}
        >
          <Building2 className="w-3.5 h-3.5 shrink-0 pointer-events-none" />
          <span className="pointer-events-none hidden sm:inline">Enterprise &amp; SaaS Platforms ({enterpriseProjects.length})</span>
          <span className="pointer-events-none sm:hidden">Enterprise &amp; SaaS ({enterpriseProjects.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('personal')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer min-h-[42px] touch-manipulation select-none ${
            activeTab === 'personal'
              ? 'bg-[var(--accent)] text-[#030303] font-semibold shadow-[0_0_15px_rgba(255,140,89,0.3)]'
              : 'border border-[var(--line)]/60 text-[var(--muted)] hover:border-[#E5CBB0] hover:text-[#E5CBB0] active:scale-95'
          }`}
          aria-pressed={activeTab === 'personal'}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 pointer-events-none" />
          <span className="pointer-events-none hidden sm:inline">Personal &amp; Internship Projects ({personalProjects.length})</span>
          <span className="pointer-events-none sm:hidden">Personal &amp; Web Apps ({personalProjects.length})</span>
        </button>
      </div>

      {/* SECTION 1: Category-Wise Enterprise & SaaS Platforms */}
      {(activeTab === 'all' || activeTab === 'enterprise') && (
        <div className="pt-16 space-y-10">
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]/30">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[var(--accent)]">
                SECTION A / CATEGORY-WISE SYSTEMS
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#f1eee8] font-normal">
                Enterprise &amp; SaaS Platforms
              </h3>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#8a857e] tracking-widest uppercase">
              DEEP ARCHITECTURES · ZERO NOISE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {enterpriseProjects.map((p) => (
              <article
                key={p.id}
                className="group relative rounded-2xl border border-[var(--line)]/50 bg-[#090807]/80 p-7 md:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#E5CBB0]/60 hover:shadow-[0_10px_40px_rgba(0,0,0,0.85)] hover:bg-[#0c0a09]"
              >
                <div className="space-y-5">
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.2em] uppercase">
                    <span className="text-[var(--accent)] bg-[#ff8c59]/10 border border-[#ff8c59]/30 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-[#7a756f]">{p.number} / 08</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
                      <span className="text-[10px] font-mono text-[#999] uppercase tracking-wider">
                        {p.type}
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl md:text-[28px] text-[#f1eee8] font-normal group-hover:text-[#E5CBB0] transition-colors leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs font-mono text-[#d6c4b2] leading-relaxed">
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Deep Description */}
                  <p className="text-[14px] md:text-[14.5px] text-[var(--ink-muted)] leading-[1.8] font-light pt-1">
                    {p.description}
                  </p>

                  {/* Key Highlights Pill Grid */}
                  <div className="pt-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#7a756f] block mb-2.5">
                      Key Capabilities &amp; Architecture:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {p.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono text-[#dedad4] bg-[#161413] border border-[var(--line)]/40 px-2.5 py-1 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack & Role */}
                <div className="pt-6 mt-6 border-t border-[var(--line)]/40 space-y-3">
                  <div className="flex items-start gap-2 text-[11px] font-mono text-[#8a857e]">
                    <Terminal className="w-3.5 h-3.5 mt-0.5 text-[var(--accent)] shrink-0" />
                    <span className="text-[#b5afa6]">{p.tech}</span>
                  </div>

                  <div className="pt-2 border-t border-[var(--line)]/20 text-[10px] font-mono text-[#7a756f]">
                    <span className="text-[var(--accent)]">{p.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Personal Learning & Internship Projects */}
      {(activeTab === 'all' || activeTab === 'personal') && (
        <div className={`space-y-10 ${activeTab === 'all' ? 'pt-24' : 'pt-16'}`}>
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]/30">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[var(--accent)]">
                SECTION B / PERSONAL &amp; INTERNSHIP PROJECTS
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#f1eee8] font-normal">
                Personal Learning &amp; Web Applications
              </h3>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#8a857e] tracking-widest uppercase">
              INTERACTIVE DEMOS · CODE REPOSITORIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {personalProjects.map((p, idx) => (
              <article
                key={idx}
                className="group relative rounded-2xl border border-[var(--line)]/50 bg-[#090807]/70 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#E5CBB0]/60 hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Image Preview Container */}
                  <div className="relative w-full h-[220px] md:h-[260px] rounded-xl overflow-hidden mb-6 bg-[#121110] border border-[var(--line)]/30">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${p.image.includes("qr-generator") ? "object-contain object-center p-3" : "object-cover object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest uppercase bg-[#030303]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--line)]/50 text-[var(--accent)]">
                      {p.badge}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#a59d95]">
                      {p.number} / {p.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#f1eee8] font-normal group-hover:text-[#E5CBB0] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)]">{p.subtitle}</p>
                    <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed font-light pt-2">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Tech & Links Footer */}
                <div className="pt-6 mt-6 border-t border-[var(--line)]/40 space-y-4">
                  <p className="text-[11px] font-mono text-[#8a857e] uppercase tracking-wider">
                    {p.tech}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[var(--accent)] hover:text-[#E5CBB0] transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#a09a91] hover:text-[#E5CBB0] transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-[#777]">
                      {p.number} / 0{personalProjects.length}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
