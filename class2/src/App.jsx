import React from "react" 
import { useState } from "react"  
// import Card from "./components/card"

const App = () => {
 const[Marks,setMarks]=useState('')
 const[Mail,setMail]=useState('')
 const[Disc,setDisc]=useState('')
 const[Pic,setPic]=useState('')

 const localdata = JSON.parse(localStorage.getItem('all-user')) || []

 const[alluser,setAlluser]=useState([localdata])

  const formhandler = (e)=>{
    e.preventDefault()
    console.log(Marks,Mail,Disc,Pic)
  
   
    const olduser=[...alluser]
    olduser.push({Marks,Mail,Disc,Pic})
    console.log(olduser)
    setAlluser(olduser)
    localStorage.setItem('all-user',JSON.stringify(olduser))

     setMarks('')
     setMail('')
     setDisc('')
     setPic('')
     
  }
  const copyhandler = (index)=>{
    // console.log('deletad')
    const copyuser = [...alluser]
    copyuser.splice(index,1)
    setAlluser(copyuser)
    localStorage.setItem('all-user',JSON.stringify(copyuser))
  }
  return (
    <div className="flex flex-wrap">
      <form onSubmit={(e)=>{
        formhandler(e)
      }}
      className="flex gap-5"
      >
        <input className="border-4 border-black m-5" type="text" placeholder='Enter your name'
        value={Marks}
        onChange={(e)=>{
          setMarks(e.target.value)
        }}
         />
          <input className="border-4 border-black m-5" type="text" placeholder="Enter url"
         value={Mail}
         onChange={(e)=>{
          setMail(e.target.value)
         }}/> 

         <input className="border-4 border-black m-5" type="text" placeholder="Enter your Email"
         value={Disc}
         onChange={(e)=>{
          setDisc(e.target.value)
         }}/> 

         <input className="border-4 border-black m-5" type="text" placeholder="Enter your Experince"
         value={Pic}
         onChange={(e)=>{
          setPic(e.target.value)
         }}/> 
         

         <button className="ml-10 mt-5 border-2 border-gray-500 h-10 w-30  rounded  text-center bg-green-500">create user</button>

      </form>  
      <div className="flex flex-wrap">

      {alluser.map(function(elem,index){
        return  <div key={index} className='h-[350px] w-[200px] border-3 border-black rounded m-10 bg-white'>
      <img className='h-[110px] w-[110px] background-size:cover background-position-center object-fit:cover border-2 border-black rounded-full ml-10 mt-5' src={elem.Mail} alt="" />
      <h2 className='text-sm ml-11'>{elem.Marks}</h2>
      <h3 className='mt-5 text-center'>{elem.Disc}</h3>
      <h4 className='mt-5 text-center'>{elem.pic}</h4>
      <p className='mt-5 text-center'>Experince</p>
      <button className='bg-red-500 border-2 border-black  rounded mt-6 ml-15  cursor-pointer active:scale-95' onClick={()=>{
        copyhandler(index)
      }}>Remove</button>
    </div>
      })}
        
      </div>
    </div>
  )
}

export default App
