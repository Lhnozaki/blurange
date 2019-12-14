import React, { useState, useEffect } from 'react';
// import { fakeInfo } from '../../../fakeLinkedinInfo.js';

export default function TextareaInput({ title, placeholder, value, name, handleChange, userInfo, setUserInfo }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(value);
        setUserInfo({ ...userInfo, [name]: value });
    }, []);


    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <textarea name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, setInputValue)} />
        </div>
    )
}