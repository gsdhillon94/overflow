import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { digitalLeadServicesData } from "../../data/servicesData/digitalLeadServicesData";

export default class DigitalLeadServices extends Component {
  constructor() {
    super();
    this.state = {
      data: digitalLeadServicesData,
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
