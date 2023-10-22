import React from 'react'
import { az_lang } from '../../language/language'
import CoursesCard from './CoursesCard'
import { useSelector } from 'react-redux'

function OurCourses() {
const language=useSelector((state)=>state.language.value)
  
  return (
    <div id="rs-courses-3" className="rs-courses-3 sec-spacer">
    <div className="container">
      <div className="abt-title">
        <h2>OUR COURSES</h2>
      </div>

      <div className="row grid">

    {
      language.courseCard.map((item,i)=>{
       return<div className="col-lg-4 col-md-6 grid-item ">

       <CoursesCard
        key={i}
        courseImage={item.img}
        courseCategory={item.title}
        courseDetails={item.details}
        courseDescription={item.desc}

        />
        </div>
      })
    }
      </div>
    </div>
  </div>
  )
}

export default OurCourses