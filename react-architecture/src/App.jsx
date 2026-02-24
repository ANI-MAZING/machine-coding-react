
import './App.css'
import Dashboard from '../components/Dashboard'
import { DashboardContext } from '../components/Context'
import { useState } from 'react';


function App() {
  
  const [user, setUser] = useState('Aniruddha');

  return (
    <>
      <div>
        <h1>useContext</h1>
        <DashboardContext.Provider value={user}>
        <Dashboard/>
        </DashboardContext.Provider>
      </div>
    </>
  )
}

export default App
