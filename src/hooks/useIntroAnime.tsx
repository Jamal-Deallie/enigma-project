'use client';

import { gsap, useGSAP, SplitText } from '@/libs/gsap';
import { RefObject, useRef } from 'react';

export const useIntroAnime = (): RefObject<HTMLDivElement> => {
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      if (!introRef.current) return;
      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const splits = new SplitText('.split-item', {
          type: 'words',
          tag: 'span',
        });

        const splitParent = new SplitText('.split-item', {
          type: 'lines',
          tag: 'span',
        });

        const container = introRef.current;
        if (!splits.words) return;
        const upcomingWordsTotal = splits.words.length;

        gsap.set(splitParent.lines, {
          overflow: 'hidden',
        });

        const tl = gsap.timeline({
          ease: 'expo.out',
          scrollTrigger: {
            trigger: container,
            start: 'clamp(20% center)',
            markers: true,
          },
        });
        tl.fromTo(
          splits.words,
          {
            willChange: 'transform, opacity',
            transformOrigin: pos =>
              pos <= upcomingWordsTotal / 2 ? '100% 100%' : '0% 100%',
            opacity: 0,
            yPercent: 100,
            rotation: pos => (pos <= upcomingWordsTotal / 2 ? -3 : 3),
          },
          {
            duration: 1.2,
            ease: 'power4.out',
            opacity: 1,
            yPercent: 0,
            rotation: 0,
            stagger: {
              each: 0.045,
              from: 'center',
            },
          }
        ).fromTo(
          '.desc-target',
          { opacity: 0 },
          {
            duration: 1.2,
            opacity: 1,
            ease: 'slow.out',
          },
          '>-1.00'
        );
      });
    },
    { scope: introRef }
  );

  return introRef;
};
