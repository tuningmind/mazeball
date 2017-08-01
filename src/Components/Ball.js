import React, { Component } from 'react'
import { Circle } from 'react-konva'

class Ball extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            color: 'green',
            radius: 30,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            color: 'blue',
            x: this.state.x+5
        })
    }

    componentDidMount() {
      this.setState({x: this.state.radius,
                     y: this.state.radius
      })
    }

    render() {
        return (
                <Circle
                    tabIndex="0"
                    x={this.state.x} 
                    y={this.state.y} 
                    width={this.state.radius * 2}  
                    height={this.state.radius * 2}
                    fill={this.state.color}
                    shadowBlur={10}
                    onClick={this.handleClick}
                />
            )
    }
}

export default Ball
