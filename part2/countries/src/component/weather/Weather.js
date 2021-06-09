import axios from "axios";
import { useEffect, useState } from "react";



const Weather = ({countryMatch}) => {
    const [condition, setCondition] = useState('');

    const countryCapital =  countryMatch.length === 1 ? countryMatch.map(country => country.capital).toString() : '';
    console.log(countryCapital);


    // fetch weather infrmation from API
    useEffect(() => {

        const params = {
            access_key: 'a6abf7877b088770cae2508f5b3da03c',
            query: countryCapital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(res => console.log(setCondition(res.data.current)))
            
    }, [countryCapital]);
console.log(condition);

          

    return ( 
        <div>
            { condition && countryMatch.length === 1 ?
                <div>
                    <h2>Weather in {countryMatch.map(country => country.name)}</h2>
                    <p><strong>Temperature:</strong> {condition.temperature} celcius</p>
                    <img src={condition.weather_icons[0]} alt='Weather icon' />
                    <p><strong>Wind:</strong> {condition.wind_speed} mph, direction {condition.wind_dir}</p>

                </div>
            : 
            countryMatch.length === 1 ? 
                <p>loading data</p>
            :
            <p></p>
            
        }
            
        </div>
     );
}
export default Weather;
 