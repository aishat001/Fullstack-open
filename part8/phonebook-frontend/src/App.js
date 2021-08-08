import { gql, useQuery } from '@apollo/client';
import Persons from './component/Persons';
import './App.css';


  const ALL_PERSONS = gql`
  query getAllPersons{
    allPersons {
      name,
      phone,
      id
    }
  }
  `

function App() {

  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Persons persons = { result.data.allPersons}/>
    </div>
  );
}

export default App;
