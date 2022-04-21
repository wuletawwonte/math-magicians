import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => {
      calculate(state, e.target.dataset.name)
    })
  }

  render() {
    return (
      <div className="calculator">
        <span className="output c-item">0</span>
        <button type="button" data-name="AC" className="c-item">AC</button>
        <button type="button" data-name="+/-" className="c-item">+/-</button>
        <button type="button" data-name="%" className="c-item">%</button>
        <button type="button" data-name="+" className="c-item bg-orange">+</button>
        <button type="button" data-name="7" className="c-item">7</button>
        <button type="button" data-name="8" className="c-item">8</button>
        <button type="button" data-name="9" className="c-item">9</button>
        <button type="button" data-name="x" className="c-item bg-orange">x</button>
        <button type="button" data-name="4" className="c-item">4</button>
        <button type="button" data-name="5" className="c-item">5</button>
        <button type="button" data-name="6" className="c-item">6</button>
        <button type="button" data-name="-" className="c-item bg-orange">-</button>
        <button type="button" data-name="1" className="c-item">1</button>
        <button type="button" data-name="2" className="c-item">2</button>
        <button type="button" data-name="3" className="c-item">3</button>
        <button type="button" data-name="+" className="c-item bg-orange">+</button>
        <button type="button" data-name="0" className="c-item zero">0</button>
        <button type="button" data-name="." className="c-item">.</button>
        <button type="button" data-name="=" className="c-item bg-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
