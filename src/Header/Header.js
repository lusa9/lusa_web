import React, { Component } from 'react';
import { Space } from "../modules/shared-components/index";
import "./Header.css";
import { hidden, visible } from 'ansi-colors';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { cursorIsVisible: true }

    
    clearInterval()
  }
  
  componentDidMount() {
    this.cursorBlinkingTimer = setInterval(() => {
      this.setState((state, props) => ({
        cursorIsVisible: !state.cursorIsVisible
      }));
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.cursorBlinkingTimer)
  }


  render() {
    const cursorClassName = "blinking-cursor-" + (this.state.cursorIsVisible ? "visible" : "hidden")
    return (
        <div className="header-container">
          <div className="logo-container">
            <div className="lusa-development">
              <text className="lusadevelopment">Lusadevelopment</text>
              <view className={cursorClassName}></view>
            </div>
            <img className="logo" src="/assets/logo_big.png" alt="logo" draggable={false} onSelect={() => false} onMouseDown={() => false} onContextMenu={() => false}></img>
          </div>
        </div>
    )
  }
}
