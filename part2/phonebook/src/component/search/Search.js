// import Person from "../person/Person";

const Search = ({searchForPerson, setfilteredNames, searchName, filteredNames, handleSearchName, numbersToShow}) => {
    console.log();
    return ( 
        <div>
        <form onSubmit={searchForPerson}>
        filter shown with <input value={searchName} onChange={handleSearchName} onClick={() => setfilteredNames(!filteredNames)}/>        
        </form>


 

        </div>
     );
}
 
export default Search;