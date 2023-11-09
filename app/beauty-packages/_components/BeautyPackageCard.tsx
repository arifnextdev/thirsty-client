import { buttonVariants } from '@/app/components/ui/Button';
import { cn } from '@/app/libs/utils';
import { beautyPackageType } from '@/types/beautyPackageItem';
import Image from 'next/image';
import Link from 'next/link';

interface BeautyPackageCardProps {
  item: beautyPackageType;
}

const BeautyPackageCard: React.FC<BeautyPackageCardProps> = ({ item }) => {
  console.log(item);
  return (
    <div className='w-full space-y-5 rounded-2xl bg-white p-5 shadow-md shadow-gray'>
      <Link
        href={`/beauty-packages/${item._id}`}
        className='inline-block h-[20rem] w-full overflow-hidden rounded-xl'
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          width={1280}
          height={720}
          priority
          className='h-full w-full object-cover'
        />
      </Link>
      <div className='space-y-2.5 '>
        <small className='uppercase text-purple'>{item.category}</small>
        <h3 className='truncate'>{item.title}</h3>
        <hr className='border-gray' />
        <p className='text-black/70'>{item.description.substring(0, 50)}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <h3>${item.price}</h3>
          <Link
            href={`/beauty-packages/${item._id}`}
            className={cn(
              buttonVariants({
                variant: 'secondary',
              })
            )}
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeautyPackageCard;
