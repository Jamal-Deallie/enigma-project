import localFont from 'next/font/local';

export const stageGroteskBlack = localFont({
  src: './StageGrotesk-Black.woff',
  variable: '--heading-font',
  fallback: ['sans-serif'],
  display: 'swap',
});

export const stageGroteskMedium = localFont({
  src: './StageGrotesk-Medium.woff',
  variable: '--body-font',
  fallback: ['sans-serif'],
  display: 'swap',
});
