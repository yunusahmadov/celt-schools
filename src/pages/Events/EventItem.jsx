import React from 'react'

function EventItem() {
  return (
    <div className="col-lg-6 col-md-12 md-mb-30">
    <div className="event-item">
        <div className="row rs-vertical-middle">
            <div className="col-md-6">
                <div className="event-img">
                    <img src="images2/biznes.png" alt="events Images" />
                    <a className="image-link" href="events-details.html" title="University Tour 2018">
                        <i className="fa fa-link"></i>
                    </a>
                </div>                        		
            </div>
            <div className="col-md-6">
                <div className="event-content">
                    <div className="event-meta">
                        <div className="event-date">
                            <i className="fa fa-calendar"></i>
                            <span>28 June 2017</span>
                        </div>
                        <div className="event-time">
                            <i className="fa fa-clock-o"></i>
                            <span>12.30AM-05.30PM</span>
                        </div>
                    </div>
                    <h3 className="event-title"><a href="events-details.html">Freshers Day reception <br/>ceremony 2017</a></h3>
                    <div className="event-location">
                        <i className="fa fa-map-marker"></i>
                        <span>Venue A, Main Campus</span>
                    </div>
                    <div className="event-desc">
                        <p>
                            There are many variations of passag of Lorem Ipsum available, but the majority have suffered.
                        </p>
                    </div>
                    <div className="event-btn">
                        <a href="events-details.html">Join Event</a>
                    </div>
                </div>                    		
            </div>
        </div>                    		
    </div>
</div>
  )
}

export default EventItem