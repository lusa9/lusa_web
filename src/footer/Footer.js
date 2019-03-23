import React, { Component } from 'react';
import "./Footer.css"


export class Footer extends Component {

  render() {
    return (
        <div className="footer-container">
          <div className="line"/>
          <div className="footer-content-vertical-space"/>
          <div className="footer-icon-container">
            <a href="https://www.upwork.com/o/profiles/users/_~01fa5a2a39e76409a2/"><img className="footer-icon" src="/assets/upwork.svg"/></a>
            <div className="footer-icons-horizontal-space"/>
            <a href="https://github.com/lusa9"><img className="footer-icon" src="/assets/github.svg"/></a>
            <div className="footer-icons-horizontal-space"/>
            <a href="https://www.linkedin.com/in/lukausalj"><img className="footer-icon" src="/assets/linkedin.svg"/></a>
            <div className="footer-icons-horizontal-space"/>
            <a href="mailto:luka.usalj@gmail.com"><img className="footer-icon" src="/assets/email.svg"/></a>
          </div>
          <div className="footer-content-vertical-space"/>
          <img className="footer-logo" src="/assets/logo.svg"/>
          <div className="footer-content-vertical-space"/>
        </div>
    )
  }
}
