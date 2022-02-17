import React from 'react'

const Filter = ( {newSearch, SearchPersons}) => {


  return (
    <>
      filter shown width
      <input 
        value={newSearch}
        onChange={SearchPersons}
      />
    </>
  )
}

export default Filter