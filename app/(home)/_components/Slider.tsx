'use client'

import { Swiper,SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import { data } from "@/data/sliderContents";
import Image from "next/image";

const sliderContents = [{
  image:'',
  heading:'',
  subHeading:''
}]


const Slider = () => {
  return (
    <section className="h-[calc(100vh-5rem)] ">
          <Swiper pagination={{clickable:true}} speed={500} grabCursor={true} loop={true} autoplay={{
            delay:3000,
            disableOnInteraction:false
          }} navigation={true} modules={[Navigation,Pagination,Autoplay]} className="mySwiper w-full h-full">

            {
              data?.map(slide=>(
              <SwiperSlide key={slide.heading}><Image src={slide.image} width={500} height={500} alt={slide.heading} className="w-full h-full object-cover"/>
              <h1>{slide.heading}</h1>
              </SwiperSlide>
              ))
            }
       
        
      </Swiper>
    </section>
  )
}

export default Slider