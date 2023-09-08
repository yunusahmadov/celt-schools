import React from 'react'
import MainMenu from './MainMenu'

function Header() {
  return (
    <>
           <header id="rs-header" className="rs-header">
            
            {/* <!-- Header Top Start --> */}
            <div className="rs-header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="header-contact">
                                <div id="info-details" className="widget-text">
                                    <i className="glyph-icon flaticon-email"></i>
                                    <div className="info-text">
                                        <a href="mailto:info@domain.com">
                                            <span>Mail Us</span>
                                            info@domain.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="logo-area text-center">
                                <a href="index.html"><img src="images/logo.png" alt="logo"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="header-contact pull-left">
                                <div id="phone-details" className="widget-text">
                                    <i className="glyph-icon flaticon-phone-call"></i>
                                    <div className="info-text">
                                        <a href="tel:4155551234">
                                            <span>Call Us</span>
                                            +1234-567-890
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>				
                </div>
            </div>

            <MainMenu/>
        </header>
    
    </>
    
  )
}

export default Header