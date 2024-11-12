import React, { useState } from 'react'
import './InputBox.css'
export default function InputBox({ handaleInputValue }) {

    const [inputValue, setInputValue] = useState('')
    return (
        <div className='input-box'>
            <input
                type="text"
                placeholder='Add Todo'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={() => {
                handaleInputValue(inputValue)
                setInputValue('')
            }}>Add</button>
        </div>
    )
}
