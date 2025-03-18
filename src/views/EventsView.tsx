import React from "react";
import EventItem from "../components/eventsViewComponents/EventItem";
import eventsList from "../../data/events.json";

export default function Events() {
  const events = eventsList["events"]

  return (
    <div>
      <h1>Events</h1>
      {events.map(
        (event: {
          name: string;
          date: string;
          text: string;
          link?: string;
        }) => (
          <EventItem title={event.name} date={event.date} text={event.text} link={event.link} key={events.indexOf(event)}/>
        )
      )}
    </div>
  );
}
