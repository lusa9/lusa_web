import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./WhatWeDo.css"

export class WhatWeDo extends Component {
  render() {
    const BigSpace = () => <Space height={270}/>
    const SmallSpace = () => <Space height={80}/>
    return (
        <div className="what-we-do-container">
          <BigSpace/>
          <img className="image" src="/assets/macbook.png"/>
          <SmallSpace/>
          <text className="what-we-do-item-description">Web Frontend using HTML & CSS with Angular, React or Vue.js</text>
          <BigSpace/>
          <img className="image" src="/assets/phones.png"/>
          <SmallSpace/>
          <text className="what-we-do-item-description">Cross-Platform Mobile development with React Native</text>
          <BigSpace/>
        </div>
    )
  }
}
