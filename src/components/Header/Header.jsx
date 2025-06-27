
import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from "./Logo/Logo"
import Navigation from './Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar'
import UserActions from './AuthButtons/AuthButtons'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [onLogin, setOnLogIn] = useState(false);
  const [onRegister, setOnRegister] = useState(false);
  const [onLogOut, setOnLogOut] = useState(false);


  const handleLogin = () => {
    // Logic xử lý Đăng nhập:
    // - Gọi API đăng nhập
    // - Nếu thành công:
    setIsLoggedIn(true);
    setUsername('Người dùng từ database'); // Cập nhật tên người dùng sau khi đăng nhập
    console.log('Đã nhấn Đăng nhập. Trạng thái: Đăng nhập.');
    setOnLogIn(true);
    // Thường thì ở đây bạn sẽ chuyển hướng người dùng hoặc đóng modal đăng nhập.
  };

  const handleRegister = () => {
    // Logic xử lý Đăng ký:
    // - Mở form đăng ký, gọi API đăng ký
    // - Nếu thành công, có thể tự động đăng nhập hoặc yêu cầu đăng nhập lại
    console.log('Đã nhấn Đăng ký.');
    // Ví dụ: tự động đăng nhập sau khi đăng ký
    setIsLoggedIn(true);
    setUsername('Người Dùng Mới');
    setOnRegister(true);
  };

  const handleLogout = () => {
    // Logic xử lý Đăng xuất:
    // - Gọi API đăng xuất
    // - Xóa token (nếu có)
    // - Nếu thành công:
    setIsLoggedIn(false);
    setUsername('');
    setOnLogOut(true);
    console.log('Đã nhấn Đăng xuất. Trạng thái: Chưa đăng nhập.');
  };


  return (
      <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />  
        </div>
        <div className={styles.navigation}>
            <Navigation />
        </div>
        <div className={styles.search_bar}>
            <SearchBar />
          </div>
        <div className={styles.auth_buttons}>
        <UserActions
          isLoggedIn = {isLoggedIn}
          username = {username}
          onLogin = {onLogin}
          onRegister = {onRegister}
          onLogout = {onLogOut}
        />
        </div>
    </header>
  );
}

export default Header;