import './../App.css';
import { ICounterStateShort } from './MainPage';
import { ICounterStateMedium } from './MainPage';
import { ICounterStateLong } from './MainPage';

interface ResultProps {
  sState: ICounterStateShort
  mState: ICounterStateMedium
  lState: ICounterStateLong
}

const Result: React.FC<ResultProps> = ({ sState, mState, lState }) => {
  
  const calcShort = (sState: ICounterStateShort)  => {
    const shortTotal = sState.shortMake + sState.shortMiss
    const shortPercent = (sState.shortMake / shortTotal) * 100 
    return [ shortTotal, shortPercent ]
  }

  const calcMedium = (mState: ICounterStateMedium) => {
    const mediumTotal = mState.mediumMake + mState.mediumMiss
    const mediumPercent = (mState.mediumMake / mediumTotal) * 100
    return [ mediumTotal, mediumPercent ]
  }

  const calcLong = (lState: ICounterStateLong) => {
    const longTotal = lState.longMake + lState.longMiss
    const longPercent = (lState.longMake / longTotal) * 100
    return [ longTotal, longPercent ]
  }

  const [ shortTotal, shortPercent ] = calcShort(sState)
  const [ mediumTotal, mediumPercent] = calcMedium(mState)
  const [ longTotal, longPercent ] = calcLong(lState)

  return (
    <div>
      <div>
          Total Short Shots: {shortTotal} <br/>
          Short Percent: {shortPercent.toFixed(1)}%
      </div>
      <div>
          <br/>
          Total Medium Shots: {mediumTotal} <br/>
          Medium Percent: {mediumPercent.toFixed(1)}%
      </div>
      <div>
          <br />
          Total Long Shots: {longTotal} <br />
          Medium Percent: {longPercent.toFixed(1)}%
      </div>
    </div>
  )
}

export default Result