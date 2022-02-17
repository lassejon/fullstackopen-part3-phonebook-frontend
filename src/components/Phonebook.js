const Phonebook = ( {persons, removePerson} ) => {
  return (
    <div>
      {persons.map(person => {
        return (
          <div key={person.id}>
            <b>{person.name} {person.number}</b>
            <button onClick={() => removePerson(person)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Phonebook