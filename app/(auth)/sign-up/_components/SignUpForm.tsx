'use client';
import Button from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast/headless';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photoURl: '',
  });

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const data = await axiosPost('/api/auth/register', formData);
      if (data) {
        setIsLoading(false);
        setFormData({
          name: '',
          email: '',
          password: '',
          photoURl: '',
        });

        toast.success('Register Success');
      } else {
        setIsLoading(false);
      }
      console.log(formData);
    },
    [formData]
  );

  return (
    <div className='flex flex-col gap-10 '>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome Back!</h2>
        <p className='text-black/50'>Please Register to your account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='name' className='cursor-pointer'>
            Email Address
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
            name='name'
            placeholder='Arif.....'
            className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
          />
        </div>
        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='email' className='cursor-pointer'>
            Email Address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='text'
            id='name'
            name='name'
            placeholder='example@gmail.com'
            className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
          />
        </div>

        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            name='password'
            id='password'
            placeholder='write your password'
            className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
          />
        </div>

        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='photourl' className='cursor-pointer'>
            Photo Url
          </label>
          <input
            value={formData.photoURl}
            onChange={(e) =>
              setFormData({ ...formData, photoURl: e.target.value })
            }
            type='text'
            id='photourl'
            name='photourl'
            placeholder='Arif.....'
            className='w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue '
          />
        </div>

        <Button variant='secondary' type='submit' isLoading={isLoading}>
          Register
        </Button>

        <p className='text-center'>
          <span className='text-black/50'>Do you have an account?</span>{' '}
          <Link href={'/sign-in'} className='link-item text-blue'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
