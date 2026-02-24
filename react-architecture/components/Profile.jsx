import React, { useContext } from 'react'
import { DashboardContext } from './Context'

function Profile() {

  const user = useContext(DashboardContext)

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default Profile
