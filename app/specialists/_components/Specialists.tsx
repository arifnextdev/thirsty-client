'use client';
import Error from '@/app/components/ui/Error';
import Loading from '@/app/components/ui/Loading';
import SectionTitle from '@/app/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import { speciallisType } from '@/types/specialists';
import SpecialistsCard from './SpecialistsCard';
import Link from 'next/link';
import { cn } from '@/app/libs/utils';
import { buttonVariants } from '@/app/components/ui/Button';

interface SpecialistsProps {
  native?: boolean;
}

const Specialists: React.FC<SpecialistsProps> = ({ native }) => {
  const { data: specialists, isLoading, error } = useFetch(`/api/specialists`);
  return (
    <section className='sp container'>
      <SectionTitle title='Specialists' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {specialists && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {native &&
            specialists?.map((specialist: speciallisType) => (
              <SpecialistsCard key={specialist._id} specialist={specialist} />
            ))}

          {!native &&
            specialists
              ?.slice(0, 8)
              .map((specialist: speciallisType) => (
                <SpecialistsCard key={specialist._id} specialist={specialist} />
              ))}
        </div>
      )}

      {!native && (
        <div className='mt-10 flex justify-center'>
          <Link
            href={'/specialists'}
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            See More Specialists
          </Link>
        </div>
      )}
    </section>
  );
};

export default Specialists;
