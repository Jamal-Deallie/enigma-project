import React from 'react';
import Image from 'next/image';

const ImageMarquee = () => {
  return (
    <div>
      <div className='relative flex -rotate-3'>
        <div className='pt-8 pb-16 animate-marquee whitespace-nowrap'>
          {Array.from({ length: 5 }, (_, index) => (
            <div className='inline-block marquee-txt relative aspect-[1600/1067] w--[400] mx-6 overflow-hidden rounded-md'>
              <Image
                className='h-full w-full object-cover'
                alt='image'
                src='/images/pexels-kalvisuals-2510429.jpg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
          ))}
        </div>
        <div className='absolute top-0 py-8 animate-marquee2 whitespace-nowrap'>
          {Array.from({ length: 5 }, (_, index) => (
            <div className='inline-block marquee-txt relative aspect-[1600/1067] w--[400] mx-6 overflow-hidden rounded-md'>
              <Image
                className='h-full w-full object-cover'
                alt='image'
                src='/images/pexels-kalvisuals-2510429.jpg'
                width={0}
                height={0}
                sizes='100vw'
              />
            </div>
          ))}
          {/* <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>
      </div>

      <div className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span>

        <span className='lg:px-12 inline-block marquee-txt text-[25vw] text-transform uppercase font-black font-sans leading-none lg:text-9xl text-tertiary'>
          Marquee Item 1
        </span> */}
        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;
