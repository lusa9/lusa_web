import React, { Component } from 'react';
import "../App.css";
import { FeedbackMessage } from "./FeedbackMessage";
import { Form } from "./Form";
import "./Hire.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export class HireMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formSubmitted: false
    }
  }

  render() {
    return (
      this.state.formSubmitted
      ? <FeedbackMessage/>
      : <Form onSubmit={() => this.setState({formSubmitted: true})}/> 
    )
  }
}
