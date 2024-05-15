'use client';

import { RefObject, useRef } from 'react';

import { gsap, useGSAP } from '@/libs/gsap';

export const useHeroAnime = (): RefObject<HTMLDivElement> => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const container = heroRef.current;

        const tl = gsap.timeline({
          ease: 'expo.out',
        });

        const layers = gsap.utils.toArray('.hero-layers', container);

        const animationSettings = {
          duration: 1.2, // Duration of the animation
          ease: 'power3.inOut', // Type of easing to use for the animation transition
          delayFactor: 0.5, // Delay between each item's animation
        };

        tl.to(container, { autoAlpha: 1, duration: 0.15 })
        .fromTo(
          layers,
          {
            // Initial animation state
            opacity: 1, // Fully visible
            'clip-path': 'polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)', // CSS clip-path shape
          },
          {
            // Animation target state
            stagger: animationSettings.delayFactor, // Time between each item's animation
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Target shape of the clip-path
          },
          0
        );
      });
    },
    { scope: heroRef }
  );

  return heroRef;
};
