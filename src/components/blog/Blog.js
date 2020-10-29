import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Blog(props) {
  const data = props.data;
  const content = data.bContent;
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={"/blogs/" + data.bTitle}
    >
      <div className="card-container-center" id={data.bTitle}>
        <div className="card__image-container">
          <img src={data.bImg} alt={data.bTitle} />
        </div>
        <h4>{data.bTitle}</h4>
        {content.map((item, i) => {
          if (item.inputType === "content") {
            return <p key={item + i}>{item.value}</p>;
          }
        })}
      </div>
    </Link>
  );
}

export default Blog;
