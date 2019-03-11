import React, { Component } from 'react';
import "./RecentWork.css"
import "../App.css"
import { CroParking } from "./CroParking";

export class RecentWork extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F5F5F5"}}>
          <div style={{height: 120}}/>
          <text className="App-title">Recent Work</text>
          <div style={{height: 110}}/>
          <CroParking/>
          <div style={{height: 220}}/>
        </div>
    )
  }
}
