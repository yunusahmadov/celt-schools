import React from 'react'
import { useSelector } from 'react-redux'

function Breadcrumbs({pageName,pageTitle}) {
  const language=useSelector((state)=>state.language.value)
    
  return (
    <div className="rs-breadcrumbs header-bg7 breadcrumbs-overlay">
    <div className="breadcrumbs-inner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="page-title">{pageTitle}</h1>
            <ul>
              <li>
                <a className="active" href="/">
                  {language.home}
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

export default Breadcrumbs