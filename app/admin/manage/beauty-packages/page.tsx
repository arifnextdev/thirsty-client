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
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';

const BeautyPackageMange = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [packages, setPackages] = useState<beautyPackageType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
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
            pageSize: 5,
            search: searchTerm,
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

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
    getData();
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <main>
      <div className='sp container relative'>
        <SectionTitle title='Beauty Package Manage' />
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='text'
              placeholder='Search Package'
              onChange={handleChange}
              className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
            />
            <Button variant={'primary'} onClick={() => getData()}>
              search
            </Button>
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

      <div className='flex w-full justify-center gap-10'>
        <button onClick={handlePrevPage} className='text-2xl text-blue'>
          <GrLinkPrevious />
        </button>
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-blue text-2xl text-white'>
          {page}{' '}
        </span>
        <button onClick={handleNextPage} className='text-2xl text-blue'>
          <GrLinkNext />
        </button>
      </div>

      {/* <Pagination currentPage={page} totalPage={totalPage} getData={getData} /> */}

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
