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
            <Item imagesrc="/assets/macbook.svg" description="Frontend Web development using HTML & CSS with Angular, React or Vue.js"/>
            <div className="bigspace"/>
            <Item imagesrc="/assets/phones.svg" description="Cross-Platform Mobile development in React Native"/>
            <div className="bigspace"/>
            <Item imagesrc="/assets/iphone.svg" description={"Native iOS development"}/>
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
        <div className="image-container">
          <img src={this.props.imagesrc}/>
        </div>
        <div className="smallspace"/>
        <text className="body-small">{this.props.description}</text>
      </div>
    )
  }
}
