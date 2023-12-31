import React from 'react';

const ContactPage = () => {
  return (
    <section className='dark:bg-gray-900 bg-white'>
      <div className='container mx-auto px-6 py-12'>
        <div>
          <p className='text-blue-500 dark:text-blue-400 font-medium'>
            Contact us
          </p>

          <h1 className='text-gray-800 mt-2 text-2xl font-semibold dark:text-white md:text-3xl'>
            Get in touch
          </h1>

          <p className='text-gray-500 dark:text-gray-400 mt-3'>
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1'>
            <div>
              <span className='text-blue-500 bg-blue-100/80 dark:bg-gray-800 inline-block rounded-full p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
              </span>

              <h2 className='text-gray-800 mt-4 text-base font-medium dark:text-white'>
                Email
              </h2>
              <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                Our friendly team is here to help.
              </p>
              <p className='text-blue-500 dark:text-blue-400 mt-2 text-sm'>
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span className='text-blue-500 bg-blue-100/80 dark:bg-gray-800 inline-block rounded-full p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  />
                </svg>
              </span>

              <h2 className='text-gray-800 mt-4 text-base font-medium dark:text-white'>
                Office
              </h2>
              <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                Come say hello at our office HQ.
              </p>
              <p className='text-blue-500 dark:text-blue-400 mt-2 text-sm'>
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className='text-blue-500 bg-blue-100/80 dark:bg-gray-800 inline-block rounded-full p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </span>

              <h2 className='text-gray-800 mt-4 text-base font-medium dark:text-white'>
                Phone
              </h2>
              <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>
                Mon-Fri from 8am to 5pm.
              </p>
              <p className='text-blue-500 dark:text-blue-400 mt-2 text-sm'>
                +1 (555) 000-0000
              </p>
            </div>
          </div>

          <div className='h-96 overflow-hidden rounded-lg lg:col-span-2 lg:h-auto'>
            <iframe
              width='100%'
              height='100%'
              frameBorder='550'
              title='map'
              scrolling='no'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1704017492763!5m2!1sen!2sbd'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
