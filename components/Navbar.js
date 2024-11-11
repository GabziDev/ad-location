import styles from './Navbar.module.css';
import LoginLogo from './svg/LoginLogo';
import RegisterLogo from './svg/RegisterLogo';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1>AD Location</h1>

            <ul className={styles.links}>
                <li><a href="login"><LoginLogo /> Connexion</a></li>
            </ul>
        </nav>
    );
}