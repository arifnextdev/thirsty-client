'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import { userType } from '@/types/user';

const AllUser = () => {
  const session = useSelector((state: RootState) => state.auth?.userAndToken);
  const token = session?.token;
  const { data: users, isLoading, error } = useFetch('/api/users', token);
  const currentUser = session?.user._id;
  console.log(isLoading);

  return (
    <section>
      <User
        users={users}
        currentUser={currentUser}
        token={token}
        isLoading={isLoading}
      />
    </section>
  );
};

export default AllUser;
