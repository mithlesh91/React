import React, { useState } from 'react'

const Para = () => {
  const [count, setCount] = useState(0)

// //  let count = 0;
//   const btnclick= () =>{
//     // count++;
//     // console.log(count);
//     setCount(count + 1);
//   }

  return (
    <div>
      <h1>{count}</h1>
      <button className='bg-blue-700 h-7 w-25 rounded-2xl'
      onClick={() =>
       setCount(count + 1)}
       >Incresase</button>
        <button className='bg-blue-700 h-7 w-25 rounded-2xl'
      onClick={() =>
       setCount(count - 1)}
       >Decrease</button>
        <button className='bg-blue-700 h-7 w-25 rounded-2xl'
      onClick={() =>
       setCount(count + 5)}
       >Jump by</button>
       
    </div>
  )
}

export default Para
