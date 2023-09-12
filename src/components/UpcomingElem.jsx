import React from 'react'

function UpcomingElem() {
  return (
    <div className="event-item">
    <div className="event-img">
        <img src="images2/biznes.png" alt="" />
        <a className="image-link" href="/events" title="University Tour 2018">
            <i className="fa fa-link"></i>
        </a>
    </div>
    <div className="events-details sec-color">
        <div className="event-date">
            <i className="fa fa-calendar"></i>
            <span>28 June 2017</span>
        </div>
        <h4 className="event-title"><a href="/events">PRACTICE WORKSHOP 2018</a></h4>
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
            <a href="/events">Join Event <i className="fa fa-angle-double-right"></i></a>
        </div>
    </div>
</div>
  )
}

export default UpcomingElem