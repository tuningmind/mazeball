import React, { Component } from 'react'
import { EventEmitter } from 'events'
import { Layer, Stage } from 'react-konva'

import './App.css'
import Ball from './Components/Ball'

class App extends Component {
  
  updateCanvas() {
    // the ball component gets informed that an asdw key was pressed 
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()
    this.eventEmitter.addListener("ballMove", () => {
      console.log("ballMove")
    })
  }

  render() {
    return (
      <div className="app">
        <header>
          <h2>mazeball</h2>
        </header>
        <main
           onKeyPress={(e) => {
             console.log("Before ballMove event")
             this.eventEmitter.emit("ballMove")
             console.log("After ballMove event")
           }}
          >
          {/* I am an actual comment*/}
          <Stage width={700} height={700}>
            <Layer>
              <Ball />
            </Layer>
          </Stage>
        </main>
        <footer>
          <p>Hello.</p>
        </footer>
      </div>
    );
  }
}

export default App
