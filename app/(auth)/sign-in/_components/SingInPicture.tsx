import Overlay from '@/app/components/ui/Overlay';
import Image from 'next/image';
import React from 'react';

const SingInPicture = () => {
  return (
    <div className='relative h-full overflow-hidden'>
      <Image
        src={'/assets/images/sign-in-picture.jpg'}
        alt='image'
        width={720}
        height={1280}
        className='h-full w-full object-cover'
      />
      <Overlay />
      <div className='absolute bottom-0 left-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white'>
        <h3>
          “To me, beauty is about being comfortable in your own skin. It’s about
          knowing and accepting who you are.” —Ellen Degeneres
        </h3>
      </div>
    </div>
  );
};

export default SingInPicture;
