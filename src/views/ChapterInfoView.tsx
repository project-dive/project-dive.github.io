import React from "react";
import { Container, Typography, Box, Button, Link } from "@mui/material";

const ChapterInfoView: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{fontWeight: 800}}>
        Datasektionen på KTH
      </Typography>

      {/* Section 1 */}
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" sx={{ mb: 2, textAlign: "justify", color: "text.primary", fontSize: "1.2em", fontWeight: 600, lineHeight: 2.5 }}>
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
          sx={{ borderRadius: "40px", width: 200, height: 80, fontSize: "1.5em", mt: 3 }}
        >
          SÖK HÄR!
        </Button>
      </Box>
      
      <div>
      {/* feeeen biiild */}
      </div>

      {/* Section 2 */}
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" sx={{ mb: 2, textAlign: "justify", color: "text.primary", fontSize: "1.2em", fontWeight: 600, lineHeight: 2.5 }}>
          Om just du känner dig lite taggad efter att ha fått veta lite mer om datateknik, leder länken
          här nedan till KTHs egna informationssida där du kan få en mer konkret överblick av
          vad programmet innebär samt viktiga datum att hålla koll på!
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          href="https://www.kth.se/utbildning/civilingenjor/datateknik/datateknik-civilingenjor-300-hp-1.4116"
          sx={{ borderRadius: "40px", width: 200, height: 80, fontSize: "1.5em", mt: 3 }}
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

export default ChapterInfoView;
