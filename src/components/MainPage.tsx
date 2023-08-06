import { Counter } from './Counter';
import Result from './Result'
import { Button } from '@mui/material';
import './../App.css';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { ICounterStateShort } from './useMainPageStates';
import { ICounterStateMedium } from './useMainPageStates';
import { ICounterStateLong } from './useMainPageStates';
import { useMainPageStates } from './useMainPageStates'

const MainPage = () => {
  const {
    showResult, setShowResult,
    resetCounters, setResetCounters,
    shortState, setShortState,
    mediumState, setMediumState,
    longState, setLongState
  } = useMainPageStates()

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

  const resetStateAndCounters = () => {
    setShortState({ shortMake: 0, shortMiss: 0 })
    setMediumState({ mediumMake: 0, mediumMiss: 0 })
    setLongState({ longMake: 0, longMiss: 0 })
    setResetCounters(true)
    setShowResult(false)
  };

  return (
    <div className="container">
      <div className='grid-area short'>
        <LogoutButton />
        <br/>
        <Button 
          variant="contained" 
          size="medium" 
          onClick={resetStateAndCounters}
        > 
          Reset
        </Button>
        <br/>
        <Counter 
          title="Short Make" 
          count={shortState.shortMake} 
          onUpdate={ (count) => updateShortState({ ...shortState, shortMake: count }) } 
          reset={resetCounters}
        />
        <Counter 
          title="Short Miss" 
          count={shortState.shortMiss} 
          onUpdate={ (count) => updateShortState({ ...shortState, shortMiss: count }) } 
          reset={resetCounters}
        />
      </div>
      <div className='grid-area medium'>
        <Counter 
          title="Medium Make" 
          count={mediumState.mediumMake} 
          onUpdate={ (count) => updateMediumState({ ...mediumState, mediumMake: count }) }
          reset={resetCounters}
        />
        <Counter 
          title="Medium Miss" 
          count={mediumState.mediumMiss} 
          onUpdate={ (count) => updateMediumState({ ...mediumState, mediumMiss: count }) }
          reset={resetCounters}
        />
      </div>
      <div className='grid-area long'>
        <Counter 
          title="Long Make" 
          count={longState.longMake} 
          onUpdate={ (count) => updateLongState({ ...longState, longMake: count }) } 
          reset={resetCounters}
        />
        <Counter 
          title="Long Miss" 
          count={longState.longMiss} 
          onUpdate={ (count) => updateLongState({ ...longState, longMiss: count })} 
          reset={resetCounters}
        />
      </div>
      <div className="grid-area submit"> 
        <Button 
          variant="contained" 
          onClick={handleClick}
          size="medium"
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
        <Link to="/historyTable">
          History 
        </Link>
        <br/>
      </div>
    </div>
  );
}

export default MainPage;


