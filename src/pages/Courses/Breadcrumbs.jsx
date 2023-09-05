import React from 'react'
import { useSelector } from 'react-redux'

function Breadcrumbs() {
  const language=useSelector((state)=>state.language.value)
    
  return (
    <div className="rs-breadcrumbs header-bg7 breadcrumbs-overlay">
    <div className="breadcrumbs-inner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="page-title">{language.future}</h1>
            <ul>
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>Our Courses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Breadcrumbs