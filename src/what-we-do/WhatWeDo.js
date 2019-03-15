import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./WhatWeDo.css"

export class WhatWeDo extends Component {
  render() {
    return (
        <div className="what-we-do-container">
          <div className="bigspace"/>
          <img className="image" src="/assets/macbook.png"/>
          <div className="smallspace"/>
          <text className="what-we-do-item-description">Web Frontend using HTML & CSS with Angular, React or Vue.js</text>
          <div className="bigspace"/>
          <img className="image" src="/assets/phones.png"/>
          <div className="smallspace"/>
          <text className="what-we-do-item-description">Cross-Platform Mobile development with React Native</text>
          <div className="bigspace"/>
        </div>
    )
  }
}
