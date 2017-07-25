import React, { Component } from 'react'
import Konva, { Rect } from 'react-konva'

class Ball extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            color: 'green',
            x: 10
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleClick() {
        this.setState({
            color: 'blue'
        })
        console.log(this.state.color)
    }

    handleKeyDown() {
        console.log("Event: ")
        this.setState({
            x: this.state.x+5
        })
        console.log("Moved along x +5")
    }

    render() {
        return (
                <Rect
                    x={this.state.x} y={10} width={50} height={50}
                    fill={this.state.color}
                    shadowBlur={10}
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyDown}
                />
            )
    }
}

export default Ball
