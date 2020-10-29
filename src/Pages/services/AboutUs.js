import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { aboutUsData } from "../../data/servicesData/aboutUsData";

export default class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      data: aboutUsData,
    };
  }
  render() {
    return (
      <div>
        {this.state.data &&
          this.state.data.map((item, index) => {
            return (
              <SectionContainer key={item.id + index} sectionsData={item} />
            );
          })}
      </div>
    );
  }
}
