import React from 'react';
import { useState } from 'react'
import Statistics from './components/Statistics';

function App()
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleButtonGoodClick = function ()
  {
    setGood(good + 1)
    setAvarage((good + 1 - bad) / (good + bad + neutral))
    setPositive((good + 1 * 100) / (good + bad + neutral))
  }

  const handleButtonNeutralClick = function ()
  {
    setNeutral(neutral + 1)
    setAvarage((good - bad) / (good + bad + neutral))
    setPositive((good * 100) / (good + bad + neutral))
  }

  const handleButtonBadClick = function ()
  {
    setBad(bad + 1)
    setAvarage((good - (bad + 1)) / (good + bad + neutral))
    setPositive((good * 100) / (good + (bad + 1) + neutral))
  }





  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleButtonGoodClick}>good</button>
      <button onClick={handleButtonNeutralClick}>neutral</button>
      <button onClick={handleButtonBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} avarage={avarage} positive={positive}></Statistics>
    </div>
  )
}

export default App;
