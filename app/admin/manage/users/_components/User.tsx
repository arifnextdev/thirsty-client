'use client';
import { userType } from '@/types/user';
import Image from 'next/image';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react';
import { cn } from '@/app/libs/utils';
import useFetch from '@/hooks/useFetch';
import axios from 'axios';
import Modal from '@/app/components/ui/Modal';
import Loading from '@/app/components/ui/Loading';
interface UserProps {
  user: userType;
  currentId: string | undefined;
  token: string | undefined;
  isLoading: boolean;
}

const User: React.FC<UserProps> = ({ user, currentId, token, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const currentUser = currentId === user._id;

  const handleModal = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };
  return (
    <>
      <div
        className={cn(
          'w-full rounded-xl bg-blue px-10 py-2 shadow-sm',
          currentUser ? 'bg-red/50' : ''
        )}
      >
        <div className='grid w-full grid-cols-12 items-center justify-center gap-5'>
          <div
            className={cn(
              'col-span-1 h-16 w-16 overflow-hidden rounded-full border-2',
              currentUser ? ' border-2 border-blue ' : ' border-white'
            )}
          >
            <Image
              src={user?.photoURl}
              alt={user.name}
              width={64}
              height={64}
              priority
              className={cn(
                currentUser
                  ? 'h-full w-full  object-cover'
                  : 'h-full w-full object-cover'
              )}
            />
          </div>
          <div className='col-span-10 grid grid-cols-3 items-center justify-between gap-5'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
          <div className='flex  gap-5'>
            <button
              className={cn('text-2xl text-white/80')}
              onClick={handleModal}
            >
              <FaRegEdit />
            </button>
            <button
              className={cn(
                currentUser ? 'text-2xl text-red/50' : 'text-2xl text-red'
              )}
              disabled={currentUser ? true : false}
              onSubmit={() => axios.delete(`/api/users/${user._id}`)}
            >
              <MdDelete className='text-black' />
            </button>
          </div>
        </div>
      </div>
      {/* OVERLay  */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed bottom-0 left-0 right-0 top-0 z-[1] h-screen w-screen bg-blue/20 blur-2xl ${
          isOverlayOpen ? '' : 'hidden'
        }`}
      ></div>
      {isModalOpen && (
        <div>
          <Modal
            user={user}
            isModalOpen={isModalOpen}
            token={token}
            currentId={currentId}
          />
        </div>
      )}
    </>
  );
};

export default User;
