import React from 'react'
import { useSelector } from 'react-redux'

function CoursSlideElem({courseImage,courseValue,courseCategory,courseDate,courseDuration,courseDetails,courseDescription}) {
    const language=useSelector((state)=>state.language.value)

  return (
    <div className="course-item">
    <div className="course-img">
    <img src={courseImage} alt="" />
        {/* <span className="course-value">{courseValue}</span> */}
        <div className="course-toolbar">
            <h4 className="course-category"><a href="#">{courseCategory}</a></h4>
        </div>
    </div>
    <div className="course-body">
        <div className="course-desc">
            <h4 className="course-title"><a href="courses-details.html">{courseDetails}</a></h4>
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
  )
}

export default CoursSlideElem