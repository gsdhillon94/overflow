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
        <div className="blog-content">
          <h4>{data.bTitle}</h4>
          {console.log(content)}
          {/* {content.map((item, i) => {
            if (item.inputType === "content") {
              return <p key={item + i}>{item.value}</p>;
            }
          })} */}
          {content && content.length > 0 ? <p>{content[0].value}</p> : null}
        </div>
        <button className="read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </Link>
  );
}

export default Blog;
