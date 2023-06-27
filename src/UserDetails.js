import React, { useContext } from 'react'

import UserDetails from './ContextInhooks'
function UserDetails () {
    const UserDetails=useContext(UserDetails)
  
    return (
      <div>
        <h1>UserDetails</h1>
        <p>{UserDetails.fname}</p>
        <p>{UserDetails.lname}</p>
        <p>{UserDetails.address}</p>
      </div>
    )
  }


export default UserDetails