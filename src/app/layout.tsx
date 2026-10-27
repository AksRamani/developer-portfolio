import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-v2-aksramanis-projects.vercel.app'),
  title: 'Aakash Ramani | Frontend Developer & Web Developer',
  description:
    'Portfolio of Aakash Ramani — Frontend Developer with 4+ years of experience in React.js, Next.js, Redux, Node.js, Express.js, MongoDB, Material-UI, Ant Design, and Tailwind CSS.',
  keywords: [
    'Aakash Ramani',
    'Frontend Developer',
    'Web Developer',
    'React.js',
    'Next.js 16',
    'JavaScript',
    'Redux',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Shopify Hydrogen',
    'Portfolio',
  ],
  authors: [{ name: 'Aakash Ramani', url: 'https://portfolio-v2-aksramanis-projects.vercel.app' }],
  creator: 'Aakash Ramani',
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
      'Frontend Developer with 4+ years of experience in React.js, Next.js, Redux, Node.js, Express.js, MongoDB, Material-UI, Ant Design, and Tailwind CSS.',
    siteName: 'Aakash Ramani Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakash Ramani | Frontend Developer & Web Developer',
    description:
      'Frontend Developer with 4+ years of experience in React.js, Next.js, Redux, and modern web architectures.',
    creator: '@AksRamani',
  },
  robots: {
    index: true,
    follow: true,
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
              '@type': 'Person',
              name: 'Aakash Ramani',
              jobTitle: 'Frontend Developer',
              telephone: '+919725808487',
              email: 'aakash.ramani021@gmail.com',
              url: 'https://portfolio-v2-aksramanis-projects.vercel.app',
              sameAs: [
                'https://github.com/AksRamani',
                'https://www.linkedin.com/in/aakash-ramani-541321235/',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'Redux',
                'JavaScript',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Tailwind CSS',
                'Material-UI',
                'Ant Design',
                'Shopify Hydrogen',
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
