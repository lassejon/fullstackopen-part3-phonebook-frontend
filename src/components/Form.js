import React from 'react'

const Form = ( 
  {createPerson, newName, newNumber,
   handleNameCHange, handleNumberCHange} 
) => {
  return (
    <form onSubmit={createPerson}>
      <div>
        name: 
        <input 
          value={newName}
          onChange={handleNameCHange}
        />
      </div>
      <div>
        number: 
        <input 
        type={"tel"}
          value={newNumber}
          onChange={handleNumberCHange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form