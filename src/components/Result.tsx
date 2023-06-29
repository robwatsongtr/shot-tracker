import './../App.css';

interface ResultProps {
  shortState: object
  mediumState: object
  longState: object
}

const Result: React.FC<ResultProps> = ({ shortState, mediumState, longState }) => {
  console.log(shortState);
  console.log(mediumState);
  console.log(longState);
  return (
    <>
      This is the Result 
    </>
  )
}

export default Result