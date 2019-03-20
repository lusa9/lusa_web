import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./Header.css";
import { hidden, visible } from 'ansi-colors';

export class Header extends Component {
  render() {
    return (
        <div className="header-container">
          <div className="logo-top-space"/>
          <img className="logo" src="/assets/logo.png" alt="logo" draggable={false} onSelect={() => false} onMouseDown={() => false} onContextMenu={() => false}></img>
          <div className="logo-lusa-space"/>
          <text className="lusadevelopment">Lusadevelopment</text>
          <div className="lusa-line-space"/>
          <view className="line"/>
        </div>
    )
  }
}
