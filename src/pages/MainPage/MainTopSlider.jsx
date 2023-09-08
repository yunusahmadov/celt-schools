import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, } from 'swiper/modules';
import MainSliderContent from './MainSliderContent';



function MainTopSlider() {
  return (
    <div className='main-top-slider'>
      <Swiper
        pagination={{
          // dynamicBullets: true,
          clickable:true
        }}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='main-top-slider-container main-top-slider-container-1'>
          <div className="slider-shadow">
            <MainSliderContent
              sliderTitle={"WELCOME TO EDULEARN"}
              sliderText={"Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo. Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor."}
            />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main-top-slider-container main-top-slider-container-2'>
          <div className="slider-shadow">
          <MainSliderContent
              sliderTitle={"ARE YOU READY TO APPLY?"}
              sliderText={"Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo. Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor."}
            />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main-top-slider-container main-top-slider-container-3'>
          <div className="slider-shadow">
          <MainSliderContent
              sliderTitle={"ARE YOU READY TO APPLY?"}
              sliderText={"Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo. Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor."}
            />
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainTopSlider