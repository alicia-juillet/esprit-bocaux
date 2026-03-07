import "./Footer.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Esprit Bocaux</h3>

        <p className="footer-tagline">
          Conserverie artisanale & épicerie de producteurs locaux
        </p>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=61555897739691"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/esprit_bocaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Esprit Bocaux
        </p>
      </div>
    </footer>
  );
}

export default Footer;
