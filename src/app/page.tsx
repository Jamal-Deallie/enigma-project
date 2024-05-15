import {
  Wrapper,
  Hero,
  ImageMarquee,
  Icons,
  VerticalMarquee,
} from '@/components';
import { nextImport } from '@/utils/nextImport';

const { Intro, IntroImages } = {
  Intro: nextImport('Intro'),
  IntroImages: nextImport('IntroImages'),
};

export default function Home() {
  return (
    <Wrapper>
      <div className='flex min-h-screen  items-end pt-nav-height p-inline'>
        <Hero />
        <div className='grid-inner h-fit lg:mb-8 z-[2] relative'>
          <div className='col-span-full lg:col-span-6'>
            <h1>
              <span className='font-heading font-black uppercase inline-block text-secondary lg:text-[8vw] leading-none lg:leading-[0.86]'>
                The
              </span>
              <span className='font-heading font-black uppercase inline-block text-secondary lg:text-[8vw] leading-none lg:leading-[0.86]'>
                Enigma
              </span>
              <span className='font-heading font-black uppercase inline-block text-secondary lg:text-[8vw] leading-none lg:leading-[0.86]'>
                Project
              </span>
            </h1>
          </div>
          <div className='lg:col-end-13 lg:col-start-9 col-span-full flex items-end'>
            <p className='text-base text-foreground'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              facere nam, similique recusandae saepe maiores in amet temporibus
              ea suscipit error dicta consectetur quas quibusdam et tempore
              rerum voluptate, quis itaque, sunt deleniti fugit. Obcaecati!
            </p>
          </div>
        </div>
      </div>
      <Intro />
      <IntroImages />

      <div className='grid-inner p-inline py-16 lg:pb-24 lg:pt-32 relative'>
        <div className='lg:col-span-6 lg:col-start-1 col-span-full pb-16 lg:pb-24'>
          <h1 className='lg:text-5xl text-secondary leading-[0.86] uppercase'>
            We Capture the mysterious essence of Film
          </h1>
        </div>
        <div className='lg:col-span-3 col-span-full lg:col-start-1'>
          <div className='aspect-[133/133] lg:h-11 h-12 w-auto '>
            <Icons.puzzlePieceOne />
          </div>
          <div>
            <span className='font-heading text-2xl text-foreground block pt-2'>
              Subheader
            </span>
            <p className='text-foreground font-medium text-base pt-12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate fuga ad accusamus error totam corporis quod repudiandae
              consectetur, dolores earum!
            </p>
          </div>
        </div>
        <div className='lg:col-span-3 col-span-full lg:col-start-5'>
          <div className='w-fit '>
            <Icons.puzzlePieceThree className='aspect-[133/91.68] lg:h-10 h-12 w-auto' />
          </div>
          <div>
            <span className='font-heading text-2xl text-foreground block pt-2'>
              Subheader
            </span>
            <p className='text-foreground font-medium text-base pt-12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate fuga ad accusamus error totam corporis quod repudiandae
              consectetur, dolores earum!
            </p>
          </div>
        </div>
        <div className='lg:col-span-3 col-span-6 lg:mt-16 lg:col-start-6'>
          <div className='w-fit '>
            <Icons.puzzlePieceTwo className='w-auto lg:h-12 h-12 aspect-[133/122.48] block' />{' '}
          </div>
          <div>
            <span className='font-heading text-2xl text-foreground block pt-2'>
              Subheader
            </span>
            <p className='text-foreground font-medium text-base pt-12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate fuga ad accusamus error totam corporis quod repudiandae
              consectetur, dolores earum!
            </p>
          </div>
        </div>
        <div className='lg:col-span-3 col-span-6 lg:mt-16 lg:col-start-10'>
          <div className='w-fit'>
            <Icons.puzzlePieceFour className='w-auto lg:h-12 h-12 aspect-[132.99/109.68] block' />
          </div>
          <div>
            <span className='font-heading text-2xl text-foreground block pt-2'>
              Subheader
            </span>
            <p className='text-foreground font-medium text-base pt-12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate fuga ad accusamus error totam corporis quod repudiandae
              consectetur, dolores earum!
            </p>
          </div>
        </div>
      </div>
      <div className='bg-secondary py-16 lg:py-32 p-inline grid-inner'>
        <div className='col-start-1 col-span-full lg:col-span-5 overflow-hidden lg:h--[500]'>
          <VerticalMarquee />
        </div>
        <div className='col-span-full lg:col-span-5 lg:col-start-8 lg:pb-48'>
          <h1 className='lg:text-5xl text-black leading-[0.86] uppercase'>
            Collaborating with Leading Brands
          </h1>
          <p className='text-base text-black lg:pt-16 pt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur iusto nisi optio amet, culpa dignissimos reiciendis ea
            qui vero numquam, rerum velit exercitationem quis praesentium
            adipisci id cupiditate laudantium temporibus eveniet? Hic deserunt
            unde nihil quisquam adipisci praesentium nesciunt, quidem delectus!
            Veniam velit delectus animi, similique optio non. Similique
            inventore consectetur obcaecati quia? Non?
          </p>
        </div>

        <div className='col-span-full lg:col-span-4 lg:col-start-1 lg:pt-24 py-16'>
          <h1 className='lg:text-5xl text-black leading-[0.86] uppercase'>
            Collaborating with Leading Brands
          </h1>
          <p className='text-base text-black lg:pt-16 pt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur iusto nisi optio amet, culpa dignissimos reiciendis ea
            qui vero numquam, rerum velit exercitationem quis praesentium
            adipisci id cupiditate laudantium temporibus eveniet? Hic deserunt
            unde nihil quisquam adipisci praesentium nesciunt, quidem delectus!
            Veniam velit delectus animi, similique optio non. Similique
            inventore consectetur obcaecati quia? Non?
          </p>
          <div className='pt-10'>
            <button className='ring-[1.5px] ring-black rounded-full px-3 py-1 hover:text-foreground hover:ring-foreground duration-200 ease-in-out'>
              See More Projects
            </button>
          </div>
        </div>
        <div className='col-span-6 relative col-end-13'>
          <div className='w-full h--[500]'>
            <div className='aspect-[4/5] bg-blue-100  h--[360] w-auto  rounded-lg relative z-[2]'></div>

            <div className='aspect-[1] bg-orange-200 w--[340] h-auto rounded-lg z-[1] -translate-y-[60%] translate-x-3/4'></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
