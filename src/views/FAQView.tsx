import React from "react";
import { useEffect } from 'react';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";

import data from "data/faq.json";

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
      <div style={isDesktop? style.subcontainerDesktop: style.subcontainerMobile}>
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
      <div style={style.askQuestionContainer}>
        <h1 style={style.askQuestionHeader}>
          Hittar du inte svaret på din fråga?
        </h1>
        <p style={style.askQuestionParagraph}>
          Ställ oss en fråga via vårt frågeformulär
        </p>
        <Button variant="contained" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSesk2bsVkAN-E-fd6gEMQ1Wo_Cn991E2Sg23IlEEpq2JhMPyg/viewform?usp=dialog">STÄLL OSS EN FRÅGA!</Button>
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
  subcontainerMobile: {
    width: "90%",
    maxWidth: "1400px",
  },
  askQuestionContainer: {
    textAlign: "center",
  },
  askQuestionHeader: {
    margin: "50px 0 0 0",
    fontSize: "40px",
  },
  askQuestionParagraph: {
    fontSize: "20px"
  },
  subcontainerDesktop: {
    width: "70%",
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
