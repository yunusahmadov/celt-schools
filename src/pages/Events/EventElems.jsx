import React from "react";
import EventItem from "./EventItem";

function EventElems() {
  return (
    <div className="rs-events-2 sec-spacer">
      <div className="container">
        <div className="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
        <div className="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
        <div className="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
      </div>
    </div>
  );
}

export default EventElems;
