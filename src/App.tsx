import React, { useState } from 'react';

import { Counter } from './components/Counter';

import './App.css';


function App() {
  const [shortMake, setShortMake] = useState(0);
  const [shortMiss, setShortMiss] = useState(0);

  const [mediumMake, setMediumMake] = useState(0);
  const [mediumMiss, setMediumMiss] = useState(0);

  const [longMake, setlongMake] = useState(0);
  const [longMiss, setlongMiss] = useState(0);

  // -----------------
  const updateShortMake = (count: number) => {
    setShortMake(count);
    console.log(`Short Make: ${shortMake}`)
  };

  const updateShortMiss = (count: number) => {
    setShortMiss(count);
    console.log(`Short Miss: ${shortMiss}`)
  };

  // ------------------
  const updateMediumMake = (count: number) => {
    setMediumMake(count);
    console.log(`Medium Make: ${mediumMake}`)
  };

  const updateMediumMiss = (count: number) => {
    setMediumMiss(count);
    console.log(`Medium Miss: ${mediumMiss}`)
  };

  // ------------------
  const updateLongMake = (count: number) => {
    setlongMake(count) 
    console.log(`Long Make: ${longMake}`)
  }

  const updateLongMiss = (count: number) => {
    setlongMiss(count) 
    console.log(`Long Miss: ${longMake}`)
  }



  return (
    <div className="container">
      <div className='grid-area short'>
        <Counter title="Short Make" count={shortMake} onUpdate={updateShortMake} />
        <Counter title="Short Miss" count={shortMiss} onUpdate={updateShortMiss} />
      </div>
      <div className='grid-area medium'>
        <Counter title="Medium Make" count={mediumMake} onUpdate={updateMediumMake} />
        <Counter title="Medium Miss" count={mediumMiss} onUpdate={updateMediumMiss} />
      </div>
      <div className='grid-area long'>
        <Counter title="Long Make" count={longMake} onUpdate={updateLongMake} />
        <Counter title="Long Miss" count={longMiss} onUpdate={updateLongMiss} />
      </div>
      <div className="grid-area submit">
        <span>Submit</span>
      </div>
    </div>
  );
}

export default App;


