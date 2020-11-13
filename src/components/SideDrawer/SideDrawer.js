import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  let searchParam = "";
  let history = useHistory();
  const search = (e) => {
    e.preventDefault();
    let redirectUrl = "/search/" + searchParam;
    history.push(redirectUrl);
  };
  const updateQuery = (e) => {
    searchParam = e.target.value.toUpperCase();
  };
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
          <form onSubmit={(e) => search(e)}>
            <input
              type="search"
              placeholder="Search here..."
              onChange={(e) => updateQuery(e)}
            />
            <button className="search-button" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
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
          <Link to="/appointmentSetting">Appointment Setting</Link>
        </li>
        <li>
          <Link to="/telemarketing">Telemarketing</Link>
        </li>
        <li>
          <Link to="/datacleaning">Data Cleaning</Link>
        </li>
        <li>
          <Link to="/digitalLead">Digital Lead Services</Link>
        </li>
        <li>
          <Link to="/applicationDevelopment">Mobile & Web apps</Link>
        </li>
        <li>
          <Link to="/restaurantApp">Reataurant-App</Link>
        </li>
        <li>
          <Link to="/businessEvents">Business Events</Link>
        </li>
        <li>
          <Link to="/salesTraining">Sales Training</Link>
        </li>
        <li>
          <Link to="/marketingAutomation">Marketing Automation</Link>
        </li>
        <li>
          <Link to="/advancedDigital">Advanced Digital Solutions</Link>
        </li>
        <li>
          <Link to="/videoAnimation">Video and Animation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
