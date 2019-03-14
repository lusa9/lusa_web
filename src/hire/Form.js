import React, { Component } from 'react';
import { Space, Title } from '../modules/shared-components';
import "./Hire.css"

export class Form extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white"}}>
        <Space height={120}/>
        <Title text="Hire Me"/>
        <Space height={110}/>
        <div className="Contact-form">
          <input className="Input-email" type="email" name="email" placeholder="Email adress*"></input>
          <div style={{height: 40}}/>
          <textarea className="Input-message" type="text" name="message" placeholder="Write about the project*"></textarea>
          <div style={{height: 20}}/>
          <button className="Attach-button">Attach any files that might be useful</button>
          <div style={{height: 100}}/>
          <button onClick={this.props.onSubmit} className="Submit-button">Send</button>
        </div>
        <Space height={300}/>
      </div>
    )
  }
}
