'use client';
import Button, { buttonVariants } from '@/app/components/ui/Button';
import { axiosPost } from '@/app/libs/axiosPost';
import { login } from '@/redux/features/auth/authSlice';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

interface SignInFormProps {
  query: string;
}

const SignInForm: React.FC<SignInFormProps> = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  console.log(router);

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const data = await axiosPost(`/api/auth/login`, formData);

      if (data) {
        setIsLoading(false);
        setFormData({
          email: '',
          password: '',
        });
        dispatch(login(data));
        toast.success('Login successfull');
        router.push('/');
      } else {
        setIsLoading(false);
      }
      console.log(formData);
    },
    [formData, router, dispatch]
  );

  return (
    <div className='flex flex-col gap-10 '>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome Back!</h2>
        <p className='text-black/50'>Please login to your account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5 '>
          <label htmlFor='email' className='cursor-pointer'>
            Email Address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            name='email'
            placeholder='hello@example.com'
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

        <Button variant='secondary' type='submit' isLoading={isLoading}>
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
