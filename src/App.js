import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quotes from './pages/Quotes';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>
);

export default App;
