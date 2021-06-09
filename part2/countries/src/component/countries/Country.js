import './Country.css'

const  Country= ({countryMatch}) => {
    return ( 
        <>
           {
            countryMatch.map(country => {
       return countryMatch.length === 1 ?
        <div className='eachcountry'>
            <h2>{country.name}</h2>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <div>
            <h4>Languages</h4>
                {country.languages.map(language => {
                return <li>{language.name}</li>
                } )
            }
            </div>
            <img src={country.flag} alt="" width='150px' height='150px'/>
        </div>
        :
         <p key={country.numericCode} className='country'>{country.name}</p>  
      })
    }
        </>
     );
}
 
export default Country;