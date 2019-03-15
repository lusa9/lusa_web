import React, { Component } from 'react';
import { black } from 'ansi-colors';

export class Title extends Component {
    render() {
        console.log(this.props)
        return (
            <text style={{
                    ...this.props.style,
                    fontWeight: 300,
                    letterSpacing: -3,
                    fontSize: 64,
                    textAlign: "center",
                    marginLeft: 20,
                    marginRight: 20
                }}
            >{this.props.text}
            </text>
        )
    }
}

export class Space extends Component {
    render() {
        return (
            <div style={{width: this.props.width, height: this.props.height}}/>
        )
    }
}