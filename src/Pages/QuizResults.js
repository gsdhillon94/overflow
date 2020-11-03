import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function QuizResults(props) {
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
    setServices(servicesNeeded);
    setShowServices(otherServices);
  };
  useEffect(() => {
    if (props.quizData) {
      adjustServices();
    }
  }, [props.quizData]);
  return (
    <div className="section">
      <div>
        Services you need
        <ul>
          {services.map((service, i) => {
            return <li key={service + i}>{service}</li>;
          })}
        </ul>
      </div>
      <div>
        Other services available
        <ul>
          {showServices.map((service, i) => {
            return <li key={service + i}>{service}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    quizData: state.quiz.userData,
  };
};
export default connect(mapStateToProps)(QuizResults);
