import React from "react";
import "./accordionCard.css";

export default function AccordionCard(props) {
  console.log(props);
  const data = props.data;
  return (
    <button className={data.classes.join("")} key={data.id}>
      Accordion here
    </button>
  );
}
