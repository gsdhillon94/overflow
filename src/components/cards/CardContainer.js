import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardContainer.css";

export default function CardContainer() {
  const [sectionData, setsectionData] = useState([
    {
      id: "crd-cont-01",
      heading: "What is Lead Generation?",
      content:
        "The first step of lead generation is identifying your target audience and implement methods that will engage customers within your target market.",
      image: "lead-generation.png",
      link_to: "/digitalLead",
    },
    {
      id: "crd-cont-02",
      heading: "Mobile and Web App Solutions",
      content:
        "With the changing landscape in business, we bring our expertise in Mobile and Web app Technology.",
      image: "appDev-sec-05.png",
      link_to: "/applicationDevelopment",
    },
    {
      id: "crd-cont-03",
      heading: "How we can help",
      content:
        "We provide Digital Solutions. We offer our services to businesses across different industries and sectors to build them tailored solutions.",
      image: "CRM-1.jpg",
      link_to: "/about",
    },
  ]);
  return (
    <div className="card-container">
      {sectionData.map((data, index) => {
        console.log(data, index);
        return (
          <div key={data.id}>
            <div className="findMoreCard">
              <div className="card__image-div">
                <img src={require("../../images/" + data.image)} />
              </div>
              <h4 className="card-heading">{data.heading}</h4>
              <p>{data.content}</p>
            </div>
            <div className="findMoreCard__button">
              <Link to={data.link_to}>
                <button className="card__button">Find out more</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
