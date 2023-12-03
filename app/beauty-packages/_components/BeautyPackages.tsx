'use client';

import SectionTitle from '@/app/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import BeautyPackageCard from './BeautyPackageCard';
import Loading from '@/app/components/ui/Loading';
import Error from '@/app/components/ui/Error';
import { beautyPackageType } from '@/types/beautyPackageItem';
import Link from 'next/link';
import { cn } from '@/app/libs/utils';
import { buttonVariants } from '@/app/components/ui/Button';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface beautyPackagesProps {
  native?: boolean;
}

const BeautyPackages: React.FC<beautyPackagesProps> = ({ native }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');
  return (
    <section className='sp container '>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}
      {beautyPackages && (
        <>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {/* Beauty Packages  */}

            {native &&
              beautyPackages
                ?.sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard key={item._id} item={item} />
                ))}
            {!native &&
              beautyPackages
                ?.sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 8)
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard key={item._id} item={item} />
                ))}
          </div>
          {!native && (
            <div className='mt-10 flex justify-center'>
              <Link
                href={'/beauty-packages'}
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                See More Package
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BeautyPackages;
