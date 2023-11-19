import React, { useState } from 'react'
import ColorBlock from './Components/ColorBlock.js'
import ColorForm from './Components/ColorForm.js'

function App() {
  let [colors, setColors] =  useState([
    'violet','blue', 'lightblue','green','greenyellow','yellow','orange','red'])

  let colorMap = colors.map ((color,i) => {

    return (
      <ColorBlock key={i} color={color}/>
    )
  })

  const addColor = (newColor) => {
    setColors([...colors,newColor])
  }
    return (
      <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
      </div>
    );
  }

export default App;

// component renders a given color
// component hold a form allows a user to enter a color
// State value that will be tracked and changed