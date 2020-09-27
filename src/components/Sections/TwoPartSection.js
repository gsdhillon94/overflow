import React from "react";
import SectionContainer from "./SectionContainer";

export default function TwoPartSection(props) {
  console.log(props);
  const contentLeft = props.content.content_left;
  const contentRight = props.content.content_right;

  return (
    <div className="section">
      <SectionContainer key={contentLeft.id} sectionsData={contentLeft} />
      <SectionContainer key={contentRight.id} sectionsData={contentRight} />
    </div>
  );
}
