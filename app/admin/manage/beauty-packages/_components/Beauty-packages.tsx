import Modal from '@/app/components/ui/Modal';
import { cn } from '@/app/libs/utils';
import { beautyPackageType } from '@/types/beautyPackageItem';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ProductUpdateModal from './ProductUpdateModal';
import axios from 'axios';
import toast from 'react-hot-toast';

interface beautyPackagesProps {
  beautyPackage: beautyPackageType;
  token: string | undefined;
  getData: () => void;
}

const BeautyPackage: React.FC<beautyPackagesProps> = ({
  beautyPackage,
  token,
  getData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  const modalToggle = (modal: boolean) => {
    setIsModalOpen(modal);
    setIsOverlayOpen(modal);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/beauty_packages/${id}`,
        {
          headers: {
            method: 'DELETE',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        getData();
        toast.success('Package Deleted');
        return res.data;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div
        className={cn(
          'bg-primary relative w-full rounded-xl px-10 py-2 shadow-sm'
        )}
      >
        <div className='grid w-full grid-cols-12 items-center justify-center gap-5'>
          <div
            className={cn(
              'col-span-1 h-16 w-16 overflow-hidden rounded-full border-2'
            )}
          >
            <Image
              src={beautyPackage?.images[0]}
              alt={beautyPackage.title}
              width={64}
              height={64}
              priority
              className={cn('h-full w-full object-cover')}
            />
          </div>
          <div className='col-span-10 grid grid-cols-3 items-center justify-between gap-5'>
            <p>{beautyPackage.title}</p>
            <p>{beautyPackage.price}</p>
            <p>{beautyPackage?.category}</p>
          </div>
          <div className='flex  gap-5'>
            <button
              className={cn('text-2xl text-blue/80')}
              onClick={() => modalToggle(true)}
            >
              <FaRegEdit />
            </button>
            <button
              className={cn('text-2xl text-red')}
              onClick={() => handleDelete(beautyPackage._id)}
            >
              <MdDelete className='text-black' />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='absolute'>
          <ProductUpdateModal
            token={token}
            beautyPackage={beautyPackage}
            isModalOpen={isModalOpen}
            modalToggle={modalToggle}
            getData={getData}
          />
        </div>
      )}
      {/* OVERLay  */}
      {isModalOpen && (
        <div
          onClick={() => modalToggle(false)}
          className={`overlay fixed bottom-0 left-0 right-0 top-0 z-[1] h-screen w-screen bg-blue/20 blur-2xl ${
            isOverlayOpen ? '' : 'hidden'
          }`}
        ></div>
      )}
    </>
  );
};

export default BeautyPackage;
