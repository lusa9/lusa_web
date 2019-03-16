import React, { Component } from 'react';
import { Space } from '../modules/shared-components';
import "./RecentWork.css"

export class CroParking extends Component {
  render() {
    return (
        <div className="published-apps-croparking-container">
          <img className="app-image" src="assets/croparkingapp.png"/>
          <div className="published-apps-croparking-description-container">
            <text className="RecentWork-title">CroParking</text>
            <div className="published-app-title-description-spacing"/>
            <text className="RecentWork-description">Simple & Fast parking SMS Generator built in React Native</text>
            <div className="published-app-description-buttons-spacing"/>
            <a className="GooglePlayButton" href="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"></a>
          </div>
        </div>
    )
  }
}
