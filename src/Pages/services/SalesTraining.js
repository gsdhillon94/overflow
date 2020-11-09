import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { salesTrainingData } from "../../data/servicesData/salesTrainingData";

export default class SalesTraining extends Component {
  constructor() {
    super();
    this.state = {
      data: salesTrainingData,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
