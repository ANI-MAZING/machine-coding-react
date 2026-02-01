import { useState } from 'react'
import './App.css'

function App() {

  const [principalAmt, setPrincipalAmt] = useState(500000)
  const [downPayment, setDownPayment] = useState(10000)
  const [rate, setRate] = useState(3)
  const [years, setYears] = useState(30)

  const loanAmt = principalAmt - downPayment;
  const monthlyRate = rate / 12 / 100;
  const totalMonths = years * 12;
  const monthlyMortage = Math.ceil(loanAmt * monthlyRate * Math.pow( 1 + monthlyRate, totalMonths) / (Math.pow( 1 + monthlyRate, totalMonths) - 1))
  console.log(monthlyMortage)

  function handleCalculate() {


  }

  return (
    <>
      <h1>Mortage Calculator</h1>
      <input type="number" placeholder='Enter Principal Amount'/>
      <input type="number" placeholder='Enter Down Payment'/>
      <input type="number" placeholder='Enter Rate'/>
      <input type="number" placeholder='Enter No of years'/>
      <button>Calculate</button>
    </>
  )
}

export default App
