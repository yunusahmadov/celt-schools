import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../features/MenuSlice/menuSlice";

function RightMenuToggle() {
  const menuOpened = useSelector((state) => state.menuOpened.value);
  const dispatch=useDispatch()

  return (
    <nav className="right_menu_togle" style={menuOpened?{right:"0px"}:{right:"-23rem"}}>
      <div className="close-btn">
        <span id="nav-close" className="text-center" onClick={() => dispatch(openMenu())}>
          x
        </span>
      </div>
      <div className="canvas-logo">
        <a href="/">
          <img src="images/logo-white.png" alt="logo" />
        </a>
      </div>
      <ul className="sidebarnav_menu list-unstyled main-menu">
        <li className="current-menu-item menu-item-has-children">
          <a href="/">Home
          <span className="icon"></span></a>
        </li>
{/* 
        <li className="menu-item-has-children">
          <a href="#">About Us</a>
        </li>

        <li className="menu-item-has-children">
          <a href="#">Pages</a>
        </li> */}

        <li className="menu-item-has-children">
          <a href="/courses">Courses
          <span className="icon"></span></a>
        </li>

        <li className="menu-item-has-children">
          <a href="/events">Events
          <span className="icon"></span></a>
        </li>
        <li>
          <a href="/contacts">
            Contact<span className="icon"></span>
          </a>
        </li>
      </ul>
      {/* <div className="search-wrap">
        <label className="screen-reader-text">Search for:</label>
        <input
          type="search"
          placeholder="Search..."
          name="s"
          className="search-input"
          value=""
        />
        <button type="submit" value="Search">
          <i className="fa fa-search"></i>
        </button>
      </div> */}
    </nav>
  );
}

export default RightMenuToggle;
