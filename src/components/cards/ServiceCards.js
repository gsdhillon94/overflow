import React from "react";
import { Link } from "react-router-dom";
import "./serviceCards.css";

export default function ServiceCards(props) {
  const data = props.data;
  const imgSrc = require("../../images/" + data.cardImg);
  const classes = data.classes
    ? data.classes.join(" ")
    : "serice-card-container";
  //
  return (
    <Link to={data.link_to}>
      <div className={classes}>
        <img src={imgSrc} alt={data.cardHeading}></img>
        <h4>{data.cardHeading}</h4>
        <p>{data.cardDescription}</p>
        <button className="btn primary-blue">Learn More</button>
      </div>
    </Link>
  );
}
