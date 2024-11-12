import styles from './Navbar.module.css';
import LoginLogo from './svg/LoginLogo';
import RegisterLogo from './svg/RegisterLogo';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>AD Location</h1>

                <ul className={styles.links}>
                    <li><a className={styles.profilBtn} href="login"><LoginLogo /></a></li>
                </ul>
            </div>
        </nav>
    );
}