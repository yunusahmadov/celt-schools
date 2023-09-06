import React from 'react'

function ContactsHeader() {
  return (
   			<header id="rs-header-2" class="rs-header-2">
				{/* <!-- Menu Start --> */}
				<div class="menu-area menu-sticky">
					<div class="container">
						<div class="row rs-vertical-middle">
							<div class="col-lg-3 col-md-12">
								<div class="logo-area">
									<a href="index.html"><img src="images/logo-white.png" alt="logo"/></a>
								</div>
							</div>
							<div class="col-lg-9 col-md-12 relative">
								<div class="main-menu">
									<a class="rs-menu-toggle"><i class="fa fa-bars"></i>Menu</a>
									<nav class="rs-menu">
										<ul class="nav-menu">
											{/* <!-- Home --> */}
											<li class="menu-item-has-children"> <a href="#" class="home">Home</a>
												 <ul class="sub-menu">
												   <li><a href="index.html">Home One</a> </li>
												   <li class="active"><a href="index2.html">Home Two</a> </li>
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
                                            <li class="menu-item-has-children"><a href="about.html">About Us</a>
                                                <ul class="sub-menu">
                                                    <li><a href="about.html">About One</a></li>
                                                    <li><a href="about2.html">About Two</a></li>
                                                    <li><a href="about3.html">About Three</a></li>
                                                </ul>
                                            </li>
                                            {/* <!--About Menu End-->  */}

                                            {/* <!-- Drop Down --> */}
											<li class="menu-item-has-children"> <a href="#">Pages</a>
                                                <ul class="sub-menu"> 
                                                    <li class="menu-item-has-children"> <a href="#">Teachers</a>
                                                      <ul class="sub-menu">
                                                        <li> <a href="teachers.html">Teachers</a> </li>
                                                        <li> <a href="teachers-without-filter.html">Teachers Without Filter</a> </li> 
                                                        <li> <a href="teachers-single.html">Teachers Single</a> </li>
                                                      </ul>
                                                    </li>
                                                    
                                                    <li class="menu-item-has-children"> <a href="#">Gallery</a>
                                                      <ul class="sub-menu">
                                                        <li> <a href="gallery.html">Gallery One</a> </li>
                                                        <li> <a href="gallery2.html">Gallery Two</a> </li> 
                                                        <li> <a href="gallery3.html">Gallery Three</a> </li>
                                                      </ul>
                                                    </li>
                                                    
                                                    <li class="menu-item-has-children"> <a href="#">Shop</a>
                                                      <ul class="sub-menu">
                                                        <li> <a href="shop.html">Shop</a> </li> 
                                                        <li> <a href="shop-details.html">Shop Details</a> </li>
                                                      </ul>
                                                    </li>
                                                    
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    
                                                    <li><a href="error-404.html">Error 404</a></li>
                                                </ul>
											</li>
											{/* <!--End Icons --> */}
                                            
											{/* <!--Courses Menu Start--> */}
		                                    <li class="menu-item-has-children"> <a href="#">Courses</a>
		                                      <ul class="sub-menu">
		                                        <li><a href="courses.html">Courses One</a></li>
		                                        <li><a href="courses2.html">Courses Two</a></li>
		                                        <li><a href="courses-details.html">Courses Details</a></li>
                                                  <li><a href="courses-details2.html">Courses Details 2</a></li>
		                                      </ul>
		                                    </li>
		                                    {/* <!--Courses Menu End--> */}
                                            
											{/* <!--Events Menu Start--> */}
											<li class="menu-item-has-children"> <a href="#">Events</a>
												<ul class="sub-menu">
													<li><a href="events.html">Events</a></li>
													<li><a href="events-details.html">Events Details</a></li>
												</ul>
											</li>
											{/* <!--Events Menu End--> */}
											
											{/* <!--blog Menu Start--> */}
											<li class="menu-item-has-children"> <a href="#">Blog</a>
												<ul class="sub-menu">
													<li><a href="blog.html">Blog</a></li>
													<li><a href="blog-details.html">Blog Details</a></li>
												</ul>
											</li>
											{/* <!--blog Menu End--> */}
                                            
											{/* <!--Contact Menu Start--> */}
											<li class="current-menu-item current_page_item "><a href="contact.html">Contact</a></li>
								            {/* <!--Contact Menu End--> */}
										</ul>
									</nav>
								</div>
								<div class="searce-box">
                                    <a class="rs-search" data-target=".search-modal" data-toggle="modal" href="#"><i class="fa fa-search"></i></a>
                                </div>
							</div>													
						</div>
					</div>
				</div>
				{/* <!-- Menu End --> */}
			</header>
  )
}

export default ContactsHeader