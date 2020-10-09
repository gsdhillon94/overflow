import React from "react";

export default function Blog(props) {
  return (
    <div
      className="blogs-card-container"
      onClick={(e) => props.blogClick(e)}
      id="blog"
    >
      <button className="btn round-border blog-read primary-blue">Read</button>
      <img src={require("../../images/Turbocharge-1-1.jpg")} />
      <h4>Blog Title</h4>
      <p className="author-name">Written by</p>
      <p className="blog-content-display">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
    </div>
  );
}
