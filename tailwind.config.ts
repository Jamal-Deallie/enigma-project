import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      0: 'calc(0 * (100vw / var(--viewport-w)))',
      1: 'calc(4 * (100vw / var(--viewport-w)))',
      2: 'calc(8 * (100vw / var(--viewport-w)))',
      3: 'calc(12 * (100vw / var(--viewport-w)))',
      4: 'calc(16 * (100vw / var(--viewport-w)))',
      5: 'calc(20 * (100vw / var(--viewport-w)))',
      6: 'calc(24 * (100vw / var(--viewport-w)))',
      7: 'calc(28 * (100vw / var(--viewport-w)))',
      8: 'calc(32 * (100vw / var(--viewport-w)))',
      9: 'calc(36 * (100vw / var(--viewport-w)))',
      10: 'calc(40 * (100vw / var(--viewport-w)))',
      11: 'calc(44 * (100vw / var(--viewport-w)))',
      12: 'calc(48 * (100vw / var(--viewport-w)))',
      14: 'calc(56 * (100vw / var(--viewport-w)))',
      15: 'calc(60 * (100vw / var(--viewport-w)))',
      16: 'calc(64 * (100vw / var(--viewport-w)))',
      17: 'calc(68 * (100vw / var(--viewport-w)))',
      18: 'calc(72 * (100vw / var(--viewport-w)))',
      19: 'calc(76 * (100vw / var(--viewport-w)))',
      20: 'calc(80 * (100vw / var(--viewport-w)))',
      21: 'calc(84 * (100vw / var(--viewport-w)))',
      22: 'calc(88 * (100vw / var(--viewport-w)))',
      24: 'calc(96 * (100vw / var(--viewport-w)))',
      28: 'calc(112 * (100vw / var(--viewport-w)))',
      30: 'calc(120 * (100vw / var(--viewport-w)))',
      32: 'calc(128 * (100vw / var(--viewport-w)))',
      34: 'calc(136 * (100vw / var(--viewport-w)))',
      36: 'calc(144 * (100vw / var(--viewport-w)))',
      37: 'calc(148 * (100vw / var(--viewport-w)))',
      40: 'calc(160 * (100vw / var(--viewport-w)))',
      41: 'calc(164 * (100vw / var(--viewport-w)))',
      42: 'calc(168 * (100vw / var(--viewport-w)))',
      44: 'calc(176 * (100vw / var(--viewport-w)))',
      45: 'calc(180 * (100vw / var(--viewport-w)))',
      46: 'calc(184 * (100vw / var(--viewport-w)))',
      47: 'calc(188 * (100vw / var(--viewport-w)))',
      48: 'calc(192 * (100vw / var(--viewport-w)))',
      60: 'calc(240 * (100vw / var(--viewport-w)))',
      62: 'calc(248 * (100vw / var(--viewport-w)))',
      64: 'calc(256 * (100vw / var(--viewport-w)))',
      100: 'calc(400 * (100vw / var(--viewport-w)))',
    },

    extend: {
      screens: {
        lg: { min: '800px' },
        md: { max: '799.9px' },
      },
      fontFamily: {
        heading: ['var(--heading-font)'],
        body: ['var(--body-font)'],
      },
      fontSize: {
        xs: ['calc(12 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        sm: ['calc(14 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        base: ['calc(16 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        lg: ['calc(18 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        xl: ['calc(20 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        '2xl': ['calc(25 * (100vw / var(--viewport-w)))', 'var(--lh)'],
        '3xl': 'calc(31 * (100vw / var(--viewport-w)))',
        '4xl': 'calc(39 * (100vw / var(--viewport-w)))',
        '5xl': 'calc(49 * (100vw / var(--viewport-w)))',
        '6xl': 'calc(61 * (100vw / var(--viewport-w)))',
        '7xl': 'calc(76  * (100vw / var(--viewport-w)))',
        '8xl': 'calc(96 * (100vw / var(--viewport-w)))',
        '9xl': 'calc(119 * (100vw / var(--viewport-w)))',
        '10xl': 'calc(186 * (100vw / var(--viewport-w)))',
        '11xl': 'calc(159.499 * (100vw / var(--viewport-w)))',
      },
      spacing: {
        'nav-height': 'calc(var(--nav-height) * (100vw / var(--viewport-w)))',
        13: 'calc(52 * (100vw / var(--viewport-w)))',
        'screen-height':
          'calc(100vh - (var(--nav-height) * (100vw / var(--viewport-w))))',
      },
      sizes: {
        '0': '0',
        // ... add other sizes as needed
        '60': '240',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    plugin(function ({ matchUtilities, theme }) {
      // Generate utilities for width, height, margin, and padding
      matchUtilities(
        {
          'w-': value => ({
            width: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'h-': value => ({
            height: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'm-': value => ({
            margin: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'p-': value => ({
            padding: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
        },
        {
          // Specify the values to use for the utilities
          values: theme('sizes'),
        }
      );
    }),
  ],
};
export default config;
