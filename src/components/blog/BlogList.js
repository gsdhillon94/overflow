import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
export default function BlogList(props) {
  const data = props;
  const blogs = data.data.map((item, i) => {
    return <Blog key={item + i} data={item}></Blog>;
  });

  return <div className="section wrap-content">{blogs}</div>;
}
