import React, { Component } from 'react';
import "./Footer.css"
import { Space } from '../modules/shared-components';

export class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
          <Space height={50}/>
          <div className="footer-icon-container">
            <img src="/assets/github.png"/>
            <Space width={20}/>
            <img src="/assets/linkedin.png"/>
            <Space width={20}/>
            <img src="/assets/email.png"/>
          </div>
          <Space height={100}/>
          <img src="/assets/logo_medium.png"/>
          <Space height={50}/>
        </div>
    )
  }
}
