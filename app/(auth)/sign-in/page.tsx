'use client';
import SignIn from './_components/SignIn';

import AuthLayout from '../_components/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <main>
        <SignIn />
      </main>
    </AuthLayout>
  );
};

export default SignInPage;
