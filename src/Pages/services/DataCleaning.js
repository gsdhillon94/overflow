import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { dataCleaningData } from "../../data/servicesData/dataCleaningData";

export default class DataCleaning extends Component {
  constructor() {
    super();
    this.state = {
      data: dataCleaningData,
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
