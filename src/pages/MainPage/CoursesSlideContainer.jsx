import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import CoursSlideElem from './CoursSlideElem';
// import CoursSlideElem from './CoursSlideElem';

function CoursesSlideContainer() {
  const language=useSelector((state)=>state.language.value)
  return (
    <Swiper
    pagination={{
      // dynamicBullets: true,
      clickable:true
    }}
    loop={true}
    grabCursor={true}
    slidesPerView={3}
    spaceBetween={30}

    className="mySwiper "
    >
       {
      language.courseCard.map((item,i)=>{
       return <SwiperSlide>
        <CoursSlideElem
        key={i}
        courseImage={item.img}
        courseCategory={item.title}
        courseDetails={item.details}
        courseDescription={item.desc}

        />
       </SwiperSlide>
      })
    }
    </Swiper>
  )
}

export default CoursesSlideContainer