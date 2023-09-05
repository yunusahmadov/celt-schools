import React from "react";
import CoursesCard from "./CoursesCard";
import { az_lang } from "../../language/language";
import { imagesArr } from "../../imagesArr";
import Language from "../../features/LanguageRedux/Language";
import Preloader from "../../components/Preloader";
import Toolbar from "./Toolbar";
import Header from "./Header";
import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import OurCourses from "./OurCourses";
import PartnerCarousel from "./PartnerCarousel";
import Footer from "./Footer";

function Courses() {
  const language=useSelector((state)=>state.language.value)

  console.log(language);
  return (
    <body className="inner-page">
    <Preloader/>
      <div className="full-width-header">
        <Toolbar/>
      <Header/>
      </div>
      <Breadcrumbs/>
      {/* <!-- Courses Start --> */}
      <OurCourses/>
      {/* <!-- Courses End --> */}

      {/* <!-- Partner Start --> */}
      <PartnerCarousel/>
      {/* <!-- Partner End --> */}

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
