import { useState } from 'react'

const Contacts = ({ persons }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName
    }

    setPersons(persons.concat(newContact))
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <label>
          name: <input value={newName} onChange={handleNewName} />
        </label>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <Contacts persons={persons} />
    </div>
  )
}

export default App