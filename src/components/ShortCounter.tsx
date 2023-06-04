
import './../App.css';

interface ShortCounterProps {
  incShortMake: () => void;
  decShortMake: () => void
  shortMake: number
  incShortMiss: () => void;
  decShortMiss: () => void
  shortMiss: number
}

export const ShortCounter: React.FC<ShortCounterProps> = 
  ({ incShortMake, decShortMake, shortMake, incShortMiss, decShortMiss, shortMiss }) => {
  return (
    <div className="grid-area short">      
      <h4>Short Make:</h4> 
      <h2>{shortMake}</h2>
      <div className="buttons">
        <button onClick={incShortMake}> + </button>
        <button onClick={decShortMake}> - </button>
      </div>
      <h4>Short Miss:</h4> 
      <h2>{shortMiss}</h2>
      <div className="buttons">
        <button onClick={incShortMiss}> + </button>
        <button onClick={decShortMiss}> - </button>
      </div>
    </div>
  )
}