import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
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
      <Typography variant='h1'>Events</Typography>
      <Grid 
        container
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {events.map(
          event => (
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
      </Grid>
    </div>
  );
}
