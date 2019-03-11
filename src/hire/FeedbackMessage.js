import React, { Component } from 'react';
import { Space, Title } from '../modules/shared-components';
import "./Hire.css"

export class FeedbackMessage extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white"}}>
        <Space height={504}/>
        <Title text="Thanks for reaching out! I will get to you as soon as possible :)" style={{width: 900, textAlign: "center"}}/>
        <Space height={504}/>
      </div>
    )
  }
}
