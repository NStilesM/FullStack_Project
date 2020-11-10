import React from "react";
import { Link } from "react-router-dom";
import QuestionIndexItem from "./question_index_item";
import Button from "../buttons/button";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
    this.state = {
      hidden: false,
    };
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    // debugger

    this.props.requestGroups();
    // debugger
  }

  update(e) {
    e.preventDefault();
    if (!this.state.hidden) {
      this.setState({ hidden: true });
    } else {
      this.setState({ hidden: false });
    }
  }

  renderGroup(group) {
    let className = "question-container-collapsible";
    let arrow = "arrow-collapsible";
    if (this.state.hidden) {
      className += " hide";
      arrow += " down";
    }
    return (
      <>
        <h1 className="group-title" onClick={(e) => this.update(e)}>
          <div>
            <div className={arrow}></div>
            <div>{group.name}</div>
          </div>
        </h1>
        <div className={className}>
          {group.questions.map((question) => (
            <QuestionIndexItem
              key={question.id}
              question={question}
              deleteQuestion={this.props.deleteQuestion}
              updateQuestion={this.props.updateQuestion}
              requestQuestion={this.props.requestQuestion}
            />
          ))}
        </div>
      </>
    );
  }
  render() {
    // debugger
    return (
      <>
        <div className="toprightbuttons">
          <Button blue={true} medium={true} centered={true} to="/questions/new">
            Create
          </Button>
          <Button whiteSpecial={true} medium={true} centered={true}>
            Import
          </Button>
          <div className="greybar"></div>
          <Button listButton={true}>Activities</Button>
          <Button listButton={true}>Trash</Button>
        </div>
        <div className="main-index-page">
          {/* <Link to="/questions/new">New Question</Link> */}
          <ul className="questions-box">
            {this.props.groups.map(this.renderGroup)}
          </ul>
        </div>
      </>
    );
  }
}

export default QuestionIndex;
