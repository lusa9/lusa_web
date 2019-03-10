import React, { Component } from 'react';
import "./Hire.css"

export class ContactForm extends Component {
  render() {
    return (
        <div style={{width: 660, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <input className="Input-email" type="email" placeholder="Email adress*"></input>
            <div style={{height: 40}}/>
            <textarea className="Input-message" type="text" placeholder="Write about the project*"></textarea>
            <div style={{height: 20}}/>
            <button className="Attach-button">Attach any files that might be useful</button>
            <div style={{height: 100}}/>
            <button className="Submit-button">Send</button>
        </div>
    )
  }
}
