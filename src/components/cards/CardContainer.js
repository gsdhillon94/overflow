import React from "react";
import "./cardContainer.css";

export default function CardContainer() {
  const imgSrc = require("../../images/" + "girl.jpg");
  return (
    <div className="card-container">
      <div className="findMoreCard">
        <div className="card__image-div">
          <img src={imgSrc} />
        </div>
        <h4 className="card-heading">What is Lead Generation?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="findMoreCard__button">
        <button className="card__button">Find out more</button>
      </div>
    </div>
  );
}
