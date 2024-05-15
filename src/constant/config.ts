import { Metadata } from 'next';

export const siteConfig = {
  title: 'The Enigma Project - Discover the art of media production',
  description:
    'Discover the art of media production with The Enigma Project, your Dallas-based experts in creating immersive video and audio experiences. From dynamic commercials to comprehensive convention coverage, our dedicated team delivers high-quality content that engages and inspires. Partner with Enigma Projects for media solutions that make an impact.',
  url: 'https://enigma-project.vercel.app',
  mainLinks: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },

    {
      title: 'Projects',
      href: '/projects',
    },

    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  supportLinks: [
    {
      title: 'Privacy Policy',
      href: '/privacypolicy',
    },
    {
      title: 'Faqs',
      href: '/faqs',
    },
    {
      title: 'Sitemap',
      href: '/sitemap',
    },
  ],
};

export const METADATA: Metadata = {
  title: {
    default: 'The Enigma Project | Discover the art of media production',
    template: ' %s - The Enigma Project | Discover the art of media production',
  },
  description:
    'Discover the art of media production with The Enigma Project, your Dallas-based experts in creating immersive video and audio experiences. From dynamic commercials to comprehensive convention coverage, our dedicated team delivers high-quality content that engages and inspires. Partner with Enigma Projects for media solutions that make an impact ',
  category: 'Portfolio',
  metadataBase: new URL('https://enigma-project.vercel.app/'),
  creator: 'Jamal DeAllie',
  publisher: 'Jamal DeAllie',
  authors: { name: 'Jamal DeAllie', url: 'https://enigma-project.vercel.app/' },
  icons: '/favicon-32x32.png',
  alternates: { canonical: '/' },
  keywords: [
    'Media production Dallas',
    'Dallas video production',
    'Audio recording services',
    'Commercial video creation',
    'Convention recording company',
    'Corporate media solutions',
    'Event videography services',
    'Professional audiovisual production',
    'Multimedia content development',
    'Creative media agency Dallas',
  ],
  openGraph: {
    type: 'website',
    countryName: 'United States',
    emails: 'jamal.deallie@copilot-studios.com',
    title: 'The Enigma Project | Discover the art of media production',
    url: 'https://enigma-project.vercel.app/',
    description:
      'Discover the art of media production with The Enigma Project, your Dallas-based experts in creating immersive video and audio experiences. From dynamic commercials to comprehensive convention coverage, our dedicated team delivers high-quality content that engages and inspires. Partner with Enigma Projects for media solutions that make an impact.',
    // images: '/images/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Enigma Project | Discover the art of media production',
    description:
      'Discover the art of media production with The Enigma Project, your Dallas-based experts in creating immersive video and audio experiences. From dynamic commercials to comprehensive convention coverage, our dedicated team delivers high-quality content that engages and inspires. Partner with Enigma Projects for media solutions that make an impact.',
    creator: 'Jamal DeAllie',
    // images: '/images/',
    site: 'https://enigma-project.vercel.app/',
  },
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin',
};
