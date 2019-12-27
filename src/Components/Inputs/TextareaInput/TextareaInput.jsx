import React, { useState, useEffect } from 'react';

export default function TextareaInput({ title, placeholder, value, name, handleChange, userInfo, setUserInfo }) {

    const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     setInputValue(value);
    //     setUserInfo({ ...userInfo, [name]: value });
    // }, []);


    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <textarea rows="10" cols="50" name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, setInputValue)} />
        </div>
    )
}