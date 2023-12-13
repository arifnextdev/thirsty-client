'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import { userType } from '@/types/user';
import Pagination from '@/app/components/Pagination';
import { useSearchParams } from 'next/navigation';

const AllUser = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const { data: users, isLoading, error } = useFetch('/api/users', token);
  const currentId = session?.user._id;

  return (
    <section className='sp container'>
      <div className='flex flex-col gap-3'>
        {users &&
          users.map((user: userType) => (
            <User
              key={user._id}
              user={user}
              currentId={currentId}
              token={token}
              isLoading={isLoading}
            />
          ))}
      </div>
      <Pagination />
    </section>
  );
};

export default AllUser;
