import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import MainSliderContent from './MainSliderContent';
import axios from 'axios';
import SliderCard from './SliderCard';

function MainTopSlider() {
  const [studentState, setStudentState] = useState([])

  useEffect(()=>{
    axios.get(`https://phplaravel-944849-3287799.cloudwaysapps.com/api/v1/accepted-students?page=1&lang_id=1`)
    .then(resp=>{
        // console.log(resp.data)
        setStudentState(resp.data)
        console.log(resp.data);
    })
},[])
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
  
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          767: {
            slidesPerView:2,
            spaceBetween: 40,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      
      modules={[Pagination,Autoplay,Navigation]}
      className="container main-slider"
    >
    {
            studentState?.map((data, i)=>{
                return(
                  <SwiperSlide>
                    <SliderCard key={i} data={data}/>
                    </SwiperSlide>
                )
            })
        }

    </Swiper>
  </>
  );
}

export default MainTopSlider