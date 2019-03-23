import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./WhatWeDo.css"
import { string } from 'postcss-selector-parser';

export class WhatWeDo extends Component {
  render() {
    return (
        <div className="what-we-do-main-container">
          <div className="bigspace"/>
          <div className="what-we-do-container">
            <Item imagesrc="/assets/macbook.svg" description="Web Frontend using HTML & CSS with Angular, React or Vue.js"/>
            <div className="what-we-do-item-vertical-space"/>
            <Item imagesrc="/assets/phones.svg" description="Cross-Platform Mobile in React Native"/>
            <div className="what-we-do-item-vertical-space"/>
            <Item imagesrc="/assets/iphone.svg" description={"Native iOS"}/>
          </div>
          <div className="bigspace"/>
        </div>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <img className="image" src={this.props.imagesrc}/>
        <div className="smallspace"/>
        <text className="body-small">{this.props.description}</text>
      </div>
    )
  }
}
