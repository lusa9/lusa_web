import React, { Component } from 'react';
import { LogoTitle } from "./LogoTitle";
import { Space } from "../modules/shared-components/index";

export class Header extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: 822, backgroundColor: "white"}}>
          <Space height={164}/>
          <img src="/assets/logo_big.png" alt="logo"></img>
          <Space height={20}/>
          <LogoTitle/>
          <Space height={90}/>
          <text className="Header-subtitle">{"Web & Mobile Development"}</text>
        </div>
    )
  }
}
