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
import TwoCards from './TwoCards';
function MainPage() {
    const language=useSelector((state)=>state.language.value)

  return (
    <body className="home1">
    {/* <!--Preloader area start here--> */}
    {/* <Preloader/> */}
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
    {/* <Services/> */}
    {/* <!-- Services End --> */}

    {/* <!-- Courses Start --> */}
    <TwoCards/>
    {/* <div id="rs-courses" className="rs-courses sec-color sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>{language.popularCourses}</h2>     
            </div>
            <div className="row" >
                    <CoursesSlideContainer/>
            </div>
        </div>
    </div> */}
    {/* <!-- Courses End --> */}
    
    {/* <!-- Counter Up Section Start--> */}
    {/* <CountUpSection/> */}
    {/* <!-- Counter Down Section End --> */}

    {/* <!-- Events Start --> */}
    <div id="rs-events" className="rs-events sec-spacer">
        <div className="container">
            <div className="sec-title mb-50 text-center">
                <h2>{language.upcomingEventsTitle}</h2>      
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