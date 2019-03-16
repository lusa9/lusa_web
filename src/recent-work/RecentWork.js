import React, { Component } from 'react';
import "./RecentWork.css"


export class RecentWork extends Component {
  render() {
    return (
        <div className="recent-work-container">
          <div className="bigspace"/>
          <text className="title">Published Apps</text>
          <div className="recent-work-item-space"/>
          <Project 
            imagesrc="assets/croparkingapp.png" 
            name="CroParking"
            description="Simple & Fast parking SMS Generator built in React Native"
            googleplaylink="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"
          />
          <div className="bigspace"/>
        </div>
    )
  }
}

class Project extends Component {
  render() {
    return (
        <div className="published-apps-item-container">
          <img className="published-apps-item-image" src={this.props.imagesrc}/>
          <div className="smallspace"/>
          <div className="published-apps-croparking-description-container">
            <text className="RecentWork-title">{this.props.name}</text>
            <text className="project-description">Simple & Fast parking SMS Generator built in React Native</text>
            <div className="smallspace"/>
            <a href={this.props.googleplaylink}><img className="GooglePlayButton" src="/assets/google_play.png"/></a>
          </div>
        </div>
    )
  }
}
