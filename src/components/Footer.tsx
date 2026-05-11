import diveLogo from '../assets/dive.png'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'
import facebookIcon from '../assets/facebook.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-column">
          <h2>Vad är Dive?</h2>
          <p>
            Dive är en studentdriven projektgrupp på Datasektionen jobbar med att nå ut till kvinnor och icke-binära som ska söka högskoleutbildning till hösten för att visa upp både programmet och sektionen.
          </p>
        </div>

        <div className="footer-column">
          <h2>Kontakta oss</h2>
          <p>
            Du kan antingen kontakta oss genom
            <a href="#" className="footer-link-emphasis">
              {"frågelådan "}
            </a>
            {" eller genom att maila"}
            <a href="mailto:dive@datasektionen.se" className="footer-link">
              dive@datasektionen.se
            </a>
          </p>
        </div>

        <div className="footer-right-column">
          <div className="footer-social-links">
            {/* <img src={diveLogo} alt="Dive logotyp" className="footer-logo" /> */}
            <a href="#" className="footer-social-link" aria-label="Dive">
              <img src={diveLogo} alt="Dive" className="footer-social-icon-dive" />
            </a>
            <a href="https://www.instagram.com/dive_kth/" className="footer-social-link" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574217249948" className="footer-social-link" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/dive-kth/" className="footer-social-link" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* © */}
        2026 Datasektionen, KTH Sverige
      </div>
    </footer>
  )
}

export default Footer