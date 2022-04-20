import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <input type="text" className="output c-item" value="0" />
        <button type="button" className="c-item">AC</button>
        <button type="button" className="c-item">+/-</button>
        <button type="button" className="c-item">%</button>
        <button type="button" className="c-item bg-orange">+</button>
        <button type="button" className="c-item">7</button>
        <button type="button" className="c-item">8</button>
        <button type="button" className="c-item">9</button>
        <button type="button" className="c-item bg-orange">x</button>
        <button type="button" className="c-item">4</button>
        <button type="button" className="c-item">5</button>
        <button type="button" className="c-item">6</button>
        <button type="button" className="c-item bg-orange">-</button>
        <button type="button" className="c-item">1</button>
        <button type="button" className="c-item">2</button>
        <button type="button" className="c-item">3</button>
        <button type="button" className="c-item bg-orange">+</button>
        <button type="button" className="c-item zero">0</button>
        <button type="button" className="c-item">.</button>
        <button type="button" className="c-item bg-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
