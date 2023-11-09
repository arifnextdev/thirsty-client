'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { data } from '@/data/sliderContents';
import Image from 'next/image';
import Overlay from '@/app/components/ui/Overlay';
import Link from 'next/link';
import { cn } from '@/app/libs/utils';
import { buttonVariants } from '@/app/components/ui/Button';

const sliderContents = [
  {
    image: '',
    heading: '',
    subHeading: '',
  },
];

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)] w-full'>
      <Swiper
        pagination={{ clickable: true }}
        speed={500}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {data?.map((slide) => (
          <SwiperSlide key={slide.heading} className='relative h-full w-full'>
            <Image
              src={slide.image}
              width={1920}
              height={1080}
              alt={slide.heading}
              className='h-full w-full object-cover '
            />
            <Overlay />
            <div className='sp container absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.subHeading}</p>
              <Link
                href={'/beauty-packages'}
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Browse Beauty Packages
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
