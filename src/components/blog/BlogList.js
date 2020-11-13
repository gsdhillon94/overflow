import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
export default function BlogList(props) {
  const data = props;
  const blogs =
    data.data &&
    data.data.map((item, i) => {
      return <Blog key={item + i} data={item}></Blog>;
    });
  const distinct = (val, index, self) => {
    return self.indexOf(val) === index;
  };
  let categories = data.data.map((item) => {
    return item.bCat;
  });
  categories = categories.filter(distinct);
  console.log(categories);

  return (
    <>
      <div className="section no-height categories">
        {categories.map((item) => {
          return <button>{item}</button>;
        })}
      </div>
      <div className="section wrap-content space-evenly">{blogs}</div>
    </>
  );
}
