'use client';
import { userType } from '@/types/user';
import Image from 'next/image';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react';
import { cn } from '@/app/libs/utils';
import useFetch from '@/hooks/useFetch';
import axios from 'axios';
interface UserProps {
  users: userType[];
  currentUser: string | undefined;
  token: string | undefined;
}

const User: React.FC<UserProps> = ({ users, currentUser, token }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className='sp container  relative'>
      <div className='rounded-xl bg-blue p-5 pt-0 shadow-xl'>
        <table className='w-full  '>
          <thead className='w-full'>
            <tr className='thead'>
              <td>Photo</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody className='userTableBody '>
            {users?.map((user: userType) => (
              <>
                <tr
                  className={cn(
                    currentUser === user._id
                      ? 'border border-purple bg-white/10 text-white'
                      : 'bg-transparent'
                  )}
                >
                  <td>
                    <div
                      className={cn(
                        'h-16 w-16 overflow-hidden rounded-full border-2',
                        currentUser === user._id
                          ? ' border-red'
                          : ' border-white'
                      )}
                    >
                      <Image
                        src={user?.photoURl}
                        alt={user.name}
                        width={64}
                        height={64}
                        priority
                        className={cn(
                          currentUser === user._id
                            ? 'h-full w-full  object-cover'
                            : 'h-full w-full object-cover'
                        )}
                      />
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className='flex gap-5'>
                      <button
                        className={cn(
                          currentUser === user._id
                            ? 'text-2xl text-white/50'
                            : 'text-2xl text-white/80'
                        )}
                        disabled={currentUser === user._id ? true : false}
                        onClick={() => setIsModalOpen(true)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className={cn(
                          currentUser === user._id
                            ? 'text-2xl text-red/50'
                            : 'text-2xl text-red'
                        )}
                        disabled={currentUser === user._id ? true : false}
                        onSubmit={() => axios.delete(`/api/users/${user._id}`)}
                      >
                        <MdDelete clasName='text-black' />
                      </button>
                    </div>
                  </td>
                </tr>
                {isModalOpen && (
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {user.name}
                  </div>
                )}
                {isModalOpen && (
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {user.name}
                  </div>
                )}
                {isModalOpen && (
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {user.name}
                  </div>
                )}
                {isModalOpen && (
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {user.name}
                  </div>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
