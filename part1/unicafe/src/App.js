import './App.css';
import { useState } from "react";
// import Statistics from './Statistics';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood =() => setGood( good + 1);
  const handleNeutral =() => setNeutral( neutral + 1);
  const handleBad =() => setBad( bad + 1);
  const all = good + neutral + bad;
  const average = all / 3;
  const positiveFeedback = (good / all) * 100;
   
  return (
    <div className="app">
      <h1>Give Feedback</h1>

      <div className="buttons">
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
       
      <div className="contents">
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>All : {all}</p>
        <p>Average : {average}</p>
        <p>positiveFeedback : {positiveFeedback}</p>
      </div>

    </div>
  );
};

export default App;
