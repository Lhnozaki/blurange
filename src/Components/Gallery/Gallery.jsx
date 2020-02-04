import React from "react";
import styles from "./Gallery.module.scss";
import image1 from "../../assests/Splash-1.jpg";

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <img src={image1} alt="first image" />
    </div>
  );
};

export default Gallery;
