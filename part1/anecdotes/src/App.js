import { useState } from 'react';
import './App.css';

const  App= () => {
  const anecdotes = [
    'If it hurts, do it more often ',
    'Adding manpower to a late software project makes it later! ',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' ,
    'Premature optimization is the root of all evil. ',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients '
  ];
   
 
    const [selected, setSelected] = useState(0);

    // initial votes 
    const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

    // calculate highest votes
    const highestVotes = vote.indexOf(Math.max(...vote));

    const handleRandomAnecdotes = () => setSelected(Math.floor(Math.random()* anecdotes.length));

  // new Votes
    const handleVotes = () => {
      const newVote = [...vote];
      newVote[selected]++;
      setVote(newVote);
    }

        
  return ( 
    <div className="App">
      <h1>Anecdotes of the Day</h1>
      <div className="content">
        {anecdotes[selected]} <br/>
        <span>
        {vote[selected]}
        </span> votes
      </div>
      <div className="button">
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleRandomAnecdotes}>Next anecdotes</button>
      </div>

      <div>
        <h1>Most votes</h1>
        <p>
        {anecdotes[highestVotes]}
         has {vote[highestVotes]} Votes
        </p>

      </div>
   </div>
   );
}
 
export default App;

