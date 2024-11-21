import { Link } from "react-router-dom";
import google from "../assets/icons/google.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import twitter from "../assets/icons/twitter.svg";
import { auth } from "../config/firebase.config";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contacts">
          <h3 className="contact-heading">Contacts</h3>
          <div className="contact-line">Email: email@gmail.com</div>
          <div className="contact-line">Phone: 0202020202</div>
          <div className="contact-icon-container">
            <div className="contact-icon">
              <img src={google} alt="" className="icon" />
            </div>
            <div className="contact-icon">
              <img src={instagram} alt="" className="icon" />
            </div>
            <div className="contact-icon">
              <img src={tiktok} alt="" className="icon" />
            </div>
            <div className="contact-icon">
              <img src={twitter} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="sitemap">
          <h3 className="sitemap-heading">Sitemap</h3>
          <div className="sitemap-links">
            <Link className="sitemap-link" to="/">
              Home
            </Link>
            <Link className="sitemap-link" to="/about-us">
              About us
            </Link>
            <Link className="sitemap-link" to="/blog">
              Blog
            </Link>
            {auth?.currentUser?.uid ? (
              <Link className="sitemap-link" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              <Link className="sitemap-link" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy;2024 NourishKids</p>
      </div>
    </footer>
  );
};
