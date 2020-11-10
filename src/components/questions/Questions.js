import React, { useEffect, useState } from "react";
import "./questions.css";

export default function Questions(props) {
  const [nextDisable, setnextDisable] = useState(true);
  let resp = {
    value: "",
    index: "",
  };

  const setResp = (val, i) => {
    resp.value = val;
    resp.index = i;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  let question_style = null;
  const data = props.data.question;
  const dataOptions = data.options;
  let isLast = false;

  let options = dataOptions.map((option, index) => {
    return (
      <label key={index + "op" + data.id} className="label-option">
        <input
          type="radio"
          value={option.value}
          name={data.name}
          onClick={(event) => {
            setResp(event.target.value, data.index);
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
