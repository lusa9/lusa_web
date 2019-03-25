import React, { Component } from 'react';
import "./RecentWork.css"


export class RecentWork extends Component {
  render() {
    return (
        <div className="recent-work-container">
          <div className="recent-work-bigspace"/>
          <text className="title">Work</text>
          <div className="recent-work-bigspace"/>
          <Project 
            imagesrc="assets/croparkingapp.png" 
            name="CroParking"
            description="Simple & Fast parking SMS Generator built in React Native"
            googleplaylink="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"
          />
          <div className="recent-work-end-space"/>
        </div>
    )
  }
}

class Project extends Component {
  render() {
    return (
        <div className="project-container">
          <img src={this.props.imagesrc}/>
          <div className="recent-work-smallspace"/>
          <div className="project-details-container">
            <text className="title">{this.props.name}</text>
            <text className="body-small">Simple & Fast parking SMS Generator built with React Native</text>
            <div className="project-description-store-space"/>
            <a className="GooglePlayButton" href={this.props.googleplaylink}><img className="GooglePlayImage" src="/assets/google-play.svg"/></a>
            <div className="store-button-bottom-space"/>
          </div>
        </div>
    )
  }
}
