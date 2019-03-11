import React, { Component } from 'react';
import "./RecentWork.css"

export class CroParking extends Component {
  render() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
          <div style={{width: 153}}/>
          <img src="assets/croparkingapp.jpg"/>
          <div style={{width: 70}}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src="/assets/react.png"/>
            <div style={{height: 30}}/>
            <text style={{width: 470}} className="RecentWork-description">{"Simple & Fast parking SMS Generator built in React Native"}</text>
            <div style={{height: 150}}/>
            <button className="GooglePlayButton" onClick={ () => window.location.href="https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"}/>
          </div>
        </div>
    )
  }
}
