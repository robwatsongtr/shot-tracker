import './../App.css';

interface ResultProps {
  sState: object
  mState: object
  lState: object
}

const Result: React.FC<ResultProps> = ({ sState, mState, lState }) => {
  console.log(sState);
  console.log(mState);
  console.log(lState);
  return (
    <>
      This is the Result Page 
    </>
  )
}

export default Result