import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';
import UpcomingElem from '../../components/UpcomingElem';

export default function Upcoming() {
  return (
    <>
      <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
    
        loop={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView:2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <UpcomingElem/>
        </SwiperSlide>
        <SwiperSlide>
        <UpcomingElem/>
       
        </SwiperSlide>
        <SwiperSlide>
        <UpcomingElem/>
       
        </SwiperSlide>
        <SwiperSlide>
        <UpcomingElem/>
       
        </SwiperSlide>
        <SwiperSlide>
        <UpcomingElem/>
        
        </SwiperSlide>
        <SwiperSlide>
        <UpcomingElem/>
       
        </SwiperSlide>
      </Swiper>
    </>
  );
}
