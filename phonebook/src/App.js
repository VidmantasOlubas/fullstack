import { useState, createRef } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Vidmantas' },
    { name: 'aaaaaa' },
    { name: 'bbbbbb' },
    { name: 'cccccc' }
  ])
  const [newName, setNewName] = useState('')

  const refInputName = createRef()

  const fsubmit = () =>
  {
    console.log(refInputName.current.value)
    const arrayCopyOfPersons = [...persons ]
    arrayCopyOfPersons.push({name: refInputName.current.value})
    setPersons(arrayCopyOfPersons)
   // setPersons([{name: refInputName.current.value }])
  }

  const array = []

  for (let i = 0; i < persons.length; i++)
  {
    array.push(<p key={i}>{persons[i].name}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>


      <div>
        name: <input ref={refInputName} />
      </div>
      <div>
        <button onClick={fsubmit}>add</button>
      </div>


      <h2>Numbers</h2>
      {array}
    </div>
  )
}

export default App