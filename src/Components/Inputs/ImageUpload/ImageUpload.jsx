import React from 'react';


const ImageUpload = ({ handleUpload, name }) => {

    return (
        <input
            type="file"
            name={name}
            accept="image/*"
            onChange={handleUpload}
        />
    )
}

export default ImageUpload;