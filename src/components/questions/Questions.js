import React, { useState } from "react";
import "./questions.css";

export default function Questions(props) {
  const [nextDisable, setnextDisable] = useState(true);
  const [resp, setResp] = useState({ value: "", index: "" });

  let question_style = null;
  const data = props.data;

  let options = data.options.map((option, index) => {
    return (
      <label key={index + "op" + data.id} className="label-option">
        <input
          type="radio"
          value={option}
          name={data.name}
          onChange={(event) => {
            setResp({ value: event.target.value, index: data.index });
            setnextDisable(false);
          }}
        />
        {option}
      </label>
    );
  });

  return (
    <div style={question_style}>
      <h2>{data.q}</h2>
      <form className="quiz-form">{options}</form>
      <div className="buttons-container flex">
        <button
          onClick={(event) => {
            props.click(event, resp);
          }}
          disabled={nextDisable}
        >
          Next
        </button>
      </div>
    </div>
  );
}
