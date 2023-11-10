import { buttonVariants } from '@/app/components/ui/Button';
import { cn } from '@/app/libs/utils';
import { speciallisType } from '@/types/specialists';
import Image from 'next/image';
import Link from 'next/link';

interface SpecialistsCardProps {
  specialist: speciallisType;
}

const SpecialistsCard: React.FC<SpecialistsCardProps> = ({ specialist }) => {
  return (
    <div className='w-full space-y-5 rounded-2xl bg-white p-5 shadow-md shadow-gray'>
      <Link
        href={`/beauty-packages/${specialist._id}`}
        className='group inline-block h-[20rem] w-full overflow-hidden rounded-xl'
      >
        <Image
          src={specialist.photoURL}
          alt={specialist.name}
          width={1280}
          height={720}
          priority
          className='eq h-full w-full object-cover brightness-75 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      <div className='space-y-2.5 '>
        <h3 className='truncate'>{specialist.name}</h3>
        <small className='uppercase text-purple'>
          {specialist.designation}
        </small>
        <hr className='border-gray' />
        <p className='text-black/70'>{specialist.bio.substring(0, 50)}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <Link
            href={`/beauty-packages/${specialist._id}`}
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

export default SpecialistsCard;
