import React from 'react';
import styles from './AuthButtons.module.css'; // Đảm bảo import CSS Module của bạn

function UserActions({
  isLoggedIn,
  username = 'Khách',
  onLogin,
  onRegister,
  onLogout,
}) {
  const handleLoginClick = () => {
    if (onLogin) {
      onLogin();
    } else {
      console.warn("Không có hàm 'onLogin' được cung cấp cho UserActions.");
    }
  };

  const handleRegisterClick = () => {
    if (onRegister) {
      onRegister();
    } else {
      console.warn("Không có hàm 'onRegister' được cung cấp cho UserActions.");
    }
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    } else {
      console.warn("Không có hàm 'onLogout' được cung cấp cho UserActions.");
    }
  };

  

  return (
    <div className={styles.user_actions}>
      {isLoggedIn ? ( 

        <div className={styles.unlogin}> 
          <button onClick={handleLoginClick}>Đăng nhập</button>
          <button onClick={handleRegisterClick}>Đăng ký</button>
        </div>
      ) : (
        
        <div className={styles.user_profile}>
          <span>Xin chào, {username}!</span>
          <button onClick={handleLogoutClick}>Đăng xuất</button>
        </div>
      )}

    </div>
  );
}

export default UserActions;