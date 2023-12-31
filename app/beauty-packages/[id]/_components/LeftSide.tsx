import { cn } from '@/app/libs/utils';
import Image from 'next/image';
import { useState } from 'react';

interface LeftSideProps {
  images: string[];
}

const LeftSide: React.FC<LeftSideProps> = ({ images }) => {
  const [oneImage, setOneImage] = useState(images[0]);

  return (
    <div className='flex h-full flex-col gap-10'>
      <div className='h-[580px] w-full overflow-hidden'>
        <Image
          src={oneImage}
          width={240}
          height={240}
          priority
          alt='packages image'
          className='h-full w-full object-cover'
        />
      </div>

      <div className=' flex items-center justify-center gap-5'>
        {images?.map((image, i) => (
          <div className='' key={i}>
            <div className=' h-20 w-20   overflow-hidden'>
              <Image
                src={image}
                width={500}
                height={500}
                alt='packages image'
                priority
                onClick={() => setOneImage(image)}
                className={cn(
                  'h-full w-full cursor-pointer object-cover',
                  image === oneImage ? 'border-2 border-blue' : ''
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
