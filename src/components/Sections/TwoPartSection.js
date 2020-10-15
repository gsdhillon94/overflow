import React from "react";
import SectionContainer from "./SectionContainer";

export default function TwoPartSection(props) {
  const contentLeft = props.content.content_left;
  const contentRight = props.content.content_right;

  return (
    <div className="section">
      <SectionContainer
        key={contentLeft.id + "one"}
        sectionsData={contentLeft}
      />
      <SectionContainer
        key={contentRight.id + "two"}
        sectionsData={contentRight}
      />
    </div>
  );
}
