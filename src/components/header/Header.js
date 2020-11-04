import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header(props) {
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;