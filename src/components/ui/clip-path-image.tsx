'use client';

import { useRef } from 'react';
import { useGSAP, gsap, CustomEase } from '@/libs/gsap';
import Image from 'next/image';
import { cn } from '@/utils/cn';

type ImageProps = {
  duration?: number;
  src: string;
  alt: string;
  start?: string;
  end?: string;
  className?: string;
  id?: string;
  direction:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'full'
    | 'midX'
    | 'midY'
    | 'center';
};

const ClipPathImage = ({
  duration = 2,
  src,
  alt,
  className,
  direction,
  id = 'clipPathImg',
}: ImageProps) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      gsap.registerPlugin(CustomEase);
      function getDirection(key: string) {
        switch (key) {
          case 'top':
            return 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
            break;
          case 'bottom':
            return 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
            break;
          case 'left':
            return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
            break;
          case 'right':
            return 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)';
            break;
          case 'full':
            return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            break;
          case 'midX':
            return 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
            break;
          case 'midY':
            return 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)';
            break;
          case 'center':
            return 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)';
            break;
        }
      }

      let layers = gsap.utils.toArray('.img', root.current);

      gsap.fromTo(
        layers,
        {
          clipPath: getDirection(direction),
          transform: 'scale(1.15)',
          transformOrigin: '100% 0',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          transform: 'scale(1)',
          stagger: {
            each: 0.15,
          },
          ease: CustomEase.create('custom', '0.23, 1, 0.32, 1'),
          duration: duration,
          scrollTrigger: {
            id: id,
            trigger: root.current,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: true,
          },
        }
      );
    },
    { scope: root, dependencies: [src, alt, className] }
  );

  return (
    <div className={cn('relative overflow-hidden', className)} ref={root}>
      <div className='absolute w-full h-full inset-0 bg-foreground img overflow-hidden border-[1.7px] border-black'></div>
      <div className='absolute w-full h-full inset-0 bg-primary img overflow-hidden border-[1.7px] border-black'></div>
      <figure className='w-full h-full img absolute inset-0'>
        <Image
          className='object-cover w-full h-full'
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
    </div>
  );
};

export default ClipPathImage;
