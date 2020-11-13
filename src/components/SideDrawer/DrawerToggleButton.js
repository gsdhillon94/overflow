import React from "react";
import "./DrawerToggleButton.css";
const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <i className="fas fa-bars"></i>
    {/* <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div> */}
  </button>
);

export default DrawerToggleButton;
