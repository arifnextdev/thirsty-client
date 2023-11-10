import React from 'react';
import SingInPicture from './SingInPicture';
import SignInForm from './SignInForm';

const SignIn = () => {
  return (
    <section className='sp container grid h-[calc(100vh-5rem)] grid-cols-2 items-center gap-20'>
      <SingInPicture />
      <SignInForm />
    </section>
  );
};

export default SignIn;
