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
    <div>
      <h1>Give Feedback</h1>


      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p>All : {all}</p>
      <p>Average : {average}</p>
      <p>positiveFeedback : {positiveFeedback}</p>

    </div>
  );
};

export default App;
