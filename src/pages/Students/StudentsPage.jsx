import React from 'react'
import Footer from '../../components/Footer'
import Breadcrumbs from '../Events/EventBread'
import Toolbar from '../../components/Toolbar'
import StudentsBreadcrumbs from './StudentsBreadcrumbs'
import Header from '../MainPage/Header'
import RightMenuToggle from '../MainPage/RightMenuToggle'
import Preloader from '../../components/Preloader'
import StudentCard from './StudentCard'
import { useSelector } from 'react-redux'

function StudentsPage() {

    const language=useSelector((state=>state.language.value))
  return (
    <body class="home1">
    {/* <Preloader/> */}
      <div className="full-width-header">
		<Header/>
      </div>
      <StudentsBreadcrumbs
    pageName={language.grads}
    />
	<RightMenuToggle/>
    {/* <!--Full width header End--> */}

    <div id="rs-team-2" class="rs-team-2 team-all pt-100 pb-70">
			<div class="container">
				<div class="row">
						<StudentCard/>
						<StudentCard/>
						<StudentCard/>
						<StudentCard/>
				</div>
				<div class="row">
				<StudentCard/>
				<StudentCard/>
				<StudentCard/>
				<StudentCard/>

				</div>
				<div class="row">	
				<StudentCard/>
				<StudentCard/>
				<StudentCard/>
				<StudentCard/>

			    </div>
			</div>
        </div>

             
    {/* <!-- Partner Start --> */}
    {/* <div id="rs-partner" class="rs-partner sec-color pt-70 pb-170">
        <div class="container">
            <div class="rs-carousel owl-carousel" data-loop="true" data-items="5" data-margin="80" data-autoplay="true" data-autoplay-timeout="5000" data-smart-speed="2000" data-dots="false" data-nav="false" data-nav-speed="false" data-mobile-device="2" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="4" data-ipad-device-nav="false" data-ipad-device-dots="false" data-md-device="5" data-md-device-nav="false" data-md-device-dots="false">
                <div class="partner-item">
                    <a href="#"><img src="images/partner/1.png" alt="Partner Image"></a>
                </div>
                <div class="partner-item">
                    <a href="#"><img src="images/partner/2.png" alt="Partner Image"></a>
                </div>
                <div class="partner-item">
                    <a href="#"><img src="images/partner/3.png" alt="Partner Image"></a>
                </div>
                <div class="partner-item">
                    <a href="#"><img src="images/partner/4.png" alt="Partner Image"></a>
                </div>
                <div class="partner-item">
                    <a href="#"><img src="images/partner/5.png" alt="Partner Image"></a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Partner End --> */}
   
    {/* <!-- Footer Start --> */}
    <Footer/>
    {/* <!-- Footer End --> */}

    {/* <!-- start scrollUp  --> */}
    <div id="scrollUp">
        <i class="fa fa-angle-up"></i>
    </div>
    
    <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="fa fa-close"></span>
        </button>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="search-block clearfix">
                    <form>
                        <div class="form-group">
                            <input class="form-control" placeholder="eg: Computer Technology" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</body>
  )
}

export default StudentsPage