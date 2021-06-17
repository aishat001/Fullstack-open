
const  PersonForm= ({addName, newName, handleNewName, newNumber, handleNewNumber}) => {
    return ( 
        <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNewName}/>
          <p>{}</p>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
          <p>{}</p>

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
     );
    }
    
export default PersonForm;