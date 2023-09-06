import React from 'react'

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
            {/* <!-- Header Top End -->

            <!-- Menu Start --> */}
            <div className="menu-area menu-sticky">
                <div className="container">
                    <div className="main-menu">
                        <div className="row relative">
                            <div className="col-sm-12">
                                {/* <!-- <div id="logo-sticky" className="text-center">
                                    <a href="index.html"><img src="images/logo.png" alt="logo"></a>
                                </div> --> */}
                                <a className="rs-menu-toggle"><i className="fa fa-bars"></i>Menu</a>
                                <nav className="rs-menu">
                                    <ul className="nav-menu">
                                        {/* <!-- Home --> */}
                                        <li className="current-menu-item current_page_item menu-item-has-children"> <a href="#" className="home">Home</a>
                                            <ul className="sub-menu">
                                              <li className="active"><a href="index.html">Home One</a> </li>
                                              <li><a href="index2.html">Home Two</a> </li>
                                              <li><a href="index3.html">Home Three</a></li>
                                              <li><a href="index4.html">Home Four</a> </li>
                                              <li><a href="index5.html">Home Five</a> </li>
                                              <li><a href="instructor-home.html">Home Instructor</a> </li>
                                              <li><a href="index7.html">Home Seven</a> </li>
                                              <li><a href="index8.html">Home Eight</a> </li>
                                            </ul>
                                        </li>
                                        {/* <!-- End Home -->  */}
                                        
                                        {/* <!--About Menu Start--> */}
                                        <li className="menu-item-has-children"> <a href="#">About Us</a>
                                            <ul className="sub-menu">
                                                <li> <a href="about.html">About One</a></li>
                                                <li><a href="about2.html">About Two</a></li>
                                                <li><a href="about3.html">About Three</a></li>
                                            </ul>
                                        </li>
                                        {/* <!--About Menu End-->  */}

                                        {/* <!-- Drop Down Pages Start --> */}
                                        <li className="rs-mega-menu mega-rs"> <a href="#">Mega</a>
                                            <ul className="mega-menu"> 
                                                <li className="mega-menu-container">
                                                    <div className="mega-menu-innner">
                                                        <div className="single-magemenu">
                                                            <ul className="sub-menu">
                                                                <li> <a href="about.html">About One</a></li>
                                                                <li><a href="about2.html">About Two</a></li>
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="single-magemenu">
                                                            <ul className="sub-menu">
                                                                <li> <a href="teachers.html">Teachers</a> </li>
                                                                <li> <a href="teachers-without-filter.html">Teachers Without Filter</a> </li> 
                                                                <li> <a href="teachers-single.html">Teachers Single</a> </li>
                                                                <li> <a href="contact.html">Contact</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="single-magemenu">
                                                            <ul className="sub-menu">
                                                                <li> <a href="gallery.html">Gallery One</a> </li>
                                                                <li> <a href="gallery2.html">Gallery Two</a> </li> 
                                                                <li> <a href="gallery3.html">Gallery Three</a> </li>
                                                                <li><a href="error-404.html">Error 404</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="single-magemenu">
                                                            <ul className="sub-menu">
                                                                <li> <a href="shop.html">Shop</a> </li> 
                                                                <li> <a href="shop-details.html">Shop Details</a> </li>
                                                
                                                                <li><a href="cart.html">Cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!--Drop Down Pages End -->
                                        
                                        <!--Courses Menu Start--> */}
                                        <li className="menu-item-has-children"> <a href="#">Courses</a>
                                          <ul className="sub-menu">
                                            <li><a href="courses.html">Courses One</a></li>
                                            <li><a href="courses2.html">Courses Two</a></li>
                                            <li><a href="courses-details.html">Courses Details</a></li>
                                              <li><a href="courses-details2.html">Courses Details 2</a></li>
                                          </ul>
                                        </li>
                                        {/* <!--Courses Menu End--> */}
                                        
                                        {/* <!--Events Menu Start--> */}
                                        <li className="menu-item-has-children"> <a href="#">Events</a>
                                            <ul className="sub-menu">
                                                <li><a href="events.html">Events</a></li>
                                                <li><a href="events-details.html">Events Details</a></li>
                                                <li> <a href="contact.html">Contact</a></li>
                                            </ul>
                                        </li>
                                        
                                        {/* <!--Events Menu End--> */}
                                        
                                        {/* <!-- Drop Down --> */}
                                        <li className="menu-item-has-children"> <a href="#">Pages</a>
                                            <ul className="sub-menu"> 
                                                <li className="menu-item-has-children"> <a href="#">Teachers</a>
                                                  <ul className="sub-menu">
                                                    <li> <a href="teachers.html">Teachers</a> </li>
                                                    <li> <a href="teachers-without-filter.html">Teachers Without Filter</a> </li> 
                                                    <li> <a href="teachers-single.html">Teachers Single</a> </li>
                                                  </ul>
                                                </li>
                                                
                                                <li className="menu-item-has-children"> <a href="#">Gallery</a>
                                                  <ul className="sub-menu">
                                                    <li> <a href="gallery.html">Gallery One</a> </li>
                                                    <li> <a href="gallery2.html">Gallery Two</a> </li> 
                                                    <li> <a href="gallery3.html">Gallery Three</a> </li>
                                                  </ul>
                                                </li>
                                                
                                                <li className="menu-item-has-children"> <a href="#">Shop</a>
                                                  <ul className="sub-menu">
                                                    <li> <a href="shop.html">Shop</a> </li> 
                                                    <li> <a href="shop-details.html">Shop Details</a> </li>
                                                  </ul>
                                                </li>
                                                
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                
                                                <li><a href="error-404.html">Error 404</a></li>
                                            </ul>
                                        </li>
                                        {/* <!--End Icons -->
                                        
                                        <!--blog Menu Start--> */}
                                        <li className="menu-item-has-children"> <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        {/* <!--blog Menu End-->
                                        
                                        <!--Contact Menu Start--> */}
                                        <li> <a href="contact.html">Contact</a></li>
                                        {/* <!--Contact Menu End--> */}
                                    </ul>
                                </nav>
                                <div className="right-bar-icon rs-offcanvas-link text-right">
                                    <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#"><i className="fa fa-search"></i></a>

                                    <a id="nav-expander" className="nav-expander fixed"><i className="fa fa-bars fa-lg white"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Menu End --> */}
        </header>
    
    </>
    
  )
}

export default Header