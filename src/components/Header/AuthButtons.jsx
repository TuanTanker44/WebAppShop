import React from 'react';
import styles from './AuthButtons.module.css'
function UserActions({ className, isLoggedIn }) {
  return (
    <div className={`${styles.user_actions} ${className}`}>
      {isLoggedIn ? (
        <div className={styles.user_profile}>
          <span>Xin chào, Tên Người Dùng!</span>
          <button>Đăng xuất</button>
          <button className="cart-icon">Giỏ hàng (0)</button>
        </div>
      ) : (
        <div className={styles.unlogin}>
          <button>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

export default UserActions;