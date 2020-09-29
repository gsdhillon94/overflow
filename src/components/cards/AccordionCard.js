import React from "react";
import "./accordionCard.css";

export default function AccordionCard(props) {
  const data = props.data;

  return (
    <div>
      <div className={data.classes.join("")} key={data.id}>
        <div className="accordion-heading">{data.heading}</div>
        <div className="spacer"></div>
        <div className="expand-icon">+</div>
      </div>
    </div>
  );
}
