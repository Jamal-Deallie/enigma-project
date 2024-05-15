import { Lenis, LenisOptions } from '@/libs/lenis';
import { ReactNode, Suspense } from 'react';
import { Footer, SiteHeader } from '@/components';
const Wrapper = ({
  children,
  lenisOptions = {},
}: {
  lenisOptions?: LenisOptions;
  children: ReactNode;
}) => {
  return (
    <>
      <Lenis root options={lenisOptions} />
      <div className='flex flex-col min-h-screen overflow-hidden'>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <main role='main' className='flex-1 relative flex flex-col bg-black'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
