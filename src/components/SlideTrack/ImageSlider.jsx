/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styles from './ImageSlider.module.css';
import columnAd1 from '../../assets/images/column-ad1.png';
import columnAd2 from '../../assets/images/column-ad2.png';
import columnAd3 from '../../assets/images/column-ad3.png';
import columnAd4 from '../../assets/images/column-ad4.png';

const ImageSlider = ({className, images, links, width = 600, height = 400, onLinkClick }) => {
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
    <div className={className}>
    <div className={`${styles["slider-container"]}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={styles["slider-wrapper"]}>
      <div
      className={styles["slides-track"]}
      style={{
        width: `${images.length * 100}%`,
        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
      }}
    >
          
      {links.map((link, idx) => (
          <a
            key={idx}
            href={link}
            className={`${styles["slide-image"]}`}
            onClick={() => onLinkClick(idx)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {images[idx] && (
              <img src={images[idx]} alt={`${idx + 1}`} className={styles["slide-image"]} />
            )}
          </a>
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
      <div className={styles["column-ads"]}>
        <a href="#"><img src={columnAd1} alt="Column Ad 1" /></a>
        <a href="#"><img src={columnAd2} alt="Column Ad 2" /></a>
        <a href="#"><img src={columnAd3} alt="Column Ad 3" /></a>
        <a href="#"><img src={columnAd4} alt="Column Ad 4" /></a>
      </div>
      </div>
      </div>
  );
};

export default ImageSlider; 