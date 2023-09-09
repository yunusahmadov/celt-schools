import React from "react";
import EventItem from "./EventItem";

function EventElems() {
  return (
    <div class="rs-events-2 sec-spacer">
      <div class="container">
        <div class="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
        <div class="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
        <div class="row space-bt30">
          <EventItem />
          <EventItem />
        </div>
      </div>
    </div>
  );
}

export default EventElems;
