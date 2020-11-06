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
              Overflow Did an excellent job handling the design of our web site.
              I would highly recommend Overflow if you are in need of web
              design.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p className="cust-name">Jay Smith</p>
                <p className="cust-title">CEO</p>
              </div>
            </div>
            <div className="testimonial-content">
              <div>
                We were very pleased with all the work and expertise provided
              </div>
              <br />
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>

                <p className="cust-name">Rene Johnson</p>
                <p className="cust-title">Director of Marketing</p>
              </div>
            </div>
            <div className="testimonial-content">
              Their team is knowledgeable, responsive and committed to
              supporting our initiatives, making them invaluable partners.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p className="cust-name">Maria Lopez</p>
                <p className="cust-title">Operations Manager</p>
              </div>
            </div>
            <div className="testimonial-content">
              Your Team Rocks! Just a short note to thank you for the help on my
              social media. Your team is superb, and they were very helpful!
              Kudos to all, and I want to express my gratitude to you.
              <div className="cust-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p className="cust-name">Eugene Scott-President</p>
                <p className="cust-title">(Social Media Service)</p>
              </div>
            </div>
          </div>
          <hr className="testimonial-hr" />
        </div>
      </div>
    );
  }
}
