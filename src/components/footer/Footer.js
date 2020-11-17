import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

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
                <i className="fab fa-linkedin"></i>
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Sales</p>
          <ul>
            <Link to="/appointmentSetting">
              <li>Appointment Setting</li>
            </Link>
            <Link to="/datacleaning">
              <li>Data Cleaning</li>
            </Link>
            <Link to="/salesTraining">
              <li>Sales Training</li>
            </Link>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Marketing</p>
          <ul>
            <Link to="/digitalLead">
              <li>Digital Lead Services</li>
            </Link>
            <Link to="/marketingAutomation">
              <li>Marketing Automation</li>
            </Link>
            <Link to="/telemarketing">
              <li>Telemarketing</li>
            </Link>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Development</p>
          <ul>
            <Link to="/applicationDevelopment">
              <li>Web Development</li>
            </Link>

            <li>
              <Link to="/applicationDevelopment">App Development</Link>
            </li>
            {/* <Link to="/applicationDevelopment">
              
            </Link> */}
            <Link to="/restaurantApp">
              <li>Restaurant App Development </li>
            </Link>
          </ul>
        </div>
        <div className="fd-1rem">
          <p>Virtual Assistance</p>
          <ul>
            <Link to="/salesTraining">
              <li>Build Sales Team</li>
            </Link>
            <Link to="/businessEvents">
              <li>Business Events</li>
            </Link>
            <Link to="/appointmentSetting">
              <li>Appointment Setting</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
