import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-in-alt login-icon"></i>
          </Link>
        </li>
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
          <button className="button-contact"> Contact</button>
        </li>

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
    </nav>
  );
};

export default SideDrawer;
