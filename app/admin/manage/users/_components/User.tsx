'use client';
import Button from '@/app/components/ui/Button';
import { userType } from '@/types/user';
import Image from 'next/image';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import React from 'react';
import { cn } from '@/app/libs/utils';
interface UserProps {
  users: userType[];
  currentUser: string | undefined;
}

const User: React.FC<UserProps> = ({ users, currentUser }) => {
  console.log(currentUser);

  return (
    <div className='sp container  '>
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
                      currentUser === user._id ? ' border-red' : ' border-white'
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
                    >
                      <MdDelete clasName='text-black' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
