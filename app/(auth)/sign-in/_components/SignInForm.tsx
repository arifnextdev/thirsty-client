'use client';
import Button, { buttonVariants } from '@/app/components/ui/Button';
import Link from 'next/link';
import React, { useState } from 'react';

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  return (
    <div className='flex flex-col gap-10 '>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome Back!</h2>
        <p className='text-black/50'>Please login to your account</p>
      </div>

      <form className='flex w-full flex-col gap-5 text-lg'>
        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='email' className='cursor-pointer'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='w-full rounded-2xl border border-gray bg-transparent p-5 outline-none focus:border-blue '
          />
        </div>
        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='write your password'
            className='w-full rounded-2xl border border-gray bg-transparent p-5 outline-none focus:border-blue '
          />
        </div>

        <Button variant={'secondary'} type='submit'>
          Login
        </Button>

        <p className='text-center'>
          <span className='text-black/50'>Do not have an account?</span>{' '}
          <Link href={'/sign-up'} className='link-item text-blue'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
