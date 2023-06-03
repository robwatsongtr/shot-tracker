
import './../App.css';

interface ShortCounterProps {
  incShortCount: () => void;
  decShortCount: () => void
  shortCount: number
}

export const ShortCounter: React.FC<ShortCounterProps> = 
  ({ incShortCount, decShortCount, shortCount }) => {
  return (
    <div className="grid-area short">
      <span>
        <div className="count">
          <h3>Short Count:</h3>
          <h1>{shortCount}</h1>
        </div>
      </span>
      <span>
        <div className="buttons">
          <button onClick={incShortCount}> + </button>
          <button onClick={decShortCount}> - </button>
        </div>
      </span>
    </div>
  )
}