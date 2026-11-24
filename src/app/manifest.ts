import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aakash Ramani | Frontend Developer Portfolio',
    short_name: 'Aakash Ramani',
    description:
      'Portfolio of Aakash Ramani — Frontend Developer specializing in React.js, Next.js, Redux, Node.js, and modern web architectures.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030303',
    theme_color: '#030303',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
