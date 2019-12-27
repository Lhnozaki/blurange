import React from "react";

const ImageUpload = ({ handleUpload, name, title }) => {
  return (
    <div className="input-container">
      <label>{title}</label>
      <input type="file" name={name} accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageUpload;
