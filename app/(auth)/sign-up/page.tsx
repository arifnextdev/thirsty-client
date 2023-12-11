'use client';
import SignUp from './_components/SignUp';
import AuthLayout from '../_components/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <main>
        <SignUp />
      </main>
    </AuthLayout>
  );
};

export default SignUpPage;
