import * as React from "react";

interface EventItemProps {
  title: string;
  date: string;
  text: string;
  link?: string;
}

export default function EventItem({ title, date, text, link }: EventItemProps) {
  return (
    <div>
      {date}, {title}, {text}
      {link && <a href={link} target="_blank">länk</a>}
    </div>
  );
}
