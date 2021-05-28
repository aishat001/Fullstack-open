import './App.css';
import { useState } from "react";


const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad:0 })


  const handleGood = () => {
        setClicks({ good: clicks.good + 1});
    
  }
  const handleNeutral = () => {
        setClicks({ neutral: clicks.neutral + 1});
    
  }
  const handleBad = () => {
        setClicks({ bad: clicks.bad + 1});
    
  }
   

  return (
    <>
      <h1>Give Feedback</h1>


      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>Statistics</h2>
      <p>good : {clicks.good}</p>
      <p>neutral : {clicks.neutral}</p>
      <p>bad : {clicks.bad}</p>

    </>
  );
}

export default App;
