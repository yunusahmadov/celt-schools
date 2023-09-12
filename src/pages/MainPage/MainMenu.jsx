import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openBottomMenu, openMenu } from "../../features/MenuSlice/menuSlice";

function MainMenu() {
  const language = useSelector((state) => state.language.value);
  const menuOpened = useSelector((state) => state.menuOpened.value);
  const bottomMenuOPened = useSelector((state) => state.menuOpened.menuBottom);

  const dispatch=useDispatch();

      // Состояние для отслеживания ширины экрана
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      // Обработчик изменения размера окна
      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Добавляем слушателя события изменения размера окна
        window.addEventListener('resize', handleResize);
    
        // Удаляем слушателя при размонтировании компонента
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  // console.log(menuOpened);
  console.log(bottomMenuOPened);
  const hrefs = ["HOME", "A LEVEL DIPLOMA", "ADMISSION", "FIELDS", "SUMMER CAMP", "STUDENTS", "/contacts", "REGISTRATION"];

  return (
    <div>
      <div className="menu-area menu-sticky" style={bottomMenuOPened?{height:"500px"}:{height:"50px"}}>
        <div className="container">
          <div className="main-menu">
            <div className="row relative">
              <div className="col-sm-12">
                {/* <!-- <div id="logo-sticky" className="text-center">
                                    <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                                </div> --> */}
                <a className="rs-menu-toggle" onClick={() => dispatch(openBottomMenu())}>
                  <i className="fa fa-bars" ></i>Menu
                </a>
                <nav className="rs-menu">
                  <ul className="nav-menu" style={bottomMenuOPened?{visibility:'visible'}:{visibility:windowWidth >= 991 ? 'visible' : 'hidden'}}>
                    {language.nav.map((item, i) => (
                      <li key={i} 
                        className={`menu-item-has-children ${
                          i === 0 ? "first-item" : ""
                        }`}
                      >
                        <a href={hrefs[i]} style={{ color: i === 0 ? "red" : "white" }}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="right-bar-icon rs-offcanvas-link text-right">
                  {/* <a
                    className="hidden-xs rs-search"
                    data-target=".search-modal"
                    data-toggle="modal"
                    href="#"
                  >
                    <i className="fa fa-search"></i>
                  </a> */}

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
