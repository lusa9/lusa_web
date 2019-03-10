import React, { Component } from 'react';
import { Title } from "./Title";

export class Header extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: 822, backgroundColor: "white"}}>
          <div style={{height: 164}}/>
          <img src="/assets/logo_big.png" alt="logo"></img>
          <div style={{height: 20}}/>
          <Title/>
          <div style={{height: 90}}/>
          <text className="Header-subtitle">{"Web & Mobile Development"}</text>
        </div>
    )
  }
}
