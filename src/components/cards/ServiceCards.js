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
      <div
        className={
          classes.includes("no-card")
            ? "flip-container no-card "
            : "flip-container"
        }
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="flipper">
          <div className="front">
            <div className={classes}>
              <img src={imgSrc} alt={data.cardHeading}></img>
              <h4>{data.cardHeading}</h4>
              <p>{data.cardDescription}</p>
            </div>
          </div>
          <div className="back">
            <div className={classes}>
              <img src={imgSrc} alt={data.cardHeading}></img>
              <h4>{data.cardHeading}</h4>
              <button className="btn primary-blue">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
