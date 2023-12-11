'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '../libs/utils';
import Button, { buttonVariants } from './ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { logOut } from '@/redux/features/auth/authSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';

const navcontents = [
  {
    href: '/',
    lebel: 'Home',
  },
  {
    href: '/beauty-packages',
    lebel: 'Beauty Packages',
  },
  {
    href: '/specialists',
    lebel: 'Specialists',
  },
  {
    href: '/about',
    lebel: 'About',
  },
  {
    href: '/contact',
    lebel: 'Contact',
  },
];

const Header = () => {
  const [shouldProfilePopupOpen, setShouldProfilePopupOpen] =
    useState<boolean>(false);
  const pathname = usePathname();
  const session = useSelector((state: RootState) => state.auth.userAndToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const adminNavLinks = [
    {
      href: '/profile',
      lebel: 'Profile',
    },
    {
      href: '/user/manage/bookings',
      lebel: 'My Bookings',
    },
    {
      href: '/admin/manage/beauty-packages',
      lebel: 'Manage Packages',
    },
    {
      href: '/admin/manage/specialists',
      lebel: 'Manage Specilists',
    },
    {
      href: '/admin/manage/bookings',
      lebel: 'Manage Bookings',
    },
    {
      href: '/admin/manage/users',
      lebel: 'Manage Users',
    },
  ];

  return (
    <>
      <header className='fixed left-0 right-0  top-0 z-[101] flex h-20 w-full items-center border-b border-gray bg-white/90 backdrop-blur-xl'>
        <nav className='container flex items-center justify-between gap-5'>
          <Link href={'/'} className='text-2xl font-semibold'>
            Thirsty
          </Link>
          <ul className='flex items-center gap-5 text-lg'>
            {navcontents.map((item, i) => (
              <li key={item.lebel}>
                <Link
                  href={item.href}
                  className={cn(
                    'link-item',
                    pathname === item.href ? 'text-black' : 'text-black/50'
                  )}
                >
                  {item.lebel}
                </Link>
              </li>
            ))}
            {!session?.user ? (
              <Link
                href={'/sign-in'}
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Sign In
              </Link>
            ) : (
              <div className='z-[102] flex items-center gap-5 '>
                <div
                  className=' relative h-12 w-12 cursor-pointer  rounded-full'
                  onClick={() =>
                    setShouldProfilePopupOpen(!shouldProfilePopupOpen)
                  }
                >
                  <Image
                    src={session.user.photoURl}
                    alt={session.user.name}
                    width={64}
                    height={64}
                    className='eq h-full w-full overflow-hidden rounded-full object-cover hover:brightness-50'
                  />
                  {shouldProfilePopupOpen && (
                    <ul className='absolute right-0 top-[calc(100%+1rem)]  flex  flex-col items-start gap-5 rounded-xl bg-white px-10 py-5 shadow-md'>
                      {session?.user?.role === 'admin' &&
                        adminNavLinks?.map((item) => (
                          <li key={item.lebel}>
                            <Link
                              href={item.href}
                              className={cn(
                                'link-item whitespace-nowrap',
                                pathname === item.href
                                  ? 'text-black'
                                  : 'text-black/50'
                              )}
                            >
                              {item.lebel}
                            </Link>
                          </li>
                        ))}
                      {session?.user?.role === 'user' &&
                        adminNavLinks?.slice(0, 2).map((item) => (
                          <li key={item.lebel}>
                            <Link
                              href={item.href}
                              className={cn(
                                'link-item whitespace-nowrap',
                                pathname === item.href
                                  ? 'text-black'
                                  : 'text-black/50'
                              )}
                            >
                              {item.lebel}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
                <Button
                  variant={'danger'}
                  onClick={() => {
                    dispatch(logOut());
                    router.push('/sign-in');
                    toast.success('Logout Success');
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </ul>
        </nav>
      </header>
      {/* pop up Overlay  */}
      {shouldProfilePopupOpen && (
        <div
          className='fixed bottom-0 left-0 right-0 top-0 z-[100] h-full w-full bg-transparent '
          onClick={() => setShouldProfilePopupOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
