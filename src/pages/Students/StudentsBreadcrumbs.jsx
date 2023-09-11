import React from 'react'
import { useSelector } from 'react-redux'

function StudentsBreadcrumbs({pageName}) {
  const language=useSelector((state)=>state.language.value)
    
  return (
    <div className="rs-breadcrumbs header-bg8 breadcrumbs-overlay">
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
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudentsBreadcrumbs