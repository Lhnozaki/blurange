import React, { useState } from 'react'

export default function TextInput({ title, placeholder, name, value, handleChange }) {
    const [inputValue, setInputValue] = useState(value)

    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <input type="text" name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, inputValue, setInputValue)} />
        </div>
    )
}
