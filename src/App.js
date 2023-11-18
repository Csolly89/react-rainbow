import React, { useState } from 'react'
import ColorBlock from './Components/ColorBlock'

function App() {
  let colors = ['violet','blue', 'lightblue','green','greenyellow','yellow','orange','red']
  let colorMap = colors.map ((color,i) => {
    return (
      <ColorBlock color={color}/>
    )
  })

    return (
      <div className="App">
        {colorMap ((color,i) => (
          <ColorBlock key={i} color={color}/>
        ))}
      </div>
    );
  }

export default App;

// component renders a given color
// component hold a form allows a user to enter a color
// State value that will be tracked and changed