import * as React from "react";
import Button from "@mui/material/Button";

interface EventItemProps {
  title: string;
  date: string;
  text: string;
  link?: string;
  linkText?: string;
}

export default function EventItem({
  title,
  date,
  text,
  link,
  linkText,
}: EventItemProps) {
  const handleLinkClick = () => {
    window.open(link);
  };

  return (
    <div style={style.container}>
      <div style={style.titleContainer}>
        <span style={style.date}>{date}</span><span style={style.title}> - {title}</span>
      </div>
      <div style={style.infoText}>{text}</div>
      {link && (
        <Button variant="contained" onClick={handleLinkClick}>
          {linkText ? linkText : "placeholder text"}
        </Button>
      )}
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
    margin: "10px 0"
  }
};
