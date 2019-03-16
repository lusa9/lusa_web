import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./WhatWeDo.css"

export class WhatWeDo extends Component {
  render() {
    return (
        <div className="what-we-do-container">
          <div className="bigspace"/>
          <Item imagesrc="/assets/macbook.png" description="Web Frontend using HTML & CSS with Angular, React or Vue.js"/>
          <div className="bigspace"/>
          <Item imagesrc="/assets/phones.png" description="Cross-Platform Mobile development with React Native"/>
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
        <text className="item-description">{this.props.description}</text>
      </div>
    )
  }
}
