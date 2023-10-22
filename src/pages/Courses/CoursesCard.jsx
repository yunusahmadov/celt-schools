import React from 'react'
import { useSelector } from 'react-redux'

function CoursesCard({courseImage,courseValue,courseCategory,courseDate,courseDuration,courseDetails,courseDescription}) {
    const language=useSelector((state)=>state.language.value)

  return (
    <div className="course-item">
        <div className="course-img">
        <img src={courseImage} alt="" />
            {/* <span className="course-value">{courseValue}</span> */}
            <div className="course-toolbar">
                <h4 className="course-category"><a href="/courses">{courseCategory}</a></h4>
                {/* <div className="course-date">
                    <i className="fa fa-calendar"></i> {courseDate}
                </div>
                <div className="course-duration">
                    <i className="fa fa-clock-o"></i> {courseDuration}
                </div> */}
            </div>
        </div>
        <div className="course-body">
            <div className="course-desc">
                <h4 className="course-title"><a href="/courses">{courseDetails}</a></h4>
                <p>
                 {courseDescription}
                </p>
            </div>
        </div>
        <div className="course-footer">
            <div className="course-seats">
                {/* <i className="fa fa-users"></i> 70 SEATS */}
            </div>
            <div className="course-button">
                <a href="/contacts">{language.applyBtn}</a>
            </div>
        </div>
    </div>						
// </div>
  )
}

export default CoursesCard