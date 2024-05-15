'use client';

import { SplitContainer } from '@/components';
import { useIntroAnime } from '@/hooks';

const Intro = () => {
  const introRef = useIntroAnime();
  return (
    <div className='py-16 lg:pb-24 lg:pt-48 p-inline' ref={introRef}>
      <div className='grid-inner'>
        <div className='lg:col-span-6 lg:col-start-3 col-span-full'>
          <h1 className='lg:text-5xl text-secondary leading-[0.86] uppercase'>
            <SplitContainer>
              We Capture the mysterious essence of Film
            </SplitContainer>
          </h1>
        </div>
      </div>
      <div className='grid-inner desc-target text-foreground '>
        <div className='lg:col-start-4 lg:col-span-4  col-span-full pt-6 lg:pt-16 '>
          <p className='text-pretty'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sint
            reprehenderit et iste voluptatum eos laudantium quas doloremque
            vitae temporibus molestias maiores exercitationem, quod est ratione
            ipsa dolorum dignissimos quam iusto quia? Similique quasi,
            exercitationem distinctio, iste inventore sed eveniet non voluptate
            vel consequuntur corporis, maxime voluptatibus ipsam reiciendis
            repellat.
          </p>
        </div>
        <div className='lg:col-start-6 lg:col-span-4  col-span-full pt-2'>
          <p className='text-balance'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sint
            reprehenderit et iste voluptatum eos laudantium quas doloremque
            vitae temporibus molestias maiores exercitationem, quod est ratione
            ipsa dolorum dignissimos quam iusto quia? Similique quasi,
            exercitationem distinctio, iste inventore sed eveniet non voluptate
            vel consequuntur corporis, maxime voluptatibus ipsam reiciendis
            repellat.
          </p>

          <div className='pt-10'>
            <button className='ring-[1.5px] ring-foreground text-foreground  rounded-full px-3 py-1 hover:text-primary hover:ring-primary duration-200 ease-in-out'>
              Read Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
