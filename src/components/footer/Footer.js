import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <div className="fd-logo">
          <div className="fd-logo__container">
            <img src={logo} alt={logo} />
          </div>
          <p>
            Overflow Digital Solutions takes great pride in having the ability
            of problem-solving mindset. We specialize in end-to-end IT &
            Telecommunication services, lead generation services and Digital
            Marketing Services. We use our professional skills to generate
            guaranteed, qualified leads for businesses of all sizes.
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
