import React from 'react'
import { az_lang } from '../../language/language'
import CoursesCard from './CoursesCard'

function OurCourses() {
  return (
    <div id="rs-courses-3" className="rs-courses-3 sec-spacer">
    <div className="container">
      <div className="abt-title">
        <h2>OUR COURSES</h2>
      </div>
      <div className="gridFilter">
        <button className="active" data-filter="*">
          ALL
        </button>
        <button data-filter=".filter1">SCIENCE</button>
        <button data-filter=".filter2">BUSINESS</button>
        <button data-filter=".filter3">HUMANITIES</button>
        <button data-filter=".filter4">DIPLOMA</button>
      </div>
      <div className="row grid">

    {
      az_lang.courseCard.map((item,i)=>{
       return <CoursesCard
        key={i}
        courseImage={item.img}
        courseCategory={item.title}
        courseDetails={item.details}
        courseDescription={item.desc}

        />
      })
    }
      </div>
      {/* <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item disabled"><a className="page-link fa fa-angle-left" href="#" tabindex="-1"></a></li>
                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link dotted" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link fa fa-angle-right" href="#"></a></li>
            </ul>
        </nav> */}
    </div>
  </div>
  )
}

export default OurCourses