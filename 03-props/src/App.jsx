import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user = "Aman" role ="Programmer" img = "https://images.unsplash.com/photo-1741390723048-81412cd557a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=800" />
      <Card user = "Sarthak" role = "Data Analyst" img = "https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500"/>
      <Card user = "Harsh" role = "Manager" img = "https://images.unsplash.com/photo-1755498948221-b1b80c366c2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" />
    </div>
    
  )
}

export default App
