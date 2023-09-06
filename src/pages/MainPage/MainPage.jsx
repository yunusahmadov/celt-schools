import React from 'react'
import { az_lang } from '../../language/language';
import Preloader from '../../components/Preloader';
import Toolbar from '../../components/Toolbar';
import Header from './Header';
import Footer from '../Courses/Footer';
import Services from './Services';

function MainPage() {

  return (
    <body className="home1">
    {/* <!--Preloader area start here--> */}
    {/* <Preloader/> */}
    {/* <!--Preloader area end here-->
    
    <!--Full width header Start--> */}
    <div className="full-width-header">

        {/* <!-- Toolbar Start --> */}
        <Toolbar/>
        {/* <!-- Toolbar End --> */}
           {/* <!--Header Start--> */}
        <Header/>

        {/* <!--Header End--> */}

    </div>
    {/* <!--Full width header End--> */}
    
    {/* <!-- Slider Area Start --> */}
    <div id="rs-slider" class="slider-overlay-2" style={{height:"50vh"}}>     
        	<div id="home-slider" class="rs-carousel owl-carousel" data-loop="true" data-items="4" data-margin="0" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="false" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="1" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="1" data-md-device-nav="true" data-md-device-dots="false">
				{/* <!-- Item 1 --> */}
				<div class="item active">
					<img src="images/slider/home1/slide1.jpg" alt="Slide1" />
					<div class="slide-content">
						<div class="display-table">
							<div class="display-table-cell">
								<div class="container text-center">
									<h1 class="slider-title" data-animation-in="fadeInLeft" data-animation-out="animate-out">WELCOME TO EDULEARN</h1>
									<p data-animation-in="fadeInUp" data-animation-out="animate-out" class="slider-desc">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.<br class="hidden-sm-dow"/> Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.</p>  
									<a href="#" class="sl-readmore-btn mr-30" data-animation-in="lightSpeedIn" data-animation-out="animate-out">READ MORE</a>
									<a href="#" class="sl-get-started-btn" data-animation-in="lightSpeedIn" data-animation-out="animate-out">GET STARTED NOW</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Item 2 --> */}
				<div class="item">
					<img src="images/slider/home1/slide2.jpg" alt="Slide2" />
					<div class="slide-content">
						<div class="display-table">
							<div class="display-table-cell">
								<div class="container text-center">
									<h1 class="slider-title" data-animation-in="fadeInUp" data-animation-out="animate-out">ARE YOU READY TO APPLY?</h1>
									<p data-animation-in="fadeInUp" data-animation-out="animate-out" class="slider-desc">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.<br class="hidden-sm-dow"/> Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.</p>  
									<a href="#" class="sl-readmore-btn mr-30" data-animation-in="fadeInUp" data-animation-out="animate-out">READ MORE</a>
									<a href="#" class="sl-get-started-btn" data-animation-in="fadeInUp" data-animation-out="animate-out">GET STARTED NOW</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Item 3 --> */}
				<div class="item">
					<img src="images/slider/home1/slide3.jpg" alt="Slide3" />
					<div class="slide-content">
						<div class="display-table">
							<div class="display-table-cell">
								<div class="container text-center">
									<h1 class="slider-title" data-animation-in="fadeInUp" data-animation-out="animate-out">ARE YOU READY TO APPLY?</h1>
									<p data-animation-in="fadeInUp" data-animation-out="animate-out" class="slider-desc">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.<br/> Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.</p>  
									<a href="#" class="sl-readmore-btn mr-30" data-animation-in="fadeInUp" data-animation-out="animate-out">READ MORE</a>
									<a href="#" class="sl-get-started-btn" data-animation-in="fadeInUp" data-animation-out="animate-out">GET STARTED NOW</a>
								</div>
							</div>
						</div>
					</div>
				</div>

        	</div>         
        </div>
    {/* <!-- Slider Area End --> */}
    
    {/* <!-- Services Start --> */}
    <Services/>
    {/* <!-- Services End --> */}

    {/* <!-- About Us Start --> */}
    <div id="rs-about" className="rs-about sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>ABOUT US</h2>      
                <p>Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about-img rs-animation-hover">
                        <img src="images/about/about.jpg" alt="img02"/>
                        <a className="popup-youtube rs-animation-fade" href="https://www.youtube.com/watch?v=tzMpWiGL8D8" title="Video Icon">
                        </a>
                        <div className="overly-border"></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-desc">
                        <h3>WELCOME TO EDULEARN</h3>      
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div id="accordion" className="rs-accordion-style1">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h3 className="acdn-title" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Our History
                                </h3>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                <div className="card-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h3 className="acdn-title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Our Mission
                                </h3>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                <div className="card-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header mb-0" id="headingThree">
                                <h3 className="acdn-title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Our Vision
                                </h3>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                <div className="card-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Us End --> */}

    {/* <!-- Courses Start --> */}
    <div id="rs-courses" className="rs-courses sec-color sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>OUR POPULAR COURSES</h2>      
                <p>Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="true" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="3" data-md-device-nav="true" data-md-device-dots="true">
                        <div className="cource-item">
                            <div className="cource-img">
                                <img src="images/courses/1.jpg" alt="" />
                                <a className="image-link" href="courses-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                                <span className="course-value">$450</span>
                            </div>
                            <div className="course-body">
                                <a href="#" className="course-category">Science</a>
                                <h4 className="course-title"><a href="courses-details.html">Electrical Engineering</a></h4>
                                <div className="review-wrap">
                                    <ul className="rating">
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star-half-empty"></li>
                                    </ul>
                                    <span className="review">25 Reviews</span>
                                </div>
                                <div className="course-desc">
                                    <p>
                                        Cras ultricies lacus consectetur, consectetur
                                        scelerisque arcu curabitur
                                    </p>
                                </div>
                            </div>
                            <div className="course-footer">
                                <div className="course-time">
                                    <span className="label">Course Time</span>
                                    <span className="desc">3 Year</span>
                                </div>
                                <div className="course-student">
                                    <span className="label">Course Student</span>
                                    <span className="desc">95</span>
                                </div>
                                <div className="class-duration">
                                    <span className="label">Class Duration</span>
                                    <span className="desc">8:30-4:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="cource-item">
                            <div className="cource-img">
                                <img src="images/courses/2.jpg" alt="" />
                                <a className="image-link" href="courses-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                                <span className="course-value">$450</span>
                            </div>
                            <div className="course-body">
                                <a href="#" className="course-category">Science</a>
                                <h4 className="course-title"><a href="courses-details.html">Computer Engineering</a></h4>
                                <div className="review-wrap">
                                    <ul className="rating">
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star-half-empty"></li>
                                    </ul>
                                    <span className="review">39 Reviews</span>
                                </div>
                                <div className="course-desc">
                                    <p>
                                        Cras ultricies lacus consectetur, consectetur
                                        scelerisque arcu curabitur
                                    </p>
                                </div>
                            </div>
                            <div className="course-footer">
                                <div className="course-time">
                                    <span className="label">Course Time</span>
                                    <span className="desc">4 Years</span>
                                </div>
                                <div className="course-student">
                                    <span className="label">Course Student</span>
                                    <span className="desc">99</span>
                                </div>
                                <div className="class-duration">
                                    <span className="label">Class Duration</span>
                                    <span className="desc">8:30-4:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="cource-item">
                            <div className="cource-img">
                                <img src="images/courses/3.jpg" alt="" />
                                <a className="image-link" href="courses-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                                <span className="course-value">$450</span>
                            </div>
                            <div className="course-body">
                                <a href="#" className="course-category">Science</a>
                                <h4 className="course-title"><a href="courses-details.html">Civil Engineering</a></h4>
                                <div className="review-wrap">
                                    <ul className="rating">
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star"></li>
                                        <li className="fa fa-star-half-empty"></li>
                                    </ul>
                                    <span className="review">22 Reviews</span>
                                </div>
                                <div className="course-desc">
                                    <p>
                                        Cras ultricies lacus consectetur, consectetur
                                        scelerisque arcu curabitur
                                    </p>
                                </div>
                            </div>
                            <div className="course-footer">
                                <div className="course-time">
                                    <span className="label">Course Time</span>
                                    <span className="desc">3.5 Years</span>
                                </div>
                                <div className="course-student">
                                    <span className="label">Course Student</span>
                                    <span className="desc">80</span>
                                </div>
                                <div className="class-duration">
                                    <span className="label">Class Duration</span>
                                    <span className="desc">8:30-4:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Courses End --> */}
    
    {/* <!-- Counter Up Section Start--> */}
    <div className="rs-counter pt-100 pb-70 bg3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="counter-content">
                        <h2 className="counter-title">ACHEIVEMENTS</h2>
                        <div className="counter-text">
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.</p>
                        </div>
                        <div className="counter-img rs-image-effect-shine">
                            <img src="images/counter/1.jpg" alt="Counter Discussion"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-80">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus">60</h2>                  
                                <h4 className="counter-desc">TEACHERS</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus">40</h2>
                                <h4 className="counter-desc">COURSES</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus">900</h2>                  
                                <h4 className="counter-desc">STUDENTS</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus">3675</h2>
                                <h4 className="counter-desc">Satisfied Client</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Counter Down Section End --> */}

    {/* <!-- Events Start --> */}
    <div id="rs-events" className="rs-events sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>OUR UPCOMING EVENTS</h2>      
                <p>I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="true" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="3" data-md-device-nav="true" data-md-device-dots="true">
                        <div className="event-item">
                            <div className="event-img">
                                <img src="images/events/1.jpg" alt="" />
                                <a className="image-link" href="events-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                            </div>
                            <div className="events-details sec-color">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>28 June 2017</span>
                                </div>
                                <h4 className="event-title"><a href="events-details.html">PRACTICE WORKSHOP 2018</a></h4>
                                <div className="event-meta">
                                    <div className="event-time">
                                        <i className="fa fa-clock-o"></i>
                                        <span>12.30AM-05.30PM</span>
                                    </div>
                                    <div className="event-location">
                                        <i className="fa fa-map-marker"></i>
                                        <span>Venue A, Main Campus</span>
                                    </div>
                                </div>
                                <div className="event-btn">
                                    <a href="#">Join Event <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src="images/events/2.jpg" alt="" />
                                <a className="image-link" href="events-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                            </div>
                            <div className="events-details sec-color">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>28 April 2017</span>
                                </div>
                                <h4 className="event-title"><a href="events-details.html">CAMPUS EXAMINATION ROOM</a></h4>
                                <div className="event-meta">
                                    <div className="event-time">
                                        <i className="fa fa-clock-o"></i>
                                        <span>10.30AM-03.30PM</span>
                                    </div>
                                    <div className="event-location">
                                        <i className="fa fa-map-marker"></i>
                                        <span>Venue A, Main Campus</span>
                                    </div>
                                </div>
                                <div className="event-btn">
                                    <a href="#">Join Event <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src="images/events/3.jpg" alt="" />
                                <a className="image-link" href="events-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </a>
                            </div>
                            <div className="events-details sec-color">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>28 June 2017</span>
                                </div>
                                <h4 className="event-title"><a href="events-details.html">BEST GRADUATION CEREMONY</a></h4>
                                <div className="event-meta">
                                    <div className="event-time">
                                        <i className="fa fa-clock-o"></i>
                                        <span>10.30AM-03.30PM</span>
                                    </div>
                                    <div className="event-location">
                                        <i className="fa fa-map-marker"></i>
                                        <span>Venue A, Main Campus</span>
                                    </div>
                                </div>
                                <div className="event-btn">
                                    <a href="#">Join Event <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Events End --> */}
    
    {/* <!-- Team Start --> */}
    <div id="rs-team" className="rs-team sec-color sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>OUR EXPERIENCED STAFFS</h2>      
                <p>Considering desire as primary motivation for the generation of narratives is a useful concept.</p>
            </div>
            <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="true" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="3" data-md-device-nav="true" data-md-device-dots="true">
                <div className="team-item">
                    <div className="team-img">
                        <img src="images/team/1.jpg" alt="team Image" />
                        <div className="normal-text">
                            <h3 className="team-name">ABD Rashid Khan</h3>
                            <span className="subtitle">Vice Chancellor</span>
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="overly-border"></div>
                        <div className="display-table">
                            <div className="display-table-cell">
                                <h3 className="team-name"><a href="teachers-single.html">ABD Rashid Khan</a></h3>
                                <span className="team-title">Vice Chancellor</span>
                                <p className="team-desc">Entrusted with planning, implementation and evaluation.</p>
                                <div className="team-social">
                                    <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="team-img">
                        <img src="images/team/2.jpg" alt="team Image" />
                        <div className="normal-text">
                            <h3 className="team-name">Luyes Figery</h3>
                            <span className="subtitle">A. Professor</span>
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="overly-border"></div>
                        <div className="display-table">
                            <div className="display-table-cell">
                                <h3 className="team-name"><a href="teachers-single.html">Luyes Figery</a></h3>
                                <span className="team-title">A. Professor</span>
                                <p className="team-desc">Entrusted with planning, implementation and evaluation.</p>
                                <div className="team-social">
                                    <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="team-img">
                        <img src="images/team/3.jpg" alt="team Image" />
                        <div className="normal-text">
                            <h3 className="team-name">Mr. Mahabub Alam</h3>
                            <span className="subtitle">Assistant Professor</span>
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="overly-border"></div>
                        <div className="display-table">
                            <div className="display-table-cell">
                                <h3 className="team-name"><a href="teachers-single.html">Mr. Mahabub Alam</a></h3>
                                <span className="team-title">Assistant Professor</span>
                                <p className="team-desc">Entrusted with planning, implementation and evaluation.</p>
                                <div className="team-social">
                                    <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="social-icon"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}

    {/* <!-- Calltoaction Start --> */}
    <div id="rs-calltoaction" className="rs-calltoaction sec-spacer bg4">
        <div className="container">
            <div className="rs-cta-inner text-center">
                <div className="sec-title mb-50 text-center">
                    <h2 className="white-color">WEB DESIGN &amp; DEVLOPMENT COURSE</h2>      
                    <p className="white-color">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.</p>
                </div>
                <a className="cta-button" href="#">Join Now</a>
            </div>
        </div>
    </div>
    {/* <!-- Calltoaction End --> */}

    {/* <!-- Latest News Start --> */}
    <div id="rs-latest-news" className="rs-latest-news sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>OUR LASTEST NEWS</h2>      
                <p>Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="news-normal-block">
                        <div className="news-img">
                            <a href="#">
                                <img src="images/blog/1.jpg" alt="" />
                            </a>
                        </div>
                        <div className="news-date">
                            <i className="fa fa-calendar-check-o"></i>
                            <span>June  28,  2017</span>
                        </div>
                        <h4 className="news-title"><a href="blog-details.html">Those Other College Expenses You Aren't Thinking About</a></h4>
                        <div className="news-desc">
                            <p>
                                Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem the purus eu sapien curabitur.Lorem Ipsum is therefore always free from repetitionetc.
                            </p>
                        </div>
                        <div className="news-btn">
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="news-list-block">
                        <div className="news-list-item">
                            <div className="news-img">
                                <a href="#">
                                    <img src="images/blog/2.jpg" alt="" />
                                </a>
                            </div>			        			
                            <div className="news-content">
                                <h5 className="news-title"><a href="blog-details.html">While the lovely valley team work</a></h5>
                                <div className="news-date">
                                    <i className="fa fa-calendar-check-o"></i>
                                    <span>June  28,  2017</span>
                                </div>
                                <div className="news-desc">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt.
                                    </p>
                                </div>
                            </div>			        			
                        </div>
                        <div className="news-list-item">
                            <div className="news-img">
                                <a href="#">
                                    <img src="images/blog/3.jpg" alt="" />
                                </a>
                            </div>			        			
                            <div className="news-content">
                                <h5 className="news-title"><a href="blog-details.html">I must explain to you how all this idea</a></h5>
                                <div className="news-date">
                                    <i className="fa fa-calendar-check-o"></i>
                                    <span>June  28,  2017</span>
                                </div>
                                <div className="news-desc">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt.
                                    </p>
                                </div>
                            </div>			        			
                        </div>
                        <div className="news-list-item">
                            <div className="news-img">
                                <a href="#">
                                    <img src="images/blog/4.jpg" alt="" />
                                </a>
                            </div>			        			
                            <div className="news-content">
                                <h5 className="news-title"><a href="blog-details.html">I should be incapable of drawing a stroke</a></h5>
                                <div className="news-date">
                                    <i className="fa fa-calendar-check-o"></i>
                                    <span>June  28,  2017</span>
                                </div>
                                <div className="news-desc">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt.
                                    </p>
                                </div>
                            </div>			        			
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Latest News End --> */}

    {/* <!-- Products Start --> */}
    <div id="rs-products" className="rs-products sec-spacer sec-color">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>OUR PUBLICATIONS</h2>      
                <p>Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
            </div>
            <div className="rs-carousel owl-carousel" data-loop="true" data-items="4" data-margin="30" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="true" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="4" data-md-device-nav="true" data-md-device-dots="true">
                <div className="product-item">
                    <div className="product-img">
                        <a href="#">
                            <img src="images/products/1.jpg" alt="" />
                        </a>
                    </div>
                    <h4 className="product-title"><a href="shop-details.html">Book Packages V2</a></h4>
                    <span className="product-price">From: $85.00</span>
                    <div className="product-btn">
                        <a href="#">Add To Cart</a>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-img">
                        <a href="#">
                            <img src="images/products/2.jpg" alt="" />
                        </a>
                    </div>
                    <h4 className="product-title"><a href="shop-details.html">Smart Tabs X18</a></h4>
                    <span className="product-price">From: $85.00</span>
                    <div className="product-btn">
                        <a href="#">Add To Cart</a>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-img">
                        <a href="#">
                            <img src="images/products/3.jpg" alt="" />
                        </a>
                    </div>
                    <h4 className="product-title"><a href="shop-details.html">Modern Bags L17</a></h4>
                    <span className="product-price">From: $85.00</span>
                    <div className="product-btn">
                        <a href="#">Add To Cart</a>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-img">
                        <a href="#">
                            <img src="images/products/4.jpg" alt="" />
                        </a>
                    </div>
                    <h4 className="product-title"><a href="shop-details.html">Internet CC Camera</a></h4>
                    <span className="product-price">From: $85.00</span>
                    <div className="product-btn">
                        <a href="#">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="view-btn">
                <a href="#">VIEW  ALL</a>
            </div>
        </div>
    </div>

    {/* <!-- Newslatter Start -->
<!--
    <div id="rs-newslatter" className="rs-newslatter sec-black sec-spacer">
        <div className="container">
            <div className="row rs-vertical-middle">
                <div className="col-md-6">
                    <h3 className="newslatter-title">STAY CONNECTED WITH US</h3>
                </div>
                <div className="col-md-6 text-right">
                    <form className="newslatter-form">
                        <input type="text" className="form-input" placeholder="Enter Your Email Address">
                        <button type="submit" className="form-button">SUBSCRIBE</button>
                    </form>						
                </div>
            </div>
        </div>
    </div>
--> */}

    {/* <!-- Testimonial Start --> */}
    <div id="rs-testimonial" className="rs-testimonial bg5 sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2 className="white-color">WHAT PEOPLE SAYS</h2>      
                <p className="white-color">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div  className="rs-carousel owl-carousel" data-loop="true" data-items="2" data-margin="30" data-autoplay="true" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="true" data-nav="true" data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="2" data-md-device-nav="true" data-md-device-dots="true">
                        <div className="testimonial-item">
                            <div className="testi-img">
                                <img src="images/testimonial/1.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Luise Henrikes</h4>
                                <p>
                                    Etiam non elit nec augue tempor gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testi-img">
                                <img src="images/testimonial/2.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Aliana D’suza</h4>
                                <p>
                                    Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testi-img">
                                <img src="images/testimonial/3.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Aliana D’suza</h4>
                                <p>
                                    Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testi-img">
                                <img src="images/testimonial/4.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Aliana D’suza</h4>
                                <p>
                                    Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testi-img">
                                <img src="images/testimonial/5.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Aliana D’suza</h4>
                                <p>
                                    Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End -->
    
    <!-- Partner Start --> */}
    <div id="rs-partner" className="rs-partner pt-70 pb-70">
        <div className="container">
            <div className="rs-carousel owl-carousel" data-loop="true" data-items="5" data-margin="80" data-autoplay="true" data-autoplay-timeout="5000" data-smart-speed="2000" data-dots="false" data-nav="false" data-nav-speed="false" data-mobile-device="2" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="4" data-ipad-device-nav="false" data-ipad-device-dots="false" data-md-device="5" data-md-device-nav="false" data-md-device-dots="false">
                <div className="partner-item">
                    <a href="#"><img src="images/partner/1.png" alt="Partner Image"/></a>
                </div>
                <div className="partner-item">
                    <a href="#"><img src="images/partner/2.png" alt="Partner Image"/></a>
                </div>
                <div className="partner-item">
                    <a href="#"><img src="images/partner/3.png" alt="Partner Image"/></a>
                </div>
                <div className="partner-item">
                    <a href="#"><img src="images/partner/4.png" alt="Partner Image"/></a>
                </div>
                <div className="partner-item">
                    <a href="#"><img src="images/partner/5.png" alt="Partner Image"/></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Partner End --> */}
   
    {/* <!-- Footer Start --> */}
    <Footer/>
    {/* <!-- Footer End --> */}

    {/* <!-- start scrollUp  --> */}
    <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
    </div>
    
    {/* <!-- Canvas Menu start --> */}
    <nav className="right_menu_togle">
        <div className="close-btn"><span id="nav-close" className="text-center">x</span></div>
        <div className="canvas-logo">
            <a href="index.html"><img src="images/logo-white.png" alt="logo"/></a>
        </div>
        <ul className="sidebarnav_menu list-unstyled main-menu">
            {/* <!--Home Menu Start--> */}
            <li className="current-menu-item menu-item-has-children"><a href="#">Home</a>
                <ul className="list-unstyled">
                    <li className="sub-nav active"><a href="index.html">Home One<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="index2.html">Home Two<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="index3.html">Home Three<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="index4.html">Home Four<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--Home Menu End--> */}
            
            {/* <!--About Menu Start--> */}
            <li className="menu-item-has-children"><a href="#">About Us</a>
                <ul className="list-unstyled">
                    <li className="sub-nav active"><a href="index.html">About One<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="index2.html">About Two<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="index3.html">About Three<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--About Menu End--> */}
            
            {/* <!--Pages Menu Start--> */}
            <li className="menu-item-has-children"><a href="#">Pages</a>
                <ul className="list-unstyled">
                    <li className="sub-nav active"><a href="teachers.html">Teachers<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="teachers-without-filter.html">Teachers Without Filter<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="teachers-single.html">Teachers Single<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="gallery.html">Gallery One<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="gallery2.html">Gallery Two<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="gallery3.html">Gallery Three<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="shop.html">Shop<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="shop-details.html">Shop Details<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="cart.html">Cart<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="shop.html">Shop<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="error-404.html">Error 404<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--Pages Menu End--> */}
            
            {/* <!--Courses Menu Star--> */}
            <li className="menu-item-has-children"><a href="#">Courses</a>
                <ul className="list-unstyled">
                    <li className="sub-nav"><a href="courses.html">Courses<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="courses2.html">Courses Two<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="courses-details.html">Courses Details<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--Courses Menu End--> */}
            
            {/* <!--Events Menu Star--> */}
            <li className="menu-item-has-children"><a href="#">Events</a>
                <ul className="list-unstyled">
                    <li className="sub-nav"><a href="events.html">Events<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="events-details.html">Events Details<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--Events Menu End--> */}
            
            {/* <!--blog Menu Star--> */}
            <li className="menu-item-has-children"><a href="#">Blog</a>
                <ul className="list-unstyled">
                    <li className="sub-nav"><a href="blog.html">Blog<span className="icon"></span></a></li>
                    <li className="sub-nav"><a href="blog-details.html">Blog Details<span className="icon"></span></a></li>
                </ul>
            </li>
            {/* <!--blog Menu End--> */}
            <li><a href="contact.html">Contact<span className="icon"></span></a></li>
        </ul>
        <div className="search-wrap"> 
            <label className="screen-reader-text">Search for:</label> 
            <input type="search" placeholder="Search..." name="s" className="search-input" value=""/> 
            <button type="submit" value="Search"><i className="fa fa-search"></i></button>
        </div>
    </nav>
    {/* <!-- Canvas Menu end --> */}
    
    {/* <!-- Search Modal Start --> */}
    <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex="-1">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="fa fa-close"></span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="search-block clearfix">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="eg: Computer Technology" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="js/modernizr-2.8.3.min.js"></script>


</body>
  )
}

export default MainPage