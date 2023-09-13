import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openBottomMenu, openMenu } from "../../features/MenuSlice/menuSlice";
import Language from "../../features/LanguageRedux/Language";

function MainMenu() {
  const language = useSelector((state) => state.language.value);
  const menuOpened = useSelector((state) => state.menuOpened.value);
  const bottomMenuOpened = useSelector((state) => state.menuOpened.menuBottom);

  const dispatch = useDispatch();

  // Состояние для отслеживания ширины экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHeader, setShowHeader] = useState(false);

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

  // Функция для добавления/удаления класса "sticky"
  const handleScroll = () => {
    const header = document.querySelector(".testtt");
    if (window.scrollY > 200) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  // Добавляем слушателя события прокрутки страницы
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Удаляем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  const hrefs = [
    "/",
    "/",
    "/",
    "/courses",
    "/contacts ",
    "/graduates",
    "/contacts",
    "/contacts",
  ];

  return (
    <div>
      <div
        className="testtt menu-area menu-sticky"
        style={bottomMenuOpened ? { height: "540px" } : { height: "55px" }}
      >
        <div className="container">
          <div className={`main-menu `}>
            <div className="row relative">
              <div className="col-sm-12">
                {/* <!-- <div id="logo-sticky" className="text-center">
                                    <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                                </div> --> */}
                <a className="rs-menu-toggle" onClick={() => dispatch(openBottomMenu())}>
                  <i className="fa fa-bars"></i>Menu
                </a>
                <nav className="rs-menu">
                  <ul
                    className="nav-menu"
                    style={
                      bottomMenuOpened
                        ? { visibility: "visible" ,opacity:'1'}
                        : { visibility: windowWidth >= 991 ? "visible" : "hidden",opacity: windowWidth >= 991 ? "1" : "0"  }
                    }
                  >
                    {language.nav.map((item, i) => (
                      <li
                        key={i}
                        className={`menu-item-has-children ${i === 0 ? "first-item" : ""}`}
                      >
                        <a href={hrefs[i]} style={{ color: i === 0 ? "red" : "white" }}>
                          {item}
                        </a>
                      </li>
                    ))}
                    <li>
                      <Language />
                    </li>
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
                  <a id="nav-expander" className="nav-expander fixed" onClick={() => dispatch(openMenu())}>
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

