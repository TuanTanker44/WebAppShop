import {React, useState, useEffect } from 'react';
import styles from './Product.module.css';

const Product = ({discount, image, title, price }) => {
    const [salePrice, setSalePrice] = useState(price);
    useEffect(() => {
        if (discount > 0) {
          const newPrice = price - price * (discount/100);
          setSalePrice(newPrice.toFixed(2));
        } else {
          setSalePrice(price);
        }
      }, [price, discount]);
  return (
      <div className={styles['product']}>
        {discount > 0 && (
            <div className={styles['product-discount']}>-{discount}%</div>
        )}
        <div className={styles['product-discount']}></div>
        <div className={styles['product-installment']}></div>
        <img src={image} alt={title} className={styles['product-image']} />
        <h3 className={styles['product-title']}>{title}</h3>
        {discount > 0 ? (
            <div className={styles['product-price-wrapper']}>
                <p className={styles['product-price-unsale']}>{price}₫</p>
                <p className={styles['product-price-sale']}>{salePrice}₫</p>
            </div>
          ) : (
                <p className={styles['product-price']}>{price}₫</p>
          )}
    </div>
  );
}

export default Product;
