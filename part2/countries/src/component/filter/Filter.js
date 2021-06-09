const Filter = ({searchCountries}) => {
    return ( 
        <>
        <form> 
            <input type="text" onChange={(e) => searchCountries(e.target.value)} placeholder="type country name"/>
      </form>
        </>
     );
}
 
export default Filter;