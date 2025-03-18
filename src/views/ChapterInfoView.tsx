import React from "react";
import { Container, Typography, Box, Button, Link } from "@mui/material";
import MyPhoto from "../assets/meta.jpg";
import { useEffect } from 'react';

const ChapterInfoView: React.FC = () => {
  const breakpoint = 1000;
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > breakpoint);
  const updateMedia = () => {
      setDesktop(window.innerWidth > breakpoint);
  };
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{fontWeight: 800}}>
        Datasektionen på KTH
      </Typography>

      {/* Section 1 */}
      <Box sx={isDesktop ? style.sectionDesktop : style.sectionMobile}>
        <Typography variant="body1" sx={isDesktop ? style.sectionTextDesktop : style.sectionTextMobile}>
          Är du intresserad av programmering, artificiell intelligens, cybersäkerhet eller framtidens 
          teknik? Då är Datateknik på KTH något för dig! Som student på programmet blir du en del av 
          Datasektionen, en engagerad och stödjande gemenskap som hjälper dig att utvecklas både 
          akademiskt och socialt.
          <br /><br />
          På Datasektionen finns studienämnder som ser till att din utbildning håller hög kvalitet,
          mentorskapsprogram för nya studenter och massor av resurser för att hjälpa dig att lyckas.
          Datasektionen har 20 aktiva nämnder och ytterligare projekt med engagerade studenter.
          Oavsett om du behöver stöd i en kurs eller vill hitta ett nätverk av likasinnade, finns alltid
          någon att vända sig till.

          Så om just du är taggad på att söka datateknik så är anmälan redan öppen nu från 17 mars!
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          href="https://www.antagning.se/se/search?period=24&freeText=Civilingenj%C3%B6r+Datateknik+KTH"
          sx={isDesktop ? style.sectionButtonDesktop : style.sectionButtonMobile}
        >
          SÖK HÄR!
        </Button>
      </Box>

      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <img src={MyPhoto} alt="Beskrivande text" style={{ width: "60%", height: "auto" }} />
      </div>


      {/* Section 2 */}
      <Box sx={isDesktop ? style.sectionDesktop : style.sectionMobile}>
        <Typography variant="body1" sx={isDesktop ? style.sectionTextDesktop : style.sectionTextMobile}>
          Om just du känner dig lite taggad efter att ha fått veta lite mer om datateknik, leder länken
          här nedan till KTHs egna informationssida där du kan få en mer konkret överblick av
          vad programmet innebär samt viktiga datum att hålla koll på!
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          href="https://www.kth.se/utbildning/civilingenjor/datateknik/datateknik-civilingenjor-300-hp-1.4116"
          sx={isDesktop ? style.sectionButtonDesktop : style.sectionButtonMobile}
        >
          DATATEKNIK
        </Button>
      </Box>

      {/* Kontakt Section */}
      <Box sx={{ my: 10 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Kontakt
        </Typography>
        <Typography variant="body1">
          För mer information, vänligen kontakta oss via e-post:{" "}
          <Link href="mailto:dive@datasektionen.se" color="secondary">
            dive@datasektionen.se
          </Link>.
        </Typography>
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 4, borderTop: 1, borderColor: "divider", pt: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Datasektionen, KTH Sverige
        </Typography>
      </Box>
    </Container>
  );
};

const style = {
  sectionDesktop: {
    my: 4
  },
  sectionMobile: {
    my: 4,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTextDesktop: {
    mb: 2, 
    textAlign: "justify",
    color: "text.primary", 
    fontSize: "1.2em", 
    fontWeight: 600, 
    lineHeight: 2.5,
  },
  sectionTextMobile: {
    mb: 2, 
    textAlign: "justify",
    color: "text.primary", 
    fontSize: "1.2em", 
    fontWeight: 600, 
    lineHeight: 1.6,
  },
  sectionButtonDesktop: {
    borderRadius: "40px", 
    width: 200, 
    height: 80, 
    fontSize: "1.5em", 
    mt: 3,
    color: "background"
  },
  sectionButtonMobile: {
    borderRadius: "40px", 
    width: 300, 
    height: 120, 
    fontSize: "1.5em", 
    mt: 3,
    color: "background"
  }
}

export default ChapterInfoView;
