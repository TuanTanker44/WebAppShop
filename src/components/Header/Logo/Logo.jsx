/* eslint-disable no-unused-vars */
import logolight from "./assets/logo=light.png"
import logodark from "./assets/logo-dark.png"
import styles from "./Logo.module.css"

function Logo() {
    return (
        <div className={styles.logo}>
            <a href="/">
                <img src={logolight} alt="Online Shop"/>
            </a>
        </div>
    )
}

export default Logo;