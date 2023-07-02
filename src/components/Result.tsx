import './../App.css';
import { ICounterStateShort } from './MainPage';
import { ICounterStateMedium } from './MainPage';
import { ICounterStateLong } from './MainPage';
import { useState, useEffect } from 'react';

interface ResultComponentProps {
  sState: ICounterStateShort
  mState: ICounterStateMedium
  lState: ICounterStateLong
}

interface IResultState {
  sTotal: number
  sPercent: number
  mTotal: number
  mPercent: number
  lTotal: number
  lPercent: number
  oTotal: number
  oPercent: number
  date: string
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
    date: ''
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

  const date = new Date()
  const formattedDate = date.toLocaleString(); 

  useEffect( () => {
    setResultState({
      sTotal: shortTotal,
      sPercent: shortPercent,
      mTotal: mediumTotal,
      mPercent: mediumPercent,
      lTotal: longTotal,
      lPercent: longPercent,
      oTotal: overallTotal,
      oPercent: overallPercent,
      date: formattedDate
    })
    }, [shortTotal, shortPercent, mediumTotal, mediumPercent, 
      longPercent, longTotal, overallTotal, overallPercent, formattedDate]
  )

  return (
    <div>
      <div>
        Total Short Shots: {resultState.sTotal} <br/>
        Short Percent: {resultState.sPercent.toFixed(1)}%
      </div>
      <div>
        <br/>
        Total Medium Shots: {resultState.mTotal} <br/>
        Medium Percent: {resultState.mPercent.toFixed(1)}%
      </div>
      <div>
        <br />
        Total Long Shots: {resultState.lTotal} <br/>
        Long Percent: {resultState.lPercent.toFixed(1)}%
      </div>
      <div>
        <br />
        Total Shots: {resultState.oTotal} <br/>
        Percent: {resultState.oPercent.toFixed(1)}%
      </div>
      <div>
      <br/>
        <h5>{resultState.date}</h5> 
      </div>
    </div>
  )
}

export default Result

