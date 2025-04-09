import React from "react";
import { useEffect } from 'react';

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import data from "../../data/faq.json";

export default function FAQ() {
  const breakpoint = 1000;
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > breakpoint);
  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpoint);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  const questions = data.questions;
  console.log(questions);

  return (
    <div style={style.container}>
      <div style={style.subcontainer}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h1>
        {questions.map((question, index) => {
          return (
            <Accordion key={index} style={style.accordion}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#6d2c86",
                      fontSize:"3rem"
                    }}
                  />
                }
              >
                <h2 style={isDesktop? style.accordionH2Desktop: style.accordionH2Mobile}>{question.question}</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p style={isDesktop? style.accordionPDesktop: style.accordionPMobile}>{question.answer}</p>
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
    width: "90%",
    maxWidth: "1400px",
  },
  accordion: {
    backgroundColor: "transparent", 
    boxShadow:"None"  
  },
  accordionH2Mobile:{
    fontSize:"2em",
  },
  accordionH2Desktop:{
    fontSize:"1.5em",
  },
  accordionPMobile:{
    fontSize:"1.5em"
  },
  accordionPDesktop:{
    fontSize: "1em",
  },
};
