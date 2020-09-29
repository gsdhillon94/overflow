import React, { Component } from "react";
import { questionsData } from "../data/Questions/questionsData";
import Questions from "../components/questions/Questions";
import "./getStarted.css";
export default class GetStarted extends Component {
  constructor() {
    super();
    this.state = {
      questions: questionsData,
      questionDisplayed: {},
    };
    let tempQuestions = null;
  }

  handleOnInputChange = (event) => {
    console.log(event.target.value);
  };

  getQuestionDisplayed = () => {
    console.log(this.state);
    const newQuestion = this.state.questions.find((question) => {
      if (question.question.answer === null) {
        return question;
      }
    });

    return newQuestion;
  };

  updateAnswer = (event, resp) => {
    event.preventDefault();
    console.log(resp.value, ":", resp.index);
    let questions = [...this.state.questions];
    let question = questions.find((question) => {
      if (question.question.index === resp.index) {
        question.question.answer = resp.value;
      }
      return question;
    });
    questions[resp.index - 1] = question;

    this.setState({ questions: questions });
  };

  render() {
    let questions = null;
    let questionDisplayed = this.getQuestionDisplayed();
    questions = (
      <Questions
        key={questionDisplayed.question.id}
        data={questionDisplayed.question}
        click={this.updateAnswer}
      ></Questions>
    );

    return <div className="section no-flex">{questions}</div>;
  }
}
