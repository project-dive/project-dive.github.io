import React from "react";

const ChapterInfoView: React.FC = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header>
        <h1>Datasektionen på KTH</h1>
        <p>Välkommen till vår informationssida för datasektionen.</p>
      </header>

      <section>
        <h2>Om oss</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum
          auctor est. Nam vitae finibus ante. Integer tincidunt, quam nec aliquet luctus,
          mi nisi dictum odio, id convallis mi eros quis mi.
        </p>
      </section>

      <section>
        <h2>Vårt syfte</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, tortor
          eget ultrices pharetra, urna sapien faucibus leo, sit amet auctor sapien ligula nec
          dui.
        </p>
      </section>

      <section>
        <h2>Event</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          För mer information, vänligen kontakta oss via e-post:{" "}
          <a href="mailto:info@datasektionen.se">info@datasektionen.se</a>.
        </p>
      </section>

      <footer style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
        <p>&copy; {new Date().getFullYear()} Datasektionen, KTH Sverige</p>
      </footer>
    </div>
  );
};

export default ChapterInfoView;
