import './../App.css';
import { ICounterStateShort } from './MainPage';
import { ICounterStateMedium } from './MainPage';
import { ICounterStateLong } from './MainPage';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";

interface ResultComponentProps {
  sState: ICounterStateShort
  mState: ICounterStateMedium
  lState: ICounterStateLong
}

export interface IResultState {
  sTotal: number
  sPercent: number
  mTotal: number
  mPercent: number
  lTotal: number
  lPercent: number
  oTotal: number
  oPercent: number
  date: Date
}

const Result: React.FC<ResultComponentProps> = ({ sState, mState, lState }) => {

  const [ resultState, setResultState ] = useState<IResultState>({
    sTotal: 0,
    sPercent: 0,
    mTotal: 0,
    mPercent: 0,
    lTotal: 0,
    lPercent: 0,
    oTotal: 0,
    oPercent: 0,
    date: new Date()
  })

  // isNaN is error check for divide by zero, ie make and total are both zero 
  const calcStats = (make: number, miss: number): [number, number] => {
    const total = make + miss
    const percent = isNaN( make / total ) ? 0 : (make / total) * 100
    return [ total, percent ]
  }
  
  const [ shortTotal, shortPercent ] = calcStats(sState.shortMake, sState.shortMiss)
  const [ mediumTotal, mediumPercent] = calcStats(mState.mediumMake, mState.mediumMiss)
  const [ longTotal, longPercent ] = calcStats(lState.longMake, lState.longMiss);

  const overallTotal = shortTotal + mediumTotal + longTotal
  const overallMakes = sState.shortMake + mState.mediumMake + lState.longMake
  const overallPercent = isNaN(overallMakes / overallTotal) ? 
    0 : (overallMakes / overallTotal) * 100

  useEffect( () => {
    const date = new Date()
    
    setResultState({
      sTotal: shortTotal,
      sPercent: shortPercent,
      mTotal: mediumTotal,
      mPercent: mediumPercent,
      lTotal: longTotal,
      lPercent: longPercent,
      oTotal: overallTotal,
      oPercent: overallPercent,
      date: date
    })
    }, [shortTotal, shortPercent, mediumTotal, mediumPercent, 
      longPercent, longTotal, overallTotal, overallPercent ]
  )

  const saveSession = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const docRef = await addDoc( collection(db, "sessions"), resultState ) 
      alert('Session Added to Database!')
      console.log('Document written with ID: ', docRef.id);
    } catch(err) {
      alert('Error adding session to database')
      console.error('Error adding document: ', err);
    }
  }

  return (
    <div>
      <div>
        Total Short Attempts: {resultState.sTotal} <br/>
        Short Percent: {resultState.sPercent.toFixed(1)}%
      </div>
      <div>
        <br/>
        Total Medium Attempts: {resultState.mTotal} <br/>
        Medium Percent: {resultState.mPercent.toFixed(1)}%
      </div>
      <div>
        <br />
        Total Long Attempts: {resultState.lTotal} <br/>
        Long Percent: {resultState.lPercent.toFixed(1)}%
      </div>
      <div>
        <br />
        Total Attempts: {resultState.oTotal} <br/>
        Percent: {resultState.oPercent.toFixed(1)}%
      </div>
      <div>
        <br/>
        <h5>{resultState.date.toLocaleString()}</h5> 
      </div>
        <br/>
      <Button 
          variant="contained" 
          onClick={saveSession}
          size="small"
      >
        Save Session 
      </Button>
    </div>
  )
}

export default Result

