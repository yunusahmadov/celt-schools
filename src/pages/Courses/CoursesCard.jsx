import React from 'react'

function CoursesCard({courseImage,courseValue,courseCategory,courseDate,courseDuration,courseDetails,courseDescription}) {
  return (
    <div class="col-lg-4 col-md-6 grid-item ">
    <div class="course-item">
        <div class="course-img">
        <img src={courseImage} alt="" />
            {/* <span class="course-value">{courseValue}</span> */}
            <div class="course-toolbar">
                <h4 class="course-category"><a href="#">{courseCategory}</a></h4>
                {/* <div class="course-date">
                    <i class="fa fa-calendar"></i> {courseDate}
                </div>
                <div class="course-duration">
                    <i class="fa fa-clock-o"></i> {courseDuration}
                </div> */}
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
                <a href="#">Müraciət ET</a>
            </div>
        </div>
    </div>						
</div>
  )
}

export default CoursesCard