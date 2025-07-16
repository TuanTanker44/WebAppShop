import React from 'react';
import styles from './Navigation.module.css'

function Navigation({ className }) {
  return (
    <nav className={`${className} ${styles.navigation}`}>
      <ul>
        <li><a href="/"><span>Trang chủ</span></a></li>
        <li><a href="/products"><span>Sản phẩm</span></a></li>
        <li><a href="/about"><span>Về chúng tôi</span></a></li>
        <li><a href="/contact"><span>Liên hệ</span></a></li>
      </ul>
    </nav>
  );
}

export default Navigation;