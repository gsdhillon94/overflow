import React from "react";
import "./sectionContainer.css";
import "../../data/websiteConsts";
import { TAGS } from "../../data/websiteConsts";
import AccordionCard from "../cards/AccordionCard";
import { Link } from "react-router-dom";

function SectionContainer(props) {
  const data = props.sectionsData.data;
  const sectionClasses = props.sectionsData.sectionClasses.join(" ");

  // const sectionsData = props.sectionsData.data
  const sectiondata = data.map((item, index) => {
    switch (item.tag) {
      case TAGS.P:
        return <p key={item.id + index}>{item.text}</p>;
      case TAGS.HR:
        return <hr key={item.id + index} />;
      case TAGS.H2:
        return (
          <h2
            className={item.class !== null ? item.class : ""}
            key={item.id + index}
          >
            {item.text}
          </h2>
        );
      case TAGS.BR:
        return <br key={item.id + index} />;
      case TAGS.BUTTON:
        return (
          <button key={item.id + index} className={item.classes.join(" ")}>
            <Link to={item.route_to}>{item.text}</Link>
          </button>
        );
      case TAGS.LIST:
        return (
          <ul key={item.id + index} className={item.classes.join(" ")}>
            {item.list.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        );
      case TAGS.IMG: {
        const image = require("../../images/" + item.src);
        return (
          <img
            key={item.id + index}
            src={image}
            alt={item.alt}
            className={item.classes.join(" ")}
          />
        );
      }

      case TAGS.ACCORDION: {
        return <AccordionCard key={item + index} data={item} />;
      }
      case TAGS.INPUT: {
        return (
          <input
            key={item.inputId + index}
            type={item.inputType}
            placeholder={item.inputPlaceholder}
            id={item.inputId}
            pattern={item.pattern !== null ? item.pattern : null}
          />
        );
      }

      case TAGS.FORM: {
        const inputs = item.inputs;
        // console.log(inputs);
        return (
          <form
            key={item + index}
            onSubmit={(e) => onSubmit(e)}
            className={item.class}
          >
            {inputs &&
              inputs.map((item, i) => {
                if (item.contentType === TAGS.INPUT) {
                  return (
                    <div key={item + i}>
                      <label htmlFor={item.inputId} className="input-label">
                        {item.inputPlaceholder}
                      </label>
                      <br />
                      <input
                        className={item.classes.join(" ")}
                        key={item.inputId}
                        type={item.inputType}
                        id={item.inputId}
                        pattern={item.pattern !== null ? item.pattern : null}
                      />
                    </div>
                  );
                }
                if (item.contentType === TAGS.BUTTON) {
                  return (
                    <div key={item + index}>
                      <button className={item.classes.join(" ")} type="submit">
                        {item.text}
                      </button>
                    </div>
                  );
                }
              })}
          </form>
        );
      }
      default:
        return null;
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("check 1");
  };

  const requestFreeQuote = (event) => {
    console.log(event.target);
  };

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
