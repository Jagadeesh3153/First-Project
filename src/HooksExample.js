import React, { useEffect, useState } from 'react'

function HooksExample()  {
    const [userName, setUserName] = useState(null);
    useEffect(()=>{
        setUserName("Jagadeesh")
    })
    return (
      <div>
        <h1>HooksExample</h1>
        <p>State in functional component: {userName}</p>
      </div>
    )
  }


export default HooksExample