import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClientHandling from '../components/ClientHandling'
import Form from '../components/Form'

function App() {


  

    // Passing function as props to child component
      function HandleClientSide(formData){
        const query = formData.get("searchQuery")
        console.log(`You got a ${query}`)
    }

  return (
      <>
      {/* <h1>React Form</h1> */}
      {/* Handling form submission with client functions */}
      {/* <ClientHandling HandleClientSide={HandleClientSide}/> */}
      <Form/>
      </>
  )
}

export default App
