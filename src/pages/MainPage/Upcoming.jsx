import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Upcoming() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        loop={true}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
