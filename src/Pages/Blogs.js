import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Blog from "../components/blog/Blog";
import BlogList from "../components/blog/BlogList";
import SectionContainer from "../components/Sections/SectionContainer";
import TwoPartSection from "../components/Sections/TwoPartSection";
import { blogsData } from "../data/SectionsData/blogsData";
import { ACTIONS } from "../data/websiteConsts";
import { db } from "../firebase/firebaseConfig";
import { getBlogs } from "../store/reducers/blogReducer";

class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogsSection: blogsData,
      data: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getBlogsData();
  }

  getBlogsData = () => {
    this.props.sendRequest();
    let blogData = [];
    let that = this;
    db.collection("blogs")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          blogData.push(doc.data());
          that.setState({
            ...that.state,
            data: [...blogData],
          });
        });
      });

    this.props.blogFetchSuccess(this.state.data);
  };

  render() {
    return (
      <div>
        <TwoPartSection
          content={this.state.blogsSection}
          formSubmit={this.handleFormSubmit}
        ></TwoPartSection>
        {this.props.user !== "" ? (
          <div className="admin buttons">
            <Link to="/addblog">
              <button className="btn">Add Blog</button>
            </Link>
          </div>
        ) : null}
        {this.state.data.length < 1 ? (
          <div style={{ "text-align": "center" }}>
            <img src={require("../images/loading.gif")} />
          </div>
        ) : (
          <BlogList data={this.state.data} />
        )}
        {console.log(this.state.data)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    data: state.blog.data,
    user: state.login.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendRequest: () => dispatch({ type: ACTIONS.SEND }),
    blogFetchSuccess: (data) =>
      dispatch({ type: ACTIONS.GET_BLOG_SUCCESS, payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
