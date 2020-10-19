import React from "react";
import "./serviceCards.css";

export default function ServiceCards(props) {
  const data = props.data;
  console.log(data);
  const imgSrc = require("../../images/" + data.cardImg);
  //
  return (
    <div className="serice-card-container">
      <img src={imgSrc} alt={data.cardHeading}></img>
      <h4>{data.cardHeading}</h4>
      <p>{data.cardDescription}</p>
    </div>
  );
}
