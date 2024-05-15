import { ClipPathImage } from '@/components';

const IntroImages = () => {
  return (
    <div className='grid-inner p-inline'>
      <div className='lg:col-span-6 col-span-full overflow-hidden'>
        <ClipPathImage
          className='lg:aspect-[1600/1067] w-full overflow-hidden box-content border-[2px] border-black'
          src='/images/pexels-kalvisuals-2510429.jpg'
          alt='enigma-team'
          direction='top'
        />
      </div>
      <div className='lg:col-span-6 col-span-full overflow-hidden'>
        <ClipPathImage
          className='lg:aspect-[1600/1067] w-full overflow-hidden box-content border-[2px] border-black'
          src='/images/pexels-kalvisuals-2510429.jpg'
          alt='enigma-team'
          direction='bottom'
        />
      </div>
    </div>
  );
};

export default IntroImages;
