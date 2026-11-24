import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const viewport: Viewport = {
  themeColor: '#030303',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-v2-aksramanis-projects.vercel.app'),
  title: 'Aakash Ramani | Frontend Developer & Web Developer',
  description:
    'Portfolio of Aakash Ramani — Frontend Developer & Web Developer based in India with 4+ years of experience in React.js, Next.js, Redux, Node.js, and modern web architectures. Available for remote and global opportunities.',
  keywords: [
    // Identity, Roles & Hiring Intent
    'Aakash Ramani',
    'Frontend Developer',
    'Senior Frontend Developer',
    'Frontend Engineer',
    'Senior React Engineer',
    'Web Developer',
    'Full Stack Developer India',
    'Full Stack JavaScript Developer',
    'JavaScript Engineer',
    'TypeScript Developer',
    'UI/UX Developer',
    'Frontend Specialist',
    'React Consultant',
    'Frontend Developer India',
    'Frontend Developer Ahmedabad',
    'Frontend Developer Gujarat',
    'React Developer India',
    'Remote Frontend Developer',
    'Freelance Frontend Developer',
    'Hire Frontend Developer',
    'Hire React Developer',
    'Hire Next.js Developer',
    'Hire Web Developer India',

    // Core Tech Stack & Libraries
    'React.js',
    'React 19',
    'Next.js',
    'Next.js 16',
    'Redux',
    'Redux Toolkit',
    'Zustand',
    'Context API',
    'TanStack Query',
    'React Query',
    'Tailwind CSS',
    'Tailwind CSS v4',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'GraphQL',
    'WebSockets',
    'IndexedDB Offline-First',
    'HTML5 Semantic Markup',
    'CSS3 Animations',
    'ES6+ JavaScript',
    'Vite',
    'Webpack',
    'Turbopack',

    // Architectural Paradigms & Best Practices
    'Single Page Applications (SPA)',
    'Server-Side Rendering (SSR)',
    'Static Site Generation (SSG)',
    'Incremental Static Regeneration (ISR)',
    'Responsive Web Design',
    'Mobile-First Design',
    'Cross-Browser Compatibility',
    'Component-Driven Development',
    'Design Systems Engineering',
    'Core Web Vitals Optimization',
    'Web Performance Optimization',

    // Specialized Domains & Project Verticals
    'Chrome Extension Developer',
    'Manifest V3 Extension',
    'Browser Extension Development',
    'Chrome Storage API',
    'Isolated Shadow DOM',
    'Shopify Hydrogen',
    'Headless E-Commerce',
    'Microfrontend Architecture',
    'Nx Monorepo',
    'Enterprise ERP Development',
    'SaaS Product Engineering',
    'Trading Dashboard UI',
    'Fintech UI Engineering',
    'Paper Trading Web Extension',
    'Kanban Task Management App',
    'Interactive Data Tables',
    'Drag and Drop UI',

    // UI Frameworks, Motion & Design
    'GSAP ScrollTrigger',
    'Three.js 3D Particles',
    'Glassmorphism UI Design',
    'Material UI',
    'Ant Design',
    'Shadcn UI',
    'Vibe Coding',
    'AI-Augmented Software Development',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Aakash Ramani', url: 'https://portfolio-v2-aksramanis-projects.vercel.app' }],
  creator: 'Aakash Ramani',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://portfolio-v2-aksramanis-projects.vercel.app',
    title: 'Aakash Ramani | Frontend Developer & Web Developer',
    description:
      'Frontend Developer & Web Developer based in India with 4+ years of experience in React.js, Next.js, Redux, Node.js, and modern web architectures. Available for remote and global opportunities.',
    siteName: 'Aakash Ramani Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aakash Ramani — Frontend Developer & Web Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakash Ramani | Frontend Developer & Web Developer',
    description:
      'Frontend Developer based in India with 4+ years of experience in React.js, Next.js, Redux, and modern web architectures. Available for remote and global opportunities.',
    creator: '@AksRamani',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
        {/* Structured JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://portfolio-v2-aksramanis-projects.vercel.app/#person',
                  name: 'Aakash Ramani',
                  jobTitle: 'Frontend Developer & Web Developer',
                  telephone: '+919725808487',
                  email: 'aakash.ramani021@gmail.com',
                  url: 'https://portfolio-v2-aksramanis-projects.vercel.app',
                  image: 'https://portfolio-v2-aksramanis-projects.vercel.app/images/og-image.png',
                  homeLocation: {
                    '@type': 'Place',
                    name: 'India',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'IN',
                  },
                  sameAs: [
                    'https://github.com/AksRamani',
                    'https://www.linkedin.com/in/aakash-ramani-541321235/',
                  ],
                  knowsAbout: [
                    'React.js',
                    'Next.js',
                    'TypeScript',
                    'JavaScript',
                    'Redux & Redux Toolkit',
                    'Zustand',
                    'Tailwind CSS',
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'REST APIs & WebSockets',
                    'GraphQL',
                    'Chrome Extension Development (Manifest V3)',
                    'Shopify Hydrogen & Headless Commerce',
                    'Microfrontend Architecture & Nx Monorepo',
                    'Trading Dashboard & Fintech UI Engineering',
                    'Web Performance & Core Web Vitals',
                    'GSAP Animation & Interactive UI',
                    'Material UI & Ant Design',
                    'Full Stack Web Development',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://portfolio-v2-aksramanis-projects.vercel.app/#website',
                  url: 'https://portfolio-v2-aksramanis-projects.vercel.app',
                  name: 'Aakash Ramani Portfolio',
                  description:
                    'Portfolio of Aakash Ramani — Frontend Developer specializing in React.js, Next.js, and modern web applications.',
                  publisher: {
                    '@id': 'https://portfolio-v2-aksramanis-projects.vercel.app/#person',
                  },
                  inLanguage: 'en-IN',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#030303] text-[#f1eee8] antialiased selection:bg-[#ff8c59] selection:text-[#030303]">
        <SmoothScroll>
          <div className="scene-backdrop" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
