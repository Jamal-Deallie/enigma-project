'use client';
import { useLenis } from '@/libs/lenis';
import Tempus from '@darkroom.engineering/tempus';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useEffect } from 'react';

interface Tempus {
  add: (callback: (time: number) => void, priority: number) => void;
}

const GSAP = () => {
  useLayoutEffect(() => {
    gsap.defaults({ ease: 'none' });

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.remove(gsap.updateRoot);
    Tempus?.add((time: number) => {
      gsap.updateRoot(time / 1000);
    }, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    ScrollTrigger.clearScrollMemory('manual');
    ScrollTrigger.defaults({
      markers: process.env.NODE_ENV === 'development',
    });
  }, []);

  const lenis = useLenis(ScrollTrigger.update);
  useEffect(() => ScrollTrigger.refresh(), [lenis]);

  return null;
};

export default GSAP;
