import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../features/MenuSlice/menuSlice";
import logo from '../../images/header-logo.png'
import Language from "../../features/LanguageRedux/Language";
import { changeToAz, changeToEn } from "../../features/LanguageRedux/languageSlice";


function RightMenuToggle() {
  const menuOpened = useSelector((state) => state.menuOpened.value);


  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState('AZ');


  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
    }
    if (storedLanguage == 'EN') {
        dispatch(changeToEn());
        setSelectedLanguage('EN')
    }else if (storedLanguage == 'AZ') {
                    dispatch(changeToAz());
                    setSelectedLanguage('AZ ')
    }else{
        console.log('he');
    }
}, [selectedLanguage]);

const handleLanguageChange = (newLanguage) => {
  setSelectedLanguage(newLanguage);

  localStorage.setItem('selectedLanguage', newLanguage);

  switch (newLanguage) {
      case 'AZ':
          dispatch(changeToAz());
          break;
      case 'EN':
          dispatch(changeToEn());
          break;
      default:
          break;
  }
};

  return (
    <nav className="right_menu_togle" style={menuOpened?{right:"0px"}:{right:"-23rem"}}>
      <div className="close-btn">
        <span id="nav-close" className="text-center" onClick={() => dispatch(openMenu())}>
          x
        </span>
      </div>
      <div className="canvas-logo">
        <a href="/">
          <img src={logo}alt="logo" />
        </a>
      </div>
      <ul className="sidebarnav_menu list-unstyled main-menu">
        <li className="current-menu-item menu-item-has-children">
          <a href="/">Home
          <span className="icon"></span></a>
        </li>


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
        <li>
          <div className="flags-img">
            
          <img src='https://cdn.countryflags.com/thumbs/azerbaijan/flag-400.png' alt="azicon" onClick={() => handleLanguageChange('AZ')} />
                <img src='https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png' alt="enicon" onClick={() => handleLanguageChange('EN')} />
          </div>
        </li>
      </ul>

    </nav>
  );
}

export default RightMenuToggle;
