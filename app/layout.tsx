import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { cn } from './libs/utils';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thirsty | Home',
  description: 'Thirsty is a beauty parlour and spa website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-white text-black antialiased')}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
