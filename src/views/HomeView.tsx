import { Button, Typography, Divider, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React from "react";
import { useEffect } from 'react';
import banner from "assets/borggardencrop.jpg";


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
      title: "23/3 - Öppet hus",
      description: "Kom och snacka med oss på KTH:s öppet hus!",
      link: "https://www.kth.se/utbildning/traffa-kth/oppet-hus/valkommen-till-oppet-hus-pa-kth-campus-1.1121800"
    },
    {
      title: "25/3 - Våffeldagsfika",
      description: "Käka våfflor och ställ frågor, Läs mer här!",
      link: "https://ui.ungpd.com/Events/24a47591-e0b8-4341-8e1a-ac7a3bf201a0",
    },
  ]
  
  return ( 
    
    <div style={style.container}>
      <Grid container
        spacing={5}
        direction="column"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: "80%"
        }}
      >
        <Typography variant='h1'>Datateknik på KTH</Typography>
        <Typography>
          Datasektionen på KTH är hem för alla datateknikstudenter. Här blandas studier med roliga event, hackathons, sittningar och en 
          grym gemenskap. Vi fixar allt från episka fester till företagsevent där du kan nätverka och kanske säkra ditt framtida drömjobb. 
          Sektionen drivs av studenter för studenter, så om du vill påverka din utbildning eller bara ha kul på sidan av plugget så är det 
          här rätt plats. Kort sagt: vi kodar, vi skojar, vi gör KTH lite roligare!
        </Typography>
        <Button 
          variant="contained"
          href="https://www.antagning.se/se/addtobasket?period=24&id=KTH-32102"
        >
          SÖK HÄR!
        </Button>
        
        <Grid container direction="column" sx={{borderTop: 1, borderColor: "divider", pt: 3 }}>
          <Typography variant='h3'>I blickfånget</Typography>
          <Grid
            container
            spacing={5}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {
              bubbles.map((bubble, index) => {
                return (
                  <Button
                    sx={isDesktop ? style.bubbleDesktop : style.bubbleMobile} onClick={() => {window.open(bubble.link);}}
                  >
                    <p style={isDesktop ? style.bubbleTitleDesktop : style.bubbleTitleMobile}>{bubble.title}</p>
                    <p style={isDesktop ? style.bubbleDescriptionDesktop : style.bubbleDescriptionMobile}>{bubble.description}</p>
                  </Button>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5vh',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '320px',
    height: '125px',
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
    textTransform: 'none'
  },
  bubbleDesktop: {
    borderRadius: '50px',
    width: '40%',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid #FAB510',
    textTransform: 'none',
    '&:hover': {
      color: '#6C2C86',
      backgroundColor: '#fcda87',
    },
  },
  bubbleMobile: {
    borderRadius: '50px',
    width: '680px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid #FAB510',
    textTransform: 'none',
    '&:hover': {
      color: '#6C2C86',
      backgroundColor: '#fcda87',
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
    fontSize: '3.2em',
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
    fontSize: '2em',
    fontWeight: '600',
    lineHeight: '1.4em',
    margin: '0 10px',
  },
  
  imgBox: {
    width: '100%',
    height: '25%',
    // position: 'absolute',    
    top: '0',
    left: '0',
    // zIndex: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: "hidden",
    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)',
  },
};