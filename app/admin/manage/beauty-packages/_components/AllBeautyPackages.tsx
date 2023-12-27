'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import { beautyPackageType } from '@/types/beautyPackageItem';
import { useSelector } from 'react-redux';
import BeautyPackage from './Beauty-packages';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
