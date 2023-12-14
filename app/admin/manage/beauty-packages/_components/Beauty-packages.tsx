import Modal from '@/app/components/ui/Modal';
import { cn } from '@/app/libs/utils';
import { beautyPackageType } from '@/types/beautyPackageItem';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface beautyPackagesProps {
  beautyPackage: beautyPackageType;
  token: string | undefined;
}

const BeautyPackage: React.FC<beautyPackagesProps> = ({
  beautyPackage,
  token,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsOverlayOpen(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={cn('bg-primary w-full rounded-xl px-10 py-2 shadow-sm')}>
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
              onClick={handleModal}
            >
              <FaRegEdit />
            </button>
            <button
              className={cn('text-2xl text-red')}
              // onSubmit={() => axios.delete(`/api/users/${user._id}`)}
            >
              <MdDelete className='text-black' />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <div>{<h1>beauty package</h1>}</div>}
      {/* OVERLay  */}
      {isModalOpen && (
        <div
          onClick={handleOverlay}
          className={`overlay fixed bottom-0 left-0 right-0 top-0 z-[1] h-screen w-screen bg-blue/20 blur-2xl ${
            isOverlayOpen ? '' : 'hidden'
          }`}
        ></div>
      )}
    </>
  );
};

export default BeautyPackage;
