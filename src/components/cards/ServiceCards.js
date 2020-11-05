import React from "react";
import { Link } from "react-router-dom";
import "./serviceCards.css";

export default function ServiceCards(props) {
  const data = props.data;
  const imgSrc = require("../../images/" + data.cardImg);
  //
  return (
    <Link to={data.link_to}>
      <div className={data.classes.join(" ")}>
        <img src={imgSrc} alt={data.cardHeading}></img>
        <h4>{data.cardHeading}</h4>
        <p>{data.cardDescription}</p>
      </div>
    </Link>
  );
}
