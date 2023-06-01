import React from 'react';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="grid-area item-1">
        <span>Short Make</span>
        <span>Short Miss</span>
      </div>
      <div className="grid-area item-2">
        <span>Medium Make</span>
        <span>Medium Miss</span>
      </div>
      <div className="grid-area item-3">
        <span>Long Make</span>
        <span>Long Miss</span>
      </div>
      <div className="grid-area item-4">
        <span>Submit</span>
      </div>
    </div>
  );
}

export default App;
