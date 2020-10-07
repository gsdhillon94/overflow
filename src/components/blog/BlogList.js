import React from "react";
import Blog from "./Blog";
export default function BlogList(props) {
  return (
    <div className="section wrap-content">
      <Blog blogClick={props.blogClick}></Blog>
      <Blog blogClick={props.blogClick}></Blog>
      <Blog blogClick={props.blogClick}></Blog>
      <Blog blogClick={props.blogClick}></Blog>
      <Blog blogClick={props.blogClick}></Blog>
      <Blog blogClick={props.blogClick}></Blog>
    </div>
  );
}
