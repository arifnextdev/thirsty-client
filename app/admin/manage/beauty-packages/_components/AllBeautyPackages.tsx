'use client';
import { beautyPackageType } from '@/types/beautyPackageItem';
import BeautyPackage from './Beauty-packages';

const AllBeautyPackages = ({
  token,
  packages,
  getData,
}: {
  token: string | undefined;
  packages: beautyPackageType[];
  getData: () => void;
}) => {
  console.log(packages);

  return (
    <div className='flex flex-col gap-3'>
      {packages?.map((beautyPackage: beautyPackageType) => (
        <BeautyPackage
          key={beautyPackage._id}
          beautyPackage={beautyPackage}
          token={token}
          getData={getData}
        />
      ))}
    </div>
  );
};

export default AllBeautyPackages;
