import React, { Component } from 'react';

export class Title extends Component {
    render() {
        console.log(this.props)
        return (
            <text style={{
                    ...this.props.style,
                    "font-family": ["HelveticaNeue-Thin", "Helvetica Neue Thin", "Helvetica Neue"],
                    "font-weight": "200",
                    "font-size": "58px",
                    "color": "#6E6E6E"
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