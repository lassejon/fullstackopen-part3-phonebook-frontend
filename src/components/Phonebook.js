const Phonebook = ( {persons, removePerson} ) => {
  return (
    <div>
      {persons.map(person => {
        return (
          <div key={person.id}>
            <div>
            <b>{person.name} {person.number}</b>
            <button onClick={() => removePerson(person)}>delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Phonebook