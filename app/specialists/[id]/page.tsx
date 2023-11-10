'use client';

import Button from '@/app/components/ui/Button';
import Error from '@/app/components/ui/Error';
import Loading from '@/app/components/ui/Loading';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation';
import SpecialistItem from '../_components/SpecialistItem';

const SpecialistsDetalsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: specialistItem,
    isLoading,
    error,
  } = useFetch(`/api/specialists/${params.id}`);

  const router = useRouter();

  return (
    <main>
      {isLoading && (
        <div className='flex min-h-screen items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='flex min-h-screen flex-col items-center justify-center gap-5'>
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}

      {specialistItem && <SpecialistItem item={specialistItem} />}
    </main>
  );
};

export default SpecialistsDetalsPage;
