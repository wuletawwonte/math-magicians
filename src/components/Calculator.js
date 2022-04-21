import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.id));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <h2 className="output c-item">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </h2>
        <button type="button" onClick={this.handleClick} id="AC" className="c-item">AC</button>
        <button type="button" onClick={this.handleClick} id="+/-" className="c-item">+/-</button>
        <button type="button" onClick={this.handleClick} id="%" className="c-item">%</button>
        <button type="button" onClick={this.handleClick} id="÷" className="c-item bg-orange">÷</button>
        <button type="button" onClick={this.handleClick} id="7" className="c-item">7</button>
        <button type="button" onClick={this.handleClick} id="8" className="c-item">8</button>
        <button type="button" onClick={this.handleClick} id="9" className="c-item">9</button>
        <button type="button" onClick={this.handleClick} id="x" className="c-item bg-orange">x</button>
        <button type="button" onClick={this.handleClick} id="4" className="c-item">4</button>
        <button type="button" onClick={this.handleClick} id="5" className="c-item">5</button>
        <button type="button" onClick={this.handleClick} id="6" className="c-item">6</button>
        <button type="button" onClick={this.handleClick} id="-" className="c-item bg-orange">-</button>
        <button type="button" onClick={this.handleClick} id="1" className="c-item">1</button>
        <button type="button" onClick={this.handleClick} id="2" className="c-item">2</button>
        <button type="button" onClick={this.handleClick} id="3" className="c-item">3</button>
        <button type="button" onClick={this.handleClick} id="+" className="c-item bg-orange">+</button>
        <button type="button" onClick={this.handleClick} id="0" className="c-item zero">0</button>
        <button type="button" onClick={this.handleClick} id="." className="c-item">.</button>
        <button type="button" onClick={this.handleClick} id="=" className="c-item bg-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
