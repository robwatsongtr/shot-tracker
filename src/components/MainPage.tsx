import React, { useState } from 'react';
import { Counter } from './Counter';
import Result from './Result'
import { Button } from '@mui/material';

export interface ICounterStateShort {
  shortMake: number
  shortMiss: number
}

export interface ICounterStateMedium {
  mediumMake: number
  mediumMiss: number 
}

export interface ICounterStateLong {
  longMake: number
  longMiss: number 
}

const MainPage = () => {
  const [ showResult, setShowResult ] = useState(false)

  const [ shortState, setShortState] = useState<ICounterStateShort>({
    shortMake: 0,
    shortMiss: 0
  })

  const [ mediumState, setMediumState] = useState<ICounterStateMedium>({
    mediumMake: 0,
    mediumMiss: 0
  })

  const [ longState, setLongState] = useState<ICounterStateLong>({
    longMake: 0,
    longMiss: 0
  })

  const updateShortState = (newState: ICounterStateShort) => {
    setShortState(newState)
  }

  const updateMediumState = (newState: ICounterStateMedium) => {
    setMediumState(newState)
  }

  const updateLongState = (newState: ICounterStateLong) => {
    setLongState(newState)
  }

  const handleClick = () => {
    setShowResult(true);
  };

  return (
    <div className="container">
      <div className='grid-area short'>
        <Counter 
          title="Short Make" 
          count={shortState.shortMake} 
          onUpdate={ (count) => updateShortState({ ...shortState, shortMake: count }) } 
        />
        <Counter 
          title="Short Miss" 
          count={shortState.shortMiss} 
          onUpdate={ (count) => updateShortState({ ...shortState, shortMiss: count }) } 
        />
      </div>
      <div className='grid-area medium'>
        <Counter 
          title="Medium Make" 
          count={mediumState.mediumMake} 
          onUpdate={ (count) => updateMediumState({ ...mediumState, mediumMake: count }) }
        />
        <Counter 
          title="Medium Miss" 
          count={mediumState.mediumMiss} 
          onUpdate={ (count) => updateMediumState({ ...mediumState, mediumMiss: count }) }
        />
      </div>
      <div className='grid-area long'>
        <Counter 
          title="Long Make" 
          count={longState.longMake} 
          onUpdate={ (count) => updateLongState({ ...longState, longMake: count }) } 
        />
        <Counter 
          title="Long Miss" 
          count={longState.longMiss} 
          onUpdate={ (count) => updateLongState({ ...longState, longMiss: count })} 
        />
      </div>
      <div className="grid-area submit"> 
        <Button 
          variant="contained" 
          onClick={handleClick}
          size="small"
          color="secondary"
        >
          Result
        </Button> 
        <br/>
        { showResult && 
          <Result 
            sState={shortState}
            mState={mediumState} 
            lState={longState}
          />
        }
        <br/>
        <Button 
          variant="contained" 
          size="small" 
          onClick={ () => window.location.reload() }
        > 
          Reset
        </Button>
      </div>
    </div>
  );
}

export default MainPage;


