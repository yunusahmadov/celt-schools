import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../features/MenuSlice/menuSlice";

function MainMenu() {
  const language = useSelector((state) => state.language.value);
  const menuOpened = useSelector((state) => state.menuOpened.value);
  const dispatch=useDispatch();

  console.log(menuOpened);


  return (
    <div>
      <div className="menu-area menu-sticky">
        <div className="container">
          <div className="main-menu">
            <div className="row relative">
              <div className="col-sm-12">
                {/* <!-- <div id="logo-sticky" className="text-center">
                                    <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                                </div> --> */}
                <a className="rs-menu-toggle">
                  <i className="fa fa-bars"></i>Menu
                </a>
                <nav className="rs-menu">
                  <ul className="nav-menu">
                    {language.nav.map((item, i) => (
                      <li
                        className={`menu-item-has-children ${
                          i === 0 ? "first-item" : ""
                        }`}
                      >
                        <a href="" style={{ color: i === 0 ? "red" : "white" }}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="right-bar-icon rs-offcanvas-link text-right">
                  <a
                    className="hidden-xs rs-search"
                    data-target=".search-modal"
                    data-toggle="modal"
                    href="#"
                  >
                    <i className="fa fa-search"></i>
                  </a>

                  <a id="nav-expander" className="nav-expander fixed" onClick={() => dispatch(openMenu())} >
                    <i className="fa fa-bars fa-lg white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
