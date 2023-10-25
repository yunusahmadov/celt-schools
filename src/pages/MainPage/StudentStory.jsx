import React from 'react'
import img from '../../images/Hazal_web_thumb.jpg'
import { useNavigate } from 'react-router-dom'
function StudentStory() {
  const navigate=useNavigate()
  return (
    <div className="container">
      <div className="student-story-container">
      <div className="student-story">
            <div className="student-story-left">
                <img src={img} alt="" />
            </div>
            <div className="student-story-right">
                <h3>"CELT School diploma mənə universitetə bir başa qəbul olmağıma və burda çox asan oxumağına böyük dəstək oldu. Bakıda oxuduğum dərslərin çoxunu burda təkrarlayıram. Təşəkkürlər hər kəsə. "</h3>
                <p>Aisha</p>
                <p>Groningen University</p>
            </div>
        </div>
        <button className='pinkbtn' onClick={()=>navigate('/graduates')}> Bütün tələbələrə bax
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default StudentStory