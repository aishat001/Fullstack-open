import './App.css';
import { useState } from "react";
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


   
  return (
    <div>
      <h1>Give Feedback</h1>


      <button onClick={() => setGood( good + 1)}>good</button>
      <button onClick={() => setNeutral( neutral + 1)}>neutral</button>
      <button onClick={() => setBad( bad + 1)}>bad</button>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  );
}

export default App;
