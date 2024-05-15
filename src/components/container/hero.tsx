'use client';
import { useHeroAnime } from '@/hooks/useHeroAnime';
type Props = {};

const Hero = (props: Props) => {
  const heroRef = useHeroAnime();

  return (
    <div ref={heroRef} className='z-[1] absolute top-0 left-0 w-full h-screen lg:invisible'>
      <div className='absolute inset-0 h-screen w-full bg-black curtains hero-layers'>
        <video
          muted={true}
          playsInline
          autoPlay
          loop
          preload='none'
          className='block h-svh w-full object-cover align-middle'>
          <source src='/videos/hero-3.mp4' type='video/mp4' />

          <p> Your browser does not support this video</p>
        </video>
        <div className='absolute bottom-0 left-0 right-0 content z-auto h-full '></div>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-100 z-auto h-3/4 translate-y-2'></div>
      </div>
      <div className='absolute inset-0 h-screen w-full bg-black curtains hero-layers'>
        <video
          muted={true}
          playsInline
          autoPlay
          loop
          preload='none'
          className='block h-svh w-full object-cover align-middle'>
          <source src='/videos/hero-2.mp4' type='video/mp4' />

          <p> Your browser does not support this video</p>
        </video>
        <div className='absolute bottom-0 left-0 right-0 content z-auto h-full '></div>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-100 z-auto h-3/4 translate-y-2'></div>
      </div>
      <div className='absolute inset-0 h-screen w-full bg-black curtains hero-layers'>
        <video
          muted={true}
          playsInline
          autoPlay
          loop
          preload='none'
          className='block h-svh w-full object-cover align-middle'>
          <source src='/videos/hero.mp4' type='video/mp4' />

          <p> Your browser does not support this video</p>
        </video>
        <div className='absolute bottom-0 left-0 right-0 content z-auto h-full '></div>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-100 z-auto h-3/4 translate-y-2'></div>
      </div>
    </div>
  );
};

export default Hero;
