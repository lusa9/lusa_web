import React, { Component } from 'react';
import { Space } from '../modules/shared-components';
import "./RecentWork.css"

export class CroParking extends Component {
  render() {
    return (
        <div className="published-apps-croparking-container">
          <Space width={247}/>
          <img src="assets/croparkingapp.png"/>
          <Space width={70}/>
          <div className="published-apps-croparking-description-container">
            <Space height={180}/>
            <text className="RecentWork-title">CroParking</text>
            <Space height={30}/>
            <text className="RecentWork-description">{"Simple & Fast parking SMS Generator built in React Native"}</text>
            <Space height={220}/>
            <a className="GooglePlayButton" href="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"></a>
          </div>
        </div>
    )
  }
}
