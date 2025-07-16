import {useState} from 'react';
import styles from './SearchBar.module.css'

function SearchBar({ className }) {
  const [value, setValue] = useState('');
  const [hover, setHover] = useState(false);
  return (
    <div className={`${styles['search-bar']} ${className}`}>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        className={value && hover ? `${styles['search-btn']} ${styles['expanded']}` : styles['search-btn']}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className={value && hover ? styles['slide-out'] : styles['slide-in']}
        >Tìm
      </span>
        <span
        className={value && hover ? styles['slide-in'] : styles['slide-out']}
        >🔎Tìm kiếm...
        </span>
      </button>
    </div>
  );
}

export default SearchBar;