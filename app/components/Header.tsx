'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../libs/utils';
import { buttonVariants } from './ui/Button';

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
    href: '/specialist',
    lebel: 'Specialist',
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
  const pathname = usePathname();
  return (
    <header className='fixed left-0 right-0  top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-white/90 backdrop-blur-xl'>
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
          <Link
            href={'/sign-in'}
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Sign In
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
