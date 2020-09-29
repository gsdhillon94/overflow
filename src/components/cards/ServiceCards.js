import React from "react";
import "./serviceCards.css";

export default function ServiceCards(props) {
  const imgSrc = require("../../images/" + props.data.cardImg);
  return (
    <div className="serice-card-container">
      <img src={imgSrc} alt={props.data.cardHeading}></img>
      <h4>{props.data.cardHeading}</h4>
      <p>{props.data.cardDescription}</p>
    </div>
  );
}
