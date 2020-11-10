import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mobileWebAppsData } from "../data/servicesData/mobileWebAppsData";
import SectionContainer from "../components/Sections/SectionContainer";
import { digitalLeadServicesData } from "../data/servicesData/digitalLeadServicesData";
import { salesTrainingData } from "../data/servicesData/salesTrainingData";
import { marketingAutomationData } from "../data/servicesData/marketingAutomation";
import ServiceOptions from "../components/serviceOptions";

function QuizResults(props) {
  const increaseSales = {
    heading: "Increase your sales",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "Sales.png",
    link_to: "/salesTraining",
  };
  const appDev = {
    heading: "Build Mobile and Web applications",
    content:
      "Build Mobile and Web applications content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "InformationsTechnology.png",
    link_to: "/applicationDevelopment",
  };
  const virtualTeam = {
    heading: "Build Virtual Team",
    content:
      "Build Virtual Team content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "Virtual-Team.png",
    link_to: "/businessEvents",
  };
  const marketing = {
    heading: "Branding and Marketing",
    content:
      "Branding and Marketing content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "Marketing-Advertising.png",
    link_to: "/digitalLead",
  };

  const [services, setServices] = useState([
    "Build Mobile and Web applications",
    "Branding and Marketing",
    "Increase Sales",
    "Build Virtual Team",
  ]);
  const [showServices, setShowServices] = useState([]);
  const adjustServices = () => {
    let servicesNeeded = [...services];
    let otherServices = [];
    let serviceSelected = props.quizData[6].question.answer;
    let serviceIndex = 0;
    services.find((service, index) => {
      if (service === serviceSelected) {
        serviceIndex = index;
      }
    });
    for (let i = 0; i < serviceIndex; i++) {
      otherServices.push(servicesNeeded.shift());
    }
    console.log(servicesNeeded, "services needed");
    setServices(servicesNeeded);
    console.log(otherServices, "other services");
    setShowServices(otherServices);
  };
  useEffect(() => {
    console.log(props.quizData);
    if (props.quizData) {
      adjustServices();
    }
  }, [props.quizData]);

  const getServiceInfo = (service, i) => {
    switch (service) {
      case "Build Mobile and Web applications":
        return <ServiceOptions key={service + i} data={appDev} />;
      case "Branding and Marketing":
        return <ServiceOptions key={service + i} data={marketing} />;
      case "Increase Sales":
        return <ServiceOptions key={service + i} data={increaseSales} />;
      case "Build Virtual Team":
        return <ServiceOptions key={service + i} data={virtualTeam} />;
    }
  };
  return props.quizData ? (
    <div className="section wrap-content">
      <h2>Recommended Services</h2>
      {services.map((service, i) => {
        return getServiceInfo(service, i);
      })}
      {showServices.length > 0 ? <h2>Our Other Services</h2> : null}

      {showServices.map((service, i) => {
        return getServiceInfo(service, i);
      })}
    </div>
  ) : (
    <div className="loading">
      <img src={require("../images/loading.gif")} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    quizData: state.quiz.userData,
  };
};
export default connect(mapStateToProps)(QuizResults);
