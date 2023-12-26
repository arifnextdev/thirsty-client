'use client';
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
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  const modalToggle = (data: boolean) => {
    setIsModalOpen(data);
    setIsOverlayOpen(data);
  };
  return (
    <main>
      <div className='sp container relative'>
        <SectionTitle title='Beauty Package Manage' />
        <div className='flex justify-between'>
          <div className=''>
            <input type='text' placeholder='Search Package' />
          </div>
          <div className=''>
            <Button variant={'secondary'} onClick={() => modalToggle(true)}>
              Add Package
            </Button>
          </div>
        </div>
        <hr className='my-3 text-blue' />
        <AllBeautyPackages token={token} />
      </div>

      {isModalOpen && (
        <div className='absolute'>
          <ProductModal
            isModalOpen={isModalOpen}
            token={token}
            modalToggle={modalToggle}
          />
        </div>
      )}

      {/* OVERLay  */}
      <div
        onClick={() => modalToggle(false)}
        className={`overlay fixed bottom-0 left-0 right-0 top-0 z-[1] h-screen w-screen bg-blue/20 blur-2xl ${
          isOverlayOpen ? '' : 'hidden'
        }`}
      ></div>
    </main>
  );
};

export default BeautyPackageMange;
