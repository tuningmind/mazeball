import React, { Component } from 'react'

import { Layer, Stage } from 'react-konva'

import logo from './logo.svg'
import './App.css'
import Ball from './Components/Ball'

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <h2>mazeball</h2>
        </header>
        <main>
          <p>Here will be a canvas with a game.</p>
          {/* I am an actual comment*/}
          <Stage width={700} height={700}>
            <Layer>
              <Ball/>
            </Layer>
          </Stage>

        </main>
        <footer>
          <p>Hello world.</p>
        </footer>
      </div>
    );
  }
}

export default App
