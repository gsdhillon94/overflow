import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <div className="fd-logo">
          <div className="fd-logo__container">
            <img src={logo} alt={logo} />
          </div>
          <p>
            We range of business services from Business Development, Marketing,
            Consultancy requirements across Melbourne, Sydney, Brisbane, Perth
            and Adelaide
            <br />
            <br />
            <b>Head Office</b>
            <br /> Melbourne: Level 23,
            <br />
            Collins Square Tower Five,
            <br />
            727 Collins Street,
            <br />
            VIC 3008
            <br />
            <br />
            <b>ABN:</b> 76 954 889 494
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/overflow-digital-solutions/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/overflowdigitalsolutions/">
                <i className="fab fa-facebook-square"></i>
              </a>
              {/* <i className="fab fa-twitter-square"></i> */}
            </div>
          </p>
        </div>
        <div className="spacer"></div>
        <div className="fd-1rem">
          <p>Company</p>
          <ul>
            <li>Services</li>
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Products</p>
          <ul>
            <li>Services</li>
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Services</p>
          <ul>
            <li>Services</li>
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Social</p>
          <ul>
            <li>Services</li>
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
