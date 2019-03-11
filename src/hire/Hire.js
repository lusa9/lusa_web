import React, { Component } from 'react';
import "../App.css";
import { ContactForm } from "./ContactForm";

export class HireMe extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white"}}>
          <div style={{height: 120}}/>
          <text className="App-title">Hire Us</text>
          <div style={{height: 110}}/>
          <ContactForm/>
          <div style={{height: 220}}/>
        </div>
    )
  }
}
