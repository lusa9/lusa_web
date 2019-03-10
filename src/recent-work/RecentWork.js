import React, { Component } from 'react';
import "./RecentWork.css"
import { CroParking } from "./CroParking";

export class RecentWork extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: 1077, backgroundColor: "#EBEBEB"}}>
          <div style={{height: 120}}/>
          <text className="RecentWork-title">Recent Work</text>
          <div style={{height: 110}}/>
          <CroParking/>
        </div>
    )
  }
}
