import './../App.css';

interface ResultProps {
  shortState: object
  mediumState: object
  longState: object
}

const ResultPage: React.FC<ResultProps> = ({ shortState, mediumState, longState }) => {
  console.log(shortState);
  console.log(mediumState);
  console.log(longState);
  return (
    <>
      This is the Result Page 
    </>
  )
}

export default ResultPage