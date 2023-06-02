import React from 'react';
import { ShortCounter } from './components/ShortCounter';
import { MediumCounter } from './components/MediumCounter';
import { LongCounter } from './components/LongCounter';

import './App.css';

function App() {
  return (
    <div className="container">
      <ShortCounter />
      <MediumCounter />
      <LongCounter />
      <div className="grid-area submit">
        <span>Submit</span>
      </div>
    </div>
  );
}

export default App;
