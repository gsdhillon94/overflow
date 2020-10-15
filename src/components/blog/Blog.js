import React from "react";
import { connect } from "react-redux";

function Blog(props) {
  const data = props.data;
  const content = data.bContent;
  console.log(data);
  return (
    <div className="blogs-card-container" id={data.bTitle}>
      <img src={data.bImg} alt={data.bTitle} />
      <h4>{data.bTitle}</h4>
      {content.map((item, i) => {
        if (item.inputType === "content") {
          return <p key={item + i}>{item.value}</p>;
        }
      })}
    </div>
  );
}

export default Blog;
