import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-zinc-700 text-orange-600'>
      User:{userid}
    </div>
  )
}

export default User
