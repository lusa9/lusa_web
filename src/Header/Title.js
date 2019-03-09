import React, { Component } from 'react';
import "./Header.css";

export class Title extends Component {
  render() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <text className="Header-title">Fast</text>
            <view style={{width: 40}}/>
            <img src="/assets/oval.png"/>
            <view style={{width: 40}}/>
            <text className="Header-title">Sleek</text>
            <view style={{width: 40}}/>
            <img src="/assets/oval.png"/>
            <view style={{width: 40}}/>
            <text className="Header-title">Sexy</text>
        </div>
    )
  }
}
