import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <section className='bg-gray-100 font-poppins dark:bg-gray-800 sp container flex items-center '>
        <div className=' flex-1 justify-center px-4 py-4 lg:px-0 '>
          <div className='flex flex-wrap items-center'>
            <div className='mb-10 w-full  lg:mb-8 xl:w-1/2'>
              <div className='flex flex-wrap'>
                <div className='w-full  md:w-1/2'>
                  <Image
                    src='https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='mb-6 h-80 w-full rounded-lg object-cover'
                    width={680}
                    height={780}
                    priority
                  />
                  <Image
                    src='https://images.pexels.com/photos/4397903/pexels-photo-4397903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='h-80 w-full rounded-lg object-cover'
                    width={680}
                    height={780}
                    priority
                  />
                </div>
                <div className='w-full px-4 md:w-1/2 xl:mt-11'>
                  <Image
                    src='https://images.pexels.com/photos/4246086/pexels-photo-4246086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='mb-6 h-80 w-full rounded-lg object-cover'
                    width={680}
                    height={780}
                    priority
                  />
                  <Image
                    src='https://images.pexels.com/photos/3873842/pexels-photo-3873842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='h-80 w-full rounded-lg object-cover'
                    width={680}
                    height={780}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className='mb-10 w-full px-4 lg:mb-8 xl:w-1/2'>
              <span className='text-blue-500 dark:text-blue-400 text-sm font-semibold'>
                Why choose us
              </span>
              <h2 className='text-gray-700 dark:text-gray-300 mb-4 mt-2 text-2xl font-bold'>
                We are providing a better facility
              </h2>
              <p className='text-gray-500 dark:text-gray-400 mb-4 text-base leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ul className='mb-10'>
                <li className='text-gray-600 dark:text-gray-400 mb-4 flex items-center text-base'>
                  <span className='text-blue-500 dark:text-blue-400 mr-3 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-1-circle-fill h-6 w-6'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z'
                      />
                    </svg>
                  </span>
                  Lorem ipsum, or lipsum known, is dummy text used
                </li>
                <li className='text-gray-600 dark:text-gray-400 mb-4 flex items-center text-base'>
                  <span className='text-blue-500 dark:text-blue-400 mr-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-2-circle-fill h-6 w-6'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z' />
                    </svg>
                  </span>
                  The purpose of lorem create a natural looking block of text
                </li>
                <li className='text-gray-600 dark:text-gray-400 mb-4 flex items-center text-base'>
                  <span className='text-blue-500 dark:text-blue-400 mr-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-3-circle-fill h-6 w-6'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z' />
                    </svg>
                  </span>
                  The passage experienced in popularity during the 1960s
                </li>
                <li className='text-gray-600 dark:text-gray-400 mb-4 flex items-center text-base'>
                  <span className='text-blue-500 dark:text-blue-400 mr-3 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-4-circle-fill h-6 w-6'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z' />
                    </svg>
                  </span>
                  esktop publishers bundled the text with their software.
                </li>
              </ul>
              <Link
                href='#'
                className='text-gray-100 bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2'
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
