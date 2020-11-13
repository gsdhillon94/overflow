import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
export default function BlogList(props) {
  let data = { ...props };
  const [selectedCategory, setselectedCategory] = useState("All");

  console.log(data, "check");
  const blogs =
    data.data &&
    data.data.map((item, i) => {
      if (selectedCategory === "All") {
        return <Blog key={item + i} data={item}></Blog>;
      } else {
        if (item.bCat === selectedCategory) {
          return <Blog key={item + i} data={item}></Blog>;
        }
      }
    });
  const distinct = (val, index, self) => {
    return self.indexOf(val) === index;
  };
  let categories = data.data.map((item) => {
    return item.bCat;
  });
  categories = categories.filter(distinct);
  categories.unshift("All");

  const showSelectedCategory = (cat) => {
    setselectedCategory(cat);
  };
  useEffect(() => {
    console.log(data, "data after re render");
  }, [selectedCategory]);
  return (
    <>
      <div className="section no-height categories">
        {categories.map((item, index) => {
          return (
            <button
              className={selectedCategory === item ? "cat-active" : null}
              key={item + index}
              onClick={() => showSelectedCategory(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="section wrap-content space-evenly">{blogs}</div>
    </>
  );
}
