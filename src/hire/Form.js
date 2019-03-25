import React, { Component } from 'react';
import "./Hire.css";
import "../index.css";

export class Form extends Component {
  render() {
    return (
      <div className="hire-me-container">
        <div className="form-container">
          <div className="hire-bigspace"/>
          <text className="title">Hire Me</text>
          <div className="hire-bigspace"/>
          <input className="input-email" type="email" name="email" placeholder="Email adress"></input>
          <div className="border-line"/>
          <div className="hire-smallspace"/>
          <textarea className="input-message" type="text" name="message" placeholder="Write about the project"></textarea>
          <div className="hire-smallspace"/>
          <button className="attach-button">Attach any files that might be useful</button>
          <div className="hire-bigspace"/>
          <button onClick={this.props.onSubmit} className="submit-button">Send</button>
          <div className="hire-end-space"/>
        </div>
      </div>
    )
  }
}
