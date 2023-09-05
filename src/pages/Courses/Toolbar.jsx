import React from 'react'
import Language from '../../features/LanguageRedux/Language'

function Toolbar() {
  return (
    <div className="rs-toolbar">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="rs-toolbar-left">
            <div className="welcome-message">
              <i className="fa fa-bank"></i>
              <span>Welcome to Edulearn</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rs-toolbar-right">
            <div className="toolbar-share-icon">
              <ul>
                <li>
                  <Language/>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="apply-btn">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Toolbar