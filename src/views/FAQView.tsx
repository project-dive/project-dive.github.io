import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";

import data from "data/faq.json";

export default function FAQ() {
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
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#6d2c86",
                    }}
                  />
                }
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
  subcontainer: {
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
  }
};
