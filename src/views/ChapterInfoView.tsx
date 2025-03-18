import React from "react";
import Button from "@mui/material/Button";

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



const ChapterInfoView: React.FC = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header>
        <h1>Datasektionen på KTH</h1>
      </header>


      {/* New Button Section */}
      <div style={style.container}>
        <div style={style.subcontainer}>
          <p style={style.p}>
          Är du intresserad av programmering, artificiell intelligens, cybersäkerhet eller framtidens 
          teknik? Då är Datateknik på KTH något för dig! Som student på programmet blir du en del av 
          Datasektionen, en engagerad och stödjande gemenskap som hjälper dig att utvecklas både 
          akademiskt och socialt.

          På Datasektionen finns studienämnder som ser till att din utbildning håller hög kvalitet,
          mentorskapsprogram för nya studenter och massor av resurser för att hjälpa dig att lyckas.
          Datasektionen har 20 aktiva nämnder och ytterligare projekt med engagerade studenter.
          Oavsett om du behöver stöd i en kurs eller vill hitta ett nätverk av likasinnade, finns alltid
          någon att vända sig till.
          </p>
        </div>
        <Button sx={style.button} href="https://www.antagning.se/se/search?period=24&freeText=Civilingenj%C3%B6r+Datateknik+KTH">
          SÖK HÄR!
        </Button>
      </div>

      <div style={style.container}>
        <div style={style.subcontainer}>
          <p style={style.p}>
            Om just du känner dig lite taggad efter att ha fått veta lite mer om datateknik, leder länken
            här nedan till KTHs egna informationssida där du kan få en mer konkret överblick av
            vad programmet innebär.
        
          </p>
        </div>
        <Button sx={style.button} href="https://www.kth.se/utbildning/civilingenjor/datateknik/datateknik-civilingenjor-300-hp-1.4116">
          DATATEKNIK
        </Button>
      </div>



      <section>
        <h2>Kontakt</h2>
        <p>
          För mer information, vänligen kontakta oss via e-post:{" "}
          <a href="mailto:info@datasektionen.se">dive@datasektionen.se</a>.
        </p>
      </section>

      <footer style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
        <p>&copy; {new Date().getFullYear()} Datasektionen, KTH Sverige</p>
      </footer>
    </div>
  );
};

export default ChapterInfoView;
