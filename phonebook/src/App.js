import { useState } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Vidmantas' },
    { name: 'aaaaaa' },
    { name: 'bbbbbb' }
  ])
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
          <div>debug :{newName}</div>
        </div>
      </form>

      <h2>Numbers</h2>
      <p>{persons[0].name}</p>
      <p>{persons[1].name}</p>
      <p>{persons[2].name}</p>
      <p>{persons[3].name}</p>
    </div>
  )
}

export default App