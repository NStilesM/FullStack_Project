import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class PollShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_message: "",
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    // debugger
    this.props.clearErrors();
  }

  // check if link is valid, if it is then redirects to the page, if not then shows errors

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/poll/${this.state.value}/username`);
  }

  errors() {}

  render() {
    return (
      <div className="poll-page">
        <a href="/">
          <img
            className="PollEverywhere-blacklogo"
            src="https://davhizrhxzcu1.cloudfront.net/assets/media_kit/logo_white-b3ae877b0dff730405738e5ad768060f7d6d56b89a75f397012ca915f5472364.png"
          ></img>
        </a>

        <div className="grey-logo"></div>
        <form onSubmit={this.handleSubmit} className="form-box-black">
          <h1 className="join-title">Join Presentation</h1>
          <p className="join-subtitle">
            Type the "username"/"group id" To view a users question group
            <br />
            <br />
            Ex: "tester/1"
          </p>
          <label className="link">
            <input
              className="link-input"
              type="text"
              value={this.state.value}
              placeholder=""
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </label>
          {this.errors()}
          <div className="link-join-button">
            <Button blue={true} large={true}>
              Join
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default PollShow;
