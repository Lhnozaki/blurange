import React, { useState, useEffect } from 'react';
import {fakeInfo} from '../../../fakeLinkedinInfo.js';

export default function TextareaInput({ title, placeholder, name, handleChange, userInfo, setUserInfo }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // grab the info from linkedin an setInputValue(linkednInfo)
        const linkedinInfo = fakeInfo

        linkedinInfo.map(e => {
            if(e.field === name){
                setInputValue(e.value)
                setUserInfo({ ...userInfo, [name]: e.value });
            }
        })

    }, [name, setUserInfo, userInfo]);

    return (
        <div className="input-container">
            <label>{title}</label>
            {/* Fix the binding for the value */}
            <textarea name={name} placeholder={placeholder} value={inputValue} onChange={e => handleChange(e, inputValue, setInputValue)} />
        </div>
    )
}