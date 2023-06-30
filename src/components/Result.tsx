import './../App.css';
import { ICounterStateShort } from './MainPage';
import { ICounterStateMedium } from './MainPage';
import { ICounterStateLong } from './MainPage';

interface ResultProps {
  sState: object
  mState: object
  lState: object
}

const Result: React.FC<ResultProps> = ({ sState, mState, lState }) => {
  console.log(sState);
  console.log(mState);
  console.log(lState);

  const calcShort = (sState: ICounterStateShort): [number, number]  => {
    const shortTotal = sState.shortMake + sState.shortMiss
    const shortPercent = shortTotal / sState.shortMake
    return [ shortTotal, shortPercent ]
  }

  const calcMedium = (mState: ICounterStateMedium) => {
    const mediumTotal = mState.mediumMake + mState.mediumMiss
    const mediumPercent = mediumTotal / mState.mediumMake
    return [ mediumTotal, mediumPercent ]
  }

  const calcLong = (lState: ICounterStateLong) => {
    const longTotal = lState.longMake + lState.longMiss
    const longPercent = longTotal / lState.longMake
    return [ longTotal, longPercent ]
  }

  

  return (
   <div>
    
   </div>
  )
}

export default Result