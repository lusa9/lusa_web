import React, { Component } from 'react';
import { Space, Title } from '../modules/shared-components';
import "./Hire.css"

export class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="title-space"/>
        <text className="title">Hire Me</text>
        <div className="title-space"/>
        <div className="form-inputs">
          <input className="Input-email" type="email" name="email" placeholder="Email adress*"></input>
          <div className="email-message-space"/>
          <textarea className="Input-message" type="text" name="message" placeholder="Write about the project*"></textarea>
        </div>
        <div className="inputs-attach-space"/>
        <button className="Attach-button">Attach any files that might be useful</button>
        <div className="form-send-space"/>
        <button onClick={this.props.onSubmit} className="Submit-button">Send</button>
        <div className="bigspace"/>
      </div>
    )
  }
}
