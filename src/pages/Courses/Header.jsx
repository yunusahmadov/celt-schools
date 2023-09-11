import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { openBottomMenu } from "../../features/MenuSlice/menuSlice";

function Header() {
  const language=useSelector((state)=>state.language.value)
  const bottomMenuOPened = useSelector((state) => state.menuOpened.menuBottom);
  const dispatch=useDispatch();
  console.log(bottomMenuOPened);
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
              <ul className="nav-menu" style={bottomMenuOPened ? { height: "450px", opacity: 1,visibility:'visible' } : { height: "0px", opacity: windowWidth >= 991 ? 1 : 0,visibility:windowWidth >= 991 ? 'visible' : 'hidden' }}>
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