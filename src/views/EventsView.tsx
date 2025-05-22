import React from "react";
import { Button, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";
import EventItem from "components/eventsViewComponents/EventItem";
import eventsList from "data/events.json";

export default function Events() {
  const sortByDate = (eventA, eventB) => {
    return eventA.date === eventB.date ? 0 : eventA.date < eventB.date ? -1 : 1;
  };

  const events = eventsList["events"];
  events.sort(sortByDate);

  const handleLinkClick = () => {
    window.open("https://www.instagram.com/project_dive_kth/");
  };

  return (
    <div>
      <Typography variant="h1">Kommande Event</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {events
          .filter((event) => Date.parse(event.date) >= Date.now())
          .map((event) => (
            <EventItem
              title={event.name}
              date={event.date}
              text={event.text}
              link={event.link}
              linkText={event.linkText}
              key={events.indexOf(event)}
            />
          ))}
        {events.filter((event) => Date.parse(event.date) >= Date.now())
          .length === 0 && (
          <div style={style.container}>
            <div style={style.titleContainer}>
              <span style={style.title}>Inga event planerade</span>
            </div>
            <div style={style.infoText}>Just nu har vi inga event planerade, men följ oss på Instagram för att hålla koll på när vi planerat in nått nytt!</div>
            <Button variant="contained" onClick={handleLinkClick}>
              Följ oss på instagram!
            </Button>
          </div>
        )}
      </Grid>
      <Typography variant="h1" style={{paddingTop: "30px"}}>Tidigare Event</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {events
          .filter((event) => Date.parse(event.date) < Date.now())
          .map((event) => (
            <EventItem
              title={event.name}
              date={event.date}
              text={event.text}
              link={event.link}
              linkText={event.linkText}
              key={events.indexOf(event)}
            />
          ))}
      </Grid>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 20%",
    padding: "30px",
    maxWidth: "60%",
    backgroundColor: "#F7EDBE",
    outline: "5px solid #FAB510",
    borderRadius: "2rem",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  date: {
    color: "#FAB510",
    fontWeight: "bold",
    fontSize: "x-large",
    margin: "0 5px 0 0",
  },
  title: {
    color: "#6d2c86",
    fontWeight: "bold",
    fontSize: "x-large",
  },
  infoText: {
    textAlign: "left",
    fontSize: "large",
    margin: "10px 0",
  },
};
