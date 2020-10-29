import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { teleMarketingData } from "../../data/servicesData/teleMarketingData";

export default class Telemarketing extends Component {
  constructor() {
    super();
    this.state = {
      data: teleMarketingData,
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
