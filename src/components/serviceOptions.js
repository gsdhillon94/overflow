import React from "react";
import { Link } from "react-router-dom";

export default function ServiceOptions(props) {
  const data = props.data;
  console.log(data);
  return (
    <div className="result-option-container">
      <div className="result-content">
        <Link to={data.link_to}>
          <h2>{data.heading}</h2>
        </Link>
        <p>{data.content}</p>
      </div>
      <div className="result-image">
        <img src={require("../images/" + data.img)} />
      </div>
    </div>
  );
}
