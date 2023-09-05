import React from 'react'
import { useSelector } from "react-redux";

function Header() {
  const language=useSelector((state)=>state.language.value)

  return (
    <header id="rs-header-2" className="rs-header-2">
    {/* <!-- Menu Start --> */}
    <div className="menu-area menu-sticky">
      <div className="container">
        <div className="row rs-vertical-middle">
          <div className="col-lg-3 col-md-12">
            <div className="logo-area">
              <a href="index.html">
                <img src="images/logo-white.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 relative">
            <div className="main-menu">
              <a className="rs-menu-toggle">
                <i className="fa fa-bars"></i>Menu
              </a>
              <nav className="rs-menu">
                <ul className="nav-menu">
                {
                        language.nav.map((item, i) => (
                         <li className="menu-item-has-children">
                           <a href=""> {item} </a>
                         </li>
                        ))
                      }
                </ul>
              </nav>
            </div>
            <div className="searce-box">
              <a
                className="rs-search"
                data-target=".search-modal"
                data-toggle="modal"
                href="#"
              >
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Menu End --> */}
  </header>
  )
}

export default Header