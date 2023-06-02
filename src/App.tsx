import React, { useState } from 'react';
import { ShortCounter } from './components/ShortCounter';
import { MediumCounter } from './components/MediumCounter';
import { LongCounter } from './components/LongCounter';

import './App.css';

interface IProps {
  incShortCount: () => void;
  decShortCount: () => void 
}

function App() {
  const [shortCount, setShortCount] = useState(0);

  let incShortCount = (): void => {
    setShortCount(shortCount + 1);
  };

  let decShortCount = (): void => {
    setShortCount(shortCount - 1);
  };

  return (
    <div className="container">
      <ShortCounter 
        incShortCount={incShortCount} 
        decShortCount={decShortCount}
        shortCount={shortCount}
      />
      <MediumCounter />
      <LongCounter />
      <div className="grid-area submit">
        <span>Submit</span>
      </div>
    </div>
  );
}

export default App;
