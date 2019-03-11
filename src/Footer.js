import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#BD7676"}}>
          <div style={{height: 80}}/>
          <div style={{display: "flex"}}>
            <img src="/assets/github.png"/>
            <div style={{width: 20}}/>
            <img src="/assets/linkedin.png"/>
            <div style={{width: 20}}/>
            <img src="/assets/email.png"/>
          </div>
          <div style={{height: 100}}/>
          <img src="/assets/logo_medium.png"/>
          <div style={{height: 60}}/>
        </div>
    )
  }
}
