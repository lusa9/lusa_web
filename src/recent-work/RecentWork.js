import React, { Component } from 'react';
import "./RecentWork.css"


export class RecentWork extends Component {
  render() {
    return (
        <div className="recent-work-container">
          <div className="title-space"/>
          <text className="title">Published Apps</text>
          <div className="title-space"/>
          <Project 
            imagesrc="assets/croparkingapp.png" 
            name="CroParking"
            description="Simple & Fast parking SMS Generator built in React Native"
            googleplaylink="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"
          />
        </div>
    )
  }
}

class Project extends Component {
  render() {
    return (
        <div className="project-container">
          <img className="project-image" src={this.props.imagesrc}/>
          <div className="project-image-details-space"/>
          <div className="project-details-container">
            <text className="project-title">{this.props.name}</text>
            <div className="project-title-description-space"/>
            <text className="project-description">Simple & Fast parking SMS Generator built with React Native</text>
            <div className="project-description-buttons-space"/>
            <a className="GooglePlayButton" href={this.props.googleplaylink}><img src="/assets/google_play.png"/></a>
            <div className="smallspace"/>
          </div>
        </div>
    )
  }
}
