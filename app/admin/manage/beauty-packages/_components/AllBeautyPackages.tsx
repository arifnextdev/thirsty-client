'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { useSelector } from 'react-redux';
import BeautyPackage from './Beauty-packages';

const AllBeautyPackages = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages', token);
  return (
    <div className=''>
      {beautyPackages?.map((beautyPackage: beautyPackageType) => (
        <BeautyPackage beautyPackage={beautyPackage} token={token} />
      ))}
    </div>
  );
};

export default AllBeautyPackages;
