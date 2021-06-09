import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './component/countries/Countries';
import Filter from './component/filter/Filter';
import Weather from './component/weather/Weather';



const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryMatch, setcountryMatch] = useState([]);

  // fetching countries from API
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      });   
}, []);

// search for countries by typin it name
const searchCountries = (text) => {
  
  // if input value is empty
  if (!text) {
    setcountryMatch([]);
  } else {
    let matches = countries.filter(country => country.name.toLowerCase().includes(text));
    setcountryMatch(matches);
  }
}

  return (
    <div className="App">
      <h1>Find Country</h1>
      <Filter searchCountries={searchCountries}/>
      <Countries countryMatch={countryMatch}/>
      <Weather countryMatch={countryMatch}/>
    </div>
  );
}

export default App;
