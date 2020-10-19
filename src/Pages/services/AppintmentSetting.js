import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { appointmentSettingData } from "../../data/servicesData/appointmentSettingData";

export default class AppintmentSetting extends Component {
  constructor() {
    super();
    this.state = {
      data: appointmentSettingData,
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
