import React, { useState } from "react";

export default function TextInput({
  title,
  placeholder,
  name,
  handleChange,
  type
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <label>{title}</label>
      {/* Fix the binding for the value */}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={e => handleChange(e, setInputValue)}
      />
    </div>
  );
}
