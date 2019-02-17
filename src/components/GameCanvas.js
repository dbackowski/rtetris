import React, { Component } from 'react';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const KEY_UP = 38;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 50;
const BLOCK_MOVE_BY = 10;

class GameCanvas extends Component {
  constructor() {
    super();

    this.handlePressKey = this.handlePressKey.bind(this);
    this.state = {
      x: 0,
      y: 0,
      width: BLOCK_WIDTH,
      height: BLOCK_HEIGHT,
      color: 'white'
    };
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");

    document.addEventListener('keydown', this.handlePressKey);
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  } 

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = this.state.color;
    this.ctx.fillRect(this.state.x, this.state.y, this.state.width, this.state.height);
  }

  handlePressKey(event) {
    switch(event.keyCode) {
      case KEY_UP:
        if (this.state.y - BLOCK_MOVE_BY < 0) {
          return;
        }  

        this.setState((prev) => ({ y: prev.y - BLOCK_MOVE_BY }));
        break;
      case KEY_DOWN:
        if (this.state.y + BLOCK_MOVE_BY > CANVAS_HEIGHT - BLOCK_HEIGHT) {
          return;
        }

        this.setState((prev) => ({ y: prev.y + BLOCK_MOVE_BY }));
        break;
      case KEY_LEFT:
        if (this.state.x - BLOCK_MOVE_BY < 0) {
          return;
        }

        this.setState((prev) => ({ x: prev.x - BLOCK_MOVE_BY }));
        break;
      case KEY_RIGHT:
        if (this.state.x + BLOCK_MOVE_BY > CANVAS_WIDTH - BLOCK_WIDTH) {
          return;
        }

        this.setState((prev) => ({ x: prev.x + BLOCK_MOVE_BY }));
        break;
    }

    event.preventDefault();
  }

  render() {
    return(
      <canvas ref="canvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{backgroundColor: 'black'}}></canvas>
    )
  }
}

export default GameCanvas;
