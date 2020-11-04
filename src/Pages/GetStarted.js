import React, { Component } from "react";
import { questionsData } from "../data/Questions/questionsData";
import Questions from "../components/questions/Questions";
import "./getStarted.css";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class GetStarted extends Component {
  constructor() {
    super();
    let tempQuestions = null;

    this.state = {
      questions: questionsData,
      questionIndex: 0,
      questionDisplayed: questionsData[0],
      loading: false,
    };
  }

  conponentDidMount = () => {};

  getQuestionDisplayed = () => {
    this.state.questions.find((question, index) => {
      if (question.question.answer === null) {
        this.questionIndex = index;
        return question;
      }
    });
    // return newQuestion;
  };

  getQuestionIndex = (ques) => {
    let i = 0;
    this.state.questions.find((question, index) => {
      if (question.question.id === ques.question.id) {
        return index;
      }
    });
    return 0;
  };
  getPrevQuestionDisplayed = () => {
    return this.state.questions[this.questionIndex - 1];
  };
  getNextQuestionDisplayed = () => {
    return this.getQuestionDisplayed();
  };

  updateAnswer = (event, resp) => {
    let questions = [...this.state.questions];
    questions[this.state.questionIndex].question.answer = resp.value;
    this.setState({
      questions: questions,
      questionDisplayed: questions[this.state.questionIndex],
      questionIndex: this.state.questionIndex,
    });
  };

  setNextQuestion = () => {
    let nextIndex = this.state.questionIndex + 1;
    let prevAnswer = this.state.questionDisplayed.question.answer;
    let prevLevel = this.state.questionDisplayed.question.level;
    let nextQues = this.state.questions.find((ques, index) => {
      if (ques.question.name === prevAnswer) {
        nextIndex = index;
        return ques;
      }
      return null;
    });
    while (this.state.questions[nextIndex].question.level <= prevLevel) {
      nextIndex = nextIndex + 1;
    }
    if (nextIndex < this.state.questions.length) {
      this.setState({
        ...this.state,
        questionDisplayed: this.state.questions[nextIndex],
        questionIndex: nextIndex,
      });
    }
  };
  submitQuiz = () => {
    let that = this;
    this.setState({
      ...this.state,
      loading: true,
    });
    db.collection("Quiz-Results")
      .doc("Quiz-" + new Date())
      .set(this.state, { merge: true })
      .then(function () {
        that.props.submitQuiz(that.state.questions);
      })
      .catch(function (error) {});
  };

  goBack = (e) => {
    let prevIndex = this.state.questionIndex - 1;
    this.setState({
      ...this.state,
      questionDisplayed: this.state.questions[prevIndex],
      questionIndex: prevIndex,
    });
  };
  goNext = (e) => {
    this.setNextQuestion();
  };

  render() {
    let questions = null;
    questions = (
      <Questions
        key={this.state.questionDisplayed.id}
        data={this.state.questionDisplayed}
        click={this.updateAnswer}
      ></Questions>
    );
    return (
      <div className="section no-flex">
        {questions}
        <div className="buttons-container">
          <button
            onClick={(event) => {
              this.goBack(event);
            }}
            disabled={this.state.questionIndex === 0 ? true : false}
          >
            Go back
          </button>
          <Link to="/suggestions">
            <button
              style={{ float: "right" }}
              onClick={this.submitQuiz}
              disabled={
                this.state.questionIndex != this.state.questions.length - 1
                  ? true
                  : false
              }
            >
              {" "}
              Submit
            </button>
          </Link>

          <button
            style={{ float: "right" }}
            onClick={(event) => {
              this.goNext(event);
            }}
            disabled={
              this.state.questionIndex != this.state.questions.length - 1
                ? false
                : true
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
const mapDiapatchToProps = (dispatch) => {
  return {
    submitQuiz: (data) => dispatch({ type: "QUIZ_SUBMIT", payload: data }),
  };
};
export default connect(null, mapDiapatchToProps)(GetStarted);
