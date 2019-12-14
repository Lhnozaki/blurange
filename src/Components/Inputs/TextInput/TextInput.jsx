import React, { useState, useEffect } from 'react'

export default function TextInput({ title, placeholder, value, name, handleChange, userInfo, setUserInfo, type }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(value);
        console.log(title, value)
        setUserInfo({ ...userInfo, [name]: value });
    }, []);

    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <input type={type} name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, setInputValue)} />
        </div>
    )
}
