import React, { Component } from "react";
import SectionContainer from "../components/Sections/SectionContainer";
import CardContainer from "../components/cards/CardContainer";
import ServiceCards from "../components/cards/ServiceCards";
import { serviceCardsData } from "../data/SectionsData/serviceCardsData";
import TwoPartSection from "../components/Sections/TwoPartSection";
import { section_five_Data } from "../data/SectionsData/homeSection-five-data";

export default class Home extends Component {
  //   const sections = props.sectionsData.map((item) => (
  //     <SectionContainer key={item.id} sectionsData={item} />
  //   ));
  constructor(props) {
    super();
    this.state = {
      props: props,
      serviceCardsData: serviceCardsData,
      section_five_Data: section_five_Data,
    };
  }

  render() {
    const serviceCards = this.state.serviceCardsData.map((item) => {
      return <ServiceCards key={item.cardID} data={item} />;
    });
    return (
      <div>
        <SectionContainer
          key={this.state.props.sectionsData.id}
          sectionsData={this.state.props.sectionsData[0]}
        />
        <div className="home__section-two">
          <CardContainer />
        </div>
        <SectionContainer
          key={this.state.props.sectionsData.id}
          sectionsData={this.state.props.sectionsData[1]}
        />
        <div className="home__section-three">
          <h1>Our Services</h1>
          <div className="home__section-three__cards">{serviceCards}</div>
        </div>
        {/* <TwoPartSection content={this.state.section_five_Data}></TwoPartSection> */}
        <div className="section bg-testimonial-blue display-block">
          <div className="text-center">
            <h2>What Our Clients Say</h2>
          </div>
          <hr className="testimonial-hr" />
          <div className="testimonials">
            <div className="testimonial-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p>Customer Name</p>
              </div>
            </div>
            <div className="testimonial-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p>Customer Name</p>
              </div>
            </div>
            <div className="testimonial-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p>Customer Name</p>
              </div>
            </div>
          </div>
          <hr className="testimonial-hr" />
        </div>
      </div>
    );
  }
}
