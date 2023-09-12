import React from 'react'

function EventItem() {
  return (
    <div class="col-lg-6 col-md-12 md-mb-30">
    <div class="event-item">
        <div class="row rs-vertical-middle">
            <div class="col-md-6">
                <div class="event-img">
                    <img src="images2/biznes.png" alt="events Images" />
                    <a class="image-link" href="events-details.html" title="University Tour 2018">
                        <i class="fa fa-link"></i>
                    </a>
                </div>                        		
            </div>
            <div class="col-md-6">
                <div class="event-content">
                    <div class="event-meta">
                        <div class="event-date">
                            <i class="fa fa-calendar"></i>
                            <span>28 June 2017</span>
                        </div>
                        <div class="event-time">
                            <i class="fa fa-clock-o"></i>
                            <span>12.30AM-05.30PM</span>
                        </div>
                    </div>
                    <h3 class="event-title"><a href="events-details.html">Freshers Day reception <br/>ceremony 2017</a></h3>
                    <div class="event-location">
                        <i class="fa fa-map-marker"></i>
                        <span>Venue A, Main Campus</span>
                    </div>
                    <div class="event-desc">
                        <p>
                            There are many variations of passag of Lorem Ipsum available, but the majority have suffered.
                        </p>
                    </div>
                    <div class="event-btn">
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