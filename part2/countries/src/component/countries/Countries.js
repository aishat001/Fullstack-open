import Country from "./Country";
import './Country.css'

const Countries = ({countryMatch}) => {
    
    return ( 
        <>
                  {
      countryMatch.length > 10 ?
      <p>Too many matches, type in full to see country</p>

      : 
      <Country countryMatch={countryMatch}/>
       }
        </>
     );
}
 
export default Countries;