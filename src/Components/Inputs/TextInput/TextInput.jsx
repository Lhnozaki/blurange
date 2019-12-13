import React, { useState, useEffect } from 'react'

export default function TextInput({ title, placeholder, name, value, handleChange, userInfo, setUserInfo, type }) {

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
        setUserInfo({ ...userInfo, [name]: value });
    }, [name, setUserInfo, userInfo, value]);

    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <input type={type} name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, inputValue, setInputValue)} />
        </div>
    )
}
