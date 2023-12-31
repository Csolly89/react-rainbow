import React , { useState } from 'react'

function ColorForm(props){
    let [Input, setInput] = useState('')

    const handleSubmit = (e) => {
        // eliminate the default behavior of form submission
        e.preventDefault()
        // addColor, function built in parent app.js, should be available within props
        props.addColor(Input)
        } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit!!</button>
            </form>
        </div>
    )
}

export default ColorForm