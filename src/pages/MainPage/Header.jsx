import React from 'react'
import MainMenu from './MainMenu'

function Header() {
  return (
    <>
           <header id="rs-header" className="rs-header">
            
            {/* <!-- Header Top Start --> */}
            <div className="rs-header-top">
            <div className="rs-header-left">
            <a href="/"><img src="images/logo.png" alt="logo"/></a>
            </div>
            <div className="rs-header-right">
            <MainMenu/>
                </div>                       
                </div>

        </header>
    
    </>
    
  )
}

export default Header