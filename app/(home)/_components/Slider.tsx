'use client'

import { Swiper,SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation,Pagination,Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="h-[calc(100vh-5rem)] ">
          <Swiper pagination={{clickable:true}} speed={500} grabCursor={true} loop={true} autoplay={{
            delay:3000,
            disableOnInteraction:false
          }} navigation={true} modules={[Navigation,Pagination,Autoplay]} className="mySwiper w-full h-full">
        <SwiperSlide>Slide</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider