import React, { Component } from 'react';
import "./Header.css";

export class Title extends Component {
  render() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <text className="Header-title">Fast</text>
            <div style={{width: 40}}/>
            <img src="/assets/oval.png"/>
            <div style={{width: 40}}/>
            <text className="Header-title">Sleek</text>
            <div style={{width: 40}}/>
            <img src="/assets/oval.png"/>
            <div style={{width: 40}}/>
            <text className="Header-title">Solid</text>
        </div>
    )
  }
}
