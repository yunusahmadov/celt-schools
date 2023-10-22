import React from "react";
import Toolbar from "../../components/Toolbar";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactsCard from "./ContactsCard";
import ContactsHeader from "./ContactsHeader";
import ContactsSection from "./ContactsSection";
import Header from "../MainPage/Header";
import RightMenuToggle from "../MainPage/RightMenuToggle";
import { useSelector } from "react-redux";

function Contacts() {

  const language=useSelector((state=>state.language.value))

  return (
    <body className="home1">
      {/* <Preloader/> */}

      {/* <!--Full width header Start--> */}
      <div className="full-width-header">
        {/* <!-- Toolbar Start --> */}
        {/* <!-- Toolbar End --> */}

        {/* <!--Header Start--> */}
        <Header/>
        {/* <!--Header End--> */}
      </div>
      {/* <!--Full width header End--> */}  
      <RightMenuToggle/>
      {/* <!-- Breadcrumbs Start --> */}
      <Breadcrumbs
       pageName={language.contacts}
       pageTitle={language.campusPageTitlte}
       />
      {/* <!-- Breadcrumbs End --> */}

      {/* <!-- Contact Section Start --> */}
      <ContactsSection/>
      {/* <!-- Contact Section End -->      */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}

      {/* <!-- start scrollUp  --> */}
      <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
      </div>
    </body>
  );
}

export default Contacts;

