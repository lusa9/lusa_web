import React, { Component } from 'react';
import "./RecentWork.css"
import "../App.css"
import { CroParking } from "./CroParking";
import { Title, Space } from '../modules/shared-components';


export class RecentWork extends Component {
  render() {
    return (
        <div className="recent-work-container">
          <div className="bigspace"/>
          <text className="title">Published Apps</text>
          <div className="bigspace"/>
          <CroParking/>
          <div className="bigspace"/>
        </div>
    )
  }
}
