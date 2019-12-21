import React from 'react';
import styles from './Gallery.module.scss';
import image1 from '../../assests/Splash-1.jpg';
import image2 from '../../assests/Splash-2.jpg';
import image3 from '../../assests/Splash-3.jpg';
import image4 from '../../assests/Splash-4.jpg';

const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            <img src={image1} alt="first image"/>
        </div>
    )
}

export default Gallery;