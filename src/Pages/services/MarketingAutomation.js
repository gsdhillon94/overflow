import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { marketingAutomationData } from "../../data/servicesData/marketingAutomation";

export default class MarketingAutomation extends Component {
  constructor() {
    super();
    this.state = {
      data: marketingAutomationData,
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
