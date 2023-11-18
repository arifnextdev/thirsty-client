import React from 'react';
import SingInPicture from '../../sign-in/_components/SingInPicture';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <section className='sp container grid h-[calc(100vh-5rem)] grid-cols-2 items-center gap-20'>
      <SingInPicture />
      <SignUpForm />
    </section>
  );
};

export default SignUp;
