import React, { Component } from "react";
import "./sectionContainer.css";
import "../../data/websiteConsts";
import { TAGS } from "../../data/websiteConsts";
import AccordionCard from "../cards/AccordionCard";

function SectionContainer(props) {
  const data = props.sectionsData.data;
  const sectionClasses = props.sectionsData.sectionClasses.join(" ");
  const imageSrc = "../../images/";

  console.log();
  // const sectionsData = props.sectionsData.data
  const sectiondata = data.map((item) => {
    switch (item.tag) {
      case TAGS.P:
        return <p key={item.id}>{item.text}</p>;
      case TAGS.HR:
        return <hr key={item.id} />;
      case TAGS.H2:
        return <h2 key={item.id}>{item.text}</h2>;
      case TAGS.BR:
        return <br key={item.id} />;
      case TAGS.BUTTON:
        return (
          <button key={item.id} className={item.classes.join(" ")}>
            {item.text}
          </button>
        );
      case TAGS.LIST:
        return (
          <ul key={item.id}>
            {item.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        );
      case TAGS.IMG: {
        const image = require("../../images/" + item.src);
        return (
          <img
            key={item.id}
            src={image}
            alt={item.alt}
            className={item.classes.join(" ")}
          />
        );
      }

      case TAGS.ACCORDION: {
        return <AccordionCard data={item} />;
      }
    }
  });

  return (
    <div className={sectionClasses}>
      <div className={props.sectionsData.sectionAlign}>
        {sectiondata}
        {/* <div className="content-left">
          <p>Connecting people with Technology</p>
          <hr />
          <h2>Creativity meets technology & modern web design ideas</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <br />
          <button className="btn primary-blue">Get Started</button>
          <button className="btn primary-white">Learn More</button>
        </div>*/}
        {/* <div className="spacer"></div>
        <div className="content-right"></div> */}
      </div>
    </div>
  );
}

export default SectionContainer;
