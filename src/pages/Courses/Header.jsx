import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { openBottomMenu } from "../../features/MenuSlice/menuSlice";

function Header() {
  const language=useSelector((state)=>state.language.value)
  const bottomMenuOPened = useSelector((state) => state.menuOpened.menuBottom);
  const dispatch=useDispatch();
  console.log(bottomMenuOPened);
  return (
    <header id="rs-header-2" className="rs-header-2">
    {/* <!-- Menu Start --> */}
    <div className="menu-area menu-sticky">
      <div className="container">
        <div className="row rs-vertical-middle">
          <div className="col-lg-3 col-md-12">
            <div className="logo-area">
              <a href="/">
                <img src="images/logo-white.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 relative">
            <div className="main-menu">
              <a className="rs-menu-toggle another-a" onClick={() => dispatch(openBottomMenu())}>
                <i className="fa fa-bars"></i>Menu
              </a>
              <nav className="rs-menu" >
                <ul className="nav-menu" style={bottomMenuOPened?{height:"500px",opacity:1}:{height:"0px",opacity:0}}>
                {
                        language.nav.map((item, i) => (
                         <li className="menu-item-has-children" key={i}>
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