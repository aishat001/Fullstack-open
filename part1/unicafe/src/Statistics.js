

const Statistics = ({good, bad, neutral}) => {

    return (  
      <Statistics text='good' value={good}/>,
      <Statistics text='neutral' value={neutral}/>,
      <Statistics text='bad' value={bad}/>
    );
  }


  export default Statistics;