import React from 'react'
import { useState } from 'react'
// const [Marks,setMarks]=useState([40,50,60,70,80])
// const Marks=[40,50,60,70,80 ];


const Para = () => {
  const [Marks,setMarks]=useState([40,50,60,70,80])
  function handleClick(){
    const newMarks=Marks.map(function(elem){
      return elem +5
    })
    setMarks(newMarks)
  }
  
  return (
    <div>
      {Marks.map(function(elem,index){
        return <h1 key={index}>student {index+1} ={elem}</h1>
      })}
      <button onClick={handleClick} className='bg-orange-300 h-7 w-20'>click me</button>
    </div>
  )
}

export default Para
