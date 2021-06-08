// import Person from "../person/Person";

const Search = ({searchForPerson, setfilteredNames, searchName, filteredNames, handleSearchName, numbersToShow}) => {
    console.log();
    return ( 
        <div>
        <form onSubmit={searchForPerson}>
        filter shown with <input value={searchName} onChange={handleSearchName}/>
        <button type="submit" onClick={() => setfilteredNames(!filteredNames)}> Show {filteredNames ? 'Filtered' : 'all' }</button>
        
        </form>


 

        </div>
     );
}
 
export default Search;