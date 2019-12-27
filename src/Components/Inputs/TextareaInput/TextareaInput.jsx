import React, { useState } from 'react';

export default function TextareaInput({ title, placeholder, name, handleChange }) {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="input-container">
            <label>{title}</label>
            <textarea rows="10" cols="50" name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, setInputValue)} />
        </div>
    )
}