import React, { useState } from 'react';
import { ShortCounter } from './components/ShortCounter';
import { MediumCounter } from './components/MediumCounter';
import { LongCounter } from './components/LongCounter';

import './App.css';


function App() {
  const [shortMake, setShortMake] = useState(0);
  const [shortMiss, setShortMiss] = useState(0);

  let incShortMake = (): void => {
    setShortMake(shortMake + 1);
  };

  let decShortMake = (): void => {
    setShortMake(shortMake - 1);
    if(shortMake < 1) setShortMake(0)
  };

  let incShortMiss = (): void => {
    setShortMiss(shortMiss + 1);
  };

  let decShortMiss = (): void => {
    setShortMiss(shortMiss - 1);
    if(shortMiss < 1) setShortMiss(0)
  };

  return (
    <div className="container">
      <ShortCounter 
        incShortMake={incShortMake} 
        decShortMake={decShortMake}
        shortMake={shortMake}
        incShortMiss={incShortMiss} 
        decShortMiss={decShortMiss}
        shortMiss={shortMake}
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


/*
import React, { useState } from 'react';
import { Counter } from './components/Counter';
import './App.css';

function App() {
  const [shortMake, setShortMake] = useState(0);
  const [shortMiss, setShortMiss] = useState(0);

  const updateShortMake = (count: number) => {
    setShortMake(count);
  };

  const updateShortMiss = (count: number) => {
    setShortMiss(count);
  };

  return (
    <div className="container">
      <Counter title="Short Make" count={shortMake} onUpdate={updateShortMake} />
      <Counter title="Short Miss" count={shortMiss} onUpdate={updateShortMiss} />
      <Counter title="Medium Counter" />
      <Counter title="Long Counter" />
      <div className="grid-area submit">
        <span>Submit</span>
      </div>
    </div>
  );
}

export default App;



*/
