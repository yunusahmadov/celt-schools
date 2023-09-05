import React from 'react'

function PartnerCarousel() {
  return (
    <div id="rs-partner" className="rs-partner pt-70 pb-170 sec-color">
    <div className="container">
      <div
        className="rs-carousel owl-carousel"
        data-loop="true"
        data-items="5"
        data-margin="80"
        data-autoplay="true"
        data-autoplay-timeout="5000"
        data-smart-speed="2000"
        data-dots="false"
        data-nav="false"
        data-nav-speed="false"
        data-mobile-device="2"
        data-mobile-device-nav="false"
        data-mobile-device-dots="false"
        data-ipad-device="4"
        data-ipad-device-nav="false"
        data-ipad-device-dots="false"
        data-md-device="5"
        data-md-device-nav="false"
        data-md-device-dots="false"
      >
        <div className="partner-item">
          <a href="#">
            <img src="images/partner/1.png" alt="Partner Image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#">
            <img src="images/partner/2.png" alt="Partner Image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#">
            <img src="images/partner/3.png" alt="Partner Image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#">
            <img src="images/partner/4.png" alt="Partner Image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#">
            <img src="images/partner/5.png" alt="Partner Image" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PartnerCarousel