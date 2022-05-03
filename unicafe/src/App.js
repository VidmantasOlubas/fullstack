import React from 'react';
import { useState } from 'react'

function App()
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let handleButtonGoodClick = function ()
  {
    setGood(good + 1)
  }

  let handleButtonNeutralClick = function ()
  {
    setNeutral(neutral + 1)
  }

  let handleButtonBadClick = function ()
  {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleButtonGoodClick}>good</button>
      <button onClick={handleButtonNeutralClick}>neutral</button>
      <button onClick={handleButtonBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App;
