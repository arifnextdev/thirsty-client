'use client';
import useFetch from '@/hooks/useFetch';
import React, { useState } from 'react';

import AllBeautyPackages from './_components/AllBeautyPackages';
import SectionTitle from '@/app/components/ui/SectionTitle';
import Button from '@/app/components/ui/Button';
import Modal from '@/app/components/ui/Modal';
import ProductModal from './_components/ProductModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const BeautyPackageMange = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <main>
      <div className='sp container'>
        <SectionTitle title='Beauty Package Manage' />
        <div className='flex justify-between'>
          <div className=''>
            <input type='text' placeholder='Search Package' />
          </div>
          <div className=''>
            <Button variant={'secondary'} onClick={() => setIsModalOpen(true)}>
              Add Package
            </Button>
          </div>
        </div>
        <hr className='my-3 text-blue' />
        <AllBeautyPackages token={token} />
      </div>

      {isModalOpen && (
        <div>
          <ProductModal isModalOpen={isModalOpen} token={token} />
        </div>
      )}
    </main>
  );
};

export default BeautyPackageMange;
