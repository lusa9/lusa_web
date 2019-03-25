import React, { Component } from 'react';
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-top-space"/>
        <div className="header-logo-buttons-container">
          <img src="/assets/logo.svg"/>
          <div className="header-buttons-container">
            <button className="header-button">What I Do</button>
            <div className="header-buttons-horizontal-space"/>
            <button className="header-button">Work</button>
            <div className="header-buttons-horizontal-space"/>
            <button className="header-button">Hire Me</button>
          </div>
        </div>
        <div className="header-logo-title-space"/>
        <div className="header-art-container">
          <div className="header-art-title-line-container">
            <text className="header-art-title">Freelancer for your needs.</text>
            <div className="header-title-line-space"/>
            <view className="line"/>
          </div>
        </div>
      </div>
    )
  }
}
