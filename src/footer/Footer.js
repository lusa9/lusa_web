import React, { Component } from 'react';
import "./Footer.css"
import { Space } from '../modules/shared-components';

export class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="line"/>
          <div className="footer-content-vertical-space"/>
          <div className="footer-icon-container">
            <img className="footer-icon" src="/assets/upwork.png"/>
            <div className="footer-icons-horizontal-space"/>
            <img className="footer-icon" src="/assets/github.png"/>
            <div className="footer-icons-horizontal-space"/>
            <img className="footer-icon" src="/assets/linkedin.png"/>
            <div className="footer-icons-horizontal-space"/>
            <img className="footer-icon" src="/assets/email.png"/>
          </div>
          <div className="footer-icons-logo-space"/>
          <img className="footer-logo" src="/assets/logo.png"/>
          <div className="footer-content-vertical-space"/>
        </div>
    )
  }
}
