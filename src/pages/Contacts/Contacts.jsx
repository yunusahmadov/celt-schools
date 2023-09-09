import React from "react";
import Toolbar from "../../components/Toolbar";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactsCard from "./ContactsCard";
import ContactsHeader from "./ContactsHeader";
import ContactsSection from "./ContactsSection";
import Header from "../Courses/Header";

function Contacts() {
  return (
    <body class="inner-page">
      {/* <Preloader/> */}

      {/* <!--Full width header Start--> */}
      <div class="full-width-header">
        {/* <!-- Toolbar Start --> */}
        <Toolbar />
        {/* <!-- Toolbar End --> */}

        {/* <!--Header Start--> */}
        <Header/>
        {/* <!--Header End--> */}
      </div>
      {/* <!--Full width header End--> */}

      {/* <!-- Breadcrumbs Start --> */}
      <Breadcrumbs pageName={"Contact"} />
      {/* <!-- Breadcrumbs End --> */}

      {/* <!-- Contact Section Start --> */}
      <ContactsSection/>
      {/* <!-- Contact Section End -->      */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}

      {/* <!-- start scrollUp  --> */}
      <div id="scrollUp">
        <i class="fa fa-angle-up"></i>
      </div>
    </body>
  );
}

export default Contacts;

{
  /* <!-- Search Modal Start --> */
}
{
  /* <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
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
        </div> */
}
{
  /* <!-- Search Modal End --> */
}
