'use client';
import useFetch from '@/hooks/useFetch';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import { userType } from '@/types/user';

const AllUser = () => {
  const token = useSelector(
    (state: RootState) => state.auth.userAndToken?.token
  );
  const { data: users, isLoading, error } = useFetch('/api/users', token);
  console.log(users);
  return (
    <section>
      <User users={users} />
    </section>
  );
};

export default AllUser;
