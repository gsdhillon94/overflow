import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ACTIONS, BLOGS } from "../data/websiteConsts";
import { db } from "../firebase/firebaseConfig";
function Blog(props) {
  let count = 0;
  let { title } = useParams();
  let blogData = [];

  const getBlogs = (key, value) => {
    var data = [];
    props.sendRequest();
    db.collection("blogs")
      .where(key, "==", value)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          data.push(doc.data());
          props.blogFetchSuccess(data);
        });
      });
  };

  if (props.data.length === 0) {
    getBlogs("bTitle", title);
  }

  //   const blogData = props.data.map((item) => {
  //     console.log(item, "data check");
  //   });

  useEffect(() => {
    // blogData = props.data;
    console.log(props.data);
  }, [props.data]);

  return props.data[0] ? (
    <div className="section no-flex center">
      <h1>{props.data[0].bTitle}</h1>
      <div className="blog-image-container">
        <img src={props.data[0].bImg} alt={props.data[0].bTitle} />
      </div>
      {props.data[0].bContent
        ? props.data[0].bContent.map((item) => {
            switch (item.inputType) {
              case BLOGS.CONTENT:
                return <p key={item.key}>{item.value}</p>;
              case BLOGS.HEADING:
                return <h4 key={item.key}>{item.value}</h4>;
              case BLOGS.IMAGE:
                return (
                  <img className="height-50" key={item.key} src={item.value} />
                );
            }
          })
        : null}
    </div>
  ) : (
    <div className="section center">
      <img src={require("../images/loading.gif")} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.blog.data,
    loading: state.blog.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: () => dispatch({ type: ACTIONS.SEND }),
    blogFetchSuccess: (data) =>
      dispatch({ type: ACTIONS.GET_BLOG_SUCCESS, payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
