import React, { Component } from 'react'
import Konva, { Circle } from 'react-konva'

class Ball extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            color: 'green',
            x: 25,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleClick() {
        this.setState({
            color: 'blue'
        })
        console.log(this.state.color)
    }

    handleKeyPress() {
        console.log("Event: ")
        this.setState({
            x: this.state.x+5
        })
        console.log("Moved along x +5")
    }

    render() {
        return (
                <Circle
                    tabIndex="0"
                    x={this.state.x} y={10} width={50} height={50}
                    fill={this.state.color}
                    shadowBlur={10}
                    onClick={this.handleClick}
                    onKeyPress={this.handleKeyPress}
                />
            )
    }
}

export default Ball
