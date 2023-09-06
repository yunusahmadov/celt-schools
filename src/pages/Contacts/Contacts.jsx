import React from "react";
import Toolbar from "../../components/Toolbar";
import Header from "../MainPage/Header";
import Preloader from "../../components/Preloader";
import Footer from "../Courses/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactsCard from "./ContactsCard";
import ContactsHeader from "./ContactsHeader";

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
        <ContactsHeader />
        {/* <!--Header End--> */}
      </div>
      {/* <!--Full width header End--> */}

      {/* <!-- Breadcrumbs Start --> */}
      <Breadcrumbs pageName={"Contact"} />
      {/* <!-- Breadcrumbs End --> */}

      {/* <!-- Contact Section Start --> */}
      <div className="contact-section">
        <h2>Tədris Mərkəzlərimiz</h2>
        <div className="contact-card-section">
          <ContactsCard
            centerName={"CELT High School"}
            centerPhone1={"050 211 35 56"}
            centerPhone2={"012 505 34 34"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+High+School/@40.3694089,49.8276876,19.3z/data=!4m5!3m4!1s0x0:0x8624d4910168579!8m2!3d40.3694055!4d49.8278814?coh=164777&entry=tt&shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/celtschool"}
            centerInstagram={"https://www.instagram.com/celt.high.school/"}
          />
          <ContactsCard
            centerName={"CELT İçəri Şəhər"}
            centerPhone1={"050 555 83 86"}
            centerPhone2={"012 492 68 53"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307dc9cd565a25:0xad60f89e38903081?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegesicharishahar/?hl=en"
            }
          />
          <ContactsCard
            centerName={"CELT 28 May"}
            centerPhone1={"050 805 11 12"}
            centerPhone2={"012 441 36 65"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Colleges+28+May+-+%C4%B0ngilis+Dili+Kursu,+Xaricd%C9%99+T%C9%99hsil+M%C9%99rk%C9%99zi,+Online+ingilis+dili+t%C9%99drisi+(SAT,+TOEFL,+IELTS,+GRE,+GMAT+haz%C4%B1rl%C4%B1qlar%C4%B1)/@40.3815362,49.8436986,15z/data=!4m6!3m5!1s0x40307da093fcdaa5:0xbe1eaabd38b471fd!8m2!3d40.3815362!4d49.8436986!16s%2Fg%2F1tfph927?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={"https://www.instagram.com/celt.high.school/"}
          />
          <ContactsCard
            centerName={"CELT Nərimanov"}
            centerPhone1={"070 270 70 90"}
            centerPhone2={"012 566 48 23"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307d45e3531b27:0xe722273112ea9a35?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegesnarimanov/?hl=en"
            }
          />
          <ContactsCard
            centerName={"CELT İnqilab"}
            centerPhone1={"050 211 45 27"}
            centerPhone2={"012 564 69 40"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Colleges+G%C9%99nclik+ingilis+dili+kurslari,+IELTS,+SAT,+TOEFL/@40.4027625,49.8469208,17z/data=!3m1!4b1!4m5!3m4!1s0x40307d5e62137cef:0x7bf420585e43c323!8m2!3d40.4027625!4d49.8491095?shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celt_colleges_ganjlik/?hl=en"
            }
          />
          <ContactsCard
            centerName={"CELT Xətai"}
            centerPhone1={"050 588 15 18"}
            centerPhone2={"012 496 45 76"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Colleges+Xetai+-+%C4%B0ngilis+dili+kurslari/@40.381794,49.866566,15z/data=!4m2!3m1!1s0x0:0xb923a92b9b1a3639?sa=X&ved=2ahUKEwjWzdCw75WBAxXtmWoFHdAMDeQQ_BJ6BAhJEAA&ved=2ahUKEwjWzdCw75WBAxXtmWoFHdAMDeQQ_BJ6BAhfEAg"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celt_colleges_ganjlik/?hl=en"
            }
          />
            <ContactsCard
            centerName={"CELT Sahil"}
            centerPhone1={"055 463 43 26"}
            centerPhone2={"012 493 48 18"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307db1a052f853:0xadb732ff7fda2b67?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegessahil/?hl=en"
            }
          />
              <ContactsCard
            centerName={"CELT Elmlər"}
            centerPhone1={"055 737 83 06"}
            centerPhone2={"012 538 38 53"}
            centerLocation={
              "https://www.google.com/maps/place/M%C9%99mm%C9%99d+R%C9%99him,+Bak%C4%B1/@40.3714149,49.8172479,17z/data=!4m5!3m4!1s0x40307dc14010429b:0x98506b6789148662!8m2!3d40.371471!4d49.8188501?shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegeselmler/?hl=en"
            }
          />
              <ContactsCard
            centerName={"CELT Bakıxanov"}
            centerPhone1={"050 396 96 89"}
            centerPhone2={"012 425 25 13"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x403063b9f44e8f53:0x53877d4b2be1440d?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celt_bakixanov/?hl=en"
            }
          />

            <ContactsCard
            centerName={"CELT Nizami"}
            centerPhone1={"050 787 57 66"}
            centerPhone2={"012 436 86 87"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307d2084836a31:0x226dc9a99d166107?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtnizami/"
            }
          />
                        <ContactsCard
            centerName={"CELT Əcəmi"}
            centerPhone1={"070 222 86 84"}
            centerPhone2={"012 430 83 74"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4030879947e5b79d:0xfe8f280eef496f76?source=g.page.share"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegesajami/?hl=en"
            }
          />
                        <ContactsCard
            centerName={"CELT Həzi Aslanov"}
            centerPhone1={"050 611 91 00"}
            centerPhone2={"012 599 57 57"}
            centerLocation={
              "https://www.google.com/maps/place//data=!4m2!3m1!1s0x403063559416a965:0x8a9487a3dde59f66?utm_source=mstt_1&entry=gps&lucs=swa"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegeshaziaslanov/"
            }
          />
        </div>
        <div className="contact-card-section2">
          <ContactsCard
            centerName={"CELT Sumqayıt"}
            centerPhone1={"050 550 51 91"}
            centerPhone2={"018 6540045"}
            centerLocation={
              "https://www.google.com/maps/place/Karvan+shopping+mall/@40.5865021,49.6626985,16z/data=!4m9!1m2!2m1!1skarvan+mall!3m5!1s0x403096c04ebf01cf:0x96b1ceca01f586d6!8m2!3d40.5897607!4d49.673983!16s%2Fg%2F1hf36ftch?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtsumgayit/"
            }
          />
                <ContactsCard
            centerName={"CELT Gənclik"}
            centerPhone1={"050 348 22 18"}
            centerPhone2={"012 564 26 86"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Colleges+G%C9%99nclik+Ingilis+dili+kurslar%C4%B1/@40.4088145,49.8552118,13z/data=!4m6!3m5!1s0x40307d12e719ca1d:0x276013c5c8bd4022!8m2!3d40.4027091!4d49.8491263!16s%2Fg%2F11h_ws78qr?shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtcollegeshaziaslanov/"
            }
          />
                <ContactsCard
            centerName={"CELT IT Xətai"}
            centerPhone1={"050 588 15 17"}
            centerPhone2={"012 496 45 76"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+IT+College/@40.3816059,49.8660174,20.65z/data=!4m5!3m4!1s0x0:0xb68ad4dfa097721b!8m2!3d40.3816259!4d49.8660736?coh=164777&entry=tt&shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/people/CELT-IT-College/100076930546327/"}
            centerInstagram={
              "https://www.instagram.com/celt.it.college/ "
            }
          />
                <ContactsCard
            centerName={"CELT IT İçərişəhər"}
            centerPhone1={"050 588 15 17"}
            centerPhone2={"012 505 34 34"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+High+School/@40.3694055,49.8278814,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d25f9a6067d:0x8624d4910168579!8m2!3d40.3694055!4d49.8278814!16s%2Fg%2F11qgkk0qck?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/people/CELT-IT-College/100076930546327/"}
            centerInstagram={
              "https://www.instagram.com/celt.it.college/ "
            }
          />
          </div>
        <div className="contact-card-section">
        <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Nərimanov"}
            centerPhone1={"070 596 04 51"}
            centerPhone2={"012 408 43 20"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Elementary+School+Narimanov/@40.3976339,49.871862,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d1dfd6ad23f:0x621c393508322aab!8m2!3d40.3976339!4d49.871862!16s%2Fg%2F11g1pp28rt?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschool_narimanov/ "
            }
          />
                  <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Elmlər"}
            centerPhone1={"070 686 80 67"}
            centerPhone2={"012 538 38 33"}
            centerLocation={
              "https://www.google.com/maps/place/40%C2%B022'20.1%22N+49%C2%B049'11.0%22E/@40.3722572,49.817544,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x341a368292a84e61!8m2!3d40.3722572!4d49.8197327?hl=tr&shorturl=1"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschoolelmler"
            }
          />
                  <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Sahil"}
            centerPhone1={"070 629 32 42"}
            centerPhone2={"012 598 10 30"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Elementary+School+Sahil/@40.374947,49.840019,17z/data=!3m1!4b1!4m6!3m5!1s0x40307dc851001947:0x623842e35ff0f0da!8m2!3d40.3749429!4d49.8425939!16s%2Fg%2F11h008my1r?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschool_sahil"
            }
          />
            <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Həzi"}
            centerPhone1={"050 611 91 00"}
            centerPhone2={"012 599 57 57"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Elementary+School+Narimanov/@40.3976339,49.871862,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d1dfd6ad23f:0x621c393508322aab!8m2!3d40.3976339!4d49.871862!16s%2Fg%2F11g1pp28rt?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschool_narimanov/ "
            }
          />
               <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Xətai"}
            centerPhone1={"050 588 15 18"}
            centerPhone2={"012 496 45 76"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Colleges+Xetai+-+%C4%B0ngilis+dili+kurslari/@40.3817981,49.8639911,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d1b3e601b49:0xb923a92b9b1a3639!8m2!3d40.381794!4d49.866566!16s%2Fg%2F11clyfsqpd?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschool_sahil/ "
            }
          />
               <ContactsCard
            centerName={"CELT Primary"}
            primaryText={"Sumqayıt  "}
            centerPhone1={"050 611 91 00"}
            centerPhone2={"012 599 57 57"}
            centerLocation={
              "https://www.google.com/maps/place/CELT+Elementary+School+Narimanov/@40.3976339,49.871862,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d1dfd6ad23f:0x621c393508322aab!8m2!3d40.3976339!4d49.871862!16s%2Fg%2F11g1pp28rt?entry=ttu"
            }
            centerFacebook={"https://www.facebook.com/celtscollege/"}
            centerInstagram={
              "https://www.instagram.com/celtpreschool_narimanov/ "
            }
          />
            </div>
      </div>
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
