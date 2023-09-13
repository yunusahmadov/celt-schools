import React from 'react'
import { az_lang } from '../../language/language';
import Preloader from '../../components/Preloader';
import Toolbar from '../../components/Toolbar';
import Header from './Header';
import Footer from '../../components/Footer';
import Services from './Services';
import MainTopSlider from './MainTopSlider';
import Upcoming from './Upcoming';
import CoursesSlideContainer from './CoursesSlideContainer';
import CountUp from './CountUpSection';
import CountUpSection from './CountUpSection';
import RightMenuToggle from './RightMenuToggle';
import { useSelector } from 'react-redux';
function MainPage() {
    const language=useSelector((state)=>state.language.value)

  return (
    <body className="home1">
    {/* <!--Preloader area start here--> */}
    <Preloader/>
    {/* <!--Preloader area end here-->
    
    <!--Full width header Start--> */}
    <div className="full-width-header">

           {/* <!--Header Start--> */}
        <Header/>

        {/* <!--Header End--> */}

    </div>
    {/* <!--Full width header End--> */}
    
    {/* <!-- Slider Area Start --> */}
    <MainTopSlider/>
    {/* <!-- Slider Area End --> */}
    
    {/* <!-- Services Start --> */}
    <Services/>
    {/* <!-- Services End --> */}

    {/* <!-- About Us Start --> */}
    {/* <div id="rs-about" className="rs-about sec-spacer">
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
    </div> */}
    {/* <!-- About Us End --> */}

    {/* <!-- Courses Start --> */}
    <div id="rs-courses" className="rs-courses sec-color sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>{language.popularCourses}</h2>     
            </div>
            <div className="row" >
                    <CoursesSlideContainer/>
            </div>
        </div>
    </div>
    {/* <!-- Courses End --> */}
    
    {/* <!-- Counter Up Section Start--> */}
    <CountUpSection/>
    {/* <!-- Counter Down Section End --> */}

    {/* <!-- Events Start --> */}
    <div id="rs-events" className="rs-events sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>{language.upcomingEventsTitle}</h2>      
                <p>I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <Upcoming/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Events End --> */}
    {/* <!-- Footer Start --> */}
    <Footer/>
    {/* <!-- Footer End --> */}

    {/* <!-- start scrollUp  --> */}
    <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
    </div>
    
    {/* <!-- Canvas Menu start --> */}
    <RightMenuToggle/>
    {/* <!-- Canvas Menu end --> */}
    
    {/* <!-- Search Modal Start --> */}
    {/* <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex="-1">
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
    </div> */}
    <script src="js/modernizr-2.8.3.min.js"></script>


</body>
  )
}

export default MainPage