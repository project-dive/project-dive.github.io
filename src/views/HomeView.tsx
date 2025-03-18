import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
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
      <Button sx={style.button} href="https://www.antagning.se/se/search?period=24&freeText=Civilingenj%C3%B6r+Datateknik+KTH">SÖK HÄR!</Button>
      <div style={style.bubbles}>
      {
        bubbles.map((bubble, index) => {
          return (
            <Button sx={style.bubble} href={bubble.link}>
              <p style={style.bubbleTitle}>{bubble.title}</p>
              <p style={style.bubbleDescription}>{bubble.description}</p>
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
  button: {
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
  bubbles: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bubble: {
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
  bubbleTitle: {
    fontSize: '1.5em',
    fontWeight: '700',
    lineHeight: '1em',
    margin: '0 10px',
    marginBottom: '20px',
  },
  bubbleDescription: {
    textAlign: 'center',
    // fontSize: '1.2em',
    fontWeight: '600',
    lineHeight: '1em',
    margin: '0 10px',
  }
};