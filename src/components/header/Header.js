import React, { useState } from "react";
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
  const [state, setState] = useState({
    showSubMenu: false,
  });
  const toggleMenu = (val) => {
    setState({
      showSubMenu: val,
    });
  };
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandeler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navgation-items">
          <div className="toolbar_navgation-items-up">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li onMouseEnter={() => toggleMenu(false)}>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li
                className="services-menu"
                onMouseEnter={() => toggleMenu(true)}
              >
                <Link to="">
                  Services <i className="fas fa-chevron-down"></i>
                </Link>
              </li>
              <li onMouseEnter={() => toggleMenu(false)}>
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
                <Link to="/contact">
                  <button className="button-contact-white"> Contact</button>
                </Link>
              </li>
              {/* <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt login-icon"></i>
                </Link>
              </li> */}
              <li>
                <button className="button-contact">1800 505 929 </button>
              </li>
            </ul>
          </div>
          {/* <div className="toolbar_navgation-items-bottom">
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
          </div> */}
        </div>
      </nav>
      {state.showSubMenu ? (
        <div
          className="toolbar_navgation-items-bottom"
          onMouseLeave={() => toggleMenu(false)}
        >
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
            <li>
              <Link to="/advancedDigital">Advanced Digital Solutions</Link>
            </li>
            <li>
              <Link to="/videoAnimation">Video and Animation</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
