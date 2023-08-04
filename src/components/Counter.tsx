//   /components/Counter.tsx

import React, { useState, useEffect } from 'react';
import './../App.css';

interface CounterProps {
  title: string;
  count?: number;
  onUpdate?: (count: number) => void;
  reset: boolean
}

export const Counter: React.FC<CounterProps> = ({ title, count = 0, onUpdate, reset }) => {
  const [counter, setCounter] = useState(count);

  useEffect( () => {
    onUpdate?.(counter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  useEffect( () => {
    if (reset) setCounter(0);
  }, [reset]);

  const increment = (): void => {
    const newCounter = counter + 1;
    setCounter(newCounter);  
  }

  const decrement = (): void => {
    const newCounter = (counter - 1 < 0) ? 0 : counter - 1;
    setCounter(newCounter);
  };

  return (
    <div >
      <h4>{title}:</h4>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
