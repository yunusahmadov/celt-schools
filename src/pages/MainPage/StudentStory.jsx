import React from 'react'
import img from '../../images/Hazal_web_thumb.jpg'
function StudentStory() {
  return (
    <div className="container">
      <div className="student-story-container">
      <div className="student-story">
            <div className="student-story-left">
                <img src={img} alt="" />
            </div>
            <div className="student-story-right">
                <h3>"Celt definitely helped me build a varied portfolio. I think that being able to show a wide range of skills helped me in my university interview."</h3>
                <p>Hazal</p>
                <p>Leeds Arts University</p>
            </div>
        </div>
        <button className='pinkbtn'>SEE ALL STUDENT STORIES 
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default StudentStory