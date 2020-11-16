import React, { useEffect, useState } from "react";
import "./questions.css";

export default function Questions(props) {
  const [nextDisable, setnextDisable] = useState(true);
  const [resp, setresp] = useState({
    value: "",
    index: "",
  });
  // let resp = {
  //   value: "",
  //   index: "",
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.data.question]);

  let question_style = null;
  const data = props.data.question;
  const dataOptions = data.options;
  let isLast = false;

  let options = dataOptions.map((option, index) => {
    let optClass = "label-option";
    if (resp.value == option.value) {
      optClass = "label-option radSelected";
    }
    return (
      <label key={index + "op" + data.id} className={optClass}>
        <input
          type="radio"
          value={option.value}
          name={data.name}
          onClick={(event) => {
            setresp({ value: event.target.value, index: data.index });
            props.click(event, resp);
          }}
        />
        <img src={require("../../images/" + option.image)} alt={option.image} />
        <p>{option.value}</p>
      </label>
    );
  });

  return (
    <div style={question_style}>
      <h2>{data.q}</h2>
      <form className="quiz-form">{options}</form>
    </div>
  );
}
