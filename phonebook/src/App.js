import { useState, createRef } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "1" },
    { name: 'Vidmantas', number: "2" },
    { name: 'aaaaaa', number: "3" },
    { name: 'bbbbbb', number: "4" },
    { name: 'cccccc', number: "5" }
  ])
  const [newName, setNewName] = useState('')

  const refInputName = createRef()

  const refInputNumber = createRef()

  const fsubmit = () =>
  {
    console.log(refInputName.current.value)
    console.log(refInputNumber.current.value)

    //paieska masyve persons
    for (let i = 0; i < persons.length; i++)
    {

      if (refInputName.current.value === persons[i].name)
      {
        alert(refInputName.current.value + ' is already here')

        return
      }
    }

    const copyOfPersons = [...persons]

    copyOfPersons.push({ name: refInputName.current.value, number: refInputNumber.current.value })

    setPersons(copyOfPersons)

  }



  const array = []

  for (let i = 0; i < persons.length; i++)
  {
    array.push(<p key={i}>{persons[i].name} {persons[i].number}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <div>
          name: <input ref={refInputName} />
        </div>
        <div>number: <input ref={refInputNumber} /></div>
        <div>
          <button onClick={fsubmit}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {array}
    </div>
  )
}

export default App