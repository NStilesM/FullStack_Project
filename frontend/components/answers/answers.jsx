import React from "react";
import { Link } from "react-router-dom";
import { createMultresponse } from "../../actions/mult_response_actions";
import Button from "../buttons/button";

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: "",
    };
    // this.handleSubmit = thi,.handleSubmit.bind(this);

    this.renderGroup = this.renderGroup.bind(this);
    this.renderQuestionBody = this.renderQuestionBody.bind(this);
  }
  componentDidMount() {
    // debugger

    this.props.requestGroup(this.props.match.params.group_id);
    // debugger
  }
  //   handleSubmit(e) {
  //     e.preventDefault();
  //     this.props.history.push(`/poll/${this.state.value}`);
  //   }

  buttonClick(e, question, question_option) {
    e.preventDefault();

    createMultresponse({ question_options_id: question_option.id });
  }

  renderQuestionBody(question) {
    // console.log(question.closed);
    if (question.kind === "mult_response" && question.closed === false) {
      return question.question_options.map((question_option) => (
        <div className="buttons">
          <Button
            whiteGrey={true}
            extraLarge={true}
            value={question_option.label}
            onClick={(e) => this.buttonClick(e, question, question_option)}
          >
            {question_option.label}
          </Button>
        </div>
      ));
    } else if (question.closed === true) {
      return null;
    } else {
      return <textarea className="text-area"></textarea>;
    }
  }

  renderGroup() {
    let group = this.props.group;
    if (group != undefined) {
      let questions = group.questions;
      let array = [];
      for (let j = 0; j < questions.length; j++) {
        if (questions[j].closed === false) {
          array.push(questions[j]);
        }
      }
      console.log(array);
      return (
        <div className="poll-group">
          {array.map((question, i) => (
            <div className="poll-question">
              <label className="question-header">{question.title}</label>
              {this.renderQuestionBody(question)}
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    // console.log(this.props.group);

    return (
      <div className="poll-page">
        <div className="answers"></div>
        {/* {JSON.stringify(this.props.group)} */}
        {this.renderGroup()}
      </div>
    );

    // <div>{this.props.question}</div>
    // <p>{this.props.question_options}</p>

    //
  }
}

export default Username;
