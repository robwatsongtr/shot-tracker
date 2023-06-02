
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
      <span>Short Make</span>
      <span>Short Miss</span> 
    </div>
  )
}