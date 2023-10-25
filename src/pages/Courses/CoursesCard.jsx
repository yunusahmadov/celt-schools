import React from 'react'
import { useSelector } from 'react-redux'

function CoursesCard({courseImage,courseName}) {
    const language=useSelector((state)=>state.language.value)

  return (
<div className="course-card">
    <div className="course-img">
        <img src={courseImage} alt="" />
    </div>
    <div className="course-text">
        <h3>{courseName}</h3>
    </div>
    <div className="course-button">
        <button>Learn More</button>
    </div>
</div>				

  )
}

export default CoursesCard