/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useRef, useEffect } from 'react';
import styles from './Sidebar.module.css';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
  useEffect(() => {
    
  }, []);

  return (
      <nav className={styles['sidebar']}>
        <header>
          <div className={styles['image-text']}>
            <span className={styles['image']}>
              <img src={logo} alt="logo"/>
            </span>
            <div className={`${styles.text} ${styles['header-text']}`}>
              <span className={styles['name']}>Hello</span>
              <span className={styles['profession']}>Web developer</span>
            </div>
          </div>
          < i className={`bxr bx-chevron-right ${styles.toggle}`}></i> 
        </header>

        <div className={styles['menu-bar']}>
          <div className={styles['menu']}>
          <li className={styles['search-box']}>
                  < i className={`bxr bx-search ${styles.icon}`}></i> 
                  <input type="search" placeholder='Search...' />
              </li>
            <ul className={styles['menu-links']}>
              <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-home-alt ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Dashboard</span>
                </a>
            </li>
            <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-bar-chart-big ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Revenue</span>
                </a>
            </li>
            <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-bell ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Notification</span>
                </a>
            </li>
            <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-pie-chart-alt ${styles.icon}`}></i>
                  <span className={`${styles.text} ${styles['nav-text']}`}>Analytics</span>
                </a>
            </li>
            <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-heart ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Wishes</span>
                </a>
            </li>
            <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-wallet ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Wallets</span>
                </a>
              </li>
            </ul>
        </div>
        <div className={styles['bottom-content']}>
          <li className={styles['nav-links']}>
                <a href="#">
                  < i className={`bxr bx-log-out ${styles.icon}`}></i> 
                  <span className={`${styles.text} ${styles['nav-text']}`}>Log Out</span>
                </a>
          </li>
          <li className={styles['mode']}>
            <a href="#">
                  < i className={`bxr bx-log-out ${styles.icon}`}></i> 
                  <div className={styles['moon-sun']}>
                    <i className={`bx bx-moon ${styles.icon} ${styles.moon}`}></i>
                    <i className={`bx bx-sun ${styles.icon} ${styles.sun}`}></i>
              </div>
              <span className={`${styles['mode-text']} ${styles['text']}`}>Dark Mode</span>
              
              <div className={styles['toggle-switch']}>
                <span className={styles['switch']}></span>
              </div>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar; 