import React, { Component } from 'react';
import "./RecentWork.css"
import "../App.css"
import { CroParking } from "./CroParking";
import { Title, Space } from '../modules/shared-components';


export class RecentWork extends Component {
  render() {
    const BigSpace = () => <Space height={120}/>
    return (
        <div className="recent-work-container">
          <BigSpace/>
          <Title text="Published Apps"/>
          <BigSpace/>
          <CroParking/>
          <BigSpace/>
        </div>
    )
  }
}
