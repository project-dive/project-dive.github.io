import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const questions = [
    {
      question: "Vad är data?",
      answer:
        "Data är information som är lagrad i en dator och kan vara allt från text till bilder och ljud. Data kan användas för att analysera och dra slutsatser från, och är en viktig del av datavetenskapen.",
    },
    {
      question: "Vad är datavetenskap?",
      answer: "Datavetenskap är studiet av data",
    },
  ];

  return (
    <div style={style.container}>
    <div style={style.subcontainer}>
      <h1 style={{
        textAlign: "center",
      }}>Frequently Asked Questions</h1>
      {questions.map((question, index) => {
        return (
          <Accordion key={index} style={style.accordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{
                    color: "#6d2c86",
                }}/>}
            >
              <h2>{question.question}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <p>{question.answer}</p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "start",
    color: "#6d2c86",
},
subcontainer: {
    width: "100%",
    maxWidth: "1400px",
  },
};
