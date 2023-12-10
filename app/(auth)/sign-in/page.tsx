'use client';
import React, { useEffect } from 'react';
import SignIn from './_components/SignIn';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();
  const session = useSelector(
    (state: RootState) => state.auth?.userAndToken?.user
  );

  if (session) {
    const destination = '/';

    router.replace(destination);
  }

  if (!session) {
    return (
      <main>
        <SignIn />
      </main>
    );
  }
};

export default SignInPage;
