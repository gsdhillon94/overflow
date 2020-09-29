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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
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
