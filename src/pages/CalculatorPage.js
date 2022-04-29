import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <section className="calculator-page" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h2>Lets Do some math!</h2>
    <Calculator />
  </section>
);

export default CalculatorPage;
