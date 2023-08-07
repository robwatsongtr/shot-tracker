import { useState } from 'react';

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

export const useMainPageStates = () => {
  const [ showResult, setShowResult ] = useState(false)
  const [ resetCounters, setResetCounters ] = useState(false);

  const [ shortState, setShortState ] = useState<ICounterStateShort>({
    shortMake: 0,
    shortMiss: 0
  })

  const [ mediumState, setMediumState ] = useState<ICounterStateMedium>({
    mediumMake: 0,
    mediumMiss: 0
  })

  const [ longState, setLongState ] = useState<ICounterStateLong>({
    longMake: 0,
    longMiss: 0
  })

  return {
    showResult, setShowResult,
    resetCounters, setResetCounters,
    shortState, setShortState,
    mediumState, setMediumState,
    longState, setLongState
  }
}