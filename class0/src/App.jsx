import React from 'react'
import Nav from './components/Nav'
import Men from './components/men'
import Women from './components/women'

const App = () => {

  const user1={
    Name:"Mithlesh",
    age:25,
    Gender:"Male"
  }
  const user2={
    Name:"John Doe",
    age:30,
    Gender:"Female"
  }
  return (
    <div className='m-4'>
      <Nav title="Mithlesh" link={['Home', 'Contact', 'Email', 'Phone Number']}/>
      <Nav title="John Doe" link={['About', 'Services', 'Blog', 'Careers']}/>
      {user1.Gender=="Male"? <Men/> : <Women/>}
      {user2.Gender=="Female"? <Women/> : <Men/>}
    </div>
  )
}

export default App
