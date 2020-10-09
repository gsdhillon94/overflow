import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandeler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/overflow">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navgation-items">
          <div className="toolbar_navgation-items-up">
            <ul>
              <li>
                <Link to="/overflow">Home</Link>
              </li>
              <li>
                <Link to="/about">About US</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <input type="text" placeholder="Search here..." />
              </li>
              <li>
                <button className="button-contact"> Contact</button>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt login-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="toolbar_navgation-items-bottom">
            <ul>
              <li>
                <Link to="/">Appointment Setting</Link>
              </li>
              <li>
                <Link to="/">Telemarketing</Link>
              </li>
              <li>
                <Link to="/">Data Cleaning</Link>
              </li>
              <li>
                <Link to="/">Digital Lead Services</Link>
              </li>
              <li>
                <Link to="/">Mobile & Web apps</Link>
              </li>
              <li>
                <Link to="/">Reataurant-App</Link>
              </li>
              <li>
                <Link to="/">Business Events</Link>
              </li>
              <li>
                <Link to="/">Sales Training</Link>
              </li>
              <li>
                <Link to="/">Marketing Automation</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
