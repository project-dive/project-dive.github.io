import React from "react";
import EventItem from "../components/eventsViewComponents/EventItem";
import eventsList from "../../data/events.json";

export default function Events() {
  const sortByDate = (eventA, eventB) => {
    return eventA.date === eventB.date ? 0 : eventA.date < eventB.date ? -1 : 1;
  };

  const events = eventsList["events"];
  events.sort(sortByDate)

  return (
    <div>
      <h1>Events</h1>
      {events.map(
        (event: {
          name: string;
          date: string;
          text: string;
          link?: string;
          linkText?: string;
        }) => (
          <EventItem
            title={event.name}
            date={event.date}
            text={event.text}
            link={event.link}
            linkText={event.linkText}
            key={events.indexOf(event)}
          />
        )
      )}
    </div>
  );
}
