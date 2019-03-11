import React, { Component } from 'react';
import "./RecentWork.css"
import "../App.css"
import { CroParking } from "./CroParking";
import { Title, Space } from '../modules/shared-components';


export class RecentWork extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F5F5F5"}}>
          <Space height={120}/>
          <Title text="Recent Work"/>
          <Space height={110}/>
          <CroParking/>
          <Space height={120}/>
        </div>
    )
  }
}
