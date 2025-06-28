import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images, width = 600, height = 400 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles["slider-container"]} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={styles["slider-wrapper"]}>
      <div
      className={styles["slides-track"]}
      style={{
        width: `${images.length * 100}%`,
        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={styles["slide-image"]}
          style={{ width: `${100 / images.length}%` }}
        />
      ))}
    </div>
        
        <button className={`${styles['slider-button']} ${styles['prev-button']}`} onClick={prevSlide}>
          &#10094;
        </button>
        
        <button className={`${styles["slider-button"]} ${styles["next-button"]}`} onClick={nextSlide}>
          &#10095;
        </button>
        
        {/* Dots indicator */}
        <div className={styles["dots-container"] }>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider; 