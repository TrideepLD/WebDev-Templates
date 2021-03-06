import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  // Initialize constructor class
  constructor(props) {
    super(props); // Exists cause you need a super to define constructors in JS
    // therefore all component classes with a constructor should have a super(props) call
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      // <button className="square" onClick={function() { alert('click'); }}>
      // This change is done to avoid the confusing behaviour of this: https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
      <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})
      }>
        {this.state.value} 
      </button>
      // Changed Square's render method to show the value in line 17.
      // Button Tag changed so that it fills Square component with X when clicked.
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />; // passed a prop called value to Square
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );