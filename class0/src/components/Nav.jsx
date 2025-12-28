import React from 'react'

const Nav = (props) => {
    console.log(props);
  return (
    <div className='bg-blue-500 w-full mb-4 h-[60px] flex justify-between items-center'>
      <h1 className='px-4'>{props.title}</h1>
      <div className='flex gap-8 mr-8'>
        {props.link.map(function(element, index){
            return <h1 key={index}>{element}</h1>
        })}
      </div>
    </div>
  )
}

export default Nav
