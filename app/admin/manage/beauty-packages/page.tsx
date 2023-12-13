'use client';
import useFetch from '@/hooks/useFetch';
import React, { useState } from 'react';

import AllBeautyPackages from './_components/AllBeautyPackages';
import SectionTitle from '@/app/components/ui/SectionTitle';
import Button from '@/app/components/ui/Button';
import Modal from '@/app/components/ui/Modal';

const BeautyPackageMange = () => {
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
        <AllBeautyPackages />
      </div>

      {isModalOpen && (
        <div>
          <div className=''>add Product</div>
        </div>
      )}
    </main>
  );
};

export default BeautyPackageMange;
