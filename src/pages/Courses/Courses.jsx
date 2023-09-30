import React, { useEffect } from "react";
import CoursesCard from "./CoursesCard";
import { az_lang } from "../../language/language";
import { imagesArr } from "../../imagesArr";
import Preloader from "../../components/Preloader";
import Toolbar from "../../components/Toolbar";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import OurCourses from "./OurCourses";
import PartnerCarousel from "./PartnerCarousel";
import Footer from "../../components/Footer";
import Header from "../MainPage/Header";
import RightMenuToggle from "../MainPage/RightMenuToggle";

function Courses() {
  const language=useSelector((state)=>state.language.value)

  useEffect(() => {
    // Retrieve the selected language from localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      // You can use the storedLanguage variable here
      console.log("Selected Language from localStorage:", storedLanguage);
    }
  }, []);
  return (
    // <body className="inner-page">
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
    <RightMenuToggle/>
     
      <Breadcrumbs
    pageName={language.ourCourses}
    />
      {/* <!-- Courses Start --> */}
      <OurCourses/>
      {/* <!-- Courses End --> */}


      {/* <!-- Footer Start --> */}
      <Footer/>
      {/* <!-- Footer End --> */}

      {/* <!-- start scrollUp  --> */}
      <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
      </div>

      {/* <!-- Search Modal Start --> */}
      <div
        aria-hidden="true"
        className="modal fade search-modal"
        role="dialog"
        tabIndex="-1"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true" className="fa fa-close"></span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="search-block clearfix">
              /
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="eg: Computer Technology"
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Courses;
