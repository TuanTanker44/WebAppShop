import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input type="text" placeholder="Tìm kiếm..." />
      <button>Tìm</button>
    </div>
  );
}

export default SearchBar;