import React, { useState } from 'react'
import Men from './parts/Men'
import Women from './parts/Women'

const App = () => {
  const [Male, setMale] = useState("male")
  function handleClick() {
    if (Male === "female")
       setMale("male")
    else
       setMale("female")
  }
  return (
    <div className='flex flex-col items-center gap-5 mt-10'>
      <h1 className='text-sm'>{Male}</h1>
      <button onClick={handleClick} className='bg-green-600 h-7 w-30 rounded-2xl'>Change Gender</button>
      {Male === "male" ? <Men /> : <Women />}
    </div>
  )
}

export default App
