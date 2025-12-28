import React from 'react'
import { useState } from 'react'

const Para = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='gap-10'> 
      <div className="bg-blue-800 w-200 h-200 p-20 m-10">
      <h1 className="text-white text-9xl">{count}</h1>
      </div>
      <button className='bg-blue-500 w-100 h-50' onClick={()=>
        setCount(count + 1)
      }>Increase</button>

      <button className='bg-red-500 w-100 h-50' onClick={()=>
        setCount(count - 1)
      }>Decrease</button>
      
    </div>
  )
}

export default Para
