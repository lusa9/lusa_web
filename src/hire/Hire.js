import React, { Component } from 'react';
import "../App.css";
import { ContactForm } from "./ContactForm";

export class HireMe extends Component {
  render() {
    return (
        <div style={{height: 1081, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white"}}>
          <div style={{height: 120}}/>
          <text className="App-title">Hire Me</text>
          <div style={{height: 110}}/>
          <ContactForm/>
        </div>
    )
  }
}
