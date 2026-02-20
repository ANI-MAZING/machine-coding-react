import React from 'react'
import { useFormStatus } from 'react-dom'

function ClientHandling({HandleClientSide}) {

    const {pending} = useFormStatus()

  return (
    <div>
      <form action={HandleClientSide}>
        <input type="text" name='searchQuery' />
        <button type='submit' disabled={pending}>{pending?  "Submitting" : "Submit"}</button>
      </form>
    </div>
  )
}

export default ClientHandling
