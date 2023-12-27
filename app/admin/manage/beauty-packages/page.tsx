'use client';
import React, { useEffect, useState } from 'react';

import AllBeautyPackages from './_components/AllBeautyPackages';
import SectionTitle from '@/app/components/ui/SectionTitle';
import Button from '@/app/components/ui/Button';
import Modal from '@/app/components/ui/Modal';
import ProductModal from './_components/ProductModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import axios from 'axios';
import { beautyPackageType } from '@/types/beautyPackageItem';
import Pagination from '@/app/components/Pagination';

const BeautyPackageMange = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [packages, setPackages] = useState<beautyPackageType[]>([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/beauty_packages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page,
            pageSize: 3, // Set your desired page size
          },
        }
      );

      if (res.data) {
        setPackages(res.data);
      }
    } catch (error) {}
  };

  const totalPackage = packages?.length + 1;
  const totalPage = Math.ceil(totalPackage / 3);

  const modalToggle = (data: boolean) => {
    setIsModalOpen(data);
    setIsOverlayOpen(data);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page is not less than 1
  };

  useEffect(() => {
    getData();
  }, [page]);
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
        <AllBeautyPackages
          token={token}
          packages={packages}
          getData={getData}
        />
      </div>

      <div>
        {/* Render your beauty packages here */}
        {/* Add UI elements for pagination (e.g., Next and Previous buttons) */}
        <button onClick={handlePrevPage}>Previous</button>
        <span> Page {page} </span>
        <button onClick={handleNextPage}>Next</button>
      </div>

      <Pagination currentPage={page} totalPage={totalPage} getData={getData} />

      {isModalOpen && (
        <div className='absolute'>
          <ProductModal
            isModalOpen={isModalOpen}
            token={token}
            modalToggle={modalToggle}
            getData={getData}
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
