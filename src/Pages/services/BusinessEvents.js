import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { businessEventsData } from "../../data/servicesData/businessEventsData";

export default class BusinessEvents extends Component {
  constructor() {
    super();
    this.state = {
      data: businessEventsData,
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
