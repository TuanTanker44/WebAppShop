/* eslint-disable no-unused-vars */
import logo from "./assets/logo.png"
import styles from "./Logo.module.css"

function Logo({ className }) {
    return (
        <div className={`${className} ${styles.logo}`}>
            <a href="/">
                <img src={logo} alt="Online Shop"/>
            </a>
        </div>
    )
}

export default Logo;