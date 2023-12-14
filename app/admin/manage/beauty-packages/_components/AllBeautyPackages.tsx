'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { useSelector } from 'react-redux';
import BeautyPackage from './Beauty-packages';

const AllBeautyPackages = ({ token }: { token: string | undefined }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages', token);
  return (
    <div className=''>
      {beautyPackages?.map((beautyPackage: beautyPackageType) => (
        <BeautyPackage
          key={beautyPackage._id}
          beautyPackage={beautyPackage}
          token={token}
        />
      ))}
    </div>
  );
};

export default AllBeautyPackages;
