'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Icons, NavLink } from '@/components';
import { cn } from '@/utils/cn';
import { useScrollPosition } from '@/hooks';
import { siteConfig } from '@/constant/config';

const SiteHeader = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header className='relative z-[1000] w-full'>
      <nav
        className={cn(
          'w-full h-nav-height p-inline fixed top-0 left-0 right-0 flex items-center',
          scrollPosition < 80
            ? 'bg-transparent'
            : 'bg-background border-b-[1.5px] border-foreground shadow-md'
        )}>
        <div className='grid-inner h-fit shrink-0 w-full'>
          <Link
            href='/'
            className='relative col-start-1 lg:col-span-4 group self-center h-full lg:flex lg:items-end lg:gap-3 col-span-2 md:pr-14'>
            <Icons.logo
              aria-hidden
              className='relative block aspect-[70.06/80] w-full lg:w-9 fill-tertiary group-hover:fill-foreground transition-colors ease-in duration-300 '
            />
            <span className='text-foreground font-heading uppercase text-[2vw] leading-[0.86] md:hidden'>
              The Enigma Project
            </span>
          </Link>

          <div className='lg:col-start-7 lg:col-end-13 h-full md:hidden'>
            <ul className='flex gap-x-14 justify-end items-end h-full'>
              {siteConfig.mainLinks.map((link, index) => (
                <li key={index} className='h-fit shrink-0'>
                  <NavLink
                    href={link.href}
                    className='font-heading uppercase font-black'
                    matchedClass='text-primary hover:text-foreground transition-colors ease-in duration-300 text-lg'
                    unmatchedClass='text-foreground hover:text-primary transition-colors ease-in duration-300 font-extrabold text-base'>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
