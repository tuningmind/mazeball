import React, { Component } from 'react'
import { EventEmitter } from 'events'
import { Layer, Stage } from 'react-konva'

import './App.css'
import Ball from './Components/Ball'

class App extends Component {
  
  updateCanvas() {
    // the ball component gets informed that an asdw key was pressed 
  }
  onKeyPressed(e) {
    console.log(e.key)
  }

  render() {
    return (
      <div className="app">
        <header>
          <h2>mazeball</h2>
        </header>
        <main>
          <div
           onKeyDown={(e) => this.onKeyPressed(e)}
           >Hello world</div>
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
