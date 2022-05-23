import { useState, createRef } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "1", id: 1 },
    { name: 'Vidmantas', number: "2", id: 2 },
    { name: 'aaaaaa', number: "3", id: 3 },
    { name: 'bbbbbb', number: "4", id: 4 },
    { name: 'cccccc', number: "5", id: 5 }
  ])
  const [filter, setFilter] = useState('')

  const refInputName = createRef()

  const refInputNumber = createRef()

  const handleFilterChange = (arg) =>
  {
    console.log(filter)
    setFilter(arg.target.value)
  }

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


  // masyvas i paragraph
  const array = []

  for (let i = 0; i < persons.length; i++)
  {
    /*
        if (filter === persons[i].name)
        {
          array.push(<p key={i}>{persons[i].name} {persons[i].number}</p>)
        }
        */

    if (persons[i].name.search(filter) !== -1)
    {
      array.push(<p key={i}>{persons[i].name} {persons[i].number}</p>)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input onChange={handleFilterChange} /></div>
      <h3>add new</h3>

      <div>
        name: <input ref={refInputName} />
      </div>
      <div>number: <input ref={refInputNumber} /></div>
      <div>
        <button onClick={fsubmit}>add</button>
      </div>


      <h2>Numbers</h2>
      {array}
    </div>
  )
}

export default App