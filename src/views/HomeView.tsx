import Button from "@mui/material/Button";
import React from "react";
import { useEffect } from 'react';

export default function Home() {
  const breakpoint = 1000;
    const [isDesktop, setDesktop] = React.useState(window.innerWidth > breakpoint);
    const updateMedia = () => {
      setDesktop(window.innerWidth > breakpoint);
    };
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

  const bubbles = [
    {
      title: "Event",
      description: "Finns det något event jag kan gå på och lära mig mer?",
      link: "/events"
    },
    {
      title: "Project Dive",
      description: "Om oss",
      link: "/about"
    },
    {
      title: "FAQ",
      description: "Vad är data?",
      link: "/faq"
    }
  ]
  
  return ( 
    <div style={style.container}>
      <div style={style.subcontainer}>
        <h1>Datateknik på KTH</h1>
        <p style={style.p}>
          Datasektionen på KTH är hem för alla datateknikstudenter.  Här blandas studier med roliga event, hackathons, sittningar och en grym gemenskap. Vi fixar allt från episka fester till företagsevent där du kan nätverka och kanske säkra ditt framtida drömjobb. Sektionen drivs av studenter för studenter, så om du vill påverka din utbildning eller bara ha kul på sidan av plugget så är det här rätt plats. Kort sagt: vi kodar, vi skojar, vi gör KTH lite roligare!
          </p>
      </div>
      <Button sx={isDesktop? style.buttonDesktop: style.buttonMobile} href="https://www.antagning.se/se/search?period=24&freeText=Civilingenj%C3%B6r+Datateknik+KTH">SÖK HÄR!</Button>
      <div style={style.bubbles}>
      {
        bubbles.map((bubble, index) => {
          return (
            <Button sx={isDesktop ? style.bubbleDesktop : style.bubbleMobile} href={bubble.link}>
              <p style={isDesktop ? style.bubbleTitleDesktop : style.bubbleTitleMobile}>{bubble.title}</p>
              <p style={isDesktop ? style.bubbleDescriptionDesktop : style.bubbleDescriptionMobile}>{bubble.description}</p>
            </Button>
          )
        })
      }
      </div>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    margin: '20px',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    width: '80%',
    maxWidth: '1400px',
  },
  p: {
    textAlign: 'start',
    color: '#425466',
    fontSize: '1.2em',
    fontWeight: '600',
    lineHeight: '2.5em',
  },
  buttonDesktop: {
    backgroundColor: '#6C2C86',
    color: '#FFF5C2',
    borderRadius: '40px',
    width: '200px',
    height: '80px',
    fontSize: '1.5em',
    margin: '70px 0',
    '&:hover': {
      color: '#FFF5C2',
    },
  },
  buttonMobile: {
    backgroundColor: '#6C2C86',
    color: '#FFF5C2',
    borderRadius: '40px',
    width: '300px',
    height: '120px',
    fontSize: '2em',
    margin: '70px 0',
    '&:hover': {
      color: '#FFF5C2',
    },
  },
  bubbles: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bubbleDesktop: {
    margin: '20px',
    backgroundColor: '#FFF5C2',
    marginTop: '20px',
    borderRadius: '50px',
    width: '250px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid #FAB510',
    color: '#6C2C86',
    '&:hover': {
      color: '#6C2C86',
      backgroundColor: '#fcda87',
      border: '5px solid #FAB510',
    },
  },
  bubbleMobile: {
    margin: '20px',
    backgroundColor: '#FFF5C2',
    marginTop: '20px',
    borderRadius: '50px',
    width: '450px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid #FAB510',
    color: '#6C2C86',
    '&:hover': {
      color: '#6C2C86',
      backgroundColor: '#fcda87',
      border: '5px solid #FAB510',
    },
  },
  bubbleTitleDesktop: {
    fontSize: '1.5em',
    fontWeight: '700',
    lineHeight: '1em',
    margin: '0 10px',
    marginBottom: '20px',
  },
  bubbleTitleMobile: {
    fontSize: '3em',
    fontWeight: '700',
    lineHeight: '1em',
    margin: '0 10px',
    marginBottom: '20px',
  },
  bubbleDescriptionDesktop: {
    textAlign: 'center',
    // fontSize: '1.2em',
    fontWeight: '600',
    lineHeight: '1em',
    margin: '0 10px',
  },
  bubbleDescriptionMobile: {
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: '600',
    lineHeight: '1.4em',
    margin: '0 10px',
  },
};