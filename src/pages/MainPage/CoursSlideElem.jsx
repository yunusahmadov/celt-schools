import React from 'react'
import { useSelector } from 'react-redux'

function CoursSlideElem({courseImage,courseValue,courseCategory,courseDate,courseDuration,courseDetails,courseDescription}) {
    const language=useSelector((state)=>state.language.value)

  return (
    <div class="course-item">
    <div class="course-img">
    <img src={courseImage} alt="" />
        {/* <span class="course-value">{courseValue}</span> */}
        <div class="course-toolbar">
            <h4 class="course-category"><a href="#">{courseCategory}</a></h4>
        </div>
    </div>
    <div class="course-body">
        <div class="course-desc">
            <h4 class="course-title"><a href="courses-details.html">{courseDetails}</a></h4>
            <p>
             {courseDescription}
            </p>
        </div>
    </div>
    <div class="course-footer">
        <div class="course-seats">
            {/* <i class="fa fa-users"></i> 70 SEATS */}
        </div>
        <div class="course-button">
            <a href="/contacts">{language.applyBtn}</a>
        </div>
    </div>
</div>	
  )
}

export default CoursSlideElem