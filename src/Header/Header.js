import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./Header.css"

export class Header extends Component {
  render() {
    return (
        <div className="container">
          <Space height={180}/>
          <div className="logo-container-underline">
            <div className="logo-container">
              <div className="lusa-development">
                <text className="lusa">Lusa</text>
                <text className="development">development</text>
              </div>
              <img src="/assets/logo_big.png" alt="logo" className="logo"></img>
            </div>
            <view className="line"></view>
          </div>
        </div>
    )
  }
}
