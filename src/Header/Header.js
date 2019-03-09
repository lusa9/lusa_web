import React, { Component } from 'react';
import { Title } from "./Title";

export class Header extends Component {
  render() {
    return (
        <view style={{display: "flex", flexDirection: "column", alignItems: "center", height: 822, backgroundColor: "white"}}>
          <view style={{height: 164}}/>
          <img src="/assets/logo_big.png" alt="logo"></img>
          <view style={{height: 20}}/>
          <Title/>
        </view>
    )
  }
}
