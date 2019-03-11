import React, { Component } from 'react';
import "./RecentWork.css"
import { Space } from '../modules/shared-components';

export class CroParking extends Component {
  render() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
          <Space width={153}/>
          <img src="assets/croparkingapp.jpg"/>
          <Space width={70}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src="/assets/react.png"/>
            <Space height={30}/>
            <div style={{height: 30}}/>
            <text style={{width: 470}} className="RecentWork-description">{"Simple & Fast parking SMS Generator built in React Native"}</text>
            <Space height={150}/>
            <a className="GooglePlayButton" href="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"></a>
          </div>
        </div>
    )
  }
}
