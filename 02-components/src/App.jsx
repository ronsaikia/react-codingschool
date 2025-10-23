import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';

const App = () => {

  const user = 'Chiron';

  return (
    <div>
      <Navbar />
        <div className='card'>
          <h2>Hello guys I'm {user}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, eaque.</p>


          

        </div>
      <Card />
      <Card />
      
    </div>
  )   
}

export default App
