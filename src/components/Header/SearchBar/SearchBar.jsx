import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles['search-bar']}>
      <input type="text" placeholder="Tìm kiếm..." />
      <button>Tìm</button>
    </div>
  );
}

export default SearchBar;