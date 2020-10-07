import React, { Component } from "react";
import BlogList from "../components/blog/BlogList";
import SectionContainer from "../components/Sections/SectionContainer";
import TwoPartSection from "../components/Sections/TwoPartSection";
import { blogsData } from "../data/SectionsData/blogsData";

export default class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogsSection: blogsData,
    };
  }
  handleFormSubmit = (e) => {
    console.log("check 2");
  };
  handleBlogClick = (e) => {
    console.log(e.target.id, "blog");
  };
  render() {
    const id = 0;
    const data = "";
    return (
      <div>
        <TwoPartSection
          content={this.state.blogsSection}
          formSubmit={this.handleFormSubmit}
        ></TwoPartSection>
        <BlogList blogClick={(e) => this.handleBlogClick(e)} />
      </div>
    );
  }
}
